// ========================================================
// CAMPUSGRID v5.0 — ULTIMATE LPU VERTO SUPER-APP CONTROLLER
// Native Mobile App Shell • Zero Embedded Map (Direct Official Links)
// 4 Clean Curated Themes • Attendance • Timetable • CA Tracker • Pomodoro
// SGPA/CGPA Calc • Mess Menu & QR • Uni-Laundry • Bill Split • Cab-Pool
// ========================================================

const STORAGE_KEYS = {
  THEME: 'cg_app_theme_v4',
  PROFILE: 'cg_touch_profile_v3',
  SUBJECTS: 'cg_touch_subjects_v3',
  TIMETABLE: 'cg_touch_timetable_v3',
  TASKS: 'cg_verto_tasks_v5',
  SGPA_ROWS: 'cg_verto_sgpa_v5',
  POMO_DONE: 'cg_verto_pomo_v5',
  EXAMS: 'cg_touch_exams_v3',
  LAUNDRY: 'cg_verto_laundry_v5',
  KHATA: 'cg_verto_khata_v5',
  GATEPASSES: 'cg_touch_gatepasses_v3',
  RMS: 'cg_touch_rms_v3',
  REBATES: 'cg_mess_rebates_v3',
  SCANS: 'cg_touch_mess_scans_v3'
};

const THEME_ORDER = ['light', 'ocean', 'mint', 'dark'];
const THEME_LABELS = {
  light: 'Clean Coral',
  ocean: 'Ocean Blue',
  mint: 'Fresh Mint',
  dark: 'Matte Dark'
};
const THEME_META_COLORS = {
  light: '#f5f7fb',
  ocean: '#f3f7fd',
  mint: '#f3f8f5',
  dark: '#101319'
};

const DEFAULT_PROFILE = {
  name: 'Verto Student',
  regNo: '12408912',
  section: 'K24AI',
  program: 'B.Tech CSE (AI & Data Science)',
  hostel: 'BH-4',
  room: 'B-412',
  cgpa: '8.74',
  mentorName: 'Dr. Sandeep Kaur'
};

const DEFAULT_SUBJECTS = [
  { id: 's1', code: 'CSE316', name: 'Operating Systems', faculty: 'Dr. Rajesh Verma', room: '32-405', attended: 35, total: 40 },
  { id: 's2', code: 'INT254', name: 'Foundations of Machine Learning', faculty: 'Dr. Sandeep Kaur', room: '32-510', attended: 31, total: 36 },
  { id: 's3', code: 'CSE326', name: 'Internet Programming Lab', faculty: 'Prof. Amanpreet Singh', room: '33-302', attended: 26, total: 28 },
  { id: 's4', code: 'MTH401', name: 'Probability & Statistics', faculty: 'Dr. Neha Bansal', room: '32-209', attended: 27, total: 36 },
  { id: 's5', code: 'PES318', name: 'Soft Skills & PEP Aptitude', faculty: 'Prof. Vikramjit Gill', room: '32-104', attended: 17, total: 24 },
  { id: 's6', code: 'CSE205', name: 'Data Structures & Algorithms', faculty: 'Dr. Ankur Gupta', room: '33-411', attended: 38, total: 42 }
];

const DEFAULT_TIMETABLE = {
  Monday: [
    { id: 't1', time: '09:00 AM - 10:00 AM', code: 'CSE316', title: 'Operating Systems', room: '32-405', type: 'Lecture' },
    { id: 't2', time: '10:00 AM - 11:00 AM', code: 'INT254', title: 'Foundations of Machine Learning', room: '32-510', type: 'Lecture' },
    { id: 't3', time: '11:00 AM - 01:00 PM', code: 'CSE326', title: 'Web Programming Lab', room: '33-302', type: 'Lab' },
    { id: 't4', time: '02:00 PM - 03:00 PM', code: 'MTH401', title: 'Probability & Statistics', room: '32-209', type: 'Lecture' }
  ],
  Tuesday: [
    { id: 't5', time: '09:00 AM - 10:00 AM', code: 'CSE205', title: 'Data Structures & Algorithms', room: '33-411', type: 'Lecture' },
    { id: 't6', time: '10:00 AM - 11:00 AM', code: 'CSE316', title: 'Operating Systems', room: '32-405', type: 'Lecture' },
    { id: 't7', time: '01:00 PM - 03:00 PM', code: 'INT254', title: 'Machine Learning Python Lab', room: '32-512', type: 'Lab' }
  ],
  Wednesday: [
    { id: 't8', time: '09:00 AM - 11:00 AM', code: 'CSE205', title: 'DSA Competitive Coding Lab', room: '33-208', type: 'Lab' },
    { id: 't9', time: '11:00 AM - 12:00 PM', code: 'INT254', title: 'Foundations of Machine Learning', room: '32-510', type: 'Lecture' },
    { id: 't10', time: '02:00 PM - 03:00 PM', code: 'PES318', title: 'PEP Aptitude & Soft Skills', room: '32-104', type: 'Tutorial' }
  ],
  Thursday: [
    { id: 't11', time: '10:00 AM - 11:00 AM', code: 'MTH401', title: 'Probability & Statistics', room: '32-209', type: 'Lecture' },
    { id: 't12', time: '11:00 AM - 12:00 PM', code: 'CSE205', title: 'Data Structures & Algorithms', room: '33-411', type: 'Lecture' },
    { id: 't13', time: '02:00 PM - 04:00 PM', code: 'CSE316', title: 'Linux Kernel & Shell Lab', room: '32-409', type: 'Lab' }
  ],
  Friday: [
    { id: 't14', time: '09:00 AM - 10:00 AM', code: 'INT254', title: 'Foundations of Machine Learning', room: '32-510', type: 'Lecture' },
    { id: 't15', time: '10:00 AM - 11:00 AM', code: 'CSE205', title: 'Data Structures & Algorithms', room: '33-411', type: 'Lecture' },
    { id: 't16', time: '02:00 PM - 03:00 PM', code: 'MENTOR', title: 'Faculty Mentor Advisory', room: '32-408B', type: 'Tutorial' }
  ],
  Saturday: [
    { id: 't17', time: '10:00 AM - 12:00 PM', code: 'DSW', title: 'Coding Club / Hackathon Sprint', room: '13-204', type: 'Lab' }
  ]
};

const DEFAULT_TASKS = [
  { id: 'k1', code: 'CSE316', type: 'CA-2', title: 'CPU Scheduling & Deadlock Simulation', due: '2026-11-06', done: false },
  { id: 'k2', code: 'INT254', type: 'MyClass Quiz', title: 'Supervised Regression & Decision Trees MCQ', due: '2026-11-09', done: false },
  { id: 'k3', code: 'CSE205', type: 'OAS Coding', title: 'Graph BFS/DFS & Dynamic Programming Test', due: '2026-11-12', done: false },
  { id: 'k4', code: 'CSE326', type: 'CA-1', title: 'Responsive Portfolio UI Submission', due: '2026-10-28', done: true }
];

const DEFAULT_SGPA_ROWS = [
  { id: 'g1', code: 'CSE316', credits: 4, gp: 9 },
  { id: 'g2', code: 'INT254', credits: 4, gp: 9 },
  { id: 'g3', code: 'CSE205', credits: 4, gp: 10 },
  { id: 'g4', code: 'MTH401', credits: 4, gp: 8 },
  { id: 'g5', code: 'CSE326', credits: 3, gp: 9 },
  { id: 'g6', code: 'PES318', credits: 2, gp: 8 }
];

const DEFAULT_EXAMS = [
  { id: 'e1', code: 'CSE316', subject: 'Operating Systems', examType: 'End-Term (ETE)', date: '2026-11-24', time: '09:30 AM - 12:30 PM', room: '34-308', seat: 'Row 3 • Seat 14' },
  { id: 'e2', code: 'INT254', subject: 'Foundations of Machine Learning', examType: 'End-Term (ETE)', date: '2026-11-27', time: '09:30 AM - 12:30 PM', room: '32-402', seat: 'Row 1 • Seat 06' },
  { id: 'e3', code: 'CSE205', subject: 'Data Structures & Algorithms', examType: 'End-Term (ETE)', date: '2026-11-30', time: '01:30 PM - 04:30 PM', room: '33-501', seat: 'Row 5 • Seat 22' }
];

const DEFAULT_LAUNDRY = {
  bagNo: 'BH4-2419',
  dropDays: 'Tue & Fri',
  used: 11,
  max: 35,
  inWash: false,
  lastPcs: 10,
  droppedAt: ''
};

const DEFAULT_KHATA = [
  { id: 'kh1', friend: 'Aman (Roommate)', amount: 140, note: 'Night Canteen Roll & Cold Coffee' },
  { id: 'kh2', friend: 'Rohit (Sec K24)', amount: 90, note: 'UniMall Printout & Spiral Binding' }
];

const DEFAULT_GATEPASSES = [
  {
    id: 'GP-2026-8941',
    type: 'Day Out-Pass',
    destination: 'Law Gate / Phagwara Market',
    outTime: 'Today 04:30 PM',
    inTime: 'Today 07:30 PM',
    reason: 'Project stationery & personal essentials',
    status: 'Approved'
  }
];

