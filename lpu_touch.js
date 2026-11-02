// ========================================================
// CAMPUSGRID v3.0 — COMPLETE "LPU TOUCH" STUDENT SUPER-MODULE
// Built for all 35,000+ LPU Vertos (Customizable & Persistent per Device)
// Modules: Dashboard, Timetable, Attendance, Mess QR & Gate Pass,
//          Exam Seating & Marks/CGPA, RMS Tickets, Faculty Cabins & Notices
// ========================================================

const TOUCH_KEYS = {
  PROFILE: 'cg_touch_profile_v3',
  TIMETABLE: 'cg_touch_timetable_v3',
  SUBJECTS: 'cg_touch_subjects_v3',
  EXAMS: 'cg_touch_exams_v3',
  GATEPASSES: 'cg_touch_gatepasses_v3',
  RMS: 'cg_touch_rms_v3',
  MESS_SCANS: 'cg_touch_mess_scans_v3'
};

const DEFAULT_TOUCH_PROFILE = {
  name: 'Verto Student',
  regNo: '12408912',
  section: 'K24AI',
  program: 'B.Tech CSE (AI & Data Science)',
  semester: 'Semester 4',
  hostel: 'BH-4',
  room: 'B-412',
  cgpa: '8.74',
  mentorName: 'Dr. Sandeep Kaur',
  mentorCabin: 'Block 32 • Cabin 408-B',
  mentorPhone: '+91 1824 517032',
  feeStatus: 'Cleared (No Dues)'
};

const DEFAULT_TOUCH_SUBJECTS = [
  { id: 'sub1', code: 'CSE316', name: 'Operating Systems', faculty: 'Dr. Rajesh Verma', room: '32-405', credits: 4, attended: 35, total: 40 },
  { id: 'sub2', code: 'INT254', name: 'Foundations of Machine Learning', faculty: 'Dr. Sandeep Kaur', room: '32-510', credits: 4, attended: 31, total: 36 },
  { id: 'sub3', code: 'CSE326', name: 'Internet Programming & Web Lab', faculty: 'Prof. Amanpreet Singh', room: '33-302', credits: 3, attended: 26, total: 28 },
  { id: 'sub4', code: 'MTH401', name: 'Probability & Statistics for AI', faculty: 'Dr. Neha Bansal', room: '32-209', credits: 4, attended: 27, total: 36 },
  { id: 'sub5', code: 'PES318', name: 'Soft Skills & PEP Aptitude', faculty: 'Prof. Vikramjit Gill', room: '32-104', credits: 2, attended: 17, total: 24 },
  { id: 'sub6', code: 'CSE205', name: 'Data Structures & Algorithms', faculty: 'Dr. Ankur Gupta', room: '33-411', credits: 4, attended: 38, total: 42 }
];

const DEFAULT_TOUCH_TIMETABLE = {
  Monday: [
    { id: 'tt1', time: '09:00 AM - 10:00 AM', code: 'CSE316', title: 'Operating Systems', room: '32-405', type: 'Lecture', blockId: 'block-32' },
    { id: 'tt2', time: '10:00 AM - 11:00 AM', code: 'INT254', title: 'Foundations of Machine Learning', room: '32-510', type: 'Lecture', blockId: 'block-32' },
    { id: 'tt3', time: '11:00 AM - 01:00 PM', code: 'CSE326', title: 'Web Programming Practical', room: '33-302', type: 'Lab', blockId: 'block-33' },
    { id: 'tt4', time: '02:00 PM - 03:00 PM', code: 'MTH401', title: 'Probability & Statistics', room: '32-209', type: 'Lecture', blockId: 'block-32' },
    { id: 'tt5', time: '03:00 PM - 04:00 PM', code: 'PES318', title: 'PEP Analytical & Verbal Skills', room: '32-104', type: 'Tutorial', blockId: 'block-32' }
  ],
  Tuesday: [
    { id: 'tt6', time: '09:00 AM - 10:00 AM', code: 'CSE205', title: 'Data Structures & Algorithms', room: '33-411', type: 'Lecture', blockId: 'block-33' },
    { id: 'tt7', time: '10:00 AM - 11:00 AM', code: 'CSE316', title: 'Operating Systems', room: '32-405', type: 'Lecture', blockId: 'block-32' },
    { id: 'tt8', time: '01:00 PM - 03:00 PM', code: 'INT254', title: 'Machine Learning Python Lab', room: '32-512', type: 'Lab', blockId: 'block-32' },
    { id: 'tt9', time: '03:00 PM - 04:00 PM', code: 'MTH401', title: 'Probability & Statistics', room: '32-209', type: 'Tutorial', blockId: 'block-32' }
  ],
  Wednesday: [
    { id: 'tt10', time: '09:00 AM - 11:00 AM', code: 'CSE205', title: 'DSA Competitive Coding Lab', room: '33-208', type: 'Lab', blockId: 'block-33' },
    { id: 'tt11', time: '11:00 AM - 12:00 PM', code: 'INT254', title: 'Foundations of Machine Learning', room: '32-510', type: 'Lecture', blockId: 'block-32' },
    { id: 'tt12', time: '02:00 PM - 03:00 PM', code: 'CSE316', title: 'Operating Systems', room: '32-405', type: 'Lecture', blockId: 'block-32' },
    { id: 'tt13', time: '04:00 PM - 05:00 PM', code: 'PES318', title: 'PEP Mock Interview Workshop', room: '32-104', type: 'Lecture', blockId: 'block-32' }
  ],
  Thursday: [
    { id: 'tt14', time: '10:00 AM - 11:00 AM', code: 'MTH401', title: 'Probability & Statistics', room: '32-209', type: 'Lecture', blockId: 'block-32' },
    { id: 'tt15', time: '11:00 AM - 12:00 PM', code: 'CSE205', title: 'Data Structures & Algorithms', room: '33-411', type: 'Lecture', blockId: 'block-33' },
    { id: 'tt16', time: '01:00 PM - 02:00 PM', code: 'CSE326', title: 'Internet Programming', room: '33-302', type: 'Lecture', blockId: 'block-33' },
    { id: 'tt17', time: '02:00 PM - 04:00 PM', code: 'CSE316', title: 'Linux Kernel & Shell Lab', room: '32-409', type: 'Lab', blockId: 'block-32' }
  ],
  Friday: [
    { id: 'tt18', time: '09:00 AM - 10:00 AM', code: 'INT254', title: 'Foundations of Machine Learning', room: '32-510', type: 'Lecture', blockId: 'block-32' },
    { id: 'tt19', time: '10:00 AM - 11:00 AM', code: 'CSE205', title: 'Data Structures & Algorithms', room: '33-411', type: 'Lecture', blockId: 'block-33' },
    { id: 'tt20', time: '11:00 AM - 12:00 PM', code: 'MTH401', title: 'Probability & Statistics', room: '32-209', type: 'Lecture', blockId: 'block-32' },
    { id: 'tt21', time: '02:00 PM - 03:00 PM', code: 'MENTOR', title: 'HOD / Faculty Mentor Interaction', room: '32-408B', type: 'Advisory', blockId: 'block-32' }
  ],
  Saturday: [
    { id: 'tt22', time: '10:00 AM - 12:00 PM', code: 'CLUB', title: 'DSW Coding Club / Hackathon Sprint', room: '13-204', type: 'Workshop', blockId: 'block-13' }
  ]
};

