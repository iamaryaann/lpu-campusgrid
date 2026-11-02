// ========================================================
// LPU CAMPUS NAVIGATOR & HOSTEL MESS CONTROLLER (app.js)
// Full Interactive Code with Authentication, Map & Mess System
// ========================================================

// Storage Keys
const KEY_USERS = 'lpu_users_db_v1';
const KEY_CURRENT_USER = 'lpu_current_user_v1';
const KEY_COMMUNITY_REVIEWS = 'lpu_community_reviews_v1';
const KEY_REBATES = 'lpu_rebates_v1';
const KEY_RATINGS = 'lpu_mess_ratings_v1';

// Application State
let map = null;
let markersLayer = null;
let currentTab = 'map';
let currentCategory = 'all';
let currentSelectedDay = 'monday';
let currentDietFilter = 'all';
let selectedHostel = 'BH-4';
let userLocationMarker = null;

// Dynamic In-Memory Databases
let usersDb = [];
let currentUser = null;
let communityReviews = [];
let rebatesList = [];
let userRatings = {};

// --------------------------------------------------------
// 1. INITIALIZATION ON DOM LOAD
// --------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initTheme();
  initClock();
  initAuth();
  initMap();
  initDefaultDay();
  renderLandmarkList();
  renderMessMenu();
  renderEateries();
  renderCommunityReviews();
  renderWardenPanel();
  renderLpuHub();
  calculateLpuAttendance();
  calculateLpuMarks();
  setupSearchAutocomplete();
  updateLiveMealStatus();

  // Periodic updates
  setInterval(updateLiveMealStatus, 30000); // every 30s
});

// --------------------------------------------------------
// 2. LOCAL DATA STORAGE INITIALIZER
// --------------------------------------------------------
function initStorage() {
  // Users
  const savedUsers = localStorage.getItem(KEY_USERS);
  if (!savedUsers) {
    localStorage.setItem(KEY_USERS, JSON.stringify(DEFAULT_USERS));
    usersDb = [...DEFAULT_USERS];
  } else {
    usersDb = JSON.parse(savedUsers);
  }

  // Current session
  const savedCurrent = localStorage.getItem(KEY_CURRENT_USER);
  if (savedCurrent) {
    currentUser = JSON.parse(savedCurrent);
  } else {
    // Default logged in as Rohan Verma for seamless first impression
    currentUser = usersDb[0];
    localStorage.setItem(KEY_CURRENT_USER, JSON.stringify(currentUser));
  }

  // Community reviews
  const savedReviews = localStorage.getItem(KEY_COMMUNITY_REVIEWS);
  if (!savedReviews) {
    localStorage.setItem(KEY_COMMUNITY_REVIEWS, JSON.stringify(DEFAULT_COMMUNITY_REVIEWS));
    communityReviews = [...DEFAULT_COMMUNITY_REVIEWS];
  } else {
    communityReviews = JSON.parse(savedReviews);
  }

  // Rebates
  const savedRebates = localStorage.getItem(KEY_REBATES);
  if (!savedRebates) {
    localStorage.setItem(KEY_REBATES, JSON.stringify(DEFAULT_REBATES));
    rebatesList = [...DEFAULT_REBATES];
  } else {
    rebatesList = JSON.parse(savedRebates);
  }

  // Ratings
  userRatings = JSON.parse(localStorage.getItem(KEY_RATINGS) || '{}');
}

// --------------------------------------------------------
// 3. THEME & DISPLAY UTILITIES
// --------------------------------------------------------
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Default to aesthetic dark mode always
  const savedTheme = localStorage.getItem('lpu_theme') || 'dark';
  localStorage.setItem('lpu_theme', savedTheme);

  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    document.documentElement.classList.remove('dark');
    if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
  }

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('lpu_theme', isDark ? 'dark' : 'light');
    if (isDark) {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
      themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
    if (map) {
      map.invalidateSize();
    }
  });
}

function initClock() {
  const clockEl = document.getElementById('live-clock');
  function updateTime() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  updateTime();
  setInterval(updateTime, 1000);
}

// --------------------------------------------------------
// 4. AUTHENTICATION & SESSION MANAGEMENT
// --------------------------------------------------------
function initAuth() {
  updateAuthUI();
}

function updateAuthUI() {
  const loggedOutDiv = document.getElementById('auth-logged-out');
  const loggedInDiv = document.getElementById('auth-logged-in');
  const wardenNavBtn = document.getElementById('nav-btn-warden');
  const quickPostAvatar = document.getElementById('quick-post-avatar');

  if (currentUser) {
    loggedOutDiv.classList.add('hidden');
    loggedInDiv.classList.remove('hidden');

    document.getElementById('user-nav-avatar').src = currentUser.avatar;
    document.getElementById('user-nav-name').textContent = currentUser.name.split(' ')[0];
    document.getElementById('user-nav-badge').textContent = currentUser.hostel || 'LPU';

    if (quickPostAvatar) quickPostAvatar.src = currentUser.avatar;

    // Show warden tab if role is warden
    if (currentUser.role === 'warden') {
      wardenNavBtn.classList.remove('hidden');
      wardenNavBtn.classList.add('flex');
    } else {
      wardenNavBtn.classList.add('hidden');
      wardenNavBtn.classList.remove('flex');
    }

    // Set default hostel selector to user's hostel if in hostel list
    if (currentUser.hostel && currentUser.hostel.startsWith('BH-') || currentUser.hostel.startsWith('GH-')) {
      const hostelSelect = document.getElementById('hostel-selector');
      if (hostelSelect) {
        hostelSelect.value = currentUser.hostel;
        selectedHostel = currentUser.hostel;
      }
      const myMessInd = document.getElementById('my-mess-indicator');
      if (myMessInd) myMessInd.classList.remove('hidden');
    }

  } else {
    loggedOutDiv.classList.remove('hidden');
    loggedInDiv.classList.add('hidden');
    wardenNavBtn.classList.add('hidden');
    wardenNavBtn.classList.remove('flex');
    if (quickPostAvatar) quickPostAvatar.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=Guest';
  }
}

function openAuthModal(tab = 'signin') {
  switchAuthTab(tab);
  document.getElementById('auth-modal').classList.remove('hidden');
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
}