const DEFAULT_RMS = [
  {
    id: 'RMS-78412',
    category: 'Hostel Wi-Fi / Sophos IT',
    location: 'BH-4 Room B-412',
    issue: 'Sophos Wi-Fi signal drop near desk router.',
    date: 'Yesterday',
    status: 'In Progress'
  }
];

const LPU_HOLIDAYS_CALENDAR = [
  { date: '15 Nov', title: 'Guru Nanak Jayanti (Gurpurab)', type: 'Gazetted Holiday' },
  { date: '20 Nov – 05 Dec', title: 'End-Term Practical & Theory (ETE) Window', type: 'Exams' },
  { date: '08 Dec – 04 Jan', title: 'Winter Semester Break & Home Vacation', type: 'Term Break' },
  { date: '05 Jan', title: 'Spring Term Registration & Reporting', type: 'Academic' },
  { date: '26 Jan', title: 'Republic Day Parade at Unipolis', type: 'National Holiday' },
  { date: 'Feb Mid', title: 'One India / One World Cultural Carnival', type: 'Mega Fest (OD)' },
  { date: 'Mar End', title: 'YouthVibe Global Open Fest', type: 'DSW Fest (OD)' }
];

const FACULTY_CABINS = [
  { name: 'Dr. Sandeep Kaur', dept: 'School of CSE (AI & ML)', cabin: 'Block 32 • Floor 4 • Cabin 408-B', hours: 'Mon–Fri: 01:00 PM - 02:30 PM', email: 'sandeep.cse@lpu.co.in' },
  { name: 'Dr. Rajesh Verma', dept: 'School of CSE (Systems & Cloud)', cabin: 'Block 32 • Floor 3 • Cabin 312-A', hours: 'Mon–Fri: 12:00 PM - 01:30 PM', email: 'rajesh.verma@lpu.co.in' },
  { name: 'Prof. Amanpreet Singh', dept: 'Full-Stack & Web Engineering', cabin: 'Block 33 • Floor 2 • Cabin 205-C', hours: 'Tue–Sat: 02:00 PM - 03:30 PM', email: 'amanpreet.web@lpu.co.in' },
  { name: 'Dr. Ankur Gupta', dept: 'Competitive Coding & Algorithms', cabin: 'Block 33 • Floor 4 • Cabin 401-A', hours: 'Mon–Fri: 03:00 PM - 04:30 PM', email: 'ankur.dsa@lpu.co.in' },
  { name: 'Dr. Ritu Malhotra (HOD)', dept: 'Mittal School of Business (MSB)', cabin: 'Block 14 • Floor 2 • Cabin 201', hours: 'Mon–Fri: 11:00 AM - 01:00 PM', email: 'hod.msb@lpu.co.in' },
  { name: 'Dr. Harpreet Singh', dept: 'Mechanical & Robotics Center', cabin: 'Block 34 • Floor 1 • Cabin 109', hours: 'Mon–Fri: 02:00 PM - 04:00 PM', email: 'harpreet.robo@lpu.co.in' },
  { name: 'Dr. Meenakshi Sharma', dept: 'Electronics, VLSI & IoT', cabin: 'Block 38 • Floor 3 • Cabin 304', hours: 'Mon–Fri: 12:30 PM - 02:00 PM', email: 'meenakshi.ece@lpu.co.in' },
  { name: 'Dr. Gurpreet Dhaliwal', dept: 'School of Agriculture (ICAR)', cabin: 'Block 55 • Floor 1 • Cabin 102', hours: 'Mon–Fri: 11:30 AM - 01:00 PM', email: 'agri.dean@lpu.co.in' },
  { name: 'DSW Student Welfare Desk', dept: 'Clubs, Duty Leave & YouthVibe', cabin: 'Block 13 • Ground Floor • Room 105', hours: 'Mon–Sat: 09:00 AM - 05:30 PM', email: 'dsw@lpu.co.in' },
  { name: 'Career Services & Placements', dept: 'PEP & Internship NOC Desk', cabin: 'Block 32 • Mezzanine • Desk 4', hours: 'Mon–Sat: 09:30 AM - 05:00 PM', email: 'placements@lpu.co.in' }
];

const UMS_NOTICES = [
  { tag: 'Exams', title: 'End-Term Theory & Practical Seating Plan Live', meta: 'Exam Cell • Block 30', desc: 'Carry physical LPU ID Card and maintain >=75% attendance eligibility.' },
  { tag: 'Placements', title: 'PEP Coding & Mock Interview Drives Open', meta: 'Career Services • Block 32', desc: 'Register on OAS & UMS Placement Portal for upcoming product company tests.' },
  { tag: 'Hostel', title: 'Digital QR Meal Pass Mandatory at Dining Halls', meta: 'Chief Warden Office', desc: 'Scan your live Meal QR token at turnstiles; 3+ day home leave qualifies for ₹130/day rebate.' },
  { tag: 'DSW', title: 'One World & YouthVibe Student Registrations', meta: 'DSW • Block 13', desc: 'Approved participants get official On-Duty (OD) attendance credit.' }
];

// Runtime State
let appTheme = 'light';
let profile = {};
let subjects = [];
let timetable = {};
let tasks = [];
let sgpaRows = [];
let exams = [];
let laundry = {};
let khataList = [];
let gatePasses = [];
let rmsTickets = [];
let rebates = [];
let messScans = 14;
let pomoSessionsDone = 0;

let selectedTtDay = 'Monday';
let selectedMessDay = 'monday';
let selectedCampusCat = 'all';
let deferredInstallPrompt = null;

// Pomodoro Timer State
let pomoModeMins = 25;
let pomoSecondsLeft = 25 * 60;
let pomoRunning = false;
let pomoInterval = null;

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  applyThemeUI(appTheme);

  const jsDay = new Date().getDay();
  const ttDays = ['Monday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const messDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  selectedTtDay = ttDays[jsDay] || 'Monday';
  selectedMessDay = messDays[jsDay] || 'monday';

  renderAll();
  calcLpuGrade();
  calcQuickSplit();

  updateQrClock();
  setInterval(updateQrClock, 1000);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
  });
});

function loadState() {
  appTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
  if (!THEME_ORDER.includes(appTheme)) appTheme = 'light';

  profile = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROFILE) || 'null') || { ...DEFAULT_PROFILE };
  subjects = JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBJECTS) || 'null') || JSON.parse(JSON.stringify(DEFAULT_SUBJECTS));
  timetable = JSON.parse(localStorage.getItem(STORAGE_KEYS.TIMETABLE) || 'null') || JSON.parse(JSON.stringify(DEFAULT_TIMETABLE));
  tasks = JSON.parse(localStorage.getItem(STORAGE_KEYS.TASKS) || 'null') || JSON.parse(JSON.stringify(DEFAULT_TASKS));
  sgpaRows = JSON.parse(localStorage.getItem(STORAGE_KEYS.SGPA_ROWS) || 'null') || JSON.parse(JSON.stringify(DEFAULT_SGPA_ROWS));
  exams = JSON.parse(localStorage.getItem(STORAGE_KEYS.EXAMS) || 'null') || JSON.parse(JSON.stringify(DEFAULT_EXAMS));
  laundry = JSON.parse(localStorage.getItem(STORAGE_KEYS.LAUNDRY) || 'null') || { ...DEFAULT_LAUNDRY };
  khataList = JSON.parse(localStorage.getItem(STORAGE_KEYS.KHATA) || 'null') || JSON.parse(JSON.stringify(DEFAULT_KHATA));
  gatePasses = JSON.parse(localStorage.getItem(STORAGE_KEYS.GATEPASSES) || 'null') || JSON.parse(JSON.stringify(DEFAULT_GATEPASSES));
  rmsTickets = JSON.parse(localStorage.getItem(STORAGE_KEYS.RMS) || 'null') || JSON.parse(JSON.stringify(DEFAULT_RMS));
  rebates = JSON.parse(localStorage.getItem(STORAGE_KEYS.REBATES) || 'null') || (typeof DEFAULT_REBATES !== 'undefined' ? JSON.parse(JSON.stringify(DEFAULT_REBATES)) : []);
  messScans = parseInt(localStorage.getItem(STORAGE_KEYS.SCANS) || '14', 10);
  pomoSessionsDone = parseInt(localStorage.getItem(STORAGE_KEYS.POMO_DONE) || '2', 10);
}

function renderAll() {
  renderProfileAndHome();
  renderAttendance();
  renderTimetable();
  renderTasks();
  renderPomodoroUI();
  renderSgpaCalculator();
  renderExams();
  renderMessMenu();
  renderMessQr();
  renderCafes();
  renderRebates();
  renderCampusDirectory();
  renderLaundryUI();
  renderKhataList();
  renderHolidaysList();
  renderCabinsList();
  renderRmsList();
  renderRulesList();
  renderGatePasses();
}

// ================= THEME SYSTEM =================
function setAppTheme(themeName) {
  if (!THEME_ORDER.includes(themeName)) return;
  appTheme = themeName;
  localStorage.setItem(STORAGE_KEYS.THEME, appTheme);
  applyThemeUI(appTheme);
  showToast('Theme: ' + THEME_LABELS[appTheme]);
}

function cycleAppTheme() {
  const idx = THEME_ORDER.indexOf(appTheme);
  const next = THEME_ORDER[(idx + 1) % THEME_ORDER.length];
  setAppTheme(next);
}