const DEFAULT_TOUCH_EXAMS = [
  { id: 'ex1', code: 'CSE316', subject: 'Operating Systems', examType: 'End-Term (ETE)', date: '2026-11-24', time: '09:30 AM - 12:30 PM', room: '34-308', seat: 'Row 3 • Seat 14' },
  { id: 'ex2', code: 'INT254', subject: 'Foundations of Machine Learning', examType: 'End-Term (ETE)', date: '2026-11-27', time: '09:30 AM - 12:30 PM', room: '32-402', seat: 'Row 1 • Seat 06' },
  { id: 'ex3', code: 'CSE205', subject: 'Data Structures & Algorithms', examType: 'End-Term (ETE)', date: '2026-11-30', time: '01:30 PM - 04:30 PM', room: '33-501', seat: 'Row 5 • Seat 22' },
  { id: 'ex4', code: 'MTH401', subject: 'Probability & Statistics for AI', examType: 'Continuous Assessment 3', date: '2026-11-12', time: '10:00 AM - 11:00 AM', room: '32-209', seat: 'Class Roll Seat' }
];

const DEFAULT_TOUCH_GATEPASSES = [
  {
    id: 'GP-2026-8941',
    type: 'Day Out-Pass',
    destination: 'Law Gate Market / Phagwara City',
    outTime: 'Today • 04:30 PM',
    inTime: 'Today • 07:30 PM',
    reason: 'Stationery, Project Printout & Personal Essentials',
    status: 'Approved (Scan at Turnstile)'
  }
];

const DEFAULT_TOUCH_RMS = [
  {
    id: 'RMS-78412',
    category: 'Hostel Wi-Fi / Sophos IT',
    location: 'Room B-412',
    issue: 'Sophos Wi-Fi signal fluctuation near study desk router.',
    date: 'Yesterday',
    status: 'Assigned to IT Engineer'
  }
];

const LPU_FACULTY_DIRECTORY = [
  { name: 'Dr. Sandeep Kaur', dept: 'School of CSE (AI & ML)', cabin: 'Block 32 • Floor 4 • Cabin 408-B', hours: 'Mon–Fri: 01:00 PM - 02:30 PM', email: 'sandeep.cse@lpu.co.in' },
  { name: 'Dr. Rajesh Verma', dept: 'School of CSE (Systems & Cloud)', cabin: 'Block 32 • Floor 3 • Cabin 312-A', hours: 'Mon–Fri: 12:00 PM - 01:30 PM', email: 'rajesh.verma@lpu.co.in' },
  { name: 'Prof. Amanpreet Singh', dept: 'Full-Stack & Web Engineering', cabin: 'Block 33 • Floor 2 • Cabin 205-C', hours: 'Tue–Sat: 02:00 PM - 03:30 PM', email: 'amanpreet.web@lpu.co.in' },
  { name: 'Dr. Ankur Gupta', dept: 'Competitive Coding & Algorithms', cabin: 'Block 33 • Floor 4 • Cabin 401-A', hours: 'Mon–Fri: 03:00 PM - 04:30 PM', email: 'ankur.dsa@lpu.co.in' },
  { name: 'Dr. Ritu Malhotra (HOD)', dept: 'Mittal School of Business (MSB)', cabin: 'Block 14 • Floor 2 • Cabin 201', hours: 'Mon–Fri: 11:00 AM - 01:00 PM', email: 'hod.msb@lpu.co.in' },
  { name: 'Dr. Harpreet Singh', dept: 'Mechanical & Robotics Center', cabin: 'Block 34 • Floor 1 • Cabin 109', hours: 'Mon–Fri: 02:00 PM - 04:00 PM', email: 'harpreet.robo@lpu.co.in' },
  { name: 'Dr. Meenakshi Sharma', dept: 'School of Electronics (VLSI & IoT)', cabin: 'Block 38 • Floor 3 • Cabin 304', hours: 'Mon–Fri: 12:30 PM - 02:00 PM', email: 'meenakshi.ece@lpu.co.in' },
  { name: 'Dr. Gurpreet Dhaliwal', dept: 'School of Agriculture (ICAR)', cabin: 'Block 55 • Floor 1 • Cabin 102', hours: 'Mon–Fri: 11:30 AM - 01:00 PM', email: 'agri.dean@lpu.co.in' },
  { name: 'DSW Student Welfare Helpdesk', dept: 'Clubs, Duty Leave & YouthVibe', cabin: 'Block 13 • Ground Floor • Room 105', hours: 'Mon–Sat: 09:00 AM - 05:30 PM', email: 'dsw@lpu.co.in' },
  { name: 'Career Services & PEP Coordinator', dept: 'Placements & Internship NOC', cabin: 'Block 32 • Mezzanine Floor • Desk 4', hours: 'Mon–Sat: 09:30 AM - 05:00 PM', email: 'placements@lpu.co.in' }
];

