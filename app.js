// ========================================================
// CAMPUSGRID v7.0 — ULTIMATE LEVEL 1–4 VERTO SUPER-APP
// Native Mobile App Shell • Zero Embedded Map • 4 Clean Themes
// Pack 1: 1-Page ATS Resume PDF, Hackathon Team-Finder, Viva Flashcards,
//         LPUNEST Scholarship & Grade-Improvement CGPA Boost Simulator
// Pack 2: Hostel Night-Canteen Group Cart, RMS Maintenance Lifecycle,
//         Mess Protein & Gym Split Tracker, Phone-to-Phone Magic Sync
// ========================================================

const STORAGE_KEYS = {
  THEME: 'cg_app_theme_v4',
  PROFILE: 'cg_touch_profile_v3',
  SUBJECTS: 'cg_touch_subjects_v3',
  TIMETABLE: 'cg_touch_timetable_v3',
  TASKS: 'cg_verto_tasks_v5',
  PYQ_CUSTOM: 'cg_verto_pyq_v6',
  ALERTS_ON: 'cg_verto_alerts_v6',
  SGPA_ROWS: 'cg_verto_sgpa_v5',
  POMO_DONE: 'cg_verto_pomo_v5',
  EXAMS: 'cg_touch_exams_v3',
  BUDGET: 'cg_verto_budget_v6',
  LAUNDRY: 'cg_verto_laundry_v5',
  KHATA: 'cg_verto_khata_v5',
  BAZAAR: 'cg_verto_bazaar_v6',
  LOSTFOUND: 'cg_verto_lostfound_v6',
  MESS_POLL: 'cg_verto_messpoll_v6',
  GATEPASSES: 'cg_touch_gatepasses_v3',
  RMS: 'cg_touch_rms_v3',
  REBATES: 'cg_mess_rebates_v3',
  SCANS: 'cg_touch_mess_scans_v3',
  RESUME: 'cg_verto_resume_v7',
  TEAMUP: 'cg_verto_teamup_v7',
  FLASHCARDS: 'cg_verto_flashcards_v7',
  FITNESS: 'cg_verto_fitness_v7',
  NIGHT_CART: 'cg_verto_nightcart_v7'
};

const CLOUD_FEED_TOPIC = 'lpu_campusgrid_v7_verto_community_hub';

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