function applyThemeUI(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  const meta = document.getElementById('meta-theme-color');
  if (meta) meta.setAttribute('content', THEME_META_COLORS[themeName] || '#f5f7fb');

  THEME_ORDER.forEach((t) => {
    const btn = document.getElementById('thm-btn-' + t);
    if (!btn) return;
    if (t === themeName) {
      btn.style.borderColor = 'var(--accent)';
      btn.style.backgroundColor = 'var(--accent-soft)';
    } else {
      btn.style.borderColor = 'var(--border)';
      btn.style.backgroundColor = 'var(--surface-muted)';
    }
  });
}

// ================= NAVIGATION & SUBTABS =================
function switchScreen(screenId) {
  ['home', 'classes', 'mess', 'campus', 'profile'].forEach((id) => {
    const sec = document.getElementById('screen-' + id);
    const nav = document.getElementById('bnav-' + id);
    if (sec) sec.classList.toggle('hidden', id !== screenId);
    if (nav) nav.classList.toggle('active', id === screenId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchSubTab(group, sub) {
  const map = {
    classes: { prefix: 'cls', items: ['attendance', 'timetable', 'tasks', 'exams'] },
    mess: { prefix: 'mess', items: ['menu', 'qr', 'cafes', 'rebate'] },
    campus: { prefix: 'cmp', items: ['blocks', 'hostel', 'cabins', 'rms'] }
  };
  const cfg = map[group];
  if (!cfg) return;

  cfg.items.forEach((item) => {
    const btn = document.getElementById(`seg-${cfg.prefix}-${item}`);
    const view = document.getElementById(`sub-${cfg.prefix}-${item}`);
    if (btn) btn.classList.toggle('active', item === sub);
    if (view) view.classList.toggle('hidden', item !== sub);
  });
}

function jumpTo(screenId, subTab) {
  switchScreen(screenId);
  if (subTab) switchSubTab(screenId, subTab);
}

function openQuickMealQr() {
  jumpTo('mess', 'qr');
}

// ================= GOOGLE MAPS DIRECT LINK HELPER (NO IN-APP MAP) =================
function buildGoogleMapsUrl(queryOrCoords) {
  if (Array.isArray(queryOrCoords) && queryOrCoords.length === 2) {
    return `https://www.google.com/maps/search/?api=1&query=${queryOrCoords[0]},${queryOrCoords[1]}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(queryOrCoords + ' Lovely Professional University Phagwara')}`;
}

function roomToMapsUrl(roomStr) {
  const blockMatch = String(roomStr || '').match(/^(\d{1,2})/);
  if (blockMatch && typeof CAMPUS_LOCATIONS !== 'undefined') {
    const bNum = blockMatch[1];
    const found = CAMPUS_LOCATIONS.find((l) => l.name.includes('Block ' + bNum));
    if (found && found.coords) return buildGoogleMapsUrl(found.coords);
    return buildGoogleMapsUrl('Block ' + bNum);
  }
  return buildGoogleMapsUrl('Lovely Professional University Campus');
}

// ================= HOME & PROFILE RENDERING =================
function getInitials(name) {
  const parts = String(name || 'VS').trim().split(/\s+/);
  return ((parts[0]?.[0] || 'V') + (parts[1]?.[0] || '')).toUpperCase();
}

function computeAggregateAttendance() {
  let att = 0;
  let tot = 0;
  subjects.forEach((s) => {
    att += Number(s.attended || 0);
    tot += Number(s.total || 0);
  });
  const pct = tot > 0 ? (att / tot) * 100 : 100;
  return { att, tot, pct };
}

function renderProfileAndHome() {
  const initials = getInitials(profile.name);
  const hostelLabel = profile.hostel === 'Day Scholar' ? 'Day Scholar' : `${profile.hostel} (${profile.room || '-'})`;
  const { pct } = computeAggregateAttendance();
  const pctStr = pct.toFixed(1) + '%';
  const pendingCas = tasks.filter((t) => !t.done);

  setText('top-sec-pill', profile.section || 'LPU');
  setText('top-greeting', `Hi, ${String(profile.name || 'Verto').split(' ')[0]} • Reg ${profile.regNo}`);

  setText('home-avatar', initials);
  setText('home-name', profile.name);
  setText('home-reg', profile.regNo);
  setText('home-hostel', hostelLabel);
  setText('home-prog', profile.program);
  setText('home-att-pct', pctStr);
  setText('home-cgpa', profile.cgpa || '8.50');
  setText('home-ca-count', `${pendingCas.length} Due`);

  const dot = document.getElementById('home-att-dot');
  if (dot) {
    dot.className = 'w-1.5 h-1.5 rounded-full ' + (pct >= 75 ? 'bg-emerald-400' : 'bg-rose-400');
  }

  // Upcoming CAs preview on Home
  const homeTasksEl = document.getElementById('home-tasks-list');
  if (homeTasksEl) {
    if (pendingCas.length === 0) {
      homeTasksEl.innerHTML = `<div class="app-card-muted p-3 text-xs text-emerald-600 font-bold text-center">All CAs & assignments completed! 🎉</div>`;
    } else {
      homeTasksEl.innerHTML = pendingCas.slice(0, 3).map((t) => `
        <div class="app-card-muted p-2.5 flex items-center justify-between gap-2.5">
          <div class="flex items-center gap-2.5 min-w-0">
            <button onclick="toggleTaskDone('${t.id}')" class="w-5 h-5 rounded-md border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center shrink-0 cursor-pointer tap-scale"></button>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5">
                <span class="px-1.5 py-0.5 rounded text-[9px] font-extrabold" style="background: var(--accent-soft); color: var(--accent-text);">${esc(t.code)} • ${esc(t.type)}</span>
                <span class="text-[10px] font-semibold text-[var(--text-sub)]">Due ${esc(t.due)}</span>
              </div>
              <p class="text-xs font-bold text-[var(--text-main)] truncate mt-0.5">${esc(t.title)}</p>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Today's Classes on Home
  const jsDay = new Date().getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[jsDay];
  const todayList = timetable[todayName] || [];
  setText('home-today-count', `${todayList.length} Cls`);
  setText('home-day-sub', todayName === 'Sunday' ? 'Sunday — No regular classes' : `${todayName} • Section ${profile.section}`);

  const clsBox = document.getElementById('home-classes-list');
  if (clsBox) {
    if (todayList.length === 0) {
      clsBox.innerHTML = `<div class="app-card-muted p-3 text-xs text-[var(--text-sub)] text-center">No scheduled lectures today. Enjoy your break!</div>`;
    } else {
      clsBox.innerHTML = todayList.slice(0, 3).map((c) => `
        <div class="app-card-muted p-3 flex items-center justify-between gap-2.5">
          <div class="min-w-0">
            <div class="flex items-center gap-1.5">
              <span class="px-1.5 py-0.5 rounded text-[10px] font-extrabold" style="background: var(--accent-soft); color: var(--accent-text);">${esc(c.code)}</span>
              <span class="text-[11px] font-semibold text-[var(--text-sub)]">${esc(c.time)}</span>
            </div>
            <p class="text-xs font-extrabold text-[var(--text-main)] truncate mt-1">${esc(c.title)}</p>
          </div>
          <a href="${roomToMapsUrl(c.room)}" target="_blank" rel="noopener" class="px-2.5 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[11px] font-bold text-[var(--text-main)] no-underline shrink-0 tap-scale">
            ${esc(c.room)} <i class="fa-solid fa-arrow-up-right-from-square text-[9px] text-[var(--accent)] ml-0.5"></i>
          </a>
        </div>
      `).join('');
    }
  }

  // Live Mess Preview on Home
  const messBody = document.getElementById('home-mess-body');
  if (messBody && typeof getCurrentMealInfo === 'function' && typeof MESS_SCHEDULE !== 'undefined') {
    const info = getCurrentMealInfo();
    const dKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const todaySchedule = MESS_SCHEDULE[dKeys[jsDay]] || MESS_SCHEDULE.monday;
    const mealObj = todaySchedule.meals[info.meal] || todaySchedule.meals.lunch;

    const badge = document.getElementById('home-mess-badge');
    if (badge) {
      badge.textContent = info.status === 'active' ? 'Serving Now' : 'Next Meal';
      badge.className = 'px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ' +
        (info.status === 'active' ? 'bg-emerald-500/15 text-emerald-600' : 'bg-amber-500/15 text-amber-600');
    }
    setText('home-mess-title', `${info.name}`);

    messBody.innerHTML = `
      <div class="app-card-muted p-3 space-y-1.5">
        <div class="flex items-center justify-between text-xs">
          <span class="font-extrabold text-[var(--text-main)]">${esc(mealObj.title)}</span>
          <span class="text-[11px] font-semibold text-[var(--text-sub)]">${esc(mealObj.timing)}</span>
        </div>
        <p class="text-xs text-[var(--text-sub)] leading-relaxed">${mealObj.items.slice(0, 3).map(esc).join(' • ')}</p>
      </div>
    `;
  }

  // UMS Notices
  const noticesBox = document.getElementById('home-notices-list');
  if (noticesBox) {
    noticesBox.innerHTML = UMS_NOTICES.map((n) => `
      <div class="app-card-muted p-3 space-y-1">
        <div class="flex items-center justify-between">
          <span class="px-2 py-0.5 rounded text-[10px] font-extrabold" style="background: var(--accent-soft); color: var(--accent-text);">${esc(n.tag)}</span>
          <span class="text-[10px] font-semibold text-[var(--text-sub)]">${esc(n.meta)}</span>
        </div>
        <h4 class="text-xs font-extrabold text-[var(--text-main)] pt-0.5">${esc(n.title)}</h4>
        <p class="text-[11px] text-[var(--text-sub)] leading-snug">${esc(n.desc)}</p>
      </div>
    `).join('');
  }

  // Profile Screen Card
  setText('prof-avatar', initials);
  setText('prof-name', profile.name);
  setText('prof-reg-sec', `Reg: ${profile.regNo} • Sec: ${profile.section}`);
  setText('prof-prog', profile.program);
  setText('prof-hostel', hostelLabel);
  setText('prof-mentor', profile.mentorName || 'Faculty Mentor');
  setText('prof-barcode-lbl', `*LPU-${profile.regNo}*`);
}

// ================= ATTENDANCE TRACKER =================
function lpuAttBonusMarks(pct) {
  if (pct >= 90) return '5/5 Bonus Marks';
  if (pct >= 85) return '4/5 Bonus Marks';
  if (pct >= 80) return '3/5 Bonus Marks';
  if (pct >= 75) return '2/5 Bonus Marks';
  return '0/5 (Shortage)';
}

function renderAttendance() {
  const { att, tot, pct } = computeAggregateAttendance();
  setText('att-big-pct', pct.toFixed(1) + '%');

  const pill = document.getElementById('att-status-pill');
  const advice = document.getElementById('att-bunk-advice');

  if (pct >= 75) {
    if (pill) {
      pill.textContent = 'Safe (>=75%)';
      pill.className = 'px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-600';
    }
    const safeBunks = Math.max(0, Math.floor((att - 0.75 * tot) / 0.75));
    if (advice) {
      advice.textContent = `${att}/${tot} attended • You can safely skip ${safeBunks} ${safeBunks === 1 ? 'lecture' : 'lectures'} and stay >=75%.`;
    }
  } else {
    if (pill) {
      pill.textContent = 'Below 75%';
      pill.className = 'px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-500/15 text-rose-600';
    }
    const need = Math.max(1, Math.ceil((0.75 * tot - att) / 0.25));
    if (advice) {
      advice.textContent = `${att}/${tot} attended • Attend next ${need} classes continuously to reach 75%.`;
    }
  }

  const box = document.getElementById('subjects-container');
  if (!box) return;

  box.innerHTML = subjects.map((s) => {
    const spct = s.total > 0 ? (s.attended / s.total) * 100 : 100;
    const isSafe = spct >= 75;
    const barColor = isSafe ? '#10b981' : '#ef4444';
    const subHint = isSafe
      ? `Safe bunks: ${Math.max(0, Math.floor((s.attended - 0.75 * s.total) / 0.75))}`
      : `Need +${Math.max(1, Math.ceil((0.75 * s.total - s.attended) / 0.25))} cls`;

    return `
      <div class="app-card p-3.5 space-y-2.5">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="px-2 py-0.5 rounded-md text-[10px] font-extrabold" style="background: var(--accent-soft); color: var(--accent-text);">${esc(s.code)}</span>
              <span class="text-[11px] font-semibold text-[var(--text-sub)]">${esc(lpuAttBonusMarks(spct))}</span>
            </div>
            <h4 class="text-[13px] font-extrabold text-[var(--text-main)] mt-1 leading-snug">${esc(s.name)}</h4>
            <p class="text-[11px] text-[var(--text-sub)] mt-0.5">Room ${esc(s.room || '-')} • ${esc(s.faculty || 'Faculty')}</p>
          </div>

          <div class="text-right shrink-0">
            <span class="text-base font-extrabold ${isSafe ? 'text-emerald-600' : 'text-rose-500'}">${spct.toFixed(1)}%</span>
            <span class="block text-[11px] font-bold text-[var(--text-sub)]">${s.attended}/${s.total}</span>
          </div>
        </div>

        <div class="w-full h-2 rounded-full bg-[var(--surface-muted)] overflow-hidden">
          <div class="h-full rounded-full transition-all duration-300" style="width: ${Math.min(100, spct).toFixed(1)}%; background: ${barColor};"></div>
        </div>

        <div class="flex items-center justify-between pt-0.5 gap-1.5">
          <span class="text-[11px] font-semibold text-[var(--text-sub)]">${subHint}</span>
          <div class="flex items-center gap-1.5">
            <button onclick="markAttendance('${s.id}', true)" class="px-2.5 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-700 font-bold text-xs border-0 cursor-pointer tap-scale">
              +P
            </button>
            <button onclick="markAttendance('${s.id}', false)" class="px-2.5 py-1.5 rounded-lg bg-rose-500/15 text-rose-600 font-bold text-xs border-0 cursor-pointer tap-scale">
              +A
            </button>
            <button onclick="undoAttendance('${s.id}')" class="px-2 py-1.5 rounded-lg btn-neutral text-[11px] text-[var(--text-sub)] tap-scale" title="Undo 1 Lecture">
              <i class="fa-solid fa-rotate-left"></i>
            </button>
            <button onclick="deleteSubject('${s.id}')" class="w-7 h-7 rounded-lg btn-neutral text-[11px] text-[var(--text-sub)] tap-scale" title="Remove">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function markAttendance(subId, isPresent) {
  const sub = subjects.find((x) => x.id === subId);
  if (!sub) return;
  sub.total = Number(sub.total || 0) + 1;
  if (isPresent) sub.attended = Number(sub.attended || 0) + 1;
  localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subjects));
  renderAttendance();
  renderProfileAndHome();
  showToast(`${sub.code}: Marked ${isPresent ? 'Present' : 'Absent'}`);
}

function undoAttendance(subId) {
  const sub = subjects.find((x) => x.id === subId);
  if (!sub || sub.total <= 0) return;
  sub.total = Math.max(0, sub.total - 1);
  if (sub.attended > sub.total) sub.attended = sub.total;
  localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subjects));
  renderAttendance();
  renderProfileAndHome();
  showToast(`${sub.code}: Undid 1 lecture`);
}

function addNewSubject() {
  const code = val('inp-sub-code').toUpperCase() || 'CSE101';
  const name = val('inp-sub-name');
  if (!name) return showToast('Enter subject name');
  const room = val('inp-sub-room') || '32-101';
  const fac = val('inp-sub-fac') || 'LPU Faculty';
  const att = Math.max(0, parseInt(val('inp-sub-att') || '0', 10));
  const tot = Math.max(att, parseInt(val('inp-sub-tot') || '1', 10));

  subjects.unshift({ id: 's_' + Date.now(), code, name, faculty: fac, room, attended: att, total: tot });
  localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subjects));
  closeSheet('sheet-add-subject');
  renderAttendance();
  renderProfileAndHome();
  showToast('Subject added');
}

function deleteSubject(subId) {
  subjects = subjects.filter((x) => x.id !== subId);
  localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subjects));
  renderAttendance();
  renderProfileAndHome();
  showToast('Subject removed');
}

// ================= TIMETABLE =================
function renderTimetable() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const pillBox = document.getElementById('tt-day-pills');
  if (pillBox) {
    pillBox.innerHTML = days.map((d) => `
      <button onclick="selectTimetableDay('${d}')" class="filter-chip ${selectedTtDay === d ? 'active' : ''}">
        ${d.slice(0, 3)}
      </button>
    `).join('');
  }

  const list = timetable[selectedTtDay] || [];
  const box = document.getElementById('tt-list-container');
  if (!box) return;

  if (list.length === 0) {
    box.innerHTML = `<div class="app-card p-6 text-center text-xs text-[var(--text-sub)]">No classes on ${selectedTtDay}. Tap <strong>+ Class</strong> to add one.</div>`;
    return;
  }

  box.innerHTML = list.map((c) => `
    <div class="app-card p-3.5 flex items-center justify-between gap-3">
      <div class="min-w-0 space-y-1">
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="px-2 py-0.5 rounded text-[10px] font-extrabold" style="background: var(--accent-soft); color: var(--accent-text);">${esc(c.code)}</span>
          <span class="text-[11px] font-bold text-[var(--text-sub)]">${esc(c.time)}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-[var(--surface-muted)] text-[var(--text-sub)] font-semibold">${esc(c.type)}</span>
        </div>
        <h4 class="text-[13px] font-extrabold text-[var(--text-main)] truncate">${esc(c.title)}</h4>
        <div class="flex items-center gap-3 text-[11px]">
          <span class="font-bold text-[var(--text-sub)]"><i class="fa-solid fa-door-open mr-1"></i>Room ${esc(c.room)}</span>
          <a href="${roomToMapsUrl(c.room)}" target="_blank" rel="noopener" class="font-bold text-[var(--accent)] no-underline">
            Block Map Link <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
          </a>
        </div>
      </div>
      <button onclick="deleteClassSlot('${selectedTtDay}', '${c.id}')" class="w-8 h-8 rounded-xl btn-neutral text-xs text-[var(--text-sub)] shrink-0 tap-scale">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');
}

function selectTimetableDay(day) {
  selectedTtDay = day;
  renderTimetable();
}

function addNewClassSlot() {
  const day = val('inp-tt-day') || 'Monday';
  const type = val('inp-tt-type') || 'Lecture';
  const time = val('inp-tt-time') || '09:00 AM - 10:00 AM';
  const code = (val('inp-tt-code') || 'CSE101').toUpperCase();
  const room = val('inp-tt-room') || '32-201';
  const title = val('inp-tt-title');
  if (!title) return showToast('Enter subject title');

  if (!timetable[day]) timetable[day] = [];
  timetable[day].push({ id: 'tt_' + Date.now(), time, code, title, room, type });
  localStorage.setItem(STORAGE_KEYS.TIMETABLE, JSON.stringify(timetable));
  selectedTtDay = day;
  closeSheet('sheet-add-class');
  renderTimetable();
  renderProfileAndHome();
  showToast(`Added to ${day}`);
}

function deleteClassSlot(day, id) {
  if (!timetable[day]) return;
  timetable[day] = timetable[day].filter((x) => x.id !== id);
  localStorage.setItem(STORAGE_KEYS.TIMETABLE, JSON.stringify(timetable));
  renderTimetable();
  renderProfileAndHome();
  showToast('Class removed');
}

// ================= CA / ASSIGNMENT TRACKER & POMODORO FOCUS TIMER =================
function renderTasks() {
  const box = document.getElementById('tasks-full-list');
  if (!box) return;

  if (tasks.length === 0) {
    box.innerHTML = `<div class="app-card-muted p-4 text-center text-xs text-[var(--text-sub)]">No CAs or tasks logged yet.</div>`;
    return;
  }

  const sorted = [...tasks].sort((a, b) => Number(a.done) - Number(b.done));
  box.innerHTML = sorted.map((t) => `
    <div class="app-card-muted p-3 flex items-center justify-between gap-2.5">
      <div class="flex items-center gap-2.5 min-w-0">
        <button onclick="toggleTaskDone('${t.id}')" class="w-5 h-5 rounded-md border flex items-center justify-center shrink-0 cursor-pointer tap-scale ${t.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-[var(--border)] bg-[var(--surface)]'}">
          ${t.done ? '<i class="fa-solid fa-check text-[10px]"></i>' : ''}
        </button>
        <div class="min-w-0">
          <div class="flex items-center gap-1.5">
            <span class="px-1.5 py-0.5 rounded text-[9px] font-extrabold" style="background: var(--accent-soft); color: var(--accent-text);">${esc(t.code)} • ${esc(t.type)}</span>
            <span class="text-[10px] font-semibold text-[var(--text-sub)]">Due: ${esc(t.due)}</span>
          </div>
          <p class="text-xs font-bold mt-0.5 truncate ${t.done ? 'line-through text-[var(--text-faint)]' : 'text-[var(--text-main)]'}">${esc(t.title)}</p>
        </div>
      </div>
      <button onclick="deleteTask('${t.id}')" class="text-xs text-[var(--text-faint)] bg-transparent border-0 cursor-pointer shrink-0">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');
}

function toggleTaskDone(id) {
  const item = tasks.find((x) => x.id === id);
  if (!item) return;
  item.done = !item.done;
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
  renderTasks();
  renderProfileAndHome();
  showToast(item.done ? 'CA Marked Completed!' : 'Marked Pending');
}

function addNewTask() {
  const code = (val('inp-tk-code') || 'CSE101').toUpperCase();
  const type = val('inp-tk-type') || 'CA-1';
  const title = val('inp-tk-title');
  if (!title) return showToast('Enter CA / Assignment topic');
  const due = val('inp-tk-due') || '2026-11-15';

  tasks.unshift({ id: 'tk_' + Date.now(), code, type, title, due, done: false });
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
  closeSheet('sheet-add-task');
  renderTasks();
  renderProfileAndHome();
  showToast('CA Deadline saved');
}

function deleteTask(id) {
  tasks = tasks.filter((x) => x.id !== id);
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
  renderTasks();
  renderProfileAndHome();
}

// Pomodoro Focus Timer
function setPomodoroMode(mins) {
  pausePomodoro();
  pomoModeMins = mins;
  pomoSecondsLeft = mins * 60;
  [25, 50, 5].forEach((m) => {
    const b = document.getElementById('pomo-m-' + m);
    if (b) b.classList.toggle('active', m === mins);
  });
  renderPomodoroUI();
}

function togglePomodoro() {
  if (pomoRunning) {
    pausePomodoro();
  } else {
    pomoRunning = true;
    pomoInterval = setInterval(() => {
      if (pomoSecondsLeft > 0) {
        pomoSecondsLeft -= 1;
        renderPomodoroUI();
      } else {
        pausePomodoro();
        if (pomoModeMins >= 25) {
          pomoSessionsDone += 1;
          localStorage.setItem(STORAGE_KEYS.POMO_DONE, String(pomoSessionsDone));
        }
        pomoSecondsLeft = pomoModeMins * 60;
        renderPomodoroUI();
        showToast('Focus Sprint Complete! 🎉');
      }
    }, 1000);
    renderPomodoroUI();
  }
}

function pausePomodoro() {
  pomoRunning = false;
  if (pomoInterval) clearInterval(pomoInterval);
  pomoInterval = null;
  renderPomodoroUI();
}

function resetPomodoro() {
  pausePomodoro();
  pomoSecondsLeft = pomoModeMins * 60;
  renderPomodoroUI();
}

function renderPomodoroUI() {
  const mm = String(Math.floor(pomoSecondsLeft / 60)).padStart(2, '0');
  const ss = String(pomoSecondsLeft % 60).padStart(2, '0');
  setText('pomo-clock-display', `${mm}:${ss}`);
  setText('pomo-sessions-count', String(pomoSessionsDone));

  const btn = document.getElementById('pomo-toggle-btn');
  if (btn) {
    btn.innerHTML = pomoRunning
      ? '<i class="fa-solid fa-pause mr-1.5"></i>Pause'
      : '<i class="fa-solid fa-play mr-1.5"></i>Start Focus';
  }
}

// ================= MULTI-SUBJECT SGPA & CGPA CALCULATOR =================
function renderSgpaCalculator() {
  const box = document.getElementById('sgpa-rows-container');
  if (!box) return;

  const gradeOpts = [
    { label: 'O (10)', val: 10 },
    { label: 'A+ (9)', val: 9 },
    { label: 'A (8)', val: 8 },
    { label: 'B+ (7)', val: 7 },
    { label: 'B (6)', val: 6 },
    { label: 'C (5)', val: 5 },
    { label: 'P (4)', val: 4 },
    { label: 'E/F (0)', val: 0 }
  ];

  box.innerHTML = sgpaRows.map((r) => `
    <div class="flex items-center gap-1.5">
      <input type="text" value="${esc(r.code)}" onchange="updateSgpaRow('${r.id}', 'code', this.value)" class="app-input" style="flex: 1.1; padding: 7px 10px; font-size: 12px; font-weight: 700;" placeholder="Code" />
      <select onchange="updateSgpaRow('${r.id}', 'credits', this.value)" class="app-input" style="width: 74px; padding: 7px 6px; font-size: 12px;">
        ${[1, 2, 3, 4, 5].map((cr) => `<option value="${cr}" ${Number(r.credits) === cr ? 'selected' : ''}>${cr} Cr</option>`).join('')}
      </select>
      <select onchange="updateSgpaRow('${r.id}', 'gp', this.value)" class="app-input" style="width: 92px; padding: 7px 6px; font-size: 12px; font-weight: 700;">
        ${gradeOpts.map((g) => `<option value="${g.val}" ${Number(r.gp) === g.val ? 'selected' : ''}>${g.label}</option>`).join('')}
      </select>
      <button onclick="removeSgpaRow('${r.id}')" class="w-7 h-7 rounded-lg btn-neutral text-[11px] text-[var(--text-faint)] shrink-0">✕</button>
    </div>
  `).join('');

  recalcSgpaCgpa();
}

function updateSgpaRow(id, field, value) {
  const row = sgpaRows.find((x) => x.id === id);
  if (!row) return;
  if (field === 'code') row.code = String(value || 'COURSE').toUpperCase();
  if (field === 'credits') row.credits = Number(value || 3);
  if (field === 'gp') row.gp = Number(value || 8);
  localStorage.setItem(STORAGE_KEYS.SGPA_ROWS, JSON.stringify(sgpaRows));
  recalcSgpaCgpa();
}

function addSgpaRow() {
  sgpaRows.push({ id: 'g_' + Date.now(), code: 'COURSE' + (sgpaRows.length + 1), credits: 3, gp: 9 });
  localStorage.setItem(STORAGE_KEYS.SGPA_ROWS, JSON.stringify(sgpaRows));
  renderSgpaCalculator();
}

function removeSgpaRow(id) {
  if (sgpaRows.length <= 1) return;
  sgpaRows = sgpaRows.filter((x) => x.id !== id);
  localStorage.setItem(STORAGE_KEYS.SGPA_ROWS, JSON.stringify(sgpaRows));
  renderSgpaCalculator();
}

function recalcSgpaCgpa() {
  let semCredits = 0;
  let semPoints = 0;
  sgpaRows.forEach((r) => {
    const cr = Number(r.credits || 0);
    const gp = Number(r.gp || 0);
    semCredits += cr;
    semPoints += cr * gp;
  });

  const sgpa = semCredits > 0 ? semPoints / semCredits : 0;
  setText('out-sem-sgpa', sgpa.toFixed(2));

  const pastCr = Math.max(0, parseFloat(document.getElementById('inp-past-credits')?.value || '0') || 0);
  const pastCg = Math.min(10, Math.max(0, parseFloat(document.getElementById('inp-past-cgpa')?.value || '0') || 0));
  const totalCr = pastCr + semCredits;
  const newCgpa = totalCr > 0 ? (pastCr * pastCg + semPoints) / totalCr : sgpa;
  setText('out-new-cgpa', newCgpa.toFixed(2));
}

// ================= EXAMS & SINGLE SUBJECT MARKS PREDICTOR =================
function renderExams() {
  const box = document.getElementById('exams-list-container');
  if (!box) return;
  if (exams.length === 0) {
    box.innerHTML = `<div class="app-card-muted p-4 text-center text-xs text-[var(--text-sub)]">No upcoming exams added.</div>`;
    return;
  }

  box.innerHTML = exams.map((ex) => `
    <div class="app-card-muted p-3 space-y-1.5">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1.5">
          <span class="px-2 py-0.5 rounded text-[10px] font-extrabold" style="background: var(--accent-soft); color: var(--accent-text);">${esc(ex.code)}</span>
          <span class="text-[11px] font-bold text-[var(--text-sub)]">${esc(ex.examType)}</span>
        </div>
        <button onclick="deleteExam('${ex.id}')" class="text-[11px] text-[var(--text-faint)] bg-transparent border-0 cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <h4 class="text-xs font-extrabold text-[var(--text-main)]">${esc(ex.subject)}</h4>
      <div class="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[var(--text-sub)] pt-0.5">
        <span><i class="fa-regular fa-calendar mr-1"></i>${esc(ex.date)} • ${esc(ex.time)}</span>
        <a href="${roomToMapsUrl(ex.room)}" target="_blank" rel="noopener" class="font-bold text-[var(--accent)] no-underline">
          Room ${esc(ex.room)} (${esc(ex.seat)}) ↗
        </a>
      </div>
    </div>
  `).join('');
}

function addNewExam() {
  const code = (val('inp-ex-code') || 'CSE101').toUpperCase();
  const examType = val('inp-ex-type') || 'End-Term (ETE)';
  const subject = val('inp-ex-sub');
  if (!subject) return showToast('Enter subject name');
  const date = val('inp-ex-date') || '2026-11-25';
  const time = val('inp-ex-time') || '09:30 AM - 12:30 PM';
  const room = val('inp-ex-room') || '32-304';
  const seat = val('inp-ex-seat') || 'Row 2 • Seat 10';

  exams.push({ id: 'ex_' + Date.now(), code, subject, examType, date, time, room, seat });
  localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(exams));
  closeSheet('sheet-add-exam');
  renderExams();
  showToast('Exam added');
}