function switchAuthTab(tab) {
  const signinBtn = document.getElementById('auth-tab-signin');
  const signupBtn = document.getElementById('auth-tab-signup');
  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');

  if (tab === 'signin') {
    signinBtn.className = 'flex-1 pb-2.5 text-xs font-bold border-b-2 border-lpu-600 text-lpu-600';
    signupBtn.className = 'flex-1 pb-2.5 text-xs font-bold border-b-2 border-transparent text-slate-400 hover:text-slate-600';
    signinForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
  } else {
    signupBtn.className = 'flex-1 pb-2.5 text-xs font-bold border-b-2 border-lpu-600 text-lpu-600';
    signinBtn.className = 'flex-1 pb-2.5 text-xs font-bold border-b-2 border-transparent text-slate-400 hover:text-slate-600';
    signupForm.classList.remove('hidden');
    signinForm.classList.add('hidden');
  }
}

function handleSignInSubmit(e) {
  e.preventDefault();
  const identifier = document.getElementById('login-identifier').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;

  const found = usersDb.find(u => 
    (u.regNo.toLowerCase() === identifier || u.email.toLowerCase() === identifier) &&
    u.password === password
  );

  if (found) {
    currentUser = found;
    localStorage.setItem(KEY_CURRENT_USER, JSON.stringify(currentUser));
    updateAuthUI();
    renderMessMenu();
    closeAuthModal();
    alert(`Welcome back to CampusGrid, ${currentUser.name}!`);
  } else {
    alert('Invalid Registration Number/Email or Password! Please check or use 1-Click Demo Login.');
  }
}

function handleSignUpSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const regNo = document.getElementById('reg-no').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const hostel = document.getElementById('reg-hostel').value;
  const password = document.getElementById('reg-password').value;

  // Check duplicate
  if (usersDb.some(u => u.regNo === regNo || u.email.toLowerCase() === email.toLowerCase())) {
    alert('This Registration Number or Email is already registered!');
    return;
  }

  const newUser = {
    id: 'user_' + Date.now(),
    regNo: regNo,
    email: email,
    name: name,
    password: password,
    role: 'student',
    hostel: hostel,
    room: 'Room 101',
    program: 'B.Tech / Professional Degree',
    messPlan: 'Standard North Indian Mess',
    avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`,
    bookmarks: []
  };

  usersDb.push(newUser);
  localStorage.setItem(KEY_USERS, JSON.stringify(usersDb));

  currentUser = newUser;
  localStorage.setItem(KEY_CURRENT_USER, JSON.stringify(currentUser));

  updateAuthUI();
  renderMessMenu();
  closeAuthModal();
  alert(`Registration successful! Welcome to CampusGrid, ${name}.`);
}

function demoLogin(type) {
  if (type === 'student1') {
    currentUser = usersDb.find(u => u.regNo === '12204598') || usersDb[0];
  } else if (type === 'student2') {
    currentUser = usersDb.find(u => u.regNo === '12215890') || usersDb[1];
  } else if (type === 'warden') {
    currentUser = usersDb.find(u => u.role === 'warden') || usersDb[2];
  }

  localStorage.setItem(KEY_CURRENT_USER, JSON.stringify(currentUser));
  updateAuthUI();
  renderMessMenu();
  closeAuthModal();
  alert(`Logged in as ${currentUser.name} (${currentUser.role.toUpperCase()})`);
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem(KEY_CURRENT_USER);
  closeProfileModal();
  updateAuthUI();
  switchTab('map');
  alert('You have logged out successfully.');
}

// --------------------------------------------------------
// 5. PROFILE & VERTO DIGITAL ID CARD MODAL
// --------------------------------------------------------
function openProfileModal() {
  if (!currentUser) {
    openAuthModal('signin');
    return;
  }

  document.getElementById('card-name').textContent = currentUser.name;
  document.getElementById('card-program').textContent = currentUser.program;
  document.getElementById('card-reg').textContent = currentUser.regNo;
  document.getElementById('card-hostel').textContent = `${currentUser.hostel} (${currentUser.room || 'Allotted'})`;
  document.getElementById('card-mess').textContent = currentUser.messPlan;
  document.getElementById('card-avatar').src = currentUser.avatar;

  document.getElementById('profile-modal').classList.remove('hidden');
}

function closeProfileModal() {
  document.getElementById('profile-modal').classList.add('hidden');
}

function openProfileOrLoginMobile() {
  if (currentUser) {
    openProfileModal();
  } else {
    openAuthModal('signin');
  }
}

function jumpToMyMess() {
  closeProfileModal();
  switchTab('mess');
  if (currentUser && currentUser.hostel) {
    const sel = document.getElementById('hostel-selector');
    if (sel) {
      sel.value = currentUser.hostel;
      onHostelOrDayChange();
    }
  }
}

// --------------------------------------------------------
// 6. TAB NAVIGATION
// --------------------------------------------------------
function switchTab(tabId) {
  currentTab = tabId;
  const tabs = ['touch', 'map', 'lpu', 'mess', 'community', 'eateries', 'warden', 'info', 'ppt'];

  tabs.forEach(t => {
    const sec = document.getElementById(`tab-${t}`);
    const navBtn = document.getElementById(`nav-btn-${t}`);
    const mNavBtn = document.getElementById(`m-nav-${t}`);

    if (sec) {
      if (t === tabId) {
        sec.classList.remove('hidden');
        sec.classList.add('block');
        if (navBtn) navBtn.classList.add('active');
        if (mNavBtn) {
          mNavBtn.classList.add('text-lpu-600', 'dark:text-lpu-400');
          mNavBtn.classList.remove('text-slate-500', 'dark:text-slate-400');
        }
      } else {
        sec.classList.remove('block');
        sec.classList.add('hidden');
        if (navBtn) navBtn.classList.remove('active');
        if (mNavBtn) {
          mNavBtn.classList.remove('text-lpu-600', 'dark:text-lpu-400');
          mNavBtn.classList.add('text-slate-500', 'dark:text-slate-400');
        }
      }
    }
  });

  if (tabId === 'map' && map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --------------------------------------------------------
// PROJECT PPT SLIDE DECK CONTROLLER
// --------------------------------------------------------
let currentPptSlide = 1;
const totalPptSlides = 8;

function showPptSlide(n) {
  if (n < 1) n = 1;
  if (n > totalPptSlides) n = totalPptSlides;
  currentPptSlide = n;

  document.querySelectorAll('.ppt-slide').forEach(s => {
    s.classList.add('hidden');
    s.classList.remove('block');
  });

  const activeSlide = document.getElementById(`ppt-slide-${n}`);
  if (activeSlide) {
    activeSlide.classList.remove('hidden');
    activeSlide.classList.add('block');
  }

  const numEl = document.getElementById('ppt-current-num');
  if (numEl) numEl.textContent = `Slide ${n} / ${totalPptSlides}`;

  const thumbBtns = document.querySelectorAll('.ppt-thumb-btn');
  thumbBtns.forEach((b, idx) => {
    if (idx + 1 === n) {
      b.className = 'ppt-thumb-btn active p-2 rounded-xl bg-slate-800 border border-amber-500 text-center text-[10px] font-bold text-white transition';
    } else {
      b.className = 'ppt-thumb-btn p-2 rounded-xl bg-slate-900 border border-white/5 text-center text-[10px] font-bold text-slate-400 hover:text-white transition';
    }
  });
}

function nextPptSlide() {
  if (currentPptSlide < totalPptSlides) {
    showPptSlide(currentPptSlide + 1);
  }
}

function prevPptSlide() {
  if (currentPptSlide > 1) {
    showPptSlide(currentPptSlide - 1);
  }
}

function goToPptSlide(n) {
  showPptSlide(n);
}

// --------------------------------------------------------
// 7. LEAFLET MAP IMPLEMENTATION
// --------------------------------------------------------
function initMap() {
  const mapContainer = document.getElementById('lpu-map');
  if (!mapContainer) return;

  // Ensure dimensions are explicitly set
  mapContainer.style.height = '540px';
  mapContainer.style.minHeight = '540px';
  mapContainer.style.width = '100%';

  if (map) {
    try {
      map.remove();
    } catch (e) {
      console.warn('Map cleanup error:', e);
    }
  }

  // Initialize Leaflet map centered at LPU
  map = L.map('lpu-map', {
    zoomControl: true,
    scrollWheelZoom: true,
    attributionControl: true
  }).setView(CAMPUS_CENTER, DEFAULT_ZOOM);

  // 100% Guaranteed OpenStreetMap tiles with custom CSS Dark Cyberpunk invert filter
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    subdomains: ['a', 'b', 'c'],
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | Lovely Professional University'
  }).addTo(map);

  markersLayer = L.layerGroup().addTo(map);
  renderMarkers(CAMPUS_LOCATIONS);

  // Trigger resize updates to avoid Leaflet 0-height rendering bug
  setTimeout(() => {
    if (map) {
      map.invalidateSize();
    }
  }, 200);

  setTimeout(() => {
    if (map) {
      map.invalidateSize();
    }
  }, 700);
}

function createCustomPin(color, icon) {
  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div class="custom-pin" style="background-color: ${color}; width: 34px; height: 34px; box-shadow: 0 0 16px ${color}, 0 4px 10px rgba(0,0,0,0.8);">
        <i class="fa-solid ${icon} text-white text-xs"></i>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -32]
  });
}

function renderMarkers(locations) {
  if (!markersLayer) return;
  markersLayer.clearLayers();

  locations.forEach(loc => {
    const icon = createCustomPin(loc.color, loc.icon);
    const marker = L.marker(loc.coords, { icon: icon });

    const popupContent = `
      <div class="w-64 p-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-xl font-['Plus_Jakarta_Sans',sans-serif]">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded" style="background-color: ${loc.color}20; color: ${loc.color}">
            ${loc.category}
          </span>
          <span class="text-[11px] text-slate-400"><i class="fa-regular fa-clock mr-1"></i>Open</span>
        </div>
        <h4 class="font-bold text-sm leading-tight text-slate-900 dark:text-white mb-1">${loc.shortName}</h4>
        <p class="text-xs text-slate-600 dark:text-slate-300 mb-2 line-clamp-2">${loc.description}</p>
        <div class="text-[11px] bg-slate-100 dark:bg-slate-800 p-2 rounded-lg mb-2 text-slate-600 dark:text-slate-300">
          <i class="fa-solid fa-utensils mr-1 text-amber-500"></i> ${loc.nearestFood}
        </div>
        <button onclick="openLocationDetails('${loc.id}')" class="w-full py-1.5 bg-lpu-600 hover:bg-lpu-700 text-white font-bold text-xs rounded-lg transition shadow-sm">
          View Block Details
        </button>
      </div>
    `;

    marker.bindPopup(popupContent);
    marker.locationId = loc.id;
    markersLayer.addLayer(marker);
  });
}

function filterMapCategory(cat, btnEl) {
  currentCategory = cat;

  const pills = document.querySelectorAll('#category-filter-bar .cat-pill');
  pills.forEach(p => p.classList.remove('active'));
  const targetBtn = btnEl || (typeof event !== 'undefined' && event ? event.currentTarget : null);
  if (targetBtn) targetBtn.classList.add('active');

  const filtered = cat === 'all' 
    ? CAMPUS_LOCATIONS 
    : CAMPUS_LOCATIONS.filter(item => item.category === cat);

  renderMarkers(filtered);
  renderLandmarkList(filtered);

  document.getElementById('current-filter-label').textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
}

function renderLandmarkList(locations = CAMPUS_LOCATIONS) {
  const container = document.getElementById('landmark-list');
  const countEl = document.getElementById('location-count');
  if (!container) return;

  countEl.textContent = locations.length;
  container.innerHTML = '';

  if (locations.length === 0) {
    container.innerHTML = `<div class="p-4 text-center text-xs text-slate-400">No locations found.</div>`;
    return;
  }

  locations.forEach(loc => {
    const card = document.createElement('div');
    card.className = 'p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl cursor-pointer transition flex items-start gap-3';
    card.onclick = () => focusLocation(loc.id);

    card.innerHTML = `
      <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white text-xs shadow-sm mt-0.5" style="background-color: ${loc.color}">
        <i class="fa-solid ${loc.icon}"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between">
          <h4 class="font-bold text-xs text-slate-900 dark:text-white truncate">${loc.shortName}</h4>
        </div>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">${loc.name}</p>
        <span class="inline-block mt-1 text-[10px] font-semibold text-lpu-600 dark:text-lpu-400">
          <i class="fa-solid fa-location-dot mr-1"></i>Show on Map
        </span>
      </div>
    `;
    container.appendChild(card);
  });
}

function focusLocation(locId) {
  const target = CAMPUS_LOCATIONS.find(l => l.id === locId);
  if (!target || !map) return;

  map.flyTo(target.coords, 18, {
    animate: true,
    duration: 1.2
  });

  markersLayer.eachLayer(layer => {
    if (layer.locationId === locId) {
      setTimeout(() => {
        layer.openPopup();
      }, 1000);
    }
  });

  if (window.innerWidth < 768) {
    openLocationDetails(locId);
  }
}

function resetMapView() {
  if (map) {
    map.flyTo(CAMPUS_CENTER, DEFAULT_ZOOM, {
      duration: 1.2
    });
  }
}

function locateUserPosition() {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser.');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      if (userLocationMarker) {
        map.removeLayer(userLocationMarker);
      }

      userLocationMarker = L.circleMarker([lat, lng], {
        radius: 9,
        fillColor: '#3b82f6',
        color: '#ffffff',
        weight: 3,
        opacity: 1,
        fillOpacity: 0.9
      }).addTo(map);

      userLocationMarker.bindPopup('<b class="text-xs">You are here!</b>').openPopup();
      map.flyTo([lat, lng], 17);
    },
    error => {
      alert('Simulated user location placed at Block 32.');
      map.flyTo([31.2542, 75.7025], 18);
    }
  );
}

// --------------------------------------------------------
// 8. SEARCH & AUTOCOMPLETE
// --------------------------------------------------------
function setupSearchAutocomplete() {
  const searchInput = document.getElementById('map-search-input');
  const suggestionsBox = document.getElementById('search-suggestions');
  const clearBtn = document.getElementById('clear-search-btn');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (query.length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
      suggestionsBox.classList.add('hidden');
      return;
    }

    const matches = CAMPUS_LOCATIONS.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.shortName.toLowerCase().includes(query) ||
      item.dept.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      suggestionsBox.innerHTML = `<div class="p-3 text-xs text-slate-400">No matching campus landmark found.</div>`;
    } else {
      suggestionsBox.innerHTML = matches.slice(0, 6).map(m => `
        <div onclick="selectSearchResult('${m.id}')" class="p-2.5 hover:bg-slate-50 dark:hover:bg-slate-700/60 cursor-pointer flex items-center justify-between border-b border-slate-100 dark:border-slate-700 last:border-none">
          <div class="flex items-center gap-2">
            <i class="fa-solid ${m.icon} text-lpu-500 text-xs"></i>
            <div>
              <div class="text-xs font-bold text-slate-800 dark:text-white">${m.shortName}</div>
              <div class="text-[10px] text-slate-400 truncate w-48 sm:w-80">${m.name}</div>
            </div>
          </div>
          <span class="text-[10px] font-semibold text-slate-400 uppercase">${m.category}</span>
        </div>
      `).join('');
    }

    suggestionsBox.classList.remove('hidden');
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.add('hidden');
    suggestionsBox.classList.add('hidden');
    renderLandmarkList(CAMPUS_LOCATIONS);
    renderMarkers(CAMPUS_LOCATIONS);
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.classList.add('hidden');
    }
  });
}

function selectSearchResult(id) {
  const suggestionsBox = document.getElementById('search-suggestions');
  suggestionsBox.classList.add('hidden');
  focusLocation(id);
}

// --------------------------------------------------------
// 9. LOCATION MODAL
// --------------------------------------------------------
function openLocationDetails(locId) {
  const target = CAMPUS_LOCATIONS.find(l => l.id === locId);
  if (!target) return;

  document.getElementById('modal-title').textContent = target.name;
  document.getElementById('modal-category-badge').textContent = target.category.toUpperCase();
  document.getElementById('modal-description').textContent = target.description;
  document.getElementById('modal-dept').textContent = target.dept;
  document.getElementById('modal-nearest-food').textContent = target.nearestFood;
  const tEl = document.getElementById('modal-timings');
  if (tEl) tEl.textContent = target.timings || '08:00 AM - 08:00 PM';
  const trEl = document.getElementById('modal-transit');
  if (trEl) trEl.textContent = target.transit || '₹10 Campus E-Rickshaw Shuttle Available';

  const navBtn = document.getElementById('modal-navigate-btn');
  navBtn.onclick = () => {
    closeLocationModal();
    switchTab('map');
    focusLocation(locId);
  };

  document.getElementById('location-modal').classList.remove('hidden');
}

function closeLocationModal() {
  document.getElementById('location-modal').classList.add('hidden');
}

// --------------------------------------------------------
// 10. HOSTEL MESS CONTROLLER & MENUS
// --------------------------------------------------------
function initDefaultDay() {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const todayIndex = new Date().getDay();
  currentSelectedDay = days[todayIndex];
  highlightDayButton(currentSelectedDay);
}

function selectDay(dayKey) {
  currentSelectedDay = dayKey;
  highlightDayButton(dayKey);
  renderMessMenu();
}

function highlightDayButton(dayKey) {
  const btns = document.querySelectorAll('#day-buttons-grid .day-btn');
  btns.forEach(b => {
    if (b.getAttribute('data-day') === dayKey) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  const dayInfo = MESS_SCHEDULE[dayKey];
  document.getElementById('current-day-label').textContent = `${dayInfo.dayName} • ${dayInfo.theme}`;
}

function onHostelOrDayChange() {
  selectedHostel = document.getElementById('hostel-selector').value;
  renderMessMenu();
}

function setDietFilter(filter) {
  currentDietFilter = filter;
  const buttons = {
    'all': 'diet-btn-all',
    'pure-veg': 'diet-btn-veg',
    'special': 'diet-btn-special'
  };

  Object.entries(buttons).forEach(([key, id]) => {
    const btn = document.getElementById(id);
    if (key === filter) {
      btn.className = 'px-2.5 py-1 rounded-lg font-semibold bg-white dark:bg-slate-800 text-lpu-600 shadow-sm';
    } else {
      btn.className = 'px-2.5 py-1 rounded-lg font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white';
    }
  });

  renderMessMenu();
}

function renderMessMenu() {
  const container = document.getElementById('meal-cards-container');
  if (!container) return;

  const dayData = MESS_SCHEDULE[currentSelectedDay];
  if (!dayData) return;

  const mealKeys = [
    { key: 'breakfast', name: 'Breakfast', icon: 'fa-mug-saucer', color: 'from-amber-500 to-orange-500' },
    { key: 'lunch', name: 'Lunch', icon: 'fa-bowl-rice', color: 'from-emerald-500 to-teal-600' },
    { key: 'snacks', name: 'Evening Tea', icon: 'fa-cookie-bite', color: 'from-orange-500 to-red-500' },
    { key: 'dinner', name: 'Dinner', icon: 'fa-moon', color: 'from-indigo-500 to-purple-600' }
  ];

  const currentMealInfo = getCurrentMealInfo();
  container.innerHTML = '';

  mealKeys.forEach(m => {
    const meal = dayData.meals[m.key];
    const isCurrentlyActive = (currentMealInfo.meal === m.key && currentMealInfo.status === 'active');
    const ratingKey = `${currentSelectedDay}_${m.key}_${selectedHostel}`;
    const savedUserVote = userRatings[ratingKey];

    const currentRating = savedUserVote ? savedUserVote.rating : meal.rating;
    const currentVotes = savedUserVote ? meal.votes + 1 : meal.votes;

    const card = document.createElement('div');
    card.className = `bg-white dark:bg-slate-800 rounded-2xl shadow-sm border ${
      isCurrentlyActive 
        ? 'border-2 border-lpu-500 ring-4 ring-lpu-500/10' 
        : 'border-slate-200 dark:border-slate-700'
    } flex flex-col overflow-hidden hover-card`;

    card.innerHTML = `
      <div class="p-4 bg-gradient-to-r ${m.color} text-white relative">
        <div class="flex items-center justify-between">
          <span class="text-xs uppercase font-extrabold tracking-wider bg-black/25 px-2 py-0.5 rounded-md flex items-center gap-1">
            <i class="fa-solid ${m.icon}"></i> ${m.name}
          </span>
          ${isCurrentlyActive ? '<span class="px-2 py-0.5 text-[10px] uppercase font-black bg-emerald-400 text-slate-900 rounded-full animate-pulse"><i class="fa-solid fa-circle mr-1 text-[8px]"></i> Serving Now</span>' : ''}
        </div>
        <h3 class="text-base font-extrabold mt-2 leading-tight">${meal.title}</h3>
        <div class="text-xs text-white/90 font-medium mt-0.5 flex items-center gap-1">
          <i class="fa-regular fa-clock"></i> ${meal.timing}
        </div>
      </div>

      <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Today's Dishes</span>
          <ul class="space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
            ${meal.items.map(item => `
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-circle-check text-lpu-500 text-[11px] mt-0.5 shrink-0"></i>
                <span class="leading-snug">${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/40 text-xs">
          <span class="text-[10px] font-bold uppercase text-lpu-700 dark:text-lpu-400 flex items-center gap-1">
            <i class="fa-solid fa-sparkles"></i> Chef's Special
          </span>
          <p class="text-slate-800 dark:text-orange-200 font-semibold mt-0.5 leading-snug">${meal.special}</p>
        </div>

        <div class="flex flex-wrap items-center gap-1 pt-1">
          <span class="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 rounded text-[10px] font-bold">
            <i class="fa-solid fa-seedling mr-1"></i>Pure Veg
          </span>
          <span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-[10px] font-semibold">
            ${meal.calories}
          </span>
          ${meal.dietary.map(d => `
            <span class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 rounded text-[10px]">
              ${d}
            </span>
          `).join('')}
        </div>

        <div class="pt-2 border-t border-slate-100 dark:border-slate-700/70 flex items-center justify-between text-xs">
          <div class="flex items-center gap-1 text-amber-500">
            <i class="fa-solid fa-star"></i>
            <span class="font-extrabold text-slate-900 dark:text-white" id="rating-val-${ratingKey}">${currentRating.toFixed(1)}</span>
            <span class="text-[10px] text-slate-400">(${currentVotes})</span>
          </div>

          <button onclick="voteMeal('${ratingKey}')" class="px-2.5 py-1 rounded-lg text-xs font-semibold ${
            savedUserVote 
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300' 
              : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
          } transition flex items-center gap-1">
            <i class="fa-regular fa-thumbs-up"></i>
            <span>${savedUserVote ? 'Voted' : 'Rate Dish'}</span>
          </button>
        </div>

      </div>
    `;

    container.appendChild(card);
  });
}

