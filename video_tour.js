// ========================================================
// CAMPUSGRID - AUTOMATED CINEMATIC VIDEO WALKTHROUGH
// Self-playing demo with auto-transitions and subtitles
// No user voice required!
// ========================================================

let isTourRunning = false;
let tourStep = 0;
let tourTimer = null;
let mediaRecorder = null;
let recordedChunks = [];

const TOUR_CHAPTERS = [
  {
    chapter: 1,
    title: "Project Overview",
    subtitle: "Welcome to CampusGrid — Next-Gen LPU Campus Navigator & Live Hostel Mess Food Portal.",
    action: () => {
      switchTab('ppt');
      goToPptSlide(1);
    },
    duration: 7000
  },
  {
    chapter: 2,
    title: "Problem Statement",
    subtitle: "LPU spans 600+ acres with 35,000+ students. Freshers struggle with block navigation & scattered mess schedules.",
    action: () => {
      switchTab('ppt');
      goToPptSlide(2);
    },
    duration: 7000
  },
  {
    chapter: 3,
    title: "System Architecture",
    subtitle: "Built with Tailwind CSS, Leaflet.js, OpenStreetMap tiles, LocalStorage state, and Progressive Web App (PWA).",
    action: () => {
      switchTab('ppt');
      goToPptSlide(4);
    },
    duration: 7000
  },
  {
    chapter: 4,
    title: "Interactive Campus GIS Map",
    subtitle: "Live mapping of Block 32 (CSE), 34, 36, 38, UniMall, Uni-Hospital, and all 14 Boys & Girls Hostels.",
    action: () => {
      switchTab('map');
      if (typeof resetMapView === 'function') resetMapView();
    },
    duration: 6000
  },
  {
    chapter: 5,
    title: "Smart Autocomplete & Camera Fly-To",
    subtitle: "Students can search any landmark. The camera smoothly animates and highlights block details and departments.",
    action: () => {
      switchTab('map');
      const searchInput = document.getElementById('map-search-input');
      if (searchInput) {
        searchInput.value = 'Block 32';
      }
      if (typeof focusLocation === 'function') {
        focusLocation('block-32');
      }
    },
    duration: 8000
  },
  {
    chapter: 6,
    title: "Real-Time Hostel Mess Food System",
    subtitle: "System clock automatically detects active meals (Breakfast, Lunch, Snacks, Dinner) with countdown timers.",
    action: () => {
      switchTab('mess');
      if (typeof selectDay === 'function') selectDay('sunday');
    },
    duration: 7000
  },
  {
    chapter: 7,
    title: "Nutrition & Crowd Rush Meter",
    subtitle: "7-Day menu rotation (Chole Bhature on Sun, Rajma on Mon) with live crowd rush indicators and calorie tags.",
    action: () => {
      switchTab('mess');
      if (typeof selectDay === 'function') selectDay('monday');
    },
    duration: 7000
  },
  {
    chapter: 8,
    title: "Digital Verto ID Card",
    subtitle: "Secure student authentication displaying official digital ID card with Registration number and allotted hostel.",
    action: () => {
      if (typeof openProfileModal === 'function') openProfileModal();
    },
    duration: 6000
  },
  {
    chapter: 9,
    title: "Student Buzz & Verified Reviews",
    subtitle: "Community feed where verified Vertos post real-time dish ratings, reviews, and upvotes.",
    action: () => {
      if (typeof closeProfileModal === 'function') closeProfileModal();
      switchTab('community');
    },
    duration: 7000
  },
  {
    chapter: 10,
    title: "UMS Mess Leave Rebates & Warden Console",
    subtitle: "Automated refund calculator (₹130/day) for leaves over 3 days, with Warden review console & broadcast alerts.",
    action: () => {
      switchTab('warden');
    },
    duration: 7000
  },
  {
    chapter: 11,
    title: "Conclusion & Evaluator Q&A",
    subtitle: "CampusGrid empowers 35,000+ LPU Vertos with smart navigation and intelligent dining. Thank you!",
    action: () => {
      switchTab('ppt');
      goToPptSlide(8);
    },
    duration: 8000
  }
];

function startAutoVideoTour() {
  isTourRunning = true;
  tourStep = 0;

  // Show Tour Overlay
  const overlay = document.getElementById('video-tour-overlay');
  if (overlay) overlay.classList.remove('hidden');

  playNextChapter();
}

function stopAutoVideoTour() {
  isTourRunning = false;
  if (tourTimer) clearTimeout(tourTimer);

  const overlay = document.getElementById('video-tour-overlay');
  if (overlay) overlay.classList.add('hidden');

  // Return to PPT
  switchTab('ppt');
}

function playNextChapter() {
  if (!isTourRunning) return;

  if (tourStep >= TOUR_CHAPTERS.length) {
    // Finished tour
    stopAutoVideoTour();
    alert('🎥 Video Showcase Completed!\nYou can replay it anytime by clicking "Play Video Walkthrough".');
    return;
  }

  const current = TOUR_CHAPTERS[tourStep];

  // Update UI Elements
  const chapterBadge = document.getElementById('tour-chapter-badge');
  const titleEl = document.getElementById('tour-title');
  const subtitleEl = document.getElementById('tour-subtitle');
  const progressEl = document.getElementById('tour-progress-bar');

  if (chapterBadge) chapterBadge.textContent = `Part ${tourStep + 1} of ${TOUR_CHAPTERS.length}`;
  if (titleEl) titleEl.textContent = current.title;
  if (subtitleEl) subtitleEl.textContent = current.subtitle;

  if (progressEl) {
    const percent = Math.round(((tourStep + 1) / TOUR_CHAPTERS.length) * 100);
    progressEl.style.width = `${percent}%`;
  }

  // Trigger chapter action (changes tab / zooms map / changes slide)
  try {
    current.action();
  } catch (err) {
    console.error('Tour action error:', err);
  }

  // Schedule next step
  tourTimer = setTimeout(() => {
    tourStep++;
    playNextChapter();
  }, current.duration);
}

// --------------------------------------------------------
// IN-BROWSER SCREEN RECORDER (DOWNLOAD .WEBM / .MP4 VIDEO)
// --------------------------------------------------------
async function recordAndDownloadVideo() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
    alert('Screen recording is not supported in this browser window. Please use Chrome or Edge.');
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        displaySurface: 'browser'
      },
      audio: false
    });

    recordedChunks = [];
    mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });

    mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CampusGrid_Project_Demo_Video.webm';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 100);
      alert('🎥 Your video has been downloaded as CampusGrid_Project_Demo_Video.webm!');
    };

    mediaRecorder.start();

    // Start auto tour automatically while recording!
    startAutoVideoTour();

  } catch (e) {
    console.warn('Screen recording cancelled or failed:', e);
  }
}