function deleteExam(id) {
  exams = exams.filter((x) => x.id !== id);
  localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(exams));
  renderExams();
}

function calcLpuGrade() {
  const a = parseInt(document.getElementById('rng-m-att')?.value || '4', 10);
  const c = parseInt(document.getElementById('rng-m-ca')?.value || '21', 10);
  const m = parseInt(document.getElementById('rng-m-mte')?.value || '16', 10);
  const e = parseInt(document.getElementById('rng-m-ete')?.value || '38', 10);

  setText('lbl-m-att', `${a} / 5`);
  setText('lbl-m-ca', `${c} / 25`);
  setText('lbl-m-mte', `${m} / 20`);
  setText('lbl-m-ete', `${e} / 50`);

  const total = a + c + m + e;
  setText('grade-total-score', `${total} / 100`);

  let grade = 'E (Reappear)';
  if (total >= 90) grade = 'O (10 GP)';
  else if (total >= 80) grade = 'A+ (9 GP)';
  else if (total >= 70) grade = 'A (8 GP)';
  else if (total >= 60) grade = 'B+ (7 GP)';
  else if (total >= 50) grade = 'B (6 GP)';
  else if (total >= 45) grade = 'C (5 GP)';
  else if (total >= 40) grade = 'P (4 GP)';

  setText('grade-letter-out', grade);
}