const LPU_UMS_ANNOUNCEMENTS = [
  { tag: 'Examination', badgeColor: 'bg-rose-500/20 text-rose-400', title: 'End-Term Theory & Practical Seating Plan Live on LPU Touch', date: 'Today • Exam Cell (Block 30)', body: 'Students must carry physical LPU ID Card and ensure >=75% aggregate attendance. Check Exam Seating sub-tab for room & row details.' },
  { tag: 'Placements', badgeColor: 'bg-emerald-500/20 text-emerald-400', title: 'Pre-Placement PEP Coding & Aptitude Bootcamps for All Batches', date: 'Yesterday • Division of Career Services (Block 32)', body: 'Mandatory mock interviews and DSA company-specific test series open on MyClass & OAS portal.' },
  { tag: 'DSW Culture', badgeColor: 'bg-amber-500/20 text-amber-400', title: 'One World & YouthVibe Student Contingent Registrations Open', date: '2 days ago • DSW Block 13', body: 'Approved DSW participants receive official On-Duty (OD) attendance credit during rehearsal and event days at Unipolis.' },
  { tag: 'Hostel & Mess', badgeColor: 'bg-cyan-500/20 text-cyan-400', title: 'Digital QR Meal Scanning Mandatory Across BH-1..8 & GH-1..6', date: '3 days ago • Chief Warden Office', body: 'Generate your live meal QR pass inside LPU Touch before entering dining turnstiles. Minimum 3-day home leave qualifies for ₹130/day mess rebate.' },
  { tag: 'Holiday Calendar', badgeColor: 'bg-purple-500/20 text-purple-400', title: 'Upcoming University Holidays: Gurpurab & Winter Term Break', date: 'Academic Calendar 2026-27', body: 'University teaching remains suspended on gazetted holidays; Central Library (Block 13) & Uni-Hospital remain operational.' }
];

// Runtime State
let touchProfile = null;
let touchSubjects = [];
let touchTimetable = {};
let touchExams = [];
let touchGatePasses = [];
let touchRmsTickets = [];
let touchMessScans = 0;
let activeTouchSubTab = 'dashboard';
let selectedTimetableDay = 'Monday';