const BUILTIN_PYQ_BANK = [
  { id: 'p1', code: 'CSE205', title: 'Data Structures & Algorithms', pattern: 'MTE: 30M MCQ+Code • ETE: 50M (Units 1–6)', topics: 'AVL Rotations, Heap Sort, Dijkstra/MST, Hashing Collisions, Stack Infix-Postfix, Linked List Reversal', link: '' },
  { id: 'p2', code: 'CSE316', title: 'Operating Systems', pattern: 'MTE: Units 1–3 • ETE: 50M Numerical + Theory', topics: 'SRTF/Round Robin Gantt Chart, Banker’s Deadlock Algorithm, Semaphores, LRU/Optimal Page Replacement, Disk SSTF/SCAN', link: '' },
  { id: 'p3', code: 'INT254', title: 'Foundations of Machine Learning', pattern: 'MTE: 40M MCQ • ETE: 50M Case + Math', topics: 'Gradient Descent, Confusion Matrix/F1-Score, KNN, Entropy & ID3 Decision Tree, K-Means, PCA & Overfitting/L1-L2', link: '' },
  { id: 'p4', code: 'CSE111', title: 'Programming in C / Python Core', pattern: 'OAS Practical + 50M End-Term Coding', topics: 'Pointers & Structs, Recursion, File Handling, Dynamic Memory (malloc/calloc), String Manipulation & Matrix Loops', link: '' },
  { id: 'p5', code: 'MTH401', title: 'Probability & Statistics', pattern: 'MTE: 30M • ETE: 50M Formula Numericals', topics: 'Bayes Theorem, Binomial/Poisson/Normal Distribution, Z-Test & T-Test Hypothesis, Chi-Square, Karl Pearson Correlation', link: '' },
  { id: 'p6', code: 'ECE249', title: 'Basic Electrical & Electronics', pattern: 'MTE: Units 1–3 • ETE: Circuit Numericals', topics: 'Thevenin & Norton Theorem, Nodal/Mesh KVL-KCL, Op-Amp Adder/Integrator, BJT Biasing, Logic Gates & Flip-Flops', link: '' },
  { id: 'p7', code: 'PES318', title: 'Soft Skills & PEP Placement Prep', pattern: 'CA Presentation + Mock Interview + Verbal', topics: 'STAR Interview Method, Group Discussion Frameworks, Para-Jumbles, Time & Work / Blood Relations Aptitude', link: '' }
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

const DEFAULT_BUDGET = {
  monthlyLimit: 6000,
  expenses: [
    { id: 'ex1', cat: 'Food/Cafe', note: 'UniMall Cold Coffee & Wrap', amount: 180, date: 'Today' },
    { id: 'ex2', cat: 'Study/Print', note: 'Lab Manual Printout Block 32', amount: 120, date: 'Yesterday' },
    { id: 'ex3', cat: 'Auto/Travel', note: 'Phagwara Station Auto Share', amount: 150, date: '2d ago' }
  ]
};

const DEFAULT_BAZAAR = [
  { id: 'bz1', title: 'Casio fx-991ES Plus Scientific Calculator', price: 480, cat: 'Electronics', hostel: 'BH-4', seller: 'Harsh (3rd Yr)', phone: '9876543210', time: '2h ago' },
  { id: 'bz2', title: 'Prestige 1.5L Electric Kettle (Like New)', price: 390, cat: 'Electronics', hostel: 'BH-5', seller: 'Aditya', phone: '9876501234', time: '4h ago' },
  { id: 'bz3', title: 'Mini Drafter + Sheet Holder Tube (ME/Civil)', price: 220, cat: 'Books & Lab', hostel: 'BH-2', seller: 'Karan', phone: '9876512345', time: 'Yesterday' },
  { id: 'bz4', title: 'White Lab Coat (Size L — Biotech / Chem)', price: 160, cat: 'Books & Lab', hostel: 'GH-3', seller: 'Ananya', phone: '9876523456', time: 'Yesterday' },
  { id: 'bz5', title: 'Hero Sprint Geared Campus Cycle + Lock', price: 2400, cat: 'Cycle & Gear', hostel: 'BH-6', seller: 'Vikram (4th Yr)', phone: '9876534567', time: '2d ago' }
];

const DEFAULT_LOSTFOUND = [
  { id: 'lf1', kind: 'LOST', item: 'Black boAt Airdopes Charging Case', where: 'Block 32 Room 405 / Underpass', poster: 'Rohan (BH-4)', phone: '9876543210', time: '1h ago' },
  { id: 'lf2', kind: 'FOUND', item: 'Blue Milton Thermosteel Bottle (1L)', where: 'Central Library (Block 13) 3rd Floor Desk', poster: 'Simran (GH-2)', phone: '9876509876', time: '3h ago' },
  { id: 'lf3', kind: 'FOUND', item: 'LPU Student ID Card (B.Tech CSE 1st Yr)', where: 'UniMall Food Court Billing Counter', poster: 'Aakash', phone: '9876598765', time: 'Yesterday' }
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

const DEFAULT_RESUME = {
  email: 'verto.student@lpu.in',
  phone: '+91 98765 43210',
  github: 'github.com/verto-dev',
  linkedin: 'linkedin.com/in/verto-lpu',
  skills: 'C++, Python, Java, JavaScript, React, Node.js, SQL, Data Structures & Algorithms, Machine Learning, Git',
  proj1: 'CampusGrid LPU Super-App | JavaScript, PWA, Tailwind — Built offline-first mobile super-app for attendance, timetable sync & campus utilities.',
  proj2: 'Smart Placement & Marks Predictor | Python, Scikit-Learn — Engineered ML academic performance & company-tier eligibility model.',
  certs: '250+ DSA Problems Solved (LeetCode/GFG) • NPTEL Cloud Computing Elite • Smart India Hackathon Internal Qualifier'
};

const DEFAULT_TEAMUP = [
  { id: 'tm1', event: 'Smart India Hackathon (SIH 2026)', role: 'AI / ML Engineer', spots: 'Need 2 Members', stack: 'Python, FastAPI, RAG/LLM, React', leader: 'Aryan (K24AI)', phone: '9876543210', time: '1h ago' },
  { id: 'tm2', event: 'CSE Minor / Capstone Project', role: 'Frontend / Mobile Dev', spots: 'Need 1 Member', stack: 'React Native / Next.js + Firebase', leader: 'Mehak (K23CS)', phone: '9876501234', time: '3h ago' },
  { id: 'tm3', event: 'YouthVibe & One India Tech Stall', role: 'UI/UX & Pitch Deck', spots: 'Need 2 Members', stack: 'Figma, Canva, Live Product Demo', leader: 'Raghav (BH-5)', phone: '9876512345', time: 'Yesterday' },
  { id: 'tm4', event: 'Smart Hostel IoT Automation', role: 'Hardware / IoT', spots: 'Need 1 Member', stack: 'ESP32, Sensors, C++ (Block 38 Lab)', leader: 'Devansh (ECE)', phone: '9876523456', time: '2d ago' }
];

const BUILTIN_FLASHCARDS = [
  { id: 'fc1', cat: 'DSA', q: 'What is the average & worst-case time complexity of Hash Table lookup vs AVL Tree?', a: 'Hash Table: O(1) average, O(N) worst-case (collisions). AVL Tree (self-balancing BST): guaranteed O(log N) for search, insert & delete.' },
  { id: 'fc2', cat: 'DSA', q: 'When should you use BFS vs DFS in graph problems, and what data structures do they use?', a: 'BFS uses a Queue (FIFO) and finds shortest path in unweighted graphs. DFS uses a Stack/Recursion (LIFO) for cycle detection, topological sort & backtracking.' },
  { id: 'fc3', cat: 'DSA', q: 'Why is Merge Sort preferred for Linked Lists while Quick Sort is preferred for Arrays?', a: 'Linked Lists lack O(1) random access needed for Quick Sort partitioning, whereas Merge Sort merges nodes in O(1) auxiliary pointer space without random access.' },
  { id: 'fc4', cat: 'OS', q: 'What are Coffman’s 4 necessary conditions for a Deadlock in Operating Systems?', a: '1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, 4. Circular Wait. Breaking any one condition prevents deadlock.' },
  { id: 'fc5', cat: 'OS', q: 'What is the core difference between a Mutex and a Binary Semaphore?', a: 'Mutex has ownership (only the thread that locked it can unlock it). A Binary Semaphore is a signaling mechanism where any process/thread can call wait() or signal().' },
  { id: 'fc6', cat: 'OS', q: 'What is Thrashing in Virtual Memory and how does the OS fix it?', a: 'Thrashing occurs when a process spends more time paging (swapping pages) than executing due to insufficient frames. Fixed via Working-Set Model or Page-Fault Frequency control.' },
  { id: 'fc7', cat: 'DBMS', q: 'Explain ACID properties in DBMS transactions in 1 line each.', a: 'Atomicity (All or nothing), Consistency (Valid state to valid state), Isolation (Concurrent txns don’t interfere), Durability (Committed data survives crashes).' },
  { id: 'fc8', cat: 'DBMS', q: 'What is the difference between 3NF and BCNF (Boyce-Codd Normal Form)?', a: '3NF allows X -> Y if Y is a prime attribute. BCNF is stricter: for every non-trivial dependency X -> Y, X MUST be a Super Key.' },
  { id: 'fc9', cat: 'CN', q: 'How does TCP 3-Way Handshake work and how does TCP differ from UDP?', a: 'Handshake: SYN -> SYN-ACK -> ACK. TCP is connection-oriented, reliable & ordered (flow/congestion control); UDP is connectionless, low-latency & best-effort.' },
  { id: 'fc10', cat: 'CN', q: 'What happens when you type https://ums.lpu.in in your browser?', a: '1. DNS resolves IP -> 2. TCP 3-way handshake (Port 443) -> 3. TLS SSL Handshake -> 4. HTTP GET request -> 5. Server returns HTML & browser renders DOM.' },
  { id: 'fc11', cat: 'HR/PEP', q: 'How do you structure behavioural answers in Block 32 Placement Interviews?', a: 'Use the STAR Method: Situation (context), Task (challenge), Action (exact technical steps YOU took), Result (quantifiable impact/metric).' },
  { id: 'fc12', cat: 'HR/PEP', q: 'How to answer "Tell me about yourself" in 60 seconds during PEP / Placement drives?', a: '1. Current Role (B.Tech CSE at LPU + CGPA), 2. Core Tech Stack & 1 Flagship Project with impact, 3. Coding/Hackathon proof, 4. Why this company/role fits.' }
];

const NIGHT_CANTEEN_ITEMS = [
  { id: 'nc1', name: 'Double Masala Cheese Maggi', price: 45, tag: 'Hostel Bestseller' },
  { id: 'nc2', name: 'Tandoori Paneer Tikka Roll', price: 80, tag: 'Filling' },
  { id: 'nc3', name: '2 Hot Aloo Paratha + Curd', price: 55, tag: 'Night Mess' },
  { id: 'nc4', name: 'Thick Hazelnut Cold Coffee', price: 60, tag: 'Exam Fuel' },
  { id: 'nc5', name: 'Egg Bhurji + 2 Butter Roti', price: 70, tag: 'High Protein' },
  { id: 'nc6', name: 'Crispy Peri-Peri Fries / Burger', price: 65, tag: 'Snack' },
  { id: 'nc7', name: 'Hostel Adrak Chai / Hot Coffee', price: 20, tag: 'Late Night' }
];

const DEFAULT_FITNESS = {
  goalProtein: 100,
  protein: 54,
  kcal: 920,
  water: 5,
  streak: 4,
  split: 'Push (Chest • Shoulder • Triceps)',
  lastWorkoutDate: ''
};

// Runtime State
let appTheme = 'light';
let profile = {};
let subjects = [];
let timetable = {};
let tasks = [];
let customPyqs = [];
let alertsEnabled = false;
let sgpaRows = [];
let exams = [];
let budget = {};
let laundry = {};
let khataList = [];
let bazaarItems = [];
let lostFoundItems = [];
let messPoll = {};
let gatePasses = [];
let rmsTickets = [];
let rebates = [];
let messScans = 14;
let pomoSessionsDone = 0;
let resumeData = {};
let teamUpItems = [];
let customFlashcards = [];
let fitness = {};
let nightCart = {};

let selectedTtDay = 'Monday';
let selectedMessDay = 'monday';
let selectedCampusCat = 'all';
let selectedFlashCat = 'All';
let currentFlashIdx = 0;
let flashShowingAnswer = false;
let deferredInstallPrompt = null;
let pendingSyncPayload = null;
let pendingFullSyncPayload = null;

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
  calcOdMedical();
  calcPlacementEligibility();
  calcScholarshipAndImprovement();
  checkIncomingSectionSync();
  checkIncomingFullSync();
  pullLiveCommunityCloud();

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
  customPyqs = JSON.parse(localStorage.getItem(STORAGE_KEYS.PYQ_CUSTOM) || 'null') || [];
  alertsEnabled = localStorage.getItem(STORAGE_KEYS.ALERTS_ON) === '1';
  sgpaRows = JSON.parse(localStorage.getItem(STORAGE_KEYS.SGPA_ROWS) || 'null') || JSON.parse(JSON.stringify(DEFAULT_SGPA_ROWS));
  exams = JSON.parse(localStorage.getItem(STORAGE_KEYS.EXAMS) || 'null') || JSON.parse(JSON.stringify(DEFAULT_EXAMS));
  budget = JSON.parse(localStorage.getItem(STORAGE_KEYS.BUDGET) || 'null') || JSON.parse(JSON.stringify(DEFAULT_BUDGET));
  laundry = JSON.parse(localStorage.getItem(STORAGE_KEYS.LAUNDRY) || 'null') || { ...DEFAULT_LAUNDRY };
  khataList = JSON.parse(localStorage.getItem(STORAGE_KEYS.KHATA) || 'null') || JSON.parse(JSON.stringify(DEFAULT_KHATA));
  bazaarItems = JSON.parse(localStorage.getItem(STORAGE_KEYS.BAZAAR) || 'null') || JSON.parse(JSON.stringify(DEFAULT_BAZAAR));
  lostFoundItems = JSON.parse(localStorage.getItem(STORAGE_KEYS.LOSTFOUND) || 'null') || JSON.parse(JSON.stringify(DEFAULT_LOSTFOUND));
  messPoll = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESS_POLL) || 'null') || { good: 48, okay: 11, skip: 6, votedSlot: '' };
  gatePasses = JSON.parse(localStorage.getItem(STORAGE_KEYS.GATEPASSES) || 'null') || JSON.parse(JSON.stringify(DEFAULT_GATEPASSES));
  rmsTickets = JSON.parse(localStorage.getItem(STORAGE_KEYS.RMS) || 'null') || JSON.parse(JSON.stringify(DEFAULT_RMS));
  rebates = JSON.parse(localStorage.getItem(STORAGE_KEYS.REBATES) || 'null') || (typeof DEFAULT_REBATES !== 'undefined' ? JSON.parse(JSON.stringify(DEFAULT_REBATES)) : []);
  messScans = parseInt(localStorage.getItem(STORAGE_KEYS.SCANS) || '14', 10);
  pomoSessionsDone = parseInt(localStorage.getItem(STORAGE_KEYS.POMO_DONE) || '2', 10);
  resumeData = JSON.parse(localStorage.getItem(STORAGE_KEYS.RESUME) || 'null') || { ...DEFAULT_RESUME };
  teamUpItems = JSON.parse(localStorage.getItem(STORAGE_KEYS.TEAMUP) || 'null') || JSON.parse(JSON.stringify(DEFAULT_TEAMUP));
  customFlashcards = JSON.parse(localStorage.getItem(STORAGE_KEYS.FLASHCARDS) || 'null') || [];
  fitness = JSON.parse(localStorage.getItem(STORAGE_KEYS.FITNESS) || 'null') || { ...DEFAULT_FITNESS };
  nightCart = JSON.parse(localStorage.getItem(STORAGE_KEYS.NIGHT_CART) || 'null') || { nc1: 2, nc4: 1 };
}