// ================= MESS MENU, QR, CAFES & REBATE =================
function renderMessMenu() {
  if (typeof MESS_SCHEDULE === 'undefined') return;
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const pillBox = document.getElementById('mess-day-pills');
  if (pillBox) {
    pillBox.innerHTML = days.map((d) => `
      <button onclick="selectMessDay('${d}')" class="filter-chip ${selectedMessDay === d ? 'active' : ''}">
        ${d.charAt(0).toUpperCase() + d.slice(1, 3)}
      </button>
    `).join('');
  }

  const dayData = MESS_SCHEDULE[selectedMessDay] || MESS_SCHEDULE.monday;
  const mealOrder = [
    { key: 'breakfast', label: 'Breakfast', icon: 'fa-mug-saucer' },
    { key: 'lunch', label: 'Lunch', icon: 'fa-bowl-rice' },
    { key: 'snacks', label: 'Evening Snacks', icon: 'fa-cookie-bite' },
    { key: 'dinner', label: 'Dinner', icon: 'fa-utensils' }
  ];

  const activeInfo = typeof getCurrentMealInfo === 'function' ? getCurrentMealInfo() : { meal: '', status: '' };
  const box = document.getElementById('mess-meals-list');
  if (!box) return;

  box.innerHTML = mealOrder.map((m) => {
    const meal = dayData.meals[m.key];
    if (!meal) return '';
    const isNow = activeInfo.status === 'active' && activeInfo.meal === m.key;

    return `
      <div class="app-card p-4 space-y-2.5" style="${isNow ? 'border-color: var(--accent);' : ''}">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs" style="background: var(--accent-soft); color: var(--accent);">
              <i class="fa-solid ${m.icon}"></i>
            </span>
            <div>
              <div class="flex items-center gap-1.5">
                <h4 class="text-xs font-extrabold text-[var(--text-main)]">${m.label}</h4>
                ${isNow ? `<span class="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 text-[9px] font-extrabold uppercase">Live</span>` : ''}
              </div>
              <span class="text-[11px] text-[var(--text-sub)]">${esc(meal.timing)}</span>
            </div>
          </div>
          <span class="text-[11px] font-bold text-[var(--text-sub)]">${esc(meal.calories)}</span>
        </div>

        <p class="text-xs font-bold text-[var(--text-main)]">${esc(meal.title)}</p>
        <ul class="space-y-1 text-xs text-[var(--text-sub)] pl-4 list-disc">
          ${meal.items.map((it) => `<li>${esc(it)}</li>`).join('')}
        </ul>
      </div>
    `;
  }).join('');
}