function initLpuTouch() {
  touchProfile = JSON.parse(localStorage.getItem(TOUCH_KEYS.PROFILE) || 'null');
  if (!touchProfile) {
    touchProfile = { ...DEFAULT_TOUCH_PROFILE };
    if (typeof currentUser !== 'undefined' && currentUser && currentUser.role === 'student') {
      touchProfile.name = currentUser.name;
      touchProfile.regNo = currentUser.regNo;
      touchProfile.hostel = currentUser.hostel || 'BH-4';
      touchProfile.room = currentUser.room || 'B-412';
      touchProfile.program = currentUser.program || touchProfile.program;
    }
    localStorage.setItem(TOUCH_KEYS.PROFILE, JSON.stringify(touchProfile));
  }

  touchSubjects = JSON.parse(localStorage.getItem(TOUCH_KEYS.SUBJECTS) || 'null') || [...DEFAULT_TOUCH_SUBJECTS];
  touchTimetable = JSON.parse(localStorage.getItem(TOUCH_KEYS.TIMETABLE) || 'null') || JSON.parse(JSON.stringify(DEFAULT_TOUCH_TIMETABLE));
  touchExams = JSON.parse(localStorage.getItem(TOUCH_KEYS.EXAMS) || 'null') || [...DEFAULT_TOUCH_EXAMS];
  touchGatePasses = JSON.parse(localStorage.getItem(TOUCH_KEYS.GATEPASSES) || 'null') || [...DEFAULT_TOUCH_GATEPASSES];
  touchRmsTickets = JSON.parse(localStorage.getItem(TOUCH_KEYS.RMS) || 'null') || [...DEFAULT_TOUCH_RMS];
  touchMessScans = parseInt(localStorage.getItem(TOUCH_KEYS.MESS_SCANS) || '14');

  const dayNames = ['Monday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  selectedTimetableDay = dayNames[new Date().getDay()] || 'Monday';

  renderTouchHeaderAndDashboard();
  renderTouchTimetable();
  renderTouchSubjects();
  renderTouchMessAndGatePass();
  renderTouchExams();
  renderTouchRmsAndFaculty();

  // Live ticking verification clock on Mess QR Pass
  setInterval(() => {
    const el = document.getElementById('mess-qr-live-clock');
    if (el) {
      const now = new Date();
      el.textContent = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) +
        ' • ' + now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
  }, 1000);
}

// Switch between LPU Touch internal views
function switchTouchSubTab(subId) {
  activeTouchSubTab = subId;
  const views = ['dashboard', 'timetable', 'attendance', 'passes', 'exams', 'rms'];
  views.forEach(v => {
    const panel = document.getElementById(`touch-panel-${v}`);
    const pill = document.getElementById(`touch-pill-${v}`);
    if (panel) {
      if (v === subId) {
        panel.classList.remove('hidden');
        panel.classList.add('block');
      } else {
        panel.classList.remove('block');
        panel.classList.add('hidden');
      }
    }
    if (pill) {
      if (v === subId) {
        pill.className = 'touch-sub-pill px-3.5 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md transition whitespace-nowrap flex items-center gap-1.5';
      } else {
        pill.className = 'touch-sub-pill px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition whitespace-nowrap flex items-center gap-1.5';
      }
    }
  });
}

// Compute overall aggregate attendance across all subjects
function getAggregateAttendance() {
  let att = 0;
  let tot = 0;
  touchSubjects.forEach(s => {
    att += (parseInt(s.attended) || 0);
    tot += (parseInt(s.total) || 0);
  });
  const pct = tot > 0 ? ((att / tot) * 100) : 100;
  return { attended: att, total: tot, pct };
}

function getLpuAttMarks(pct) {
  if (pct >= 90) return 5;
  if (pct >= 85) return 4;
  if (pct >= 80) return 3;
  if (pct >= 75) return 2;
  return 0;
}

// 1. RENDER HEADER + DASHBOARD
function renderTouchHeaderAndDashboard() {
  const agg = getAggregateAttendance();
  const safeColor = agg.pct >= 75 ? 'text-emerald-400' : 'text-rose-400';

  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setTxt('tp-name', touchProfile.name);
  setTxt('tp-reg', `Reg: ${touchProfile.regNo}`);
  setTxt('tp-sec', `Sec: ${touchProfile.section}`);
  setTxt('tp-prog', `${touchProfile.program} • ${touchProfile.semester}`);
  setTxt('tp-hostel', `${touchProfile.hostel} (${touchProfile.room})`);
  setTxt('tp-cgpa', touchProfile.cgpa);
  setTxt('tp-mentor', `${touchProfile.mentorName} (${touchProfile.mentorCabin})`);
  setTxt('tp-fee', touchProfile.feeStatus);

  const aggEl = document.getElementById('tp-agg-pct');
  if (aggEl) {
    aggEl.textContent = `${agg.pct.toFixed(1)}%`;
    aggEl.className = `text-xl sm:text-2xl font-black ${safeColor}`;
  }
  setTxt('tp-agg-sub', `${agg.attended}/${agg.total} Lectures • ${agg.pct >= 75 ? 'Safe' : 'Shortage'}`);

  // Today's classes quick preview on Dashboard
  const todayList = touchTimetable[selectedTimetableDay] || [];
  const nextBox = document.getElementById('tp-today-classes-preview');
  if (nextBox) {
    if (todayList.length === 0) {
      nextBox.innerHTML = `<div class="p-3 rounded-xl bg-slate-900/60 text-xs text-slate-400">No classes scheduled for ${selectedTimetableDay}. Tap Timetable to add your lectures!</div>`;
    } else {
      nextBox.innerHTML = todayList.slice(0, 3).map(c => `
        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-2">
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-lpu-500/20 text-lpu-400 font-mono font-extrabold text-[10px]">${c.code}</span>
              <span class="text-xs font-bold text-slate-900 dark:text-white truncate">${c.title}</span>
            </div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              <i class="fa-regular fa-clock mr-1 text-cyan-400"></i>${c.time} • <span class="text-amber-400 font-semibold">Room ${c.room}</span>
            </div>
          </div>
          <button onclick="locateClassRoomOnMap('${c.room}', '${c.blockId || ''}')" class="px-2.5 py-1.5 rounded-lg bg-slate-200/70 dark:bg-slate-800 hover:bg-lpu-600 hover:text-white text-[10px] font-bold transition shrink-0">
            <i class="fa-solid fa-location-dot mr-1"></i>Map
          </button>
        </div>
      `).join('');
    }
  }

  // Announcements feed on dashboard
  const annBox = document.getElementById('tp-announcements-list');
  if (annBox) {
    annBox.innerHTML = LPU_UMS_ANNOUNCEMENTS.map(a => `
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 space-y-1">
        <div class="flex items-center justify-between gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${a.badgeColor}">${a.tag}</span>
          <span class="text-[10px] text-slate-400">${a.date}</span>
        </div>
        <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">${a.title}</h4>
        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${a.body}</p>
      </div>
    `).join('');
  }
}

// Personalize Student Profile Modal
function openTouchProfileEditor() {
  document.getElementById('edit-tp-name').value = touchProfile.name;
  document.getElementById('edit-tp-reg').value = touchProfile.regNo;
  document.getElementById('edit-tp-sec').value = touchProfile.section;
  document.getElementById('edit-tp-prog').value = touchProfile.program;
  document.getElementById('edit-tp-hostel').value = touchProfile.hostel;
  document.getElementById('edit-tp-room').value = touchProfile.room;
  document.getElementById('edit-tp-cgpa').value = touchProfile.cgpa;
  document.getElementById('edit-tp-mentor').value = touchProfile.mentorName;
  document.getElementById('edit-tp-cabin').value = touchProfile.mentorCabin;
  document.getElementById('touch-profile-modal').classList.remove('hidden');
}

function closeTouchProfileEditor() {
  document.getElementById('touch-profile-modal').classList.add('hidden');
}

function saveTouchProfileEditor(e) {
  e.preventDefault();
  touchProfile = {
    ...touchProfile,
    name: document.getElementById('edit-tp-name').value.trim() || 'Verto Student',
    regNo: document.getElementById('edit-tp-reg').value.trim() || '12400001',
    section: document.getElementById('edit-tp-sec').value.trim().toUpperCase() || 'K24XX',
    program: document.getElementById('edit-tp-prog').value.trim() || 'B.Tech CSE',
    hostel: document.getElementById('edit-tp-hostel').value,
    room: document.getElementById('edit-tp-room').value.trim() || 'Allotted',
    cgpa: document.getElementById('edit-tp-cgpa').value.trim() || '8.50',
    mentorName: document.getElementById('edit-tp-mentor').value.trim() || 'Faculty Mentor',
    mentorCabin: document.getElementById('edit-tp-cabin').value.trim() || 'Block 32'
  };
  localStorage.setItem(TOUCH_KEYS.PROFILE, JSON.stringify(touchProfile));

  // Sync top navbar currentUser so Digital Verto ID card also reflects student's real info!
  if (typeof currentUser !== 'undefined' && currentUser) {
    currentUser.name = touchProfile.name;
    currentUser.regNo = touchProfile.regNo;
    currentUser.hostel = touchProfile.hostel;
    currentUser.room = touchProfile.room;
    currentUser.program = touchProfile.program;
    currentUser.avatar = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(touchProfile.name)}`;
    localStorage.setItem(KEY_CURRENT_USER, JSON.stringify(currentUser));
    if (typeof updateAuthUI === 'function') updateAuthUI();
  }

  closeTouchProfileEditor();
  renderTouchHeaderAndDashboard();
  renderTouchMessAndGatePass();
}

// 2. TIMETABLE MANAGER
function selectTouchDay(day) {
  selectedTimetableDay = day;
  renderTouchTimetable();
}

function renderTouchTimetable() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayBar = document.getElementById('touch-day-pills');
  if (dayBar) {
    dayBar.innerHTML = days.map(d => `
      <button onclick="selectTouchDay('${d}')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition ${
        d === selectedTimetableDay
          ? 'bg-lpu-600 text-white shadow'
          : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
      }">${d.slice(0, 3)}</button>
    `).join('');
  }

  const list = touchTimetable[selectedTimetableDay] || [];
  const container = document.getElementById('touch-timetable-list');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<div class="p-6 text-center text-xs text-slate-400 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-dashed border-slate-700">No lectures added for ${selectedTimetableDay}. Use the form below to add your UMS timetable classes!</div>`;
    return;
  }

  container.innerHTML = list.map(item => `
    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div class="flex items-start gap-3">
        <div class="px-3 py-2 rounded-xl bg-lpu-500/15 border border-lpu-500/30 text-center shrink-0">
          <span class="block font-mono font-black text-xs text-lpu-400">${item.code}</span>
          <span class="block text-[10px] text-slate-400 uppercase font-bold">${item.type || 'Lecture'}</span>
        </div>
        <div>
          <h4 class="font-bold text-sm text-slate-900 dark:text-white">${item.title}</h4>
          <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
            <span><i class="fa-regular fa-clock text-cyan-400 mr-1"></i>${item.time}</span>
            <span class="font-bold text-amber-400"><i class="fa-solid fa-door-open mr-1"></i>Room ${item.room}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2 self-end sm:self-center">
        <button onclick="locateClassRoomOnMap('${item.room}', '${item.blockId || ''}')" class="px-3 py-1.5 rounded-xl bg-cyan-500/15 text-cyan-400 hover:bg-cyan-500 hover:text-white text-xs font-bold transition">
          <i class="fa-solid fa-map-location-dot mr-1"></i>Locate Block
        </button>
        <button onclick="deleteTouchClass('${item.id}')" class="p-2 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-600 hover:text-white text-xs transition" title="Remove Class">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function handleAddTouchClass(e) {
  e.preventDefault();
  const code = document.getElementById('new-tt-code').value.trim().toUpperCase();
  const title = document.getElementById('new-tt-title').value.trim();
  const time = document.getElementById('new-tt-time').value.trim();
  const room = document.getElementById('new-tt-room').value.trim().toUpperCase();
  const type = document.getElementById('new-tt-type').value;
  if (!code || !title) return;

  if (!touchTimetable[selectedTimetableDay]) touchTimetable[selectedTimetableDay] = [];
  touchTimetable[selectedTimetableDay].push({
    id: 'tt_' + Date.now(),
    code,
    title,
    time: time || '09:00 AM - 10:00 AM',
    room: room || '32-101',
    type
  });

  localStorage.setItem(TOUCH_KEYS.TIMETABLE, JSON.stringify(touchTimetable));
  e.target.reset();
  renderTouchTimetable();
  renderTouchHeaderAndDashboard();
}

function deleteTouchClass(id) {
  touchTimetable[selectedTimetableDay] = (touchTimetable[selectedTimetableDay] || []).filter(c => c.id !== id);
  localStorage.setItem(TOUCH_KEYS.TIMETABLE, JSON.stringify(touchTimetable));
  renderTouchTimetable();
  renderTouchHeaderAndDashboard();
}

function locateClassRoomOnMap(roomStr, explicitBlockId) {
  let targetId = explicitBlockId;
  if (!targetId && roomStr) {
    const prefix = parseInt(roomStr.split('-')[0]);
    if (prefix === 32) targetId = 'block-32';
    else if (prefix === 33) targetId = 'block-33';
    else if (prefix === 34 || prefix === 35) targetId = 'block-34';
    else if (prefix === 36 || prefix === 37) targetId = 'block-36';
    else if (prefix === 38) targetId = 'block-38';
    else if (prefix === 13) targetId = 'block-13';
    else if (prefix === 14 || (prefix >= 25 && prefix <= 28)) targetId = 'block-14-law';
    else if (prefix >= 1 && prefix <= 4) targetId = 'block-1-4-hm';
    else if (prefix >= 5 && prefix <= 8) targetId = 'block-5-8-pharma';
    else if (prefix >= 18 && prefix <= 20) targetId = 'block-18-media';
    else if (prefix >= 55 && prefix <= 57) targetId = 'block-55-agri';
    else targetId = 'block-30-admin';
  }
  if (typeof switchTab === 'function') switchTab('map');
  setTimeout(() => {
    if (typeof focusLocation === 'function') focusLocation(targetId || 'block-32');
  }, 250);
}

// 3. SUBJECT-WISE ATTENDANCE TRACKER
function renderTouchSubjects() {
  const container = document.getElementById('touch-subjects-grid');
  if (!container) return;

  container.innerHTML = touchSubjects.map(sub => {
    const pct = sub.total > 0 ? (sub.attended / sub.total) * 100 : 100;
    const isSafe = pct >= 75;
    const marks = getLpuAttMarks(pct);
    let statusMsg = '';
    if (isSafe) {
      const skip = Math.floor((sub.attended - 0.75 * sub.total) / 0.75);
      statusMsg = skip > 0 ? `Safe • Can bunk ${skip} class${skip > 1 ? 'es' : ''}` : `Boundary • Don't miss next class`;
    } else {
      const need = Math.ceil((0.75 * sub.total - sub.attended) / 0.25);
      statusMsg = `Shortage • Attend next ${need} class${need > 1 ? 'es' : ''}`;
    }

    return `
      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/85 border ${isSafe ? 'border-slate-200 dark:border-slate-700' : 'border-rose-500/60'} space-y-3">
        <div class="flex items-start justify-between gap-2">
          <div>
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded bg-lpu-500/20 text-lpu-400 font-mono font-extrabold text-[11px]">${sub.code}</span>
              <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">${marks}/5 Marks</span>
            </div>
            <h4 class="font-bold text-sm text-slate-900 dark:text-white mt-1">${sub.name}</h4>
            <p class="text-[11px] text-slate-400">${sub.faculty || 'Faculty'} • Room ${sub.room || 'LPU'}</p>
          </div>
          <div class="text-right">
            <span class="text-xl font-black ${isSafe ? 'text-emerald-400' : 'text-rose-500'}">${pct.toFixed(1)}%</span>
            <span class="block text-[11px] font-mono text-slate-400">${sub.attended} / ${sub.total}</span>
          </div>
        </div>

        <div class="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
          <div class="h-2 rounded-full transition-all duration-300 ${isSafe ? 'bg-gradient-to-r from-cyan-500 to-emerald-500' : 'bg-rose-500'}" style="width: ${Math.min(100, pct).toFixed(1)}%"></div>
        </div>

        <div class="flex items-center justify-between gap-2 pt-1">
          <span class="text-[11px] font-semibold ${isSafe ? 'text-emerald-400' : 'text-rose-400'}">${statusMsg}</span>
          <div class="flex items-center gap-1.5">
            <button onclick="markSubjectAttendance('${sub.id}', true)" class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold transition" title="Mark Today Present">+ Present</button>
            <button onclick="markSubjectAttendance('${sub.id}', false)" class="px-2.5 py-1 rounded-lg bg-rose-600/90 hover:bg-rose-500 text-white text-xs font-extrabold transition" title="Mark Today Absent">+ Absent</button>
            <button onclick="deleteTouchSubject('${sub.id}')" class="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-400 hover:text-rose-400 text-xs transition" title="Remove Subject"><i class="fa-solid fa-xmark"></i></button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function markSubjectAttendance(subId, isPresent) {
  const target = touchSubjects.find(s => s.id === subId);
  if (!target) return;
  target.total = (parseInt(target.total) || 0) + 1;
  if (isPresent) target.attended = (parseInt(target.attended) || 0) + 1;
  localStorage.setItem(TOUCH_KEYS.SUBJECTS, JSON.stringify(touchSubjects));
  renderTouchSubjects();
  renderTouchHeaderAndDashboard();
}

function handleAddTouchSubject(e) {
  e.preventDefault();
  const code = document.getElementById('new-sub-code').value.trim().toUpperCase();
  const name = document.getElementById('new-sub-name').value.trim();
  const attended = Math.max(0, parseInt(document.getElementById('new-sub-att').value) || 0);
  const total = Math.max(1, parseInt(document.getElementById('new-sub-tot').value) || 1);
  const room = document.getElementById('new-sub-room').value.trim().toUpperCase() || '32-101';
  if (!code || !name) return;

  touchSubjects.unshift({
    id: 'sub_' + Date.now(),
    code,
    name,
    faculty: 'Course Instructor',
    room,
    credits: 3,
    attended: Math.min(attended, total),
    total
  });
  localStorage.setItem(TOUCH_KEYS.SUBJECTS, JSON.stringify(touchSubjects));
  e.target.reset();
  renderTouchSubjects();
  renderTouchHeaderAndDashboard();
}

function deleteTouchSubject(subId) {
  touchSubjects = touchSubjects.filter(s => s.id !== subId);
  localStorage.setItem(TOUCH_KEYS.SUBJECTS, JSON.stringify(touchSubjects));
  renderTouchSubjects();
  renderTouchHeaderAndDashboard();
}

// 4. MESS MEAL QR TOKEN & HOSTEL GATE PASS
function generateDeterministicQrSvg(seedText) {
  let hash = 2166136261;
  for (let i = 0; i < seedText.length; i++) {
    hash ^= seedText.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const size = 15;
  const cell = 10;
  let rects = '';

  const isFinder = (r, c) =>
    (r < 4 && c < 4) || (r < 4 && c >= size - 4) || (r >= size - 4 && c < 4);

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      let dark = false;
      if (isFinder(r, c)) {
        const lr = r < 4 ? r : r - (size - 4);
        const lc = c < 4 ? c : c - (size - 4);
        dark = lr === 0 || lr === 3 || lc === 0 || lc === 3 || (lr >= 1 && lr <= 2 && lc >= 1 && lc <= 2);
      } else {
        hash ^= (r * 31 + c * 17);
        hash = Math.imul(hash, 16777619);
        dark = (Math.abs(hash) % 10) < 5;
      }
      if (dark) {
        rects += `<rect x="${c * cell + 10}" y="${r * cell + 10}" width="${cell - 1}" height="${cell - 1}" rx="2" fill="#0f172a"/>`;
      }
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 170" class="w-40 h-40 mx-auto"><rect width="170" height="170" rx="14" fill="#ffffff"/>${rects}</svg>`;
}