function voteMeal(ratingKey) {
  if (userRatings[ratingKey]) {
    alert('You have already rated this meal today!');
    return;
  }

  userRatings[ratingKey] = {
    rating: 5.0,
    timestamp: Date.now()
  };

  localStorage.setItem(KEY_RATINGS, JSON.stringify(userRatings));
  renderMessMenu();
  alert('Thank you! Your feedback for this mess dish has been logged.');
}

// --------------------------------------------------------
// 11. STUDENT BUZZ & COMMUNITY REVIEWS
// --------------------------------------------------------
function renderCommunityReviews() {
  const container = document.getElementById('community-reviews-feed');
  if (!container) return;

  container.innerHTML = '';

  communityReviews.forEach(rev => {
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2';

    card.innerHTML = `
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2.5">
          <img src="https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(rev.author)}" alt="avatar" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700">
          <div>
            <div class="flex items-center gap-1.5">
              <span class="font-bold text-xs text-slate-900 dark:text-white">${rev.author}</span>
              <span class="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-lpu-100 text-lpu-800 dark:bg-lpu-950 dark:text-lpu-300">
                ${rev.hostel}
              </span>
            </div>
            <div class="text-[10px] text-slate-400">Reg: ${rev.regNo} • ${rev.timestamp}</div>
          </div>
        </div>

        <div class="flex items-center gap-1 text-amber-400 text-xs font-bold">
          ${Array(rev.rating).fill('<i class="fa-solid fa-star"></i>').join('')}
        </div>
      </div>

      <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-11">
        ${rev.text}
      </p>

      <div class="pl-11 pt-1 flex items-center justify-between text-xs text-slate-400">
        <span class="text-[10px] font-semibold text-slate-500">Meal: ${rev.meal || 'Mess Review'}</span>
        <button onclick="likeReview('${rev.id}')" class="flex items-center gap-1 hover:text-rose-500 transition">
          <i class="fa-solid fa-heart text-rose-500"></i>
          <span>${rev.likes || 0}</span>
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function handleQuickPostReview(e) {
  e.preventDefault();
  const input = document.getElementById('quick-review-input');
  const text = input.value.trim();
  if (!text) return;

  const authorName = currentUser ? currentUser.name : 'Verto Guest';
  const authorReg = currentUser ? currentUser.regNo : '1220' + Math.floor(1000 + Math.random() * 9000);
  const authorHostel = currentUser ? currentUser.hostel : 'BH-4';

  const newReview = {
    id: 'rev_' + Date.now(),
    author: authorName,
    regNo: authorReg,
    hostel: authorHostel,
    meal: 'General',
    rating: 5,
    text: text,
    timestamp: 'Just now',
    likes: 1
  };

  communityReviews.unshift(newReview);
  localStorage.setItem(KEY_COMMUNITY_REVIEWS, JSON.stringify(communityReviews));

  input.value = '';
  renderCommunityReviews();
  alert('Your review has been posted to the Verto Community Buzz!');
}

function likeReview(id) {
  const rev = communityReviews.find(r => r.id === id);
  if (rev) {
    rev.likes = (rev.likes || 0) + 1;
    localStorage.setItem(KEY_COMMUNITY_REVIEWS, JSON.stringify(communityReviews));
    renderCommunityReviews();
  }
}

// --------------------------------------------------------
// 12. MESS LEAVE REBATE SYSTEM (UMS)
// --------------------------------------------------------
function openRebateModal() {
  if (!currentUser) {
    alert('Please log in with your Verto credentials to apply for Mess Leave Rebate.');
    openAuthModal('signin');
    return;
  }
  document.getElementById('rebate-modal').classList.remove('hidden');
}

function closeRebateModal() {
  document.getElementById('rebate-modal').classList.add('hidden');
}

function handleRebateSubmit(e) {
  e.preventDefault();
  const from = document.getElementById('rebate-from').value;
  const to = document.getElementById('rebate-to').value;
  const reason = document.getElementById('rebate-reason').value;
  const pnr = document.getElementById('rebate-pnr').value || 'N/A';

  const start = new Date(from);
  const end = new Date(to);
  const diffTime = Math.abs(end - start);
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

  if (days < 3) {
    alert('Mess Rebate is only applicable for leaves of 3 days or more!');
    return;
  }

  const rebateAmt = days * 130;

  const newRebate = {
    id: 'reb_' + Date.now(),
    studentName: currentUser.name,
    regNo: currentUser.regNo,
    hostel: currentUser.hostel,
    fromDate: from,
    toDate: to,
    days: days,
    reason: reason,
    pnr: pnr,
    status: 'Pending Warden Approval',
    rebateAmount: `₹ ${rebateAmt} Credit`,
    approvedBy: 'Under Review'
  };

  rebatesList.unshift(newRebate);
  localStorage.setItem(KEY_REBATES, JSON.stringify(rebatesList));

  closeRebateModal();
  renderWardenPanel();
  alert(`Mess Rebate application submitted!\nTotal Leave: ${days} Days\nEstimated Credit: ₹ ${rebateAmt}\nSent to Chief Warden Office for verification.`);
}

// --------------------------------------------------------
// 13. WARDEN PANEL CONTROLS
// --------------------------------------------------------
function renderWardenPanel() {
  const container = document.getElementById('warden-rebates-list');
  const countEl = document.getElementById('pending-rebate-count');
  if (!container) return;

  countEl.textContent = `${rebatesList.length} Requests`;
  container.innerHTML = '';

  if (rebatesList.length === 0) {
    container.innerHTML = `<div class="p-4 text-xs text-slate-400">No rebate requests pending.</div>`;
    return;
  }

  rebatesList.forEach(r => {
    const card = document.createElement('div');
    card.className = 'p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2';

    card.innerHTML = `
      <div>
        <div class="flex items-center gap-2">
          <span class="font-bold text-slate-900 dark:text-white">${r.studentName}</span>
          <span class="text-[10px] text-slate-400">(${r.regNo} • ${r.hostel})</span>
          <span class="px-2 py-0.2 rounded text-[10px] font-bold ${r.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">${r.status}</span>
        </div>
        <div class="text-slate-500 mt-0.5 text-[11px]">
          Dates: ${r.fromDate} to ${r.toDate} (${r.days} Days) • Reason: ${r.reason}
        </div>
        <div class="text-lpu-600 font-bold mt-0.5 text-[11px]">Refund: ${r.rebateAmount}</div>
      </div>

      ${r.status !== 'Approved' ? `
        <div class="flex items-center gap-1.5 shrink-0">
          <button onclick="approveRebate('${r.id}')" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition">
            Approve
          </button>
          <button onclick="rejectRebate('${r.id}')" class="px-2.5 py-1.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-lg text-xs transition">
            Reject
          </button>
        </div>
      ` : '<span class="text-emerald-500 font-bold text-xs"><i class="fa-solid fa-circle-check"></i> Approved</span>'}
    `;

    container.appendChild(card);
  });
}

function approveRebate(id) {
  const target = rebatesList.find(r => r.id === id);
  if (target) {
    target.status = 'Approved';
    target.approvedBy = currentUser ? currentUser.name : 'Chief Warden';
    localStorage.setItem(KEY_REBATES, JSON.stringify(rebatesList));
    renderWardenPanel();
    alert(`Rebate for ${target.studentName} approved! ₹ ${target.rebateAmount} credited.`);
  }
}

function rejectRebate(id) {
  const target = rebatesList.find(r => r.id === id);
  if (target) {
    target.status = 'Rejected (Documentation Incomplete)';
    localStorage.setItem(KEY_REBATES, JSON.stringify(rebatesList));
    renderWardenPanel();
  }
}

function handleWardenBroadcast(e) {
  e.preventDefault();
  const input = document.getElementById('broadcast-message-input');
  const msg = input.value.trim();
  if (!msg) return;

  const announcementEl = document.getElementById('active-meal-announcement');
  if (announcementEl) {
    announcementEl.textContent = `[WARDEN NOTICE]: ${msg}`;
  }

  input.value = '';
  alert('Announcement broadcasted live to all student headers!');
}

// --------------------------------------------------------
// 14. CAMPUS EATERIES & UNIMALL
// --------------------------------------------------------
function renderEateries(filterType = 'all') {
  const container = document.getElementById('eateries-grid');
  if (!container) return;

  const filtered = filterType === 'all' 
    ? CAMPUS_EATERIES 
    : CAMPUS_EATERIES.filter(e => e.type === filterType || e.tags.some(t => t.toLowerCase().includes(filterType)));

  container.innerHTML = '';

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover-card flex flex-col justify-between';

    card.innerHTML = `
      <div>
        <div class="h-44 w-full overflow-hidden relative">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
          <div class="absolute top-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur text-white text-xs font-bold rounded-lg flex items-center gap-1">
            <i class="fa-solid fa-star text-amber-400"></i> ${item.rating}
          </div>
          <div class="absolute bottom-3 left-3 px-2 py-0.5 bg-lpu-600 text-white text-[11px] font-bold rounded-md">
            ${item.priceRange}
          </div>
        </div>

        <div class="p-4 space-y-2">
          <h3 class="font-bold text-base text-slate-900 dark:text-white">${item.name}</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <i class="fa-solid fa-location-dot text-rose-500"></i> ${item.location}
          </p>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${item.description}</p>
          
          <div class="bg-slate-50 dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700/60 text-xs">
            <span class="font-bold text-slate-700 dark:text-slate-300 block text-[11px] mb-1">Famous Picks:</span>
            <span class="text-slate-600 dark:text-slate-400">${item.highlights}</span>
          </div>

          <div class="flex flex-wrap gap-1 pt-1">
            ${item.tags.map(t => `<span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-[10px] font-medium">${t}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="p-4 pt-0 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between mt-3 text-xs">
        <span class="text-slate-500 dark:text-slate-400 font-semibold">
          <i class="fa-regular fa-clock mr-1"></i> ${item.timing}
        </span>
        <button onclick="alert('Contacting ${item.name} at ${item.phone}')" class="px-3 py-1.5 bg-lpu-50 dark:bg-slate-700 text-lpu-700 dark:text-lpu-400 rounded-lg font-bold hover:bg-lpu-100 transition">
          <i class="fa-solid fa-phone mr-1"></i> Call Outlet
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function filterEateries(type, btnEl) {
  const pills = document.querySelectorAll('.eatery-pill');
  pills.forEach(p => {
    p.classList.remove('bg-white', 'text-orange-600', 'font-bold');
    p.classList.add('bg-black/20', 'text-white');
  });

  const targetBtn = btnEl || (typeof event !== 'undefined' && event ? event.currentTarget : null);
  if (targetBtn) {
    targetBtn.classList.remove('bg-black/20', 'text-white');
    targetBtn.classList.add('bg-white', 'text-orange-600', 'font-bold');
  }

  renderEateries(type);
}

// --------------------------------------------------------
// 15. LIVE MEAL STATUS & STATUS RIBBON
// --------------------------------------------------------
function updateLiveMealStatus() {
  const info = getCurrentMealInfo();
  const announcementEl = document.getElementById('active-meal-announcement');
  const countdownEl = document.getElementById('next-meal-countdown');
  const liveBadge = document.getElementById('live-meal-badge');

  if (announcementEl && !announcementEl.textContent.startsWith('[WARDEN NOTICE]')) {
    announcementEl.textContent = info.message;
  }

  if (countdownEl) {
    if (info.status === 'active') {
      countdownEl.innerHTML = `<i class="fa-solid fa-stopwatch mr-1"></i> Serving now (closes in ${info.closingIn} mins)`;
      if (liveBadge) liveBadge.classList.remove('hidden');
    } else if (info.status === 'upcoming') {
      const hrs = Math.floor(info.startsIn / 60);
      const mins = info.startsIn % 60;
      const timeStr = hrs > 0 ? `${hrs}h ${mins}m` : `${mins} mins`;
      countdownEl.innerHTML = `<i class="fa-solid fa-hourglass-half mr-1"></i> Next: ${info.name} in ${timeStr}`;
    } else {
      countdownEl.innerHTML = `<i class="fa-solid fa-bed mr-1"></i> Night Kitchen Closed`;
    }
  }
}

// --------------------------------------------------------
// 16. FEEDBACK MODAL & STAR RATINGS
// --------------------------------------------------------
function openFeedbackModal() {
  document.getElementById('feedback-modal').classList.remove('hidden');
}

function closeFeedbackModal() {
  document.getElementById('feedback-modal').classList.add('hidden');
}

function setModalStarRating(rating) {
  document.getElementById('fb-rating').value = rating;
  const stars = document.querySelectorAll('#star-rating-container i');
  stars.forEach((s, idx) => {
    if (idx < rating) {
      s.classList.remove('fa-regular');
      s.classList.add('fa-solid');
    } else {
      s.classList.remove('fa-solid');
      s.classList.add('fa-regular');
    }
  });
}

function handleFeedbackSubmit(e) {
  e.preventDefault();
  const hostel = document.getElementById('fb-hostel').value;
  const rating = parseInt(document.getElementById('fb-rating').value);
  const comments = document.getElementById('fb-comments').value;

  if (comments.trim()) {
    const authorName = currentUser ? currentUser.name : 'Verto Guest';
    const authorReg = currentUser ? currentUser.regNo : '1220' + Math.floor(1000 + Math.random() * 9000);

    const newRev = {
      id: 'rev_' + Date.now(),
      author: authorName,
      regNo: authorReg,
      hostel: hostel,
      meal: 'Mess Review',
      rating: rating,
      text: comments,
      timestamp: 'Just now',
      likes: 1
    };
    communityReviews.unshift(newRev);
    localStorage.setItem(KEY_COMMUNITY_REVIEWS, JSON.stringify(communityReviews));
    renderCommunityReviews();
  }

  alert(`Thank you for submitting your mess review for ${hostel}!\nRating: ${rating}/5 stars\nYour input has been posted to Student Buzz & logged with the Food Committee.`);
  closeFeedbackModal();
  e.target.reset();
}

// --------------------------------------------------------
// 17. PWA SERVICE WORKER & PHONE APP INSTALLATION
// --------------------------------------------------------
let deferredPrompt = null;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      console.log('CampusGrid Service Worker registered with scope:', reg.scope);
    }).catch((err) => {
      console.warn('Service Worker registration skipped:', err);
    });
  });
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('pwa-install-btn');
  if (btn) btn.classList.remove('hidden');
});

function triggerPwaInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        alert('CampusGrid has been added to your Phone Home Screen!');
      }
      deferredPrompt = null;
    });
  } else {
    alert('📱 How to Install on your Phone:\n\n1. Open this website in your phone browser (Chrome on Android or Safari on iPhone).\n2. Tap the Menu (3 dots) on Chrome or the Share button on Safari.\n3. Tap "Add to Home screen" or "Install App".\n4. CampusGrid will install on your phone with a real app icon and run full-screen!');
  }
}


// --------------------------------------------------------
// 18. LPU A-Z SUPER HUB & INTERACTIVE VERTO CALCULATORS
// --------------------------------------------------------
function renderLpuHub() {
  if (typeof LPU_ENCYCLOPEDIA === 'undefined') return;

  // 1. Mega Stats
  const statsGrid = document.getElementById('lpu-stats-grid');
  if (statsGrid) {
    statsGrid.innerHTML = LPU_ENCYCLOPEDIA.stats.map(s => `
      <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-1 hover-card">
        <div class="flex items-center justify-between">
          <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">${s.label}</span>
          <i class="fa-solid ${s.icon} ${s.color} text-sm"></i>
        </div>
        <div class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">${s.value}</div>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">${s.sub}</p>
      </div>
    `).join('');
  }

  // 2. Blocks 1 to 57 Directory
  filterLpuBlocks('');

  // 3. Digital Portals
  const portalsGrid = document.getElementById('lpu-portals-grid');
  if (portalsGrid) {
    portalsGrid.innerHTML = LPU_ENCYCLOPEDIA.digitalPortals.map(p => `
      <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2 hover-card">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center text-sm shrink-0">
              <i class="fa-solid ${p.icon}"></i>
            </div>
            <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">${p.name}</h4>
          </div>
          <span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-[10px] font-mono font-bold text-lpu-500 shrink-0">${p.tag}</span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${p.desc}</p>
      </div>
    `).join('');
  }

  // 4. Fests & Culture
  const festsList = document.getElementById('lpu-fests-list');
  if (festsList) {
    festsList.innerHTML = LPU_ENCYCLOPEDIA.festsAndCulture.map(f => `
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700/80 space-y-1">
        <div class="flex items-center justify-between gap-2">
          <span class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid ${f.icon} text-lpu-500"></i> ${f.title}
          </span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/15 text-amber-400">${f.badge}</span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${f.desc}</p>
      </div>
    `).join('');
  }

  // 5. Transit, Rules & Placements
  const transitList = document.getElementById('lpu-transit-list');
  if (transitList) {
    transitList.innerHTML = LPU_ENCYCLOPEDIA.transitAndRules.map(t => `
      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700/80 flex items-start gap-3">
        <i class="fa-solid fa-circle-check text-emerald-400 text-xs mt-1 shrink-0"></i>
        <div class="text-xs">
          <span class="font-bold text-slate-900 dark:text-white block">${t.title}</span>
          <span class="text-slate-600 dark:text-slate-400 leading-snug">${t.detail}</span>
        </div>
      </div>
    `).join('');
  }
}

function filterLpuBlocks(query) {
  if (typeof LPU_ENCYCLOPEDIA === 'undefined') return;
  const grid = document.getElementById('lpu-blocks-grid');
  if (!grid) return;

  const q = (query || '').toLowerCase().trim();
  const items = !q
    ? LPU_ENCYCLOPEDIA.blocksGuide
    : LPU_ENCYCLOPEDIA.blocksGuide.filter(b =>
        b.blocks.toLowerCase().includes(q) ||
        b.school.toLowerCase().includes(q) ||
        b.highlights.toLowerCase().includes(q)
      );

  if (items.length === 0) {
    grid.innerHTML = `<div class="col-span-full p-4 text-center text-xs text-slate-400">No matching LPU block or school found.</div>`;
    return;
  }

  grid.innerHTML = items.map(b => `
    <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
      <div class="flex items-center justify-between">
        <span class="px-2.5 py-0.5 rounded-lg bg-lpu-500/20 text-lpu-400 border border-lpu-500/30 text-xs font-extrabold">${b.blocks}</span>
        <i class="fa-solid fa-location-dot text-slate-500 text-xs"></i>
      </div>
      <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">${b.school}</h4>
      <p class="text-[11px] text-slate-500 dark:text-slate-400">${b.highlights}</p>
    </div>
  `).join('');
}

function calculateLpuAttendance() {
  const attEl = document.getElementById('att-attended');
  const totEl = document.getElementById('att-total');
  if (!attEl || !totEl) return;

  let attended = Math.max(0, parseInt(attEl.value) || 0);
  let total = Math.max(1, parseInt(totEl.value) || 1);
  if (attended > total) attended = total;

  const pct = (attended / total) * 100;
  let attMarks = 0;
  if (pct >= 90) attMarks = 5;
  else if (pct >= 85) attMarks = 4;
  else if (pct >= 80) attMarks = 3;
  else if (pct >= 75) attMarks = 2;

  const pctText = document.getElementById('att-percent-text');
  const bar = document.getElementById('att-progress-bar');
  const advice = document.getElementById('att-advice-text');
  const pill = document.getElementById('att-marks-pill');

  if (pctText) {
    pctText.textContent = `${pct.toFixed(1)}%`;
    pctText.className = `text-2xl font-black ${pct >= 75 ? 'text-emerald-400' : 'text-rose-500'}`;
  }
  if (bar) {
    bar.style.width = `${Math.min(100, pct).toFixed(1)}%`;
    bar.className = `h-2.5 rounded-full transition-all duration-300 ${pct >= 75 ? 'bg-gradient-to-r from-cyan-500 to-emerald-500' : 'bg-gradient-to-r from-rose-600 to-amber-500'}`;
  }
  if (pill) {
    pill.textContent = `${attMarks} / 5 Att. Marks`;
  }

  if (advice) {
    if (pct >= 75) {
      const canSkip = Math.floor((attended - 0.75 * total) / 0.75);
      advice.innerHTML = canSkip > 0
        ? `✅ <span class="text-emerald-400">Safe for End-Term Exams!</span> You can safely miss up to <strong>${canSkip} lecture${canSkip > 1 ? 's' : ''}</strong> and still stay above 75%.`
        : `✅ <span class="text-amber-400">Right on the 75% boundary!</span> Do not miss the next lecture to avoid shortage.`;
    } else {
      const needAttend = Math.ceil((0.75 * total - attended) / 0.25);
      advice.innerHTML = `⚠️ <span class="text-rose-400">Shortage Alert (&lt;75%)!</span> Attend the next <strong>${needAttend} consecutive lecture${needAttend > 1 ? 's' : ''}</strong> (or claim approved DSW Duty Leave) to reach 75%.`;
    }
  }
}

function calculateLpuMarks() {
  const att = Math.min(5, Math.max(0, parseFloat(document.getElementById('mk-att')?.value) || 0));
  const ca = Math.min(25, Math.max(0, parseFloat(document.getElementById('mk-ca')?.value) || 0));
  const mte = Math.min(20, Math.max(0, parseFloat(document.getElementById('mk-mte')?.value) || 0));
  const ete = Math.min(50, Math.max(0, parseFloat(document.getElementById('mk-ete')?.value) || 0));

  const total = Math.round((att + ca + mte + ete) * 10) / 10;
  let grade = 'E (Reappear)';
  let gp = 0;

  if (ete < 15 || total < 40) {
    grade = 'E (Reappear)';
    gp = 0;
  } else if (total >= 90) {
    grade = 'O (Outstanding)';
    gp = 10;
  } else if (total >= 80) {
    grade = 'A+';
    gp = 9;
  } else if (total >= 70) {
    grade = 'A';
    gp = 8;
  } else if (total >= 60) {
    grade = 'B+';
    gp = 7;
  } else if (total >= 50) {
    grade = 'B';
    gp = 6;
  } else if (total >= 45) {
    grade = 'C';
    gp = 5;
  } else {
    grade = 'P (Pass)';
    gp = 4;
  }

  const totEl = document.getElementById('mk-total-text');
  const pillEl = document.getElementById('grade-badge-pill');
  const verdEl = document.getElementById('mk-verdict-text');

  if (totEl) totEl.textContent = `${total} / 100`;
  if (pillEl) pillEl.textContent = `${grade} • ${gp} GP`;
  if (verdEl) {
    if (gp === 0) {
      verdEl.innerHTML = `⚠️ <span class="text-rose-400">Below Passing Threshold:</span> Ensure at least 30% in ETE (15/50) and 40/100 overall to clear the course.`;
    } else {
      verdEl.innerHTML = `🎯 <span class="text-emerald-400">Course Cleared!</span> Estimated Grade: <strong>${grade} (${gp} Grade Points)</strong> toward your Semester TGPA.`;
    }
  }
}