function selectMessDay(dayKey) {
  selectedMessDay = dayKey;
  renderMessMenu();
}

function renderMessQr() {
  setText('qr-student-name', profile.name);
  setText('qr-student-meta', `Reg: ${profile.regNo} • ${profile.hostel} Mess`);
  setText('qr-token-code', `LPU-MESS-${profile.regNo}`);
  setText('qr-scan-count', String(messScans));
  if (typeof getCurrentMealInfo === 'function') {
    const info = getCurrentMealInfo();
    setText('qr-meal-slot-label', `${info.name} Coupon (${info.status === 'active' ? 'Active' : 'Upcoming'})`);
  }
}

function updateQrClock() {
  const el = document.getElementById('qr-live-timestamp');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) +
    ' • ' + now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function recordMessScan() {
  messScans += 1;
  localStorage.setItem(STORAGE_KEYS.SCANS, String(messScans));
  renderMessQr();
  showToast('Meal QR Verified!');
}

function renderCafes() {
  const box = document.getElementById('cafes-list-container');
  if (!box || typeof CAMPUS_EATERIES === 'undefined') return;

  box.innerHTML = CAMPUS_EATERIES.map((c) => `
    <div class="app-card p-3.5 space-y-2">
      <div class="flex items-start justify-between gap-2">
        <div>
          <h4 class="text-[13px] font-extrabold text-[var(--text-main)]">${esc(c.name)}</h4>
          <p class="text-[11px] font-semibold text-[var(--text-sub)]">${esc(c.location)} • ${esc(c.priceRange)}</p>
        </div>
        <span class="px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-600 text-[11px] font-extrabold shrink-0">
          ★ ${c.rating}
        </span>
      </div>
      <p class="text-xs text-[var(--text-sub)]"><strong class="text-[var(--text-main)]">Must Try:</strong> ${esc(c.mustTry)}</p>
      <div class="flex items-center justify-between pt-1 text-[11px]">
        <span class="text-[var(--text-sub)]"><i class="fa-regular fa-clock mr-1"></i>${esc(c.openHours)}</span>
        <a href="${buildGoogleMapsUrl(c.name + ' ' + c.location)}" target="_blank" rel="noopener" class="font-bold text-[var(--accent)] no-underline">
          Open Map Link ↗
        </a>
      </div>
    </div>
  `).join('');
}