function renderTouchMessAndGatePass() {
  const mealInfo = typeof getCurrentMealInfo === 'function' ? getCurrentMealInfo() : { name: 'Lunch', status: 'active' };
  const tokenSeed = `${touchProfile.regNo}-${touchProfile.hostel}-${mealInfo.name}-${new Date().toDateString()}-${touchMessScans}`;

  const qrBox = document.getElementById('touch-mess-qr-svg');
  if (qrBox) qrBox.innerHTML = generateDeterministicQrSvg(tokenSeed);

  const setTxt = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  setTxt('mess-pass-student', `${touchProfile.name} (${touchProfile.regNo})`);
  setTxt('mess-pass-hostel', `${touchProfile.hostel} Central Dining Hall`);
  setTxt('mess-pass-meal', `${mealInfo.name.toUpperCase()} COUPON`);
  setTxt('mess-pass-count', `${touchMessScans} Meals Scanned This Month`);

  // Gate Passes List
  const gpList = document.getElementById('touch-gatepass-list');
  if (gpList) {
    gpList.innerHTML = touchGatePasses.map(gp => `
      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 space-y-2">
        <div class="flex items-center justify-between">
          <span class="px-2.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 text-[10px] font-extrabold uppercase">${gp.type}</span>
          <span class="font-mono text-xs font-bold text-amber-400">${gp.id}</span>
        </div>
        <div class="text-xs font-bold text-slate-900 dark:text-white"><i class="fa-solid fa-location-arrow text-lpu-500 mr-1"></i>${gp.destination}</div>
        <div class="text-[11px] text-slate-400">Out: <strong>${gp.outTime}</strong> • Return: <strong>${gp.inTime}</strong></div>
        <div class="pt-1 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 text-[11px]">
          <span class="text-emerald-400 font-bold"><i class="fa-solid fa-circle-check mr-1"></i>${gp.status}</span>
          <span class="font-mono tracking-widest text-slate-500">|||| || ||| ||||</span>
        </div>
      </div>
    `).join('');
  }
}