function renderAll() {
  renderBudgetUI();
  renderMessPollUI();
  renderProfileAndHome();
  renderResumeSummary();
  renderAttendance();
  renderTimetable();
  renderTasks();
  renderPyqBank();
  renderFlashcardsUI();
  renderAlertsUI();
  renderPomodoroUI();
  renderSgpaCalculator();
  renderExams();
  renderMessMenu();
  renderMessQr();
  renderNightCanteenUI();
  renderCafes();
  renderFitnessUI();
  renderRebates();
  renderBazaarList();
  renderLostFoundList();
  renderTeamUpList();
  renderCampusDirectory();
  renderLaundryUI();
  renderKhataList();
  renderHolidaysList();
  renderCabinsList();
  renderRmsList();
  renderGatePasses();
}

// ================= LEVEL 1 #1: 1-CLICK SECTION TIMETABLE SHARE & AUTO-IMPORT =================
function encodeUtf8Base64Url(obj) {
  const json = JSON.stringify(obj);
  const bytes = new TextEncoder().encode(json);
  let bin = '';
  bytes.forEach((b) => { bin += String.fromCharCode(b); });
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decodeUtf8Base64Url(str) {
  let b64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (b64.length % 4) b64 += '=';
  const bin = atob(b64);
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function shareSectionSyncLink() {
  const compactPayload = {
    sec: profile.section || 'LPU',
    prog: profile.program || 'B.Tech',
    subs: subjects.map((s) => ({ c: s.code, n: s.name, f: s.faculty, r: s.room })),
    tt: timetable
  };
  const token = encodeUtf8Base64Url(compactPayload);
  const baseUrl = window.location.origin + window.location.pathname;
  const syncUrl = `${baseUrl}?sec_sync=${token}`;
  const msg = `📚 *LPU Section ${compactPayload.sec} Timetable & Subjects*\nTap this link to auto-import all classes & subjects into CampusGrid in 1 click:\n${syncUrl}`;

  if (navigator.share) {
    navigator.share({ title: `Section ${compactPayload.sec} Timetable`, text: msg, url: syncUrl }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(msg).then(() => showToast(`Section ${compactPayload.sec} sync link copied!`));
  }
}

function checkIncomingSectionSync() {
  try {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get('sec_sync');
    if (!raw) return;
    const data = decodeUtf8Base64Url(raw);
    if (!data || !data.tt) return;
    pendingSyncPayload = data;
    setText(
      'sync-import-desc',
      `Your classmate shared Section "${data.sec}" (${data.prog}) with ${(data.subs || []).length} subjects and full Mon–Sat timetable. Import into your phone?`
    );
    openSheet('sheet-import-sync');
  } catch (e) {}
}

function confirmSectionSyncImport() {
  if (!pendingSyncPayload) return;
  profile.section = pendingSyncPayload.sec || profile.section;
  profile.program = pendingSyncPayload.prog || profile.program;

  if (Array.isArray(pendingSyncPayload.subs) && pendingSyncPayload.subs.length > 0) {
    const prevMap = {};
    subjects.forEach((s) => { prevMap[s.code] = s; });
    subjects = pendingSyncPayload.subs.map((item, idx) => {
      const old = prevMap[item.c];
      return {
        id: 's_imp_' + idx + '_' + Date.now(),
        code: item.c,
        name: item.n,
        faculty: item.f || 'Faculty',
        room: item.r || '-',
        attended: old ? old.attended : 10,
        total: old ? old.total : 12
      };
    });
    localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subjects));
  }

  timetable = pendingSyncPayload.tt;
  localStorage.setItem(STORAGE_KEYS.TIMETABLE, JSON.stringify(timetable));
  localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));

  pendingSyncPayload = null;
  closeSheet('sheet-import-sync');
  if (window.history && window.history.replaceState) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
  renderAll();
  showToast(`Imported Section ${profile.section} Timetable!`);
}

// ================= LEVEL 2 HYBRID CLOUD SYNC (NON-BLOCKING) =================
async function pushCloudEvent(eventObj) {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 3500);
    await fetch(`https://ntfy.sh/${CLOUD_FEED_TOPIC}`, {
      method: 'POST',
      body: JSON.stringify(eventObj),
      signal: ctrl.signal
    });
    clearTimeout(timer);
  } catch (e) {
    // Gracefully ignored if campus Sophos firewall blocks external pubsub
  }
}

async function pullLiveCommunityCloud() {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 3500);
    const resp = await fetch(`https://ntfy.sh/${CLOUD_FEED_TOPIC}/json?poll=1&since=72h`, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!resp.ok) return;
    const text = await resp.text();
    const lines = text.trim().split('\n').filter(Boolean);

    let changed = false;
    lines.forEach((line) => {
      try {
        const env = JSON.parse(line);
        if (!env.message) return;
        const ev = JSON.parse(env.message);
        if (ev.kind === 'bazaar' && ev.item && !bazaarItems.some((x) => x.id === ev.item.id)) {
          bazaarItems.unshift(ev.item);
          changed = true;
        } else if (ev.kind === 'lostfound' && ev.item && !lostFoundItems.some((x) => x.id === ev.item.id)) {
          lostFoundItems.unshift(ev.item);
          changed = true;
        } else if (ev.kind === 'teamup' && ev.item && !teamUpItems.some((x) => x.id === ev.item.id)) {
          teamUpItems.unshift(ev.item);
          changed = true;
        } else if (ev.kind === 'poll' && ev.choice && messPoll[ev.choice] !== undefined) {
          messPoll[ev.choice] += 1;
          changed = true;
        }
      } catch (_) {}
    });

    if (changed) {
      localStorage.setItem(STORAGE_KEYS.BAZAAR, JSON.stringify(bazaarItems.slice(0, 40)));
      localStorage.setItem(STORAGE_KEYS.LOSTFOUND, JSON.stringify(lostFoundItems.slice(0, 40)));
      localStorage.setItem(STORAGE_KEYS.TEAMUP, JSON.stringify(teamUpItems.slice(0, 40)));
      renderBazaarList();
      renderLostFoundList();
      renderTeamUpList();
      renderMessPollUI();
    }
  } catch (e) {}
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
    campus: { prefix: 'cmp', items: ['bazaar', 'hostel', 'blocks', 'rms'] }
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

function openCommunityHub(mode) {
  jumpTo('campus', 'bazaar');
  switchBazaarMode(mode);
}

function openMagicSyncCard() {
  switchScreen('profile');
  setTimeout(() => {
    document.getElementById('magic-sync-card')?.scrollIntoView({ behavior: 'smooth' });
  }, 80);
}

function openQuickMealQr() {
  jumpTo('mess', 'qr');
}

// ================= GOOGLE MAPS DIRECT LINK HELPER =================
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

  const spent = (budget.expenses || []).reduce((acc, x) => acc + Number(x.amount || 0), 0);
  const left = Math.max(0, Number(budget.monthlyLimit || 6000) - spent);

  setText('top-sec-pill', profile.section || 'LPU');
  setText('top-greeting', `Hi, ${String(profile.name || 'Verto').split(' ')[0]} • Reg ${profile.regNo}`);

  setText('home-avatar', initials);
  setText('home-name', profile.name);
  setText('home-reg', profile.regNo);
  setText('home-hostel', hostelLabel);
  setText('home-prog', profile.program);
  setText('home-att-pct', pctStr);
  setText('home-cgpa', profile.cgpa || '8.50');
  setText('home-budget-left', `₹${left}`);
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

// ================= ATTENDANCE + OD / MEDICAL 65%-75% RELAXER =================
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