function renderRebates() {
  const box = document.getElementById('rebates-history-list');
  if (!box) return;
  box.innerHTML = rebates.map((r) => `
    <div class="app-card p-3.5 flex items-center justify-between gap-2">
      <div>
        <span class="text-xs font-extrabold text-[var(--text-main)] block">${esc(r.fromDate)} &rarr; ${esc(r.toDate)} (${r.days} days)</span>
        <span class="text-[11px] text-[var(--text-sub)]">${esc(r.reason)}</span>
      </div>
      <div class="text-right shrink-0">
        <span class="text-xs font-extrabold text-emerald-600 block">${esc(r.rebateAmount)}</span>
        <span class="text-[10px] font-bold text-[var(--text-sub)]">${esc(r.status)}</span>
      </div>
    </div>
  `).join('');
}

function submitMessRebate() {
  const f = val('reb-from');
  const t = val('reb-to');
  const reason = val('reb-reason') || 'Home Visit Leave';
  if (!f || !t) return showToast('Select From and To dates');

  const days = Math.round((new Date(t) - new Date(f)) / 86400000) + 1;
  if (days < 3) return showToast('Minimum 3 days required for rebate');

  rebates.unshift({
    id: 'reb_' + Date.now(),
    fromDate: f,
    toDate: t,
    days,
    reason,
    status: 'Submitted',
    rebateAmount: `₹ ${days * 130} Est.`
  });
  localStorage.setItem(STORAGE_KEYS.REBATES, JSON.stringify(rebates));
  renderRebates();
  showToast('Mess rebate submitted');
}

// ================= CAMPUS DIRECTORY (OFFICIAL MAP LINKS ONLY) =================
function setCampusCat(cat) {
  selectedCampusCat = cat;
  document.querySelectorAll('#campus-cat-pills .filter-chip').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
  });
  renderCampusDirectory();
}

function renderCampusDirectory() {
  const box = document.getElementById('campus-blocks-list');
  if (!box || typeof CAMPUS_LOCATIONS === 'undefined') return;

  const q = (document.getElementById('campus-search-input')?.value || '').trim().toLowerCase();
  const filtered = CAMPUS_LOCATIONS.filter((loc) => {
    const catOk = selectedCampusCat === 'all' || loc.category === selectedCampusCat;
    if (!catOk) return false;
    if (!q) return true;
    const hay = `${loc.name} ${loc.shortName || ''} ${loc.dept || ''} ${loc.description || ''}`.toLowerCase();
    return hay.includes(q);
  });

  if (filtered.length === 0) {
    box.innerHTML = `<div class="app-card p-5 text-center text-xs text-[var(--text-sub)]">No matching LPU block or hostel found.</div>`;
    return;
  }

  box.innerHTML = filtered.map((loc) => {
    const mapsHref = loc.coords ? buildGoogleMapsUrl(loc.coords) : buildGoogleMapsUrl(loc.name);
    return `
      <div class="app-card p-3.5 space-y-2">
        <div class="flex items-start justify-between gap-2.5">
          <div class="min-w-0">
            <h4 class="text-[13px] font-extrabold text-[var(--text-main)] leading-snug">${esc(loc.shortName || loc.name)}</h4>
            <p class="text-[11px] font-semibold text-[var(--text-sub)] mt-0.5">${esc(loc.dept || loc.category)}</p>
          </div>
          <a href="${mapsHref}" target="_blank" rel="noopener" class="px-2.5 py-1.5 btn-soft text-[11px] no-underline shrink-0 tap-scale">
            Map Link ↗
          </a>
        </div>
        <p class="text-xs text-[var(--text-sub)] leading-relaxed">${esc(loc.description)}</p>
        <div class="flex flex-wrap items-center justify-between gap-2 pt-0.5 text-[11px] text-[var(--text-sub)]">
          <span><i class="fa-regular fa-clock mr-1"></i>${esc(loc.timings || 'Open Daily')}</span>
          <span><i class="fa-solid fa-bolt mr-1 text-[var(--accent)]"></i>${esc(loc.transit || 'Campus Shuttle')}</span>
        </div>
      </div>
    `;
  }).join('');
}

// ================= HOSTEL LIFE: UNI-LAUNDRY, BILL SPLITTER & CAB POOL =================
function renderLaundryUI() {
  setText('laundry-bag-sub', `Bag #${laundry.bagNo} • ${laundry.dropDays} Drop`);
  setText('laundry-quota-text', `${laundry.used} / ${laundry.max} Washes`);

  const statusEl = document.getElementById('laundry-status-text');
  const btn = document.getElementById('btn-laundry-action');
  const pcsInp = document.getElementById('inp-laundry-pcs');

  if (laundry.inWash) {
    if (statusEl) {
      statusEl.textContent = `In Wash (${laundry.lastPcs} pcs • ${laundry.droppedAt})`;
      statusEl.className = 'text-xs font-extrabold text-amber-600';
    }
    if (btn) btn.textContent = 'Mark Bag Collected ✓';
    if (pcsInp) pcsInp.classList.add('hidden');
  } else {
    if (statusEl) {
      statusEl.textContent = 'Ready in Room';
      statusEl.className = 'text-xs font-extrabold text-emerald-600';
    }
    if (btn) btn.textContent = 'Drop Laundry Bag';
    if (pcsInp) pcsInp.classList.remove('hidden');
  }
}

function toggleLaundryDrop() {
  if (!laundry.inWash) {
    const pcs = Math.max(1, parseInt(val('inp-laundry-pcs') || '10', 10));
    laundry.inWash = true;
    laundry.lastPcs = pcs;
    laundry.used = Number(laundry.used || 0) + 1;
    laundry.droppedAt = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
    showToast(`Dropped ${pcs} clothes at Uni-Laundry`);
  } else {
    laundry.inWash = false;
    showToast('Laundry Bag Collected!');
  }
  localStorage.setItem(STORAGE_KEYS.LAUNDRY, JSON.stringify(laundry));
  renderLaundryUI();
}

function saveLaundryConfig() {
  laundry.bagNo = (val('inp-lnd-bag') || 'BH4-2419').toUpperCase();
  laundry.dropDays = val('inp-lnd-days') || 'Tue & Fri';
  laundry.used = Math.max(0, parseInt(val('inp-lnd-used') || '0', 10));
  laundry.max = Math.max(1, parseInt(val('inp-lnd-max') || '35', 10));
  localStorage.setItem(STORAGE_KEYS.LAUNDRY, JSON.stringify(laundry));
  closeSheet('sheet-laundry');
  renderLaundryUI();
  showToast('Laundry card updated');
}

// Roommate Bill Splitter & Khata
function calcQuickSplit() {
  const total = Math.max(0, parseFloat(document.getElementById('inp-split-total')?.value || '0') || 0);
  const heads = Math.max(1, parseInt(document.getElementById('inp-split-heads')?.value || '2', 10) || 2);
  const each = Math.ceil(total / heads);
  setText('out-split-each', `₹${each}`);
}

function copyUpiSplitMsg() {
  const total = Math.max(0, parseFloat(document.getElementById('inp-split-total')?.value || '0') || 0);
  const heads = Math.max(1, parseInt(document.getElementById('inp-split-heads')?.value || '2', 10) || 2);
  const each = Math.ceil(total / heads);
  const msg = `💸 *Campus Bill Split:* Total ₹${total} ÷ ${heads} people = *₹${each} each*. UPI kar dena bhai!`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(msg).then(() => showToast('UPI Split Msg Copied!'));
  }
}

function renderKhataList() {
  const box = document.getElementById('khata-list-box');
  if (!box) return;
  if (khataList.length === 0) {
    box.innerHTML = `<div class="text-[11px] text-[var(--text-sub)] text-center py-2">All roommate dues settled!</div>`;
    return;
  }

  box.innerHTML = khataList.map((k) => `
    <div class="app-card-muted p-2.5 flex items-center justify-between gap-2">
      <div class="min-w-0">
        <span class="text-xs font-extrabold text-[var(--text-main)] block truncate">${esc(k.friend)} — <span class="text-emerald-600">₹${k.amount}</span></span>
        ${k.note ? `<span class="text-[10px] text-[var(--text-sub)] block truncate">${esc(k.note)}</span>` : ''}
      </div>
      <button onclick="settleKhataItem('${k.id}')" class="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-700 font-bold text-[11px] border-0 cursor-pointer shrink-0 tap-scale">
        Settled ✓
      </button>
    </div>
  `).join('');
}

function addKhataItem() {
  const friend = val('inp-khata-name');
  const amount = parseInt(val('inp-khata-amt') || '0', 10);
  if (!friend || amount <= 0) return showToast('Enter friend name & ₹ amount');

  khataList.unshift({ id: 'kh_' + Date.now(), friend, amount, note: 'Pending Split' });
  localStorage.setItem(STORAGE_KEYS.KHATA, JSON.stringify(khataList));
  setVal('inp-khata-name', '');
  setVal('inp-khata-amt', '');
  renderKhataList();
  showToast('Added to Khata');
}

function settleKhataItem(id) {
  khataList = khataList.filter((x) => x.id !== id);
  localStorage.setItem(STORAGE_KEYS.KHATA, JSON.stringify(khataList));
  renderKhataList();
  showToast('Marked Settled!');
}