function refreshMessMealQr() {
  touchMessScans += 1;
  localStorage.setItem(TOUCH_KEYS.MESS_SCANS, String(touchMessScans));
  renderTouchMessAndGatePass();
}

function handleApplyGatePass(e) {
  e.preventDefault();
  const type = document.getElementById('gp-type').value;
  const dest = document.getElementById('gp-dest').value.trim();
  const outT = document.getElementById('gp-out').value.trim() || 'Today • 05:00 PM';
  const inT = document.getElementById('gp-in').value.trim() || 'Today • 07:30 PM';
  if (!dest) return;

  touchGatePasses.unshift({
    id: 'GP-2026-' + Math.floor(1000 + Math.random() * 9000),
    type,
    destination: dest,
    outTime: outT,
    inTime: inT,
    reason: 'Personal / Local Visit',
    status: type.includes('Day') ? 'Auto-Approved (Show at Gate)' : 'Parent OTP & Warden Verified'
  });
  localStorage.setItem(TOUCH_KEYS.GATEPASSES, JSON.stringify(touchGatePasses));
  e.target.reset();
  renderTouchMessAndGatePass();
}

// 5. EXAMS & SEATING PLAN
function renderTouchExams() {
  const box = document.getElementById('touch-exams-list');
  if (!box) return;

  box.innerHTML = touchExams.map(ex => `
    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/85 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded bg-lpu-500/20 text-lpu-400 font-mono font-extrabold text-xs">${ex.code}</span>
          <span class="px-2 py-0.5 rounded bg-purple-500/15 text-purple-400 text-[10px] font-bold uppercase">${ex.examType}</span>
        </div>
        <h4 class="font-bold text-sm text-slate-900 dark:text-white">${ex.subject}</h4>
        <p class="text-xs text-slate-400"><i class="fa-regular fa-calendar mr-1 text-cyan-400"></i>${ex.date} • ${ex.time}</p>
      </div>
      <div class="flex items-center gap-3">
        <div class="px-3.5 py-2 rounded-xl bg-slate-900 border border-amber-500/30 text-right">
          <span class="block text-xs font-black text-amber-400">Room ${ex.room}</span>
          <span class="block text-[10px] text-slate-400">${ex.seat}</span>
        </div>
        <button onclick="locateClassRoomOnMap('${ex.room}', '')" class="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 hover:bg-cyan-500 hover:text-white text-xs transition" title="Locate Exam Block">
          <i class="fa-solid fa-location-dot"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function handleAddTouchExam(e) {
  e.preventDefault();
  const code = document.getElementById('ex-code').value.trim().toUpperCase();
  const subject = document.getElementById('ex-subject').value.trim();
  const date = document.getElementById('ex-date').value;
  const room = document.getElementById('ex-room').value.trim().toUpperCase() || '34-301';
  const seat = document.getElementById('ex-seat').value.trim() || 'Row 2 • Seat 10';
  if (!code || !subject) return;

  touchExams.unshift({
    id: 'ex_' + Date.now(),
    code,
    subject,
    examType: 'Scheduled Exam',
    date: date || 'Upcoming',
    time: '09:30 AM - 12:30 PM',
    room,
    seat
  });
  localStorage.setItem(TOUCH_KEYS.EXAMS, JSON.stringify(touchExams));
  e.target.reset();
  renderTouchExams();
}

// 6. RMS TICKETS & FACULTY CABIN FINDER
function renderTouchRmsAndFaculty(facultyQuery = '') {
  const rmsBox = document.getElementById('touch-rms-list');
  if (rmsBox) {
    rmsBox.innerHTML = touchRmsTickets.map(t => `
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/85 border border-slate-200 dark:border-slate-700 space-y-1">
        <div class="flex items-center justify-between">
          <span class="font-mono text-xs font-extrabold text-cyan-400">${t.id} • ${t.category}</span>
          <button onclick="toggleRmsStatus('${t.id}')" class="px-2 py-0.5 rounded text-[10px] font-bold ${
            t.status === 'Resolved' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-300'
          }">${t.status}</button>
        </div>
        <p class="text-xs text-slate-700 dark:text-slate-200">${t.issue}</p>
        <div class="text-[10px] text-slate-400">${t.location} • Logged ${t.date} (Tap status to mark Resolved)</div>
      </div>
    `).join('');
  }

  const facBox = document.getElementById('touch-faculty-list');
  if (facBox) {
    const q = (facultyQuery || '').toLowerCase().trim();
    const matches = !q
      ? LPU_FACULTY_DIRECTORY
      : LPU_FACULTY_DIRECTORY.filter(f =>
          f.name.toLowerCase().includes(q) ||
          f.dept.toLowerCase().includes(q) ||
          f.cabin.toLowerCase().includes(q)
        );
    facBox.innerHTML = matches.map(f => `
      <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/85 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">${f.name}</h4>
          <p class="text-[11px] text-slate-400">${f.dept} • <span class="text-cyan-400">${f.email}</span></p>
        </div>
        <div class="text-left sm:text-right shrink-0">
          <span class="px-2.5 py-1 rounded-lg bg-lpu-500/15 text-lpu-400 text-xs font-extrabold inline-block">${f.cabin}</span>
          <span class="block text-[10px] text-slate-400 mt-0.5">${f.hours}</span>
        </div>
      </div>
    `).join('');
  }
}

function handleRaiseRmsTicket(e) {
  e.preventDefault();
  const cat = document.getElementById('rms-cat').value;
  const issue = document.getElementById('rms-issue').value.trim();
  if (!issue) return;

  touchRmsTickets.unshift({
    id: 'RMS-' + Math.floor(10000 + Math.random() * 89999),
    category: cat,
    location: `${touchProfile.hostel} (${touchProfile.room})`,
    issue,
    date: 'Just now',
    status: 'Open (24h SLA)'
  });
  localStorage.setItem(TOUCH_KEYS.RMS, JSON.stringify(touchRmsTickets));
  e.target.reset();
  renderTouchRmsAndFaculty();
}

function toggleRmsStatus(id) {
  const t = touchRmsTickets.find(x => x.id === id);
  if (t) {
    t.status = t.status === 'Resolved' ? 'Open (24h SLA)' : 'Resolved';
    localStorage.setItem(TOUCH_KEYS.RMS, JSON.stringify(touchRmsTickets));
    renderTouchRmsAndFaculty();
  }
}

document.addEventListener('DOMContentLoaded', initLpuTouch);