function calcOdMedical() {
  const att = Math.max(0, parseInt(document.getElementById('inp-od-att')?.value || '0', 10) || 0);
  const tot = Math.max(1, parseInt(document.getElementById('inp-od-tot')?.value || '1', 10) || 1);
  const od = Math.max(0, parseInt(document.getElementById('inp-od-credit')?.value || '0', 10) || 0);
  const eff = Math.min(100, ((att + od) / tot) * 100);

  const box = document.getElementById('out-od-box');
  if (!box) return;
  let status = '';
  if (eff >= 75) {
    status = `✅ Effective UMS Attendance: ${eff.toFixed(1)}% — Clear for ETE (>=75% Regular Eligible!)`;
  } else if (eff >= 65) {
    status = `⚠️ Effective UMS Attendance: ${eff.toFixed(1)}% — Eligible ONLY under 10% Uni-Hospital Medical Relaxation (65%–74.9%).`;
  } else {
    const need = Math.max(1, Math.ceil((0.75 * tot - (att + od)) / 0.25));
    status = `🚨 Effective: ${eff.toFixed(1)}% (Below 65% Detain Cutoff). Need +${need} continuous classes for 75%.`;
  }
  box.textContent = status;
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

// ================= LEVEL 1 #2 & #5: PYQ BANK, CA TRACKER, SMART ALERTS & POMODORO =================
function renderAlertsUI() {
  const icon = document.getElementById('top-alert-icon');
  const btn = document.getElementById('btn-enable-alerts');
  const sub = document.getElementById('alert-status-sub');
  if (alertsEnabled) {
    if (icon) icon.className = 'fa-solid fa-bell text-sm text-[var(--accent)]';
    if (btn) btn.innerHTML = '<i class="fa-solid fa-check mr-1"></i>Active';
    if (sub) sub.textContent = 'Smart reminders active for upcoming lectures & CAs!';
  } else {
    if (icon) icon.className = 'fa-regular fa-bell text-sm text-[var(--text-main)]';
    if (btn) btn.innerHTML = '<i class="fa-solid fa-bell mr-1"></i>Enable';
  }
}

function enableSmartAlerts() {
  const pending = tasks.filter((t) => !t.done);
  const jsDay = new Date().getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayCls = timetable[dayNames[jsDay]] || [];
  const summary = `${todayCls.length} classes today • ${pending.length} pending CAs`;

  if ('Notification' in window) {
    Notification.requestPermission().then((perm) => {
      alertsEnabled = true;
      localStorage.setItem(STORAGE_KEYS.ALERTS_ON, '1');
      renderAlertsUI();
      if (perm === 'granted') {
        new Notification('CampusGrid Smart Reminder 🔔', {
          body: summary + (pending[0] ? ` (Next due: ${pending[0].code} ${pending[0].type})` : '')
        });
      }
      showToast('Smart Alerts Active: ' + summary);
    });
  } else {
    alertsEnabled = true;
    localStorage.setItem(STORAGE_KEYS.ALERTS_ON, '1');
    renderAlertsUI();
    showToast('Alerts Enabled: ' + summary);
  }
}

function renderPyqBank() {
  const box = document.getElementById('pyq-list-container');
  if (!box) return;
  const q = (document.getElementById('pyq-search-inp')?.value || '').trim().toLowerCase();
  const allNotes = [...customPyqs, ...BUILTIN_PYQ_BANK];
  const filtered = allNotes.filter((p) => !q || `${p.code} ${p.title} ${p.topics}`.toLowerCase().includes(q));

  box.innerHTML = filtered.map((p) => `
    <div class="app-card-muted p-3 space-y-1.5">
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-1.5">
          <span class="px-2 py-0.5 rounded text-[10px] font-extrabold" style="background: var(--accent-soft); color: var(--accent-text);">${esc(p.code)}</span>
          <span class="text-xs font-extrabold text-[var(--text-main)]">${esc(p.title)}</span>
        </div>
        ${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener" class="px-2 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[10px] font-bold text-[var(--accent)] no-underline shrink-0">Open PDF ↗</a>` : ''}
      </div>
      <p class="text-[10px] font-bold text-[var(--text-sub)]">${esc(p.pattern)}</p>
      <p class="text-[11px] text-[var(--text-main)] leading-snug"><strong>Repeated Topics:</strong> ${esc(p.topics)}</p>
    </div>
  `).join('');
}

function saveCustomPyq() {
  const code = (val('inp-pyq-code') || 'LPU101').toUpperCase();
  const pattern = val('inp-pyq-pattern') || 'MTE & ETE Notes';
  const title = val('inp-pyq-title');
  const topics = val('inp-pyq-topics') || 'Important unit notes & PYQ link';
  const link = val('inp-pyq-link');
  if (!title) return showToast('Enter subject title');

  customPyqs.unshift({ id: 'cp_' + Date.now(), code, title, pattern, topics, link });
  localStorage.setItem(STORAGE_KEYS.PYQ_CUSTOM, JSON.stringify(customPyqs));
  closeSheet('sheet-add-pyq');
  renderPyqBank();
  showToast('Saved to PYQ Vault!');
}

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

// ================= LEVEL 1 #4: BLOCK 32 PLACEMENT TIER ELIGIBILITY CHECKER =================
function calcPlacementEligibility() {
  const p10 = parseFloat(document.getElementById('inp-pl-10')?.value || '0') || 0;
  const p12 = parseFloat(document.getElementById('inp-pl-12')?.value || '0') || 0;
  const cg = parseFloat(document.getElementById('inp-pl-cgpa')?.value || '0') || 0;
  const back = parseInt(document.getElementById('inp-pl-back')?.value || '0', 10) || 0;

  const tiers = [
    {
      name: 'Super Dream Product (₹20–64 LPA)',
      ok: back === 0 && cg >= 8.0 && p10 >= 70 && p12 >= 70,
      req: 'Needs >=8.0 CGPA, 0 Backlogs, >=70% in 10th/12th'
    },
    {
      name: 'Dream Tech & FinTech (₹8–18 LPA)',
      ok: back === 0 && cg >= 7.0 && p10 >= 60 && p12 >= 60,
      req: 'Needs >=7.0 CGPA, 0 Backlogs, >=60% in 10th/12th'
    },
    {
      name: 'Day-1 Prime & Mass Drives (₹4–7.5 LPA)',
      ok: back === 0 && cg >= 6.0,
      req: 'Needs >=6.0 CGPA & 0 Active Backlogs'
    }
  ];

  const box = document.getElementById('out-placement-tiers');
  if (!box) return;
  box.innerHTML = tiers.map((t) => `
    <div class="app-card-muted p-2.5 flex items-center justify-between gap-2">
      <div class="min-w-0">
        <span class="text-xs font-extrabold text-[var(--text-main)] block truncate">${esc(t.name)}</span>
        <span class="text-[10px] text-[var(--text-sub)] block truncate">${esc(t.req)}</span>
      </div>
      <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold shrink-0 ${t.ok ? 'bg-emerald-500/15 text-emerald-600' : 'bg-rose-500/15 text-rose-500'}">
        ${t.ok ? '✓ Eligible' : '✗ Locked'}
      </span>
    </div>
  `).join('');
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

// ================= LEVEL 2 #8: LIVE "AAJ MESS KAISA BANA HAI?" POLL =================
function currentMealSlotId() {
  const d = new Date().toISOString().slice(0, 10);
  const meal = typeof getCurrentMealInfo === 'function' ? getCurrentMealInfo().name : 'Meal';
  return `${d}_${meal}`;
}

function renderMessPollUI() {
  const g = Number(messPoll.good || 0);
  const o = Number(messPoll.okay || 0);
  const s = Number(messPoll.skip || 0);
  const tot = Math.max(1, g + o + s);
  const pg = Math.round((g / tot) * 100);
  const po = Math.round((o / tot) * 100);
  const ps = Math.max(0, 100 - pg - po);

  const mealName = typeof getCurrentMealInfo === 'function' ? getCurrentMealInfo().name : 'Hostel Meal';
  setText('poll-meal-heading', `Aaj ${profile.hostel || 'Hostel'} ${mealName} Kaisa Hai?`);
  setText('poll-total-votes', `${tot} Verto votes`);
  setText('pct-poll-good', `${pg}%`);
  setText('pct-poll-okay', `${po}%`);
  setText('pct-poll-skip', `${ps}%`);

  const bg = document.getElementById('bar-poll-good');
  const bo = document.getElementById('bar-poll-okay');
  const bs = document.getElementById('bar-poll-skip');
  if (bg) bg.style.width = `${pg}%`;
  if (bo) bo.style.width = `${po}%`;
  if (bs) bs.style.width = `${ps}%`;

  const mini = document.getElementById('home-poll-mini');
  if (mini) {
    mini.innerHTML = `<span>Live Verto Poll: <strong class="text-emerald-600">🔥 ${pg}% Mast</strong> • 💀 ${ps}% Skip</span><span>${tot} votes</span>`;
  }
}

function voteMessPoll(choice) {
  const slot = currentMealSlotId();
  if (messPoll.votedSlot === slot) {
    return showToast('Already voted for this meal!');
  }
  messPoll[choice] = Number(messPoll[choice] || 0) + 1;
  messPoll.votedSlot = slot;
  localStorage.setItem(STORAGE_KEYS.MESS_POLL, JSON.stringify(messPoll));
  renderMessPollUI();
  pushCloudEvent({ kind: 'poll', choice, slot });
  showToast('Vote counted! 🔥');
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

// ================= LEVEL 2 #6, #7 & PACK 1 #2: VERTO BAZAAR (OLX), LOST/FOUND & TEAM-FINDER =================
function switchBazaarMode(mode) {
  const mBtn = document.getElementById('bz-mode-market');
  const lBtn = document.getElementById('bz-mode-lost');
  const tBtn = document.getElementById('bz-mode-team');
  const mView = document.getElementById('view-bazaar-market');
  const lView = document.getElementById('view-bazaar-lost');
  const tView = document.getElementById('view-bazaar-team');

  if (mBtn) mBtn.className = `py-2.5 px-2 rounded-xl font-extrabold text-[11.5px] tap-scale ${mode === 'market' ? 'btn-accent' : 'btn-neutral'}`;
  if (lBtn) lBtn.className = `py-2.5 px-2 rounded-xl font-extrabold text-[11.5px] tap-scale ${mode === 'lostfound' ? 'btn-accent' : 'btn-neutral'}`;
  if (tBtn) tBtn.className = `py-2.5 px-2 rounded-xl font-extrabold text-[11.5px] tap-scale ${mode === 'teamup' ? 'btn-accent' : 'btn-neutral'}`;

  if (mView) mView.classList.toggle('hidden', mode !== 'market');
  if (lView) lView.classList.toggle('hidden', mode !== 'lostfound');
  if (tView) tView.classList.toggle('hidden', mode !== 'teamup');
}

function cleanPhoneForWa(phone) {
  const digits = String(phone || '').replace(/\D/g, '');
  if (!digits) return '';
  return digits.length === 10 ? '91' + digits : digits;
}

function renderBazaarList() {
  const box = document.getElementById('bazaar-items-list');
  if (!box) return;

  box.innerHTML = bazaarItems.map((b) => {
    const waPhone = cleanPhoneForWa(b.phone);
    const waMsg = encodeURIComponent(`Hi ${b.seller || 'Verto'}, saw your "${b.title}" (₹${b.price}) on CampusGrid Verto Bazaar. Is it still available?`);
    const waHref = waPhone ? `https://wa.me/${waPhone}?text=${waMsg}` : `https://wa.me/?text=${waMsg}`;

    return `
      <div class="app-card p-3.5 space-y-2">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <span class="px-1.5 py-0.5 rounded text-[9px] font-extrabold" style="background: var(--accent-soft); color: var(--accent-text);">${esc(b.cat)} • ${esc(b.hostel)}</span>
            <h4 class="text-[13px] font-extrabold text-[var(--text-main)] mt-1 leading-snug">${esc(b.title)}</h4>
          </div>
          <span class="text-base font-extrabold text-emerald-600 shrink-0">₹${esc(b.price)}</span>
        </div>
        <div class="flex items-center justify-between pt-0.5 text-[11px]">
          <span class="text-[var(--text-sub)]"><i class="fa-regular fa-user mr-1"></i>${esc(b.seller)} • ${esc(b.time || 'Just now')}</span>
          <a href="${waHref}" target="_blank" rel="noopener" class="px-2.5 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-700 font-extrabold no-underline tap-scale">
            <i class="fa-brands fa-whatsapp mr-1"></i>Buy / Chat
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function submitBazaarItem() {
  const title = val('inp-bz-title');
  const price = parseInt(val('inp-bz-price') || '0', 10);
  const cat = val('inp-bz-cat') || 'Hostel Essentials';
  const hostel = val('inp-bz-hostel') || profile.hostel || 'BH-4';
  const phone = val('inp-bz-phone');
  if (!title || price <= 0) return showToast('Enter item name & ₹ price');

  const newItem = {
    id: 'bz_' + Date.now(),
    title,
    price,
    cat,
    hostel,
    seller: profile.name.split(' ')[0] || 'Verto',
    phone,
    time: 'Just now'
  };
  bazaarItems.unshift(newItem);
  localStorage.setItem(STORAGE_KEYS.BAZAAR, JSON.stringify(bazaarItems));
  closeSheet('sheet-sell-item');
  renderBazaarList();
  pushCloudEvent({ kind: 'bazaar', item: newItem });
  showToast('Listed on Verto Bazaar!');
}

function renderLostFoundList() {
  const box = document.getElementById('lostfound-items-list');
  if (!box) return;

  box.innerHTML = lostFoundItems.map((lf) => {
    const isLost = lf.kind === 'LOST';
    const waPhone = cleanPhoneForWa(lf.phone);
    const waMsg = encodeURIComponent(`Hi ${lf.poster || 'Verto'}, contacting regarding your ${lf.kind} post on CampusGrid: "${lf.item}" (${lf.where}).`);
    const waHref = waPhone ? `https://wa.me/${waPhone}?text=${waMsg}` : `https://wa.me/?text=${waMsg}`;

    return `
      <div class="app-card p-3.5 space-y-2">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <span class="px-2 py-0.5 rounded-full text-[9px] font-extrabold ${isLost ? 'bg-rose-500/15 text-rose-600' : 'bg-emerald-500/15 text-emerald-600'}">
              ${isLost ? '🚨 LOST' : '✅ FOUND'}
            </span>
            <h4 class="text-[13px] font-extrabold text-[var(--text-main)] mt-1">${esc(lf.item)}</h4>
            <p class="text-[11px] text-[var(--text-sub)] mt-0.5"><i class="fa-solid fa-location-dot text-[var(--accent)] mr-1"></i>${esc(lf.where)}</p>
          </div>
        </div>
        <div class="flex items-center justify-between pt-0.5 text-[11px]">
          <span class="text-[var(--text-sub)]">By ${esc(lf.poster)} • ${esc(lf.time)}</span>
          <a href="${waHref}" target="_blank" rel="noopener" class="px-2.5 py-1.5 btn-soft text-[11px] no-underline tap-scale">
            <i class="fa-brands fa-whatsapp mr-1"></i>Contact
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function submitLostFoundItem() {
  const kind = val('inp-lf-kind') || 'LOST';
  const item = val('inp-lf-item');
  const where = val('inp-lf-where') || 'LPU Campus';
  const phone = val('inp-lf-phone');
  if (!item) return showToast('Enter lost/found item details');

  const newEntry = {
    id: 'lf_' + Date.now(),
    kind,
    item,
    where,
    poster: `${profile.name.split(' ')[0]} (${profile.hostel})`,
    phone,
    time: 'Just now'
  };
  lostFoundItems.unshift(newEntry);
  localStorage.setItem(STORAGE_KEYS.LOSTFOUND, JSON.stringify(lostFoundItems));
  closeSheet('sheet-post-lost');
  renderLostFoundList();
  pushCloudEvent({ kind: 'lostfound', item: newEntry });
  showToast('Lost & Found Alert Posted!');
}

// ================= LEVEL 1 #3: MONTHLY POCKET-MONEY BUDGET TRACKER =================
function renderBudgetUI() {
  const limit = Math.max(100, Number(budget.monthlyLimit || 6000));
  const list = budget.expenses || [];
  const spent = list.reduce((s, x) => s + Number(x.amount || 0), 0);
  const left = Math.max(0, limit - spent);
  const pct = Math.min(100, Math.round((spent / limit) * 100));

  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const remDays = Math.max(1, daysInMonth - now.getDate() + 1);
  const dailySafe = Math.floor(left / remDays);

  setText('bgt-total', `₹${limit}`);
  setText('bgt-spent', `₹${spent}`);
  setText('bgt-left', `₹${left}`);
  setText('budget-daily-safe', `Safe daily spend: ₹${dailySafe} / day (${remDays}d left)`);

  const bar = document.getElementById('bgt-bar');
  if (bar) {
    bar.style.width = `${pct}%`;
    bar.style.background = pct > 85 ? '#ef4444' : 'var(--accent)';
  }

  const box = document.getElementById('expenses-recent-list');
  if (box) {
    box.innerHTML = list.slice(0, 5).map((e) => `
      <div class="app-card-muted p-2 flex items-center justify-between text-xs">
        <div class="min-w-0 truncate">
          <span class="font-bold text-[var(--text-main)]">${esc(e.note)}</span>
          <span class="text-[10px] text-[var(--text-sub)] ml-1">(${esc(e.cat)})</span>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <span class="font-extrabold text-rose-500">-₹${e.amount}</span>
          <button onclick="deletePocketExpense('${e.id}')" class="text-[10px] text-[var(--text-faint)] bg-transparent border-0 cursor-pointer">✕</button>
        </div>
      </div>
    `).join('');
  }
}

function promptMonthlyBudget() {
  const input = prompt('Set Monthly Pocket-Money Budget (₹):', String(budget.monthlyLimit || 6000));
  if (!input) return;
  const valNum = parseInt(input, 10);
  if (valNum > 0) {
    budget.monthlyLimit = valNum;
    localStorage.setItem(STORAGE_KEYS.BUDGET, JSON.stringify(budget));
    renderBudgetUI();
    renderProfileAndHome();
    showToast(`Budget set to ₹${valNum}`);
  }
}

function addPocketExpense() {
  const cat = val('inp-exp-cat') || 'Food/Cafe';
  const note = val('inp-exp-note') || cat;
  const amount = parseInt(val('inp-exp-amt') || '0', 10);
  if (amount <= 0) return showToast('Enter ₹ amount');

  if (!budget.expenses) budget.expenses = [];
  budget.expenses.unshift({ id: 'ex_' + Date.now(), cat, note, amount, date: 'Today' });
  localStorage.setItem(STORAGE_KEYS.BUDGET, JSON.stringify(budget));
  setVal('inp-exp-note', '');
  setVal('inp-exp-amt', '');
  renderBudgetUI();
  renderProfileAndHome();
  showToast(`Logged ₹${amount}`);
}

function deletePocketExpense(id) {
  budget.expenses = (budget.expenses || []).filter((x) => x.id !== id);
  localStorage.setItem(STORAGE_KEYS.BUDGET, JSON.stringify(budget));
  renderBudgetUI();
  renderProfileAndHome();
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

// ================= HOLIDAYS, CABINS & RMS =================
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
    <div class="app-card-muted p-3 space-y-1">
      <div class="flex items-start justify-between gap-2">
        <div>
          <h4 class="text-xs font-extrabold text-[var(--text-main)]">${esc(f.name)}</h4>
          <p class="text-[10px] text-[var(--text-sub)]">${esc(f.dept)}</p>
        </div>
        <a href="mailto:${esc(f.email)}" class="px-2 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[10px] font-bold text-[var(--text-main)] no-underline shrink-0">Email</a>
      </div>
      <p class="text-[11px] font-bold text-[var(--text-main)]"><i class="fa-solid fa-location-dot text-[var(--accent)] mr-1"></i>${esc(f.cabin)}</p>
      <p class="text-[10px] text-[var(--text-sub)]">${esc(f.hours)}</p>
    </div>
  `).join('');
}