function shareCabPoolWhatsApp() {
  const route = val('inp-cab-route');
  const when = val('inp-cab-when') || 'Today';
  const seats = val('inp-cab-seats') || '2 Seats Available';
  const msg = `🚕 *LPU Cab-Pool Share*\n📍 *Route:* ${route}\n🕒 *When:* ${when}\n💺 *Seats:* ${seats}\n👤 *Contact:* ${profile.name} (${profile.hostel})\nDM if anyone wants to split cab fare!`;
  const waUrl = 'https://wa.me/?text=' + encodeURIComponent(msg);
  window.open(waUrl, '_blank', 'noopener');
}

// ================= HOLIDAYS, CABINS, RMS & RULES =================
function renderHolidaysList() {
  const box = document.getElementById('holidays-list-container');
  if (!box) return;
  box.innerHTML = LPU_HOLIDAYS_CALENDAR.map((h) => `
    <div class="app-card-muted p-2.5 flex items-center justify-between gap-2">
      <div class="min-w-0">
        <span class="text-xs font-extrabold text-[var(--text-main)] block truncate">${esc(h.title)}</span>
        <span class="text-[11px] font-semibold text-[var(--accent)]">${esc(h.date)}</span>
      </div>
      <span class="px-2 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[10px] font-bold text-[var(--text-sub)] shrink-0">${esc(h.type)}</span>
    </div>
  `).join('');
}

function renderCabinsList() {
  const box = document.getElementById('cabins-list-container');
  if (!box) return;
  const q = (document.getElementById('cabin-search-input')?.value || '').trim().toLowerCase();
  const list = FACULTY_CABINS.filter((f) => !q || `${f.name} ${f.dept} ${f.cabin}`.toLowerCase().includes(q));

  box.innerHTML = list.map((f) => `
    <div class="app-card p-3.5 space-y-1.5">
      <div class="flex items-start justify-between gap-2">
        <div>
          <h4 class="text-[13px] font-extrabold text-[var(--text-main)]">${esc(f.name)}</h4>
          <p class="text-[11px] text-[var(--text-sub)]">${esc(f.dept)}</p>
        </div>
        <a href="mailto:${esc(f.email)}" class="px-2.5 py-1 rounded-lg btn-neutral text-[11px] no-underline shrink-0">Email</a>
      </div>
      <div class="app-card-muted p-2.5 text-xs font-bold text-[var(--text-main)]">
        <i class="fa-solid fa-location-dot text-[var(--accent)] mr-1.5"></i>${esc(f.cabin)}
      </div>
      <p class="text-[11px] text-[var(--text-sub)]"><i class="fa-regular fa-clock mr-1"></i>Visiting: ${esc(f.hours)}</p>
    </div>
  `).join('');
}

function renderRmsList() {
  const box = document.getElementById('rms-tickets-list');
  if (!box) return;
  box.innerHTML = rmsTickets.map((t) => `
    <div class="app-card p-3.5 space-y-1">
      <div class="flex items-center justify-between">
        <span class="text-[11px] font-mono font-extrabold text-[var(--accent)]">${esc(t.id)}</span>
        <span class="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 text-[10px] font-bold">${esc(t.status)}</span>
      </div>
      <h4 class="text-xs font-extrabold text-[var(--text-main)]">${esc(t.category)} • ${esc(t.location)}</h4>
      <p class="text-xs text-[var(--text-sub)]">${esc(t.issue)}</p>
    </div>
  `).join('');
}

function submitRmsTicket() {
  const category = val('rms-cat');
  const location = val('rms-loc') || `${profile.hostel} ${profile.room}`;
  const issue = val('rms-desc');
  if (!issue) return showToast('Describe your issue first');

  rmsTickets.unshift({
    id: 'RMS-' + Math.floor(10000 + Math.random() * 89999),
    category,
    location,
    issue,
    date: 'Just now',
    status: 'Logged'
  });
  localStorage.setItem(STORAGE_KEYS.RMS, JSON.stringify(rmsTickets));
  document.getElementById('rms-desc').value = '';
  renderRmsList();
  showToast('RMS Ticket Registered');
}

function renderRulesList() {
  const box = document.getElementById('lpu-rules-list');
  if (!box || typeof LPU_ENCYCLOPEDIA === 'undefined') return;
  box.innerHTML = LPU_ENCYCLOPEDIA.transitAndRules.map((r) => `
    <div class="app-card-muted p-3 space-y-0.5">
      <h4 class="text-xs font-extrabold text-[var(--text-main)]">${esc(r.title)}</h4>
      <p class="text-[11px] text-[var(--text-sub)] leading-relaxed">${esc(r.detail)}</p>
    </div>
  `).join('');
}

// ================= PROFILE EDIT & GATE PASSES =================
function openSheet(id) {
  if (id === 'sheet-profile') {
    setVal('inp-p-name', profile.name);
    setVal('inp-p-reg', profile.regNo);
    setVal('inp-p-sec', profile.section);
    setVal('inp-p-prog', profile.program);
    setVal('inp-p-hostel', profile.hostel);
    setVal('inp-p-room', profile.room);
    setVal('inp-p-cgpa', profile.cgpa);
    setVal('inp-p-mentor', profile.mentorName);
  } else if (id === 'sheet-laundry') {
    setVal('inp-lnd-bag', laundry.bagNo);
    setVal('inp-lnd-days', laundry.dropDays);
    setVal('inp-lnd-used', laundry.used);
    setVal('inp-lnd-max', laundry.max);
  }
  const el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
}

function closeSheet(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

function backdropClose(e, id) {
  if (e.target && e.target.id === id) closeSheet(id);
}

function saveStudentProfile() {
  profile.name = val('inp-p-name') || 'Verto Student';
  profile.regNo = val('inp-p-reg') || '12408912';
  profile.section = (val('inp-p-sec') || 'K24AI').toUpperCase();
  profile.program = val('inp-p-prog') || 'B.Tech CSE';
  profile.hostel = val('inp-p-hostel') || 'BH-4';
  profile.room = val('inp-p-room') || 'B-412';
  profile.cgpa = val('inp-p-cgpa') || '8.50';
  profile.mentorName = val('inp-p-mentor') || 'Faculty Mentor';

  localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  closeSheet('sheet-profile');
  renderProfileAndHome();
  renderMessQr();
  showToast('Student profile updated');
}

function renderGatePasses() {
  const box = document.getElementById('gatepasses-list');
  if (!box) return;
  box.innerHTML = gatePasses.map((gp) => `
    <div class="app-card-muted p-3 space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-xs font-extrabold text-[var(--text-main)]">${esc(gp.type)}</span>
        <span class="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 text-[10px] font-bold">${esc(gp.status)}</span>
      </div>
      <p class="text-xs text-[var(--text-sub)]"><strong class="text-[var(--text-main)]">To:</strong> ${esc(gp.destination)} (${esc(gp.outTime)} &rarr; ${esc(gp.inTime)})</p>
      <div class="bg-white border border-slate-200 rounded-lg p-2 text-center">
        <div class="barcode-bars w-full" style="height: 24px;"></div>
        <span class="block text-[10px] font-mono font-bold text-slate-600 mt-0.5">${esc(gp.id)}</span>
      </div>
    </div>
  `).join('');
}

function createGatePass() {
  const type = val('inp-gp-type') || 'Day Out-Pass';
  const destination = val('inp-gp-dest');
  if (!destination) return showToast('Enter destination');
  const outTime = val('inp-gp-out') || 'Today 05:00 PM';
  const inTime = val('inp-gp-in') || 'Today 08:00 PM';
  const reason = val('inp-gp-reason') || 'Personal Visit';

  gatePasses.unshift({
    id: 'GP-2026-' + Math.floor(1000 + Math.random() * 8999),
    type,
    destination,
    outTime,
    inTime,
    reason,
    status: 'Approved'
  });
  localStorage.setItem(STORAGE_KEYS.GATEPASSES, JSON.stringify(gatePasses));
  closeSheet('sheet-gatepass');
  renderGatePasses();
  showToast('Gate Pass Generated');
}

// ================= INSTALL, SHARE & RESET =================
function triggerAppInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(() => {
      deferredInstallPrompt = null;
    });
  } else {
    openSheet('sheet-install');
  }
}

function shareCampusGridApp() {
  const shareUrl = 'https://iamaryaann.github.io/lpu-campusgrid/?v=5';
  const shareData = {
    title: 'CampusGrid — LPU Verto Super-App',
    text: 'Check out CampusGrid (LPU Attendance, Timetable, SGPA Calc, CA Tracker, Laundry, Mess Menu & Official LPU Map Links):',
    url: shareUrl
  };
  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(shareUrl).then(() => showToast('App link copied!'));
  }
}

function resetAllStudentData() {
  if (!confirm('Reset your saved timetable, attendance & profile back to default demo data?')) return;
  Object.values(STORAGE_KEYS).forEach((k) => {
    if (k !== STORAGE_KEYS.THEME) localStorage.removeItem(k);
  });
  loadState();
  renderAll();
  showToast('Reset to default data');
}

// ================= UTILITIES =================
function setText(id, txt) {
  const el = document.getElementById(id);
  if (el) el.textContent = txt ?? '';
}

function val(id) {
  return (document.getElementById(id)?.value || '').trim();
}

function setVal(id, v) {
  const el = document.getElementById(id);
  if (el) el.value = v ?? '';
}

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('app-toast');
  if (!t) return;
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.style.opacity = '0';
  }, 2000);
}