function renderRmsList() {
  const box = document.getElementById('rms-tickets-list');
  if (!box) return;
  if (rmsTickets.length === 0) {
    box.innerHTML = `<div class="app-card p-3.5 text-center text-xs text-[var(--text-sub)]">No active hostel maintenance or Wi-Fi complaints.</div>`;
    return;
  }

  box.innerHTML = rmsTickets.map((t, idx) => {
    const isResolved = t.status.includes('Resolved');
    const isEscalated = t.status.includes('Warden');
    const badgeCls = isResolved
      ? 'bg-emerald-500/15 text-emerald-600'
      : isEscalated
        ? 'bg-rose-500/15 text-rose-600'
        : 'bg-amber-500/15 text-amber-600';

    return `
      <div class="app-card p-3.5 space-y-2">
        <div class="flex items-center justify-between gap-2">
          <span class="text-[11px] font-mono font-extrabold text-[var(--accent)]">${esc(t.id)} • ${esc(t.date || 'Logged')}</span>
          <div class="flex items-center gap-1.5">
            <button onclick="cycleRmsStatus(${idx})" class="px-2 py-0.5 rounded-full ${badgeCls} text-[10px] font-extrabold border-0 cursor-pointer tap-scale" title="Tap to update status">
              ${esc(t.status)} ↻
            </button>
            <button onclick="deleteRmsTicket(${idx})" class="text-[11px] text-[var(--text-faint)] bg-transparent border-0 cursor-pointer">✕</button>
          </div>
        </div>
        <h4 class="text-xs font-extrabold text-[var(--text-main)]">${esc(t.category)} • ${esc(t.location)}</h4>
        <p class="text-xs text-[var(--text-sub)]">${esc(t.issue)}</p>
        <div class="flex items-center justify-between pt-0.5">
          <span class="text-[10px] font-semibold text-[var(--text-sub)]">Tap status pill to cycle Pending &rarr; Warden &rarr; Resolved</span>
          <button onclick="copyRmsEscalationMsg(${idx})" class="px-2 py-1 rounded bg-[var(--surface-muted)] text-[10px] font-bold text-[var(--text-main)] border border-[var(--border)] cursor-pointer tap-scale">
            Copy Follow-up
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function submitRmsTicket() {
  const category = val('rms-cat');
  const customId = val('rms-custom-id').toUpperCase();
  const location = val('rms-loc') || `${profile.hostel} ${profile.room}`;
  const issue = val('rms-desc');
  if (!issue) return showToast('Describe your issue first');

  rmsTickets.unshift({
    id: customId || 'RMS-' + Math.floor(10000 + Math.random() * 89999),
    category,
    location,
    issue,
    date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }),
    status: 'Pending'
  });
  localStorage.setItem(STORAGE_KEYS.RMS, JSON.stringify(rmsTickets));
  setVal('rms-custom-id', '');
  setVal('rms-desc', '');
  renderRmsList();
  showToast('RMS Complaint Logged');
}

function cycleRmsStatus(idx) {
  const item = rmsTickets[idx];
  if (!item) return;
  const order = ['Pending', 'Escalated to Warden', 'Resolved ✓'];
  const cur = order.indexOf(item.status);
  item.status = order[(cur + 1) % order.length];
  localStorage.setItem(STORAGE_KEYS.RMS, JSON.stringify(rmsTickets));
  renderRmsList();
  showToast(`Ticket status: ${item.status}`);
}

function deleteRmsTicket(idx) {
  rmsTickets.splice(idx, 1);
  localStorage.setItem(STORAGE_KEYS.RMS, JSON.stringify(rmsTickets));
  renderRmsList();
}

function copyRmsEscalationMsg(idx) {
  const t = rmsTickets[idx];
  if (!t) return;
  const msg = `Respected Warden / Caretaker (${profile.hostel}), my maintenance ticket ${t.id} (${t.category}) for ${t.location} regarding "${t.issue}" is currently ${t.status}. Kindly expedite resolution. — ${profile.name} (Reg: ${profile.regNo})`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(msg).then(() => showToast('Warden escalation note copied!'));
  }
}

// ================= PROFILE EDIT, RESUME & GATE PASSES =================
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
  } else if (id === 'sheet-resume') {
    setVal('inp-cv-email', resumeData.email);
    setVal('inp-cv-phone', resumeData.phone);
    setVal('inp-cv-github', resumeData.github);
    setVal('inp-cv-linkedin', resumeData.linkedin);
    setVal('inp-cv-skills', resumeData.skills);
    setVal('inp-cv-proj1', resumeData.proj1);
    setVal('inp-cv-proj2', resumeData.proj2);
    setVal('inp-cv-certs', resumeData.certs);
  }
  const el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
}

// ================= PACK 1 #1: 1-PAGE LPU ATS RESUME BUILDER & PDF GENERATOR =================
function renderResumeSummary() {
  setText('resume-preview-sub', `Skills: ${resumeData.skills || 'C++, Python, DSA, Web Dev'}`);
}

function saveResumeData(openPdfAfter) {
  resumeData = {
    email: val('inp-cv-email') || 'verto@lpu.in',
    phone: val('inp-cv-phone') || '+91 98765 43210',
    github: val('inp-cv-github') || 'github.com/verto',
    linkedin: val('inp-cv-linkedin') || 'linkedin.com/in/verto',
    skills: val('inp-cv-skills') || DEFAULT_RESUME.skills,
    proj1: val('inp-cv-proj1') || DEFAULT_RESUME.proj1,
    proj2: val('inp-cv-proj2') || DEFAULT_RESUME.proj2,
    certs: val('inp-cv-certs') || DEFAULT_RESUME.certs
  };
  localStorage.setItem(STORAGE_KEYS.RESUME, JSON.stringify(resumeData));
  closeSheet('sheet-resume');
  renderResumeSummary();
  showToast('ATS Resume Saved!');
  if (openPdfAfter) {
    setTimeout(() => generateResumePdf(), 120);
  }
}

function generateResumePdf() {
  const subList = subjects.map((s) => `${s.name} (${s.code})`).slice(0, 6).join(' • ');
  const htmlDoc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>${esc(profile.name)} — LPU ATS Resume</title>
  <style>
    @page { size: A4; margin: 14mm; }
    body { font-family: 'Segoe UI', Arial, sans-serif; color: #0f172a; line-height: 1.45; margin: 0; padding: 20px; max-width: 780px; margin-inline: auto; }
    h1 { font-size: 24px; margin: 0; text-transform: uppercase; letter-spacing: 0.5px; }
    .sub { font-size: 12.5px; color: #334155; margin-top: 4px; }
    .sec-h { font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; color: #0f172a; border-bottom: 1.5px solid #0f172a; padding-bottom: 3px; margin: 16px 0 8px 0; }
    .row { display: flex; justify-content: space-between; font-weight: 700; font-size: 13px; }
    p, li { font-size: 12.5px; margin: 4px 0; color: #1e293b; }
    ul { margin: 4px 0 8px 18px; padding: 0; }
    .print-bar { background: #0f172a; color: #fff; padding: 10px 16px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; font-size: 13px; }
    .print-btn { background: #ea580c; color: #fff; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 700; cursor: pointer; }
    @media print { .print-bar { display: none !important; } body { padding: 0; } }
  </style>
</head>
<body>
  <div class="print-bar">
    <span><strong>LPU PEP & Block 32 Placement ATS Resume</strong> — Select "Save as PDF" in Print Dialog</span>
    <button class="print-btn" onclick="window.print()">Print / Save PDF</button>
  </div>
  <h1>${esc(profile.name)}</h1>
  <div class="sub">
    <strong>Reg No:</strong> ${esc(profile.regNo)} | ${esc(resumeData.email)} | ${esc(resumeData.phone)}<br/>
    ${esc(resumeData.github)} | ${esc(resumeData.linkedin)}
  </div>

  <div class="sec-h">Education</div>
  <div class="row">
    <span>Lovely Professional University (LPU), Phagwara, Punjab</span>
    <span>CGPA: ${esc(profile.cgpa)} / 10.0</span>
  </div>
  <p><strong>${esc(profile.program)}</strong> • Section ${esc(profile.section)}</p>
  <p><strong>Relevant Coursework:</strong> ${esc(subList)}</p>

  <div class="sec-h">Technical Skills</div>
  <p>${esc(resumeData.skills)}</p>

  <div class="sec-h">Key Academic & Engineering Projects</div>
  <ul>
    <li>${esc(resumeData.proj1)}</li>
    <li>${esc(resumeData.proj2)}</li>
  </ul>

  <div class="sec-h">Certifications, Hackathons & Achievements</div>
  <ul>
    ${(resumeData.certs || '').split('•').map((c) => c.trim()).filter(Boolean).map((c) => `<li>${esc(c)}</li>`).join('')}
  </ul>
  <script>setTimeout(() => { window.print(); }, 350);</script>
</body>
</html>`;

  const w = window.open('', '_blank');
  if (w) {
    w.document.open();
    w.document.write(htmlDoc);
    w.document.close();
  } else {
    showToast('Allow popups to open PDF preview');
  }
}

// ================= PACK 1 #2: HACKATHON & PROJECT TEAM-FINDER =================
function renderTeamUpList() {
  const box = document.getElementById('teamup-items-list');
  if (!box) return;

  box.innerHTML = teamUpItems.map((tm) => {
    const waPhone = cleanPhoneForWa(tm.phone);
    const waMsg = encodeURIComponent(`Hi ${tm.leader || 'Verto'}, saw your Team-Up post for "${tm.event}" (Role: ${tm.role}) on CampusGrid! I'd love to join.`);
    const waHref = waPhone ? `https://wa.me/${waPhone}?text=${waMsg}` : `https://wa.me/?text=${waMsg}`;

    return `
      <div class="app-card p-3.5 space-y-2">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <span class="px-2 py-0.5 rounded text-[9.5px] font-extrabold" style="background: var(--accent-soft); color: var(--accent-text);">${esc(tm.role)}</span>
            <h4 class="text-[13px] font-extrabold text-[var(--text-main)] mt-1">${esc(tm.event)}</h4>
            <p class="text-[11px] font-semibold text-[var(--text-sub)] mt-0.5"><i class="fa-solid fa-code text-[var(--accent)] mr-1"></i>${esc(tm.stack)}</p>
          </div>
          <span class="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 text-[10px] font-extrabold shrink-0">${esc(tm.spots)}</span>
        </div>
        <div class="flex items-center justify-between pt-0.5 text-[11px]">
          <span class="text-[var(--text-sub)]"><i class="fa-regular fa-user mr-1"></i>${esc(tm.leader)} • ${esc(tm.time || 'Active')}</span>
          <a href="${waHref}" target="_blank" rel="noopener" class="px-2.5 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-700 font-extrabold no-underline tap-scale">
            <i class="fa-brands fa-whatsapp mr-1"></i>Join Team
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function submitTeamUpPost() {
  const event = val('inp-tm-event');
  const role = val('inp-tm-role') || 'Frontend / Mobile Dev';
  const spots = val('inp-tm-spots') || 'Need 1 Member';
  const stack = val('inp-tm-stack') || 'Open Tech Stack';
  const phone = val('inp-tm-phone');
  if (!event) return showToast('Enter hackathon or project name');

  const newPost = {
    id: 'tm_' + Date.now(),
    event,
    role,
    spots,
    stack,
    leader: `${profile.name.split(' ')[0]} (${profile.section})`,
    phone,
    time: 'Just now'
  };
  teamUpItems.unshift(newPost);
  localStorage.setItem(STORAGE_KEYS.TEAMUP, JSON.stringify(teamUpItems));
  closeSheet('sheet-post-team');
  renderTeamUpList();
  pushCloudEvent({ kind: 'teamup', item: newPost });
  showToast('Team Request Posted Live!');
}

// ================= PACK 1 #3: VIVA & PLACEMENT RAPID-FIRE FLASHCARDS =================
function getFilteredFlashcards() {
  const all = [...customFlashcards, ...BUILTIN_FLASHCARDS];
  if (selectedFlashCat === 'All') return all;
  return all.filter((c) => c.cat === selectedFlashCat);
}

function setFlashCat(cat) {
  selectedFlashCat = cat;
  currentFlashIdx = 0;
  flashShowingAnswer = false;
  renderFlashcardsUI();
}

function renderFlashcardsUI() {
  const pillsBox = document.getElementById('flash-cat-pills');
  const cats = ['All', 'DSA', 'OS', 'DBMS', 'CN', 'HR/PEP', 'Custom'];
  if (pillsBox) {
    pillsBox.innerHTML = cats.map((c) => `
      <button onclick="setFlashCat('${c}')" class="filter-chip ${selectedFlashCat === c ? 'active' : ''}">${c}</button>
    `).join('');
  }

  const deck = getFilteredFlashcards();
  const box = document.getElementById('flashcard-box');
  if (!box) return;

  if (deck.length === 0) {
    setText('flash-topic-lbl', selectedFlashCat);
    setText('flash-badge', 'EMPTY DECK');
    setText('flash-main-text', 'No cards in this category yet. Tap "+ Card" above to add your own viva Q&A!');
    setText('flash-counter-lbl', '0 / 0');
    box.classList.remove('is-answer');
    return;
  }

  if (currentFlashIdx >= deck.length) currentFlashIdx = 0;
  if (currentFlashIdx < 0) currentFlashIdx = deck.length - 1;
  const card = deck[currentFlashIdx];

  setText('flash-topic-lbl', card.cat);
  setText('flash-badge', flashShowingAnswer ? '✅ ANSWER • TAP FOR QUESTION' : '❓ QUESTION • TAP TO FLIP');
  setText('flash-main-text', flashShowingAnswer ? card.a : card.q);
  setText('flash-counter-lbl', `${currentFlashIdx + 1} / ${deck.length}`);
  box.classList.toggle('is-answer', flashShowingAnswer);
}

function flipFlashcard() {
  flashShowingAnswer = !flashShowingAnswer;
  renderFlashcardsUI();
}

function nextFlashcard() {
  currentFlashIdx += 1;
  flashShowingAnswer = false;
  renderFlashcardsUI();
}

function prevFlashcard() {
  currentFlashIdx -= 1;
  flashShowingAnswer = false;
  renderFlashcardsUI();
}

function saveCustomFlashcard() {
  const cat = val('inp-fc-cat') || 'Custom';
  const q = val('inp-fc-q');
  const a = val('inp-fc-a');
  if (!q || !a) return showToast('Enter both Question & Answer');

  customFlashcards.unshift({ id: 'fc_u_' + Date.now(), cat, q, a });
  localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(customFlashcards));
  setVal('inp-fc-q', '');
  setVal('inp-fc-a', '');
  closeSheet('sheet-add-flashcard');
  selectedFlashCat = cat;
  currentFlashIdx = 0;
  flashShowingAnswer = false;
  renderFlashcardsUI();
  showToast('Added to Viva Flashcards!');
}

// ================= PACK 1 #4: SCHOLARSHIP SAFETY & GRADE IMPROVEMENT CALCULATOR =================
function calcScholarshipAndImprovement() {
  const slabPct = parseInt(document.getElementById('inp-sch-slab')?.value || '30', 10);
  const baseTuition = 140000;
  const savedPerSem = Math.round((baseTuition * slabPct) / 100);
  const schBox = document.getElementById('out-sch-rule');
  if (schBox) {
    if (slabPct > 0) {
      schBox.innerHTML = `<span class="text-emerald-600">Saves ~₹${savedPerSem.toLocaleString('en-IN')}/sem</span> • Keep <strong>0 ETE Backlogs</strong> &amp; &ge;75% attendance to protect your ${slabPct}% LPUNEST waiver.`;
    } else {
      schBox.innerHTML = `Tip: Top academic standing &amp; national hackathons/sports medals qualify for DSW/Merit incentives.`;
    }
  }

  const cred = Math.max(1, parseFloat(document.getElementById('inp-imp-cred')?.value || '4') || 4);
  const oldGp = parseFloat(document.getElementById('inp-imp-old')?.value || '5') || 0;
  const newGp = parseFloat(document.getElementById('inp-imp-new')?.value || '9') || 9;
  const totalCredits = Math.max(16, parseFloat(document.getElementById('inp-past-credits')?.value || '60') || 60);
  const curCgpa = Math.max(0, parseFloat(document.getElementById('inp-past-cgpa')?.value || profile.cgpa || '8.5') || 8.5);

  const gpGain = Math.max(0, newGp - oldGp);
  const cgpaBoost = (cred * gpGain) / totalCredits;
  const afterCgpa = Math.min(10, curCgpa + cgpaBoost);

  const impBox = document.getElementById('out-imp-box');
  if (impBox) {
    impBox.innerHTML = `Improving a <strong>${cred}-credit</strong> course from <strong>${oldGp} GP &rarr; ${newGp} GP</strong> boosts overall CGPA by <span class="text-emerald-600 font-extrabold">+${cgpaBoost.toFixed(2)}</span> (New CGPA: <span class="text-[var(--accent)] font-extrabold">${afterCgpa.toFixed(2)}</span>).`;
  }
}

// ================= PACK 2 #5: HOSTEL NIGHT-CANTEEN GROUP-ORDER CART =================
function updateNightCart(itemId, delta) {
  const cur = Number(nightCart[itemId] || 0);
  const next = Math.max(0, cur + delta);
  if (next === 0) delete nightCart[itemId];
  else nightCart[itemId] = next;
  localStorage.setItem(STORAGE_KEYS.NIGHT_CART, JSON.stringify(nightCart));
  renderNightCanteenUI();
}

function clearNightCart() {
  nightCart = {};
  localStorage.setItem(STORAGE_KEYS.NIGHT_CART, JSON.stringify(nightCart));
  renderNightCanteenUI();
  showToast('Night cart cleared');
}

function renderNightCanteenUI() {
  const listEl = document.getElementById('night-menu-list');
  if (!listEl) return;

  let totalItems = 0;
  let totalBill = 0;

  listEl.innerHTML = NIGHT_CANTEEN_ITEMS.map((item) => {
    const qty = Number(nightCart[item.id] || 0);
    totalItems += qty;
    totalBill += qty * item.price;

    return `
      <div class="app-card-muted p-2.5 flex items-center justify-between gap-2">
        <div class="min-w-0">
          <span class="text-xs font-extrabold text-[var(--text-main)] block truncate">${esc(item.name)}</span>
          <span class="text-[10px] font-bold text-[var(--accent)]">₹${item.price} • ${esc(item.tag)}</span>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button onclick="updateNightCart('${item.id}', -1)" class="w-7 h-7 rounded-lg btn-neutral text-xs font-extrabold">−</button>
          <span class="w-5 text-center text-xs font-extrabold text-[var(--text-main)]">${qty}</span>
          <button onclick="updateNightCart('${item.id}', 1)" class="w-7 h-7 rounded-lg btn-accent text-xs font-extrabold">+</button>
        </div>
      </div>
    `;
  }).join('');

  const heads = Math.max(1, parseInt(document.getElementById('inp-night-heads')?.value || '3', 10) || 1);
  const perHead = totalBill > 0 ? Math.ceil(totalBill / heads) : 0;

  setText('night-cart-summary', `Cart: ${totalItems} items • ₹${totalBill}`);
  setText('out-night-each', `₹${perHead}`);
}

function shareNightOrderWhatsApp() {
  const lines = [];
  let total = 0;
  NIGHT_CANTEEN_ITEMS.forEach((item) => {
    const q = Number(nightCart[item.id] || 0);
    if (q > 0) {
      lines.push(`• ${q}x ${item.name} (₹${q * item.price})`);
      total += q * item.price;
    }
  });
  if (lines.length === 0) return showToast('Add items to Night Canteen cart first');

  const heads = Math.max(1, parseInt(document.getElementById('inp-night-heads')?.value || '3', 10) || 1);
  const each = Math.ceil(total / heads);
  const msg = `🌙 *${profile.hostel} Night-Canteen Order (${profile.room})*\n${lines.join('\n')}\n💰 *Total:* ₹${total} (÷ ${heads} = *₹${each} each*)\nUPI kar do bhai log!`;
  window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank', 'noopener');
}

// ================= PACK 2 #7: VERTO MESS PROTEIN & GYM SPLIT TRACKER =================
function renderFitnessUI() {
  const goal = Math.max(30, Number(fitness.goalProtein || 100));
  const prot = Math.max(0, Number(fitness.protein || 0));
  const kcal = Math.max(0, Number(fitness.kcal || 0));
  const water = Math.max(0, Number(fitness.water || 0));
  const pct = Math.min(100, Math.round((prot / goal) * 100));

  setText('gym-streak-lbl', `🔥 ${fitness.streak || 1}d Streak`);
  setText('fit-prot-val', `${prot} / ${goal}g`);
  setText('fit-kcal-val', `${kcal} kcal`);
  setText('fit-water-val', `${water} / 10 💧`);
  setVal('inp-gym-split', fitness.split || 'Push (Chest • Shoulder • Triceps)');

  const bar = document.getElementById('fit-prot-bar');
  if (bar) bar.style.width = `${pct}%`;
}

function quickAddMessMacro(label, p, k) {
  fitness.protein = Number(fitness.protein || 0) + Number(p);
  fitness.kcal = Number(fitness.kcal || 0) + Number(k);
  localStorage.setItem(STORAGE_KEYS.FITNESS, JSON.stringify(fitness));
  renderFitnessUI();
  showToast(`+${p}g Protein (${label})`);
}

function addWaterGlass() {
  fitness.water = (Number(fitness.water || 0) + 1) % 15;
  localStorage.setItem(STORAGE_KEYS.FITNESS, JSON.stringify(fitness));
  renderFitnessUI();
  showToast(`Water: ${fitness.water} glasses 💧`);
}

function promptProteinGoal() {
  const inp = prompt('Set Daily Protein Target (grams):', String(fitness.goalProtein || 100));
  if (!inp) return;
  const g = parseInt(inp, 10);
  if (g >= 30) {
    fitness.goalProtein = g;
    localStorage.setItem(STORAGE_KEYS.FITNESS, JSON.stringify(fitness));
    renderFitnessUI();
    showToast(`Protein goal: ${g}g/day`);
  }
}

function resetDailyMacros() {
  fitness.protein = 0;
  fitness.kcal = 0;
  fitness.water = 0;
  localStorage.setItem(STORAGE_KEYS.FITNESS, JSON.stringify(fitness));
  renderFitnessUI();
  showToast('Reset today’s macros & water');
}

function saveGymSplit() {
  fitness.split = val('inp-gym-split') || fitness.split;
  localStorage.setItem(STORAGE_KEYS.FITNESS, JSON.stringify(fitness));
  showToast('Workout split saved');
}

function markGymWorkoutDone() {
  const todayStr = new Date().toDateString();
  if (fitness.lastWorkoutDate !== todayStr) {
    fitness.streak = Number(fitness.streak || 0) + 1;
    fitness.lastWorkoutDate = todayStr;
    localStorage.setItem(STORAGE_KEYS.FITNESS, JSON.stringify(fitness));
    renderFitnessUI();
  }
  showToast(`Workout crushed! 🔥 ${fitness.streak} day streak`);
}

// ================= PACK 2 #8: PHONE-TO-PHONE MAGIC SYNC & ATTENDANCE SHARE =================
function shareFullDeviceSyncLink() {
  const bundle = {
    p: profile,
    s: subjects,
    t: timetable,
    k: tasks,
    g: sgpaRows,
    b: budget,
    l: laundry,
    r: resumeData
  };
  const token = encodeUtf8Base64Url(bundle);
  const baseUrl = window.location.origin + window.location.pathname;
  const fullUrl = `${baseUrl}?full_sync=${token}`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(fullUrl).then(() => showToast('Magic Sync Link copied! Open on new phone/laptop'));
  }
  if (navigator.share) {
    navigator.share({
      title: `CampusGrid Full Sync (${profile.name})`,
      text: 'Open this Magic Sync link to transfer your complete CampusGrid profile, attendance, timetable, budget & resume:',
      url: fullUrl
    }).catch(() => {});
  }
}

function checkIncomingFullSync() {
  try {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get('full_sync');
    if (!raw) return;
    triggerFullSyncPrompt(raw);
  } catch (e) {}
}

function importPastedSyncLink() {
  const rawInput = val('inp-paste-sync');
  if (!rawInput) return showToast('Paste Magic Sync link or code first');
  let token = rawInput;
  if (rawInput.includes('full_sync=')) {
    token = rawInput.split('full_sync=')[1].split('&')[0];
  } else if (rawInput.includes('sec_sync=')) {
    const secTok = rawInput.split('sec_sync=')[1].split('&')[0];
    pendingSyncPayload = decodeUtf8Base64Url(secTok);
    confirmSectionSyncImport();
    setVal('inp-paste-sync', '');
    return;
  }
  triggerFullSyncPrompt(token.trim());
}

function triggerFullSyncPrompt(token) {
  try {
    const data = decodeUtf8Base64Url(token);
    if (!data || !data.p) return showToast('Invalid Magic Sync link');
    pendingFullSyncPayload = data;
    setText(
      'full-sync-desc',
      `Restore complete CampusGrid backup for "${data.p.name}" (Reg: ${data.p.regNo}, Section: ${data.p.section}) including Attendance, Timetable, CAs, Budget & ATS Resume onto this device?`
    );
    openSheet('sheet-full-sync');
  } catch (e) {
    showToast('Could not decode Magic Sync link');
  }
}

function confirmFullDeviceSyncImport() {
  if (!pendingFullSyncPayload) return;
  const d = pendingFullSyncPayload;
  if (d.p) { profile = d.p; localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile)); }
  if (d.s) { subjects = d.s; localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subjects)); }
  if (d.t) { timetable = d.t; localStorage.setItem(STORAGE_KEYS.TIMETABLE, JSON.stringify(timetable)); }
  if (d.k) { tasks = d.k; localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks)); }
  if (d.g) { sgpaRows = d.g; localStorage.setItem(STORAGE_KEYS.SGPA_ROWS, JSON.stringify(sgpaRows)); }
  if (d.b) { budget = d.b; localStorage.setItem(STORAGE_KEYS.BUDGET, JSON.stringify(budget)); }
  if (d.l) { laundry = d.l; localStorage.setItem(STORAGE_KEYS.LAUNDRY, JSON.stringify(laundry)); }
  if (d.r) { resumeData = d.r; localStorage.setItem(STORAGE_KEYS.RESUME, JSON.stringify(resumeData)); }

  pendingFullSyncPayload = null;
  setVal('inp-paste-sync', '');
  closeSheet('sheet-full-sync');
  if (window.history && window.history.replaceState) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
  renderAll();
  showToast('Full Device Backup Restored!');
}

function shareAttendanceCardWhatsApp() {
  const agg = getAggregateAttendance();
  const lines = subjects.map((s) => {
    const p = s.total > 0 ? Math.round((s.attended / s.total) * 100) : 100;
    return `${p >= 75 ? '🟢' : '🔴'} *${s.code}:* ${s.attended}/${s.total} (${p}%)`;
  });
  const msg = `📊 *LPU Attendance Report — ${profile.name} (${profile.section})*\n✨ *Aggregate:* ${agg.pct.toFixed(1)}%\n\n${lines.join('\n')}\n\n_Tracked on CampusGrid v7.0_`;
  window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank', 'noopener');
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
  renderMessPollUI();
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
  const shareUrl = 'https://iamaryaann.github.io/lpu-campusgrid/?v=7';
  const shareData = {
    title: 'CampusGrid v7.0 — Ultimate LPU Verto Super-App',
    text: 'Check out CampusGrid v7.0 (1-Click Section Timetable Sync, ATS Resume PDF, Viva Flashcards, Night-Canteen Cart, Mess Protein Tracker, Verto OLX, Lost & Found & Team-Up):',
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
