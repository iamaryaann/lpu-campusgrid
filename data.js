// ========================================================
// LPU CAMPUS & MESS PORTAL - COMPREHENSIVE A-Z LPU DATASET (v2.0)
// Lovely Professional University, Jalandhar-Delhi G.T. Road, Phagwara, Punjab 144411
// Coordinates center: ~31.2536° N, 75.7037° E | 600+ Acres Smart Green Campus
// ========================================================

const CAMPUS_CENTER = [31.2536, 75.7037];
const DEFAULT_ZOOM = 16;

// 42+ Verified LPU Campus Landmarks across Academic, Hostels, Food Courts, Amenities & Gates
const CAMPUS_LOCATIONS = [
  // ================= ACADEMIC & ADMIN BLOCKS =================
  {
    id: 'block-30-admin',
    name: 'Block 30 - Administrative HQ, Chancellor Office & Admissions',
    shortName: 'Block 30 (Admin & Admissions)',
    category: 'academic',
    coords: [31.2528, 75.7043],
    description: 'Central administrative headquarters of LPU housing the Chancellor & Vice-Chancellor Secretariat, Division of Admissions, Fee Desk, Examination Cell, and Registrar Office.',
    dept: 'Admissions, Accounts, Registrar, International Office, Exam Cell',
    nearestFood: 'UniMall Food Court & Block 30 Nescafe Kiosk (1 min walk)',
    timings: '09:00 AM - 05:30 PM',
    transit: '5 min E-Rickshaw (₹10) from Gate 1',
    icon: 'fa-landmark',
    color: '#2563eb'
  },
  {
    id: 'block-32',
    name: 'Block 32 - School of Computer Science & Engineering (CSE HQ)',
    shortName: 'Block 32 (CSE & Placement Cell)',
    category: 'academic',
    coords: [31.2542, 75.7025],
    description: 'The epicenter of tech at LPU. Houses the School of CSE, AI & Data Science labs, Apple iOS Center, Google Cloud Lab, Cyber Security labs, and Division of Career Services (Placements).',
    dept: 'CSE, AI & Data Science, Cyber Security, Cloud, Career Services',
    nearestFood: 'Underpass Rollers Hub & NK Food Court (1 min walk)',
    timings: '08:00 AM - 06:00 PM',
    transit: '7 min E-Rickshaw (₹10) from Gate 1',
    icon: 'fa-laptop-code',
    color: '#2563eb'
  },
  {
    id: 'block-33',
    name: 'Block 33 - Software Engineering, Coding & Innovation Studio',
    shortName: 'Block 33 (CSE Labs & Coding)',
    category: 'academic',
    coords: [31.2545, 75.7028],
    description: 'Dedicated high-density computing clusters, competitive programming arenas, hackathon bays, and full-stack software development laboratories.',
    dept: 'Software Engineering, Full-Stack Web, Competitive Coding Labs',
    nearestFood: 'Block 34 Underpass Kiosks & Kitchenette',
    timings: '08:00 AM - 06:00 PM',
    transit: 'Adjacent to Block 32',
    icon: 'fa-code',
    color: '#2563eb'
  },
  {
    id: 'block-34',
    name: 'Block 34 - Mechanical, Aerospace Hangar & Robotics Labs',
    shortName: 'Block 34 (Mech, Aero & Robo)',
    category: 'academic',
    coords: [31.2548, 75.7031],
    description: 'Features a real aircraft fuselage, Formula Student car prototyping garage, CNC workshops, drone testing arenas, and 3D printing labs.',
    dept: 'Mechanical, Aerospace, Mechatronics, Robotics & Automation',
    nearestFood: 'Block 34 Rollers, NK Food Court & Juice Corner',
    timings: '08:00 AM - 06:00 PM',
    transit: '8 min walk / ₹10 Shuttle from UniMall',
    icon: 'fa-robot',
    color: '#2563eb'
  },
  {
    id: 'block-36',
    name: 'Block 36 & 37 - Civil Engineering, Bioengineering & Sciences',
    shortName: 'Block 36-37 (Civil & Biotech)',
    category: 'academic',
    coords: [31.2554, 75.7038],
    description: 'Geotechnical engineering labs, structural testing units, molecular biology labs, microbiology cleanrooms, and environmental research centers.',
    dept: 'Civil Engineering, Biotechnology, Food Tech, Microbiology, Physics/Chem',
    nearestFood: 'Block 36 Cafe Corner & Oven Express',
    timings: '08:30 AM - 05:30 PM',
    transit: 'Near Robo Park & Block 34',
    icon: 'fa-flask-vial',
    color: '#2563eb'
  },
  {
    id: 'block-38',
    name: 'Block 38 - Electronics, VLSI & Electrical Engineering',
    shortName: 'Block 38 (ECE, EEE & IoT)',
    category: 'academic',
    coords: [31.2560, 75.7045],
    description: 'VLSI chip design stations, Texas Instruments embedded labs, IoT incubators, smart grid simulators, and solar energy research labs.',
    dept: 'ECE, EEE, VLSI Design, Embedded Systems & IoT',
    nearestFood: 'Block 38 Tea Lounge & Law Gate Food Strip (3 min walk)',
    timings: '08:30 AM - 05:30 PM',
    transit: 'Near Gate 4 (Law Gate) side',
    icon: 'fa-microchip',
    color: '#2563eb'
  },
  {
    id: 'block-14-law',
    name: 'Block 14 & 25-28 - Mittal School of Business (MSB) & School of Law',
    shortName: 'Block 14 & 25-28 (MSB & Law)',
    category: 'academic',
    coords: [31.2520, 75.7020],
    description: 'ACBSP-accredited business school with Bloomberg/mock trading floor, executive amphitheaters, and BCI-approved School of Law Moot Court.',
    dept: 'MBA, BBA, B.Com, FinTech, Economics, BA/BBA LL.B (Moot Court)',
    nearestFood: 'MSB Garden Canteen, CCD & UniMall',
    timings: '08:00 AM - 07:00 PM',
    transit: '4 min walk from Gate 1 / Unipolis',
    icon: 'fa-scale-balanced',
    color: '#2563eb'
  },
  {
    id: 'block-13',
    name: 'Block 13 - Central Library (9 Floors), DSW & Architecture',
    shortName: 'Block 13 (Central Library & DSW)',
    category: 'academic',
    coords: [31.2515, 75.7040],
    description: '9-storey knowledge tower with 1.5M+ books & e-journals, silent cyber zones, exam-time late-night reading halls, plus Division of Student Welfare (DSW) & Architecture studios.',
    dept: 'Central Library, Division of Student Welfare (DSW), Architecture',
    nearestFood: 'CCD Library Block & UniMall Food Court (Across road)',
    timings: '08:00 AM - 11:00 PM (Open till 2 AM during exams)',
    transit: 'Central Campus Spine (Opposite UniMall)',
    icon: 'fa-book-open-reader',
    color: '#2563eb'
  },
  {
    id: 'block-1-4-hm',
    name: 'Block 1 to 4 - Hotel Management, Fashion Design & Polytechnic',
    shortName: 'Block 1-4 (Hotel Mgmt & Design)',
    category: 'academic',
    coords: [31.2490, 75.7040],
    description: 'Houses culinary training kitchens, bakery studios, fashion runway ramps, textile labs, interior design studios, and LPU Polytechnic wing near Gate 1.',
    dept: 'Hotel Management, Culinary Arts, Fashion Design, Multimedia, Diploma',
    nearestFood: 'Uni-Hotel Restaurant & Gate 1 Food Kiosks',
    timings: '08:30 AM - 05:30 PM',
    transit: '2 min walk from Main Gate 1',
    icon: 'fa-shirt',
    color: '#2563eb'
  },
  {
    id: 'block-5-8-pharma',
    name: 'Block 5 to 8 - School of Pharmaceutical & Physiotherapy Sciences',
    shortName: 'Block 5-8 (Pharmacy & Physio)',
    category: 'academic',
    coords: [31.2502, 75.7026],
    description: 'PCI-approved pharmaceutical formulation labs, pharmacology research centers, medicinal herbal garden, and physiotherapy rehabilitation clinics.',
    dept: 'B.Pharm, M.Pharm, Ayurveda, Physiotherapy, MLT',
    nearestFood: 'Auditorium Cafeteria & GH Food Booths',
    timings: '08:30 AM - 05:30 PM',
    transit: 'Near Shanti Devi Mittal Auditorium',
    icon: 'fa-capsules',
    color: '#2563eb'
  },
  {
    id: 'block-18-media',
    name: 'Block 18 to 20 - Journalism, Film Production & Performing Arts',
    shortName: 'Block 18-20 (Film, Media & Arts)',
    category: 'academic',
    coords: [31.2512, 75.7024],
    description: 'Equipped with Chroma green-screen TV studios, soundproof radio/podcast booths, editing suites, theatre stages, and music practice rooms.',
    dept: 'Journalism & Mass Comm, Film & TV, Performing Arts, Fine Arts',
    nearestFood: 'MSB Garden Cafe &CCD',
    timings: '08:30 AM - 05:30 PM',
    transit: 'Central West Academic Zone',
    icon: 'fa-video',
    color: '#2563eb'
  },
  {
    id: 'block-55-agri',
    name: 'Block 55 to 57 - School of Agriculture & Polyhouse Farms',
    shortName: 'Block 55-57 (ICAR Agriculture)',
    category: 'academic',
    coords: [31.2572, 75.7012],
    description: 'India’s first private ICAR-accredited Agriculture school featuring automated climate-controlled polyhouses, hydroponics, soil labs, and organic crop fields.',
    dept: 'B.Sc (Hons.) Agriculture, Agronomy, Horticulture, Genetics',
    nearestFood: 'Sports Complex Juice Bar & Organic Farm Kiosk',
    timings: '08:00 AM - 05:00 PM',
    transit: '10 min E-Rickshaw toward North-West Campus',
    icon: 'fa-wheat-awn',
    color: '#2563eb'
  },

  // ================= FOOD COURTS & FAMOUS EATERIES (MAP PINS) =================
  {
    id: 'food-unimall-fc',
    name: 'UniMall 3rd Floor Mega Branded Food Court',
    shortName: 'UniMall Food Court (Level 3)',
    category: 'food',
    coords: [31.2526, 75.7051],
    description: 'Air-conditioned multi-brand food hub featuring Domino’s Pizza, Subway, Chaayos, Baskin Robbins, Wow! Momo, South Indian Dosa, and Chinese bowls.',
    dept: 'Multi-Brand Dining, AC Seating for 600+ Vertos',
    nearestFood: 'Domino’s, Subway, Chaayos, Baskin Robbins inside!',
    timings: '10:00 AM - 10:00 PM',
    transit: 'UniMall Elevators / Escalators to 3rd Floor',
    icon: 'fa-pizza-slice',
    color: '#f59e0b'
  },
  {
    id: 'food-rollers-nk',
    name: 'NK Food Court & Block 32-34 Underpass Rollers Hub',
    shortName: 'NK Food Court & Rollers (B-34)',
    category: 'food',
    coords: [31.2546, 75.7027],
    description: 'The busiest student lunch hotspot between CSE Block 32 and Mech Block 34. Famous for Kathi Rolls, Chole Bhature, Masala Dosa, Manchurian, and Cold Coffee.',
    dept: 'Quick Student Bites, Kathi Rolls, North & South Indian',
    nearestFood: 'Rollers, NK Dosa Counter, Fresh Shake Bar',
    timings: '08:30 AM - 11:00 PM',
    transit: 'Right inside Block 32–34 Underpass',
    icon: 'fa-utensils',
    color: '#f59e0b'
  },
  {
    id: 'food-kitchenette',
    name: 'Kitchenette & Oven Express Campus Bakery',
    shortName: 'Kitchenette & Oven Express',
    category: 'food',
    coords: [31.2535, 75.7039],
    description: 'Verto-favorite bakery and continental cafe famous for White Sauce Pasta, Grilled Sandwiches, Birthday Cakes, Paneer Patties, and Hazelnut Cold Coffee.',
    dept: 'Bakery, Continental Cafe & Birthday Celebrations',
    nearestFood: 'Oven Express Pastries, Kitchenette Pasta & Burgers',
    timings: '09:00 AM - 10:30 PM',
    transit: '2 min walk from Unipolis / Block 30',
    icon: 'fa-cake-candles',
    color: '#f59e0b'
  },
  {
    id: 'food-protein-house',
    name: 'Protein House & Sports Complex Healthy Cafe',
    shortName: 'Protein House (Gym Diet Cafe)',
    category: 'food',
    coords: [31.2562, 75.7024],
    description: 'Dedicated clean-eating & fitness nutrition bar serving Grilled Paneer/Tofu Salads, Boiled Egg Whites, Oats, Whey Smoothies, and Cold-Pressed Juices.',
    dept: 'Gym Nutrition, High-Protein Meals & Smoothies',
    nearestFood: 'Whey Shakes, Grilled Paneer Bowl, Sprout Chaat',
    timings: '06:30 AM - 09:30 PM',
    transit: 'Outside Shanti Devi Mittal Indoor Stadium',
    icon: 'fa-dumbbell',
    color: '#f59e0b'
  },
  {
    id: 'food-bh4-night',
    name: 'BH-4 Midnight Canteen & Hostel Food Plaza',
    shortName: 'BH-4 Night Canteen (Till 2:30 AM)',
    category: 'food',
    coords: [31.2524, 75.7070],
    description: 'Legendary late-night study fuel spot for hostellers during exams and hackathons. Serves Cheese Maggi, Parathas, Burger combos, and Oreo Shakes till 2:30 AM.',
    dept: 'Late-Night Hostel Canteen & Room Delivery',
    nearestFood: 'Cheese Maggi, Aloo Paratha, Oreo Shake, Cold Coffee',
    timings: '08:00 PM - 02:30 AM',
    transit: 'Boys Hostel 4 Courtyard',
    icon: 'fa-mug-hot',
    color: '#f59e0b'
  },

  // ================= CENTRAL AMENITIES, ARENAS & FACILITIES =================
  {
    id: 'unimall',
    name: 'UniMall - 4-Floor Shopping, Banking & Lifestyle Complex',
    shortName: 'UniMall (Central Shopping Hub)',
    category: 'amenities',
    coords: [31.2525, 75.7048],
    description: '4-floor campus mall featuring WHSmith, Supermarket, Gadget & Laptop Service Center, Salon, Stationery, Optical Store, India Post Office, and Banks/ATMs.',
    dept: 'Supermarket, Stationery, Salon, Banks, ATMs, Post Office',
    nearestFood: '3rd Floor Food Court, Waffle Point, Sweet Shop',
    timings: '09:00 AM - 10:00 PM',
    transit: 'Heart of Campus (5 min from Gate 1)',
    icon: 'fa-bag-shopping',
    color: '#059669'
  },
  {
    id: 'unipolis',
    name: 'Baldev Raj Mittal Unipolis (10,000+ Open-Air Arena)',
    shortName: 'Unipolis Mega Arena',
    category: 'amenities',
    coords: [31.2530, 75.7032],
    description: 'The iconic grand amphitheater of LPU. Hosts One India, One World, YouthVibe, Coke Studio concerts, celebrity nights, and mega hackathons for 10,000+ Vertos.',
    dept: 'One India, One World, YouthVibe, Celebrity Concerts',
    nearestFood: 'Unipolis Food Gazebos, Kitchenette & UniMall',
    timings: 'Open Amphitheater (Events till 10 PM)',
    transit: 'Central Campus Plaza',
    icon: 'fa-landmark-dome',
    color: '#059669'
  },
  {
    id: 'shanti-devi-auditorium',
    name: 'Shanti Devi Mittal Auditorium (2,500 Seats)',
    shortName: 'Shanti Devi Mittal Auditorium',
    category: 'amenities',
    coords: [31.2505, 75.7035],
    description: 'World-class 2,500-seat acoustic auditorium that has hosted Prime Ministers, Nobel Laureates, 106th Indian Science Congress, Convocations, and TEDxLPU.',
    dept: 'Convocations, Indian Science Congress, TEDx, VIP Summits',
    nearestFood: 'Auditorium Lounge Cafe & Gate 1 Food Strip',
    timings: 'Event Specific',
    transit: '3 min walk from Gate 1',
    icon: 'fa-masks-theater',
    color: '#059669'
  },
  {
    id: 'sports-complex',
    name: 'Shanti Devi Mittal Indoor Stadium & Olympic Sports Complex',
    shortName: 'Indoor Stadium & Olympic Pool',
    category: 'amenities',
    coords: [31.2565, 75.7020],
    description: 'One of India’s largest university indoor stadiums: Olympic-size heated swimming pool, 12 badminton courts, shooting range, squash, mega gym, and cricket/football grounds.',
    dept: 'Olympic Training Hub (24+ LPU Olympians incl. Neeraj Chopra)',
    nearestFood: 'Protein House & Sports Juice Bar',
    timings: '06:00 AM - 09:00 PM',
    transit: 'North Campus Sports Zone (₹10 Shuttle)',
    icon: 'fa-medal',
    color: '#059669'
  },
  {
    id: 'robo-park-helipad',
    name: 'LPU Robo Park, Helipad Ground & Innovation Plaza',
    shortName: 'Robo Park & Helipad Ground',
    category: 'amenities',
    coords: [31.2540, 75.7052],
    description: 'Iconic outdoor park featuring giant scrap-metal robot sculptures built by LPU students, lush evening lawns, and the official LPU VIP Helipad.',
    dept: 'Student Hangout Park, Giant Robot Sculptures & VIP Helipad',
    nearestFood: 'Helipad Tea & Snack Gazebos, UniMall (2 min)',
    timings: '06:00 AM - 09:30 PM',
    transit: 'Between Block 30, UniMall & Hostels',
    icon: 'fa-helicopter',
    color: '#059669'
  },
  {
    id: 'uni-hospital',
    name: 'Uni-Hospital & 24x7 Emergency Healthcare Center',
    shortName: 'Uni-Hospital (24x7 Medical)',
    category: 'amenities',
    coords: [31.2550, 75.7058],
    description: '50+ bed in-campus hospital with 24x7 emergency doctors, fleet of ambulances, pathology lab, eye & dental clinics, physiotherapy, and 24-hour pharmacy.',
    dept: '24x7 Emergency, OPD, Ambulance, Dental, Pharmacy',
    nearestFood: 'Hospital Diet & Juice Canteen (Ground Floor)',
    timings: '24 Hours Open (365 Days)',
    transit: 'Behind Block 30 / Near Boys Hostels',
    icon: 'fa-hospital',
    color: '#e11d48'
  },
  {
    id: 'uni-hotel',
    name: 'Uni-Hotel (In-Campus Luxury Guest Hotel)',
    shortName: 'Uni-Hotel (Parents & Guest Stay)',
    category: 'amenities',
    coords: [31.2493, 75.7045],
    description: ' Boutique hospitality hotel right inside Gate 1 managed with LPU School of Hotel Management—ideal for visiting parents during admissions and convocations.',
    dept: 'Guest Rooms, Fine-Dining Restaurant & Banquet',
    nearestFood: 'Uni-Hotel Multi-Cuisine Fine Dining',
    timings: '24 Hours Check-in (Book via UMS / LPU Desk)',
    transit: 'Just inside Main Gate 1',
    icon: 'fa-hotel',
    color: '#059669'
  },
  {
    id: 'banks-post-office',
    name: 'Campus Banking Hub (SBI, ICICI, PNB, KVB) & India Post',
    shortName: 'Banks, 25+ ATMs & Post Office',
    category: 'amenities',
    coords: [31.2522, 75.7045],
    description: 'Full-service branches of State Bank of India (SBI), ICICI Bank, Punjab National Bank (PNB), Karur Vysya Bank, education loan desks, 25+ ATMs, and India Post Office.',
    dept: 'Student Banking, Education Loans, Courier & Speed Post',
    nearestFood: 'UniMall Cafes & CCD',
    timings: '10:00 AM - 04:00 PM (ATMs 24x7)',
    transit: 'UniMall Ground Floor & Academic Corridors',
    icon: 'fa-building-columns',
    color: '#059669'
  },
  {
    id: 'shuttle-hub',
    name: 'Campus E-Rickshaw & Battery Golf-Cart Central Stand',
    shortName: 'E-Rickshaw Shuttle Stand (₹10)',
    category: 'amenities',
    coords: [31.2482, 75.7041],
    description: 'Eco-friendly electric e-rickshaw and golf-cart fleet connecting Gate 1, UniMall, Block 32–38, Indoor Stadium, and Hostels BH-1..8 / GH-1..6 every 2 minutes.',
    dept: 'Zero-Emission Internal Campus Transit (₹10 - ₹20)',
    nearestFood: 'Gate 1 Refreshment Booths',
    timings: '06:30 AM - 10:00 PM',
    transit: 'Main Hub just inside Gate 1 & UniMall',
    icon: 'fa-van-shuttle',
    color: '#059669'
  },

  // ================= BOYS & GIRLS HOSTELS + APARTMENTS =================
  {
    id: 'bh-1-2',
    name: 'Boys Hostel 1 & 2 (BH-1 & BH-2)',
    shortName: 'BH-1 & BH-2',
    category: 'hostel',
    coords: [31.2510, 75.7065],
    description: 'Undergraduate boys residential blocks with AC/Cooler rooms, study lounges, high-speed Sophos Wi-Fi, Uni-Laundry collection desk, and dual-wing mess halls.',
    dept: 'Boys Residential Wing, BH-1/2 Warden Office & Laundry',
    nearestFood: 'BH-1 & BH-2 Central Mess, Night Tuck Shop',
    timings: 'Biometric Entry: 06:00 AM - 08:30 PM',
    transit: '4 min walk to UniMall',
    icon: 'fa-building-user',
    color: '#9333ea'
  },
  {
    id: 'bh-3-4',
    name: 'Boys Hostel 3 & 4 (BH-3 & BH-4 Main Complex)',
    shortName: 'BH-3 & BH-4 (Main Boys Wing)',
    category: 'hostel',
    coords: [31.2522, 75.7072],
    description: 'Vibrant boys hostel complex with 800-seater mega mess hall, outdoor badminton & volleyball courts, barber shop, stationery tuck shop, and 2:30 AM night canteen.',
    dept: 'Boys Residential Block, Mess Committee HQ',
    nearestFood: 'BH-4 Central Mess, South Special Counter & Night Canteen',
    timings: 'Biometric Entry: 06:00 AM - 08:30 PM',
    transit: '5 min walk to Robo Park & UniMall',
    icon: 'fa-building-user',
    color: '#9333ea'
  },
  {
    id: 'bh-5-6',
    name: 'Boys Hostel 5 & 6 (BH-5 & BH-6)',
    shortName: 'BH-5 & BH-6',
    category: 'hostel',
    coords: [31.2538, 75.7075],
    description: 'High-capacity multi-seater residential wings equipped with high-speed elevators, indoor TT & recreation rooms, RO water coolers, and integrated dining halls.',
    dept: 'Boys Residential Wing & Indoor Recreation',
    nearestFood: 'BH-5 & 6 Mess Hall & Evening Snack Booth',
    timings: 'Biometric Entry: 06:00 AM - 08:30 PM',
    transit: 'Near Uni-Hospital & East Campus Road',
    icon: 'fa-building-user',
    color: '#9333ea'
  },
  {
    id: 'bh-7-8',
    name: 'Boys Hostel 7 & 8 (BH-7 & BH-8 High-Rise Towers)',
    shortName: 'BH-7 & BH-8 Towers',
    category: 'hostel',
    coords: [31.2555, 75.7070],
    description: 'Modern high-rise residential towers overlooking athletic fields, featuring attached gymnasium, study rooms, laundrymart, and multi-cuisine mess.',
    dept: 'Senior & International Boys Wing',
    nearestFood: 'BH-8 Tower Mess & Cafe-8 Midnight Corner',
    timings: 'Biometric Entry: 06:00 AM - 08:30 PM',
    transit: '5 min walk to Block 34–38 & Law Gate',
    icon: 'fa-building-user',
    color: '#9333ea'
  },
  {
    id: 'apartments-hostel',
    name: 'LPU Residential Apartments (APT 1 to 4 - Studio Suites)',
    shortName: 'LPU Studio Apartments (APT)',
    category: 'hostel',
    coords: [31.2564, 75.7062],
    description: 'Premium apartment-style AC suites (1/2/3/4 seater) with attached living lounge, pantry area, private balconies, and dedicated executive dining access.',
    dept: 'Premium AC Apartment Accommodation & International Scholars',
    nearestFood: 'Apartment Executive Dining & Cafe-8',
    timings: 'Biometric Smart Turnstile Access',
    transit: 'North-East Residential Enclave',
    icon: 'fa-city',
    color: '#9333ea'
  },
  {
    id: 'gh-1-3',
    name: 'Girls Hostel Complex 1, 2 & 3 (GH-1 to GH-3)',
    shortName: 'GH-1, GH-2 & GH-3 Complex',
    category: 'hostel',
    coords: [31.2498, 75.7015],
    description: '24x7 double-gated secure women’s residential enclave with female security officers, landscaped lawns, in-house beauty parlor, grocery store, and hygienic mess.',
    dept: 'Girls Hostel Administration Wing A',
    nearestFood: 'GH-1/2 Grand Mess, In-House Bakery & Juice Bar',
    timings: 'Biometric In-Time: 07:30 PM (Extendable via UMS Pass)',
    transit: '3 min walk to MSB, Auditorium & Central Library',
    icon: 'fa-shield-heart',
    color: '#d946ef'
  },
  {
    id: 'gh-4-6',
    name: 'Girls Hostel Towers 4, 5 & 6 (GH-4 to GH-6)',
    shortName: 'GH-4, GH-5 & GH-6 Towers',
    category: 'hostel',
    coords: [31.2488, 75.7028],
    description: 'High-rise girls hostel complex featuring AC rooms, reading cubicles, indoor fitness & yoga studio, automated Uni-Laundry, night canteen, and special diet mess.',
    dept: 'Girls Hostel Administration Wing B',
    nearestFood: 'GH-5 Dining Hall, Diet Mess & GH Night Canteen',
    timings: 'Biometric In-Time: 07:30 PM',
    transit: 'Near Gate 1 & Shanti Devi Mittal Auditorium',
    icon: 'fa-shield-heart',
    color: '#d946ef'
  },

  // ================= CAMPUS GATES & TRANSIT =================
  {
    id: 'gate-1',
    name: 'LPU Main Gate 1 (NH-44 Jalandhar-Delhi GT Road)',
    shortName: 'Gate 1 (Main Highway Entrance)',
    category: 'gates',
    coords: [31.2475, 75.7042],
    description: 'Monumental main entrance on NH-44 GT Road. Houses Chief Security Control, Visitor Pass Counter, LPU Bus Fleet Terminal, Auto/Cab Stand, and Foot Overbridge.',
    dept: 'Chief Security Control, Visitor Entry, Bus & Cab Terminal',
    nearestFood: 'Gate 1 Kulcha Hub, Haveli (5 km on GT Road)',
    timings: '24x7 Guarded Main Access',
    transit: 'Phagwara Jn (7 km) • Jalandhar Cantt (8 km)',
    icon: 'fa-torii-gate',
    color: '#f43f5e'
  },
  {
    id: 'gate-1a-fob',
    name: 'Gate 1A & NH-44 Highway Foot Overbridge',
    shortName: 'Gate 1A (Bus & Foot Overbridge)',
    category: 'gates',
    coords: [31.2478, 75.7030],
    description: 'Safe elevated pedestrian foot-overbridge crossing the busy 6-lane NH-44 highway directly to bus boarding bays for Jalandhar, Ludhiana, Amritsar, and Chandigarh.',
    dept: 'Day-Scholar Bus Boarding & Highway Crossing',
    nearestFood: 'Gate 1A Juice & Snack Kiosks',
    timings: '06:00 AM - 09:30 PM',
    transit: 'Direct inter-city bus pickup point',
    icon: 'fa-bridge',
    color: '#f43f5e'
  },
  {
    id: 'gate-2',
    name: 'Gate 2 - Chaheru Railway Station & West Link',
    shortName: 'Gate 2 (Chaheru Station Link)',
    category: 'gates',
    coords: [31.2540, 75.6995],
    description: 'Convenient western gate connecting towards Chaheru Railway Station (2 km) and Jalandhar Cantt direction for local commuters and two-wheelers.',
    dept: 'West Security Checkpoint',
    nearestFood: 'Chaheru Transit Dhabas & Tea Stalls',
    timings: '06:00 AM - 08:30 PM',
    transit: '2 km to Chaheru Railway Station',
    icon: 'fa-train-subway',
    color: '#f43f5e'
  },
  {
    id: 'gate-3',
    name: 'Gate 3 - Sports Complex & Agriculture Research Gate',
    shortName: 'Gate 3 (Sports & Agri Link)',
    category: 'gates',
    coords: [31.2570, 75.7030],
    description: 'Northern logistics, sports contingent, and agriculture farm gate situated between the Indoor Olympic Stadium and School of Agriculture.',
    dept: 'Sports Contingent & Logistics Security',
    nearestFood: 'Protein House & Stadium Cafe',
    timings: '06:30 AM - 07:30 PM',
    transit: 'North Campus Perimeter',
    icon: 'fa-door-open',
    color: '#f43f5e'
  },
  {
    id: 'gate-4',
    name: 'Gate 4 - Famous Law Gate (PG Colony & Street Food Hub)',
    shortName: 'Gate 4 (Law Gate Hub)',
    category: 'gates',
    coords: [31.2575, 75.7050],
    description: 'LPU’s buzzing northern student hub connecting directly to Law Gate market—home to 500+ student PGs, cafés, print/binding shops, gyms, and street food stalls.',
    dept: 'Biometric Turnstile & Day-Scholar PG Entry',
    nearestFood: 'Law Gate Food Street (Momos, Kulcha, Biryani, Rolls, Chai)',
    timings: '06:00 AM - 09:30 PM',
    transit: '3 min walk from Block 36 & Block 38',
    icon: 'fa-utensils',
    color: '#f43f5e'
  }
];

// ========================================================
// 7-DAY OFFICIAL LPU HOSTEL MESS FOOD MENU
// Accurate standard 4-meal cycle for Lovely Professional University
// ========================================================

const MESS_SCHEDULE = {
  monday: {
    dayName: 'Monday',
    theme: 'North-Indian Classics',
    meals: {
      breakfast: {
        title: 'Morning Energy Breakfast',
        timing: '07:30 AM - 09:30 AM',
        items: [
          'Crispy Aloo Pyaaz Paratha (Tawa Fresh)',
          'Fresh Chilled Curd (Dahi) & Punjabi Mixed Pickle',
          'Boiled Sprouted Moong Salad with Lemon & Green Chillies',
          'Hot Masala Chai / Fresh Buffalo Milk',
          'Bread Slices (White & Brown) with Amul Butter & Jam'
        ],
        special: 'Stuffed Tawa Parathas with creamy curd',
        calories: '540 kcal',
        isVeg: true,
        dietary: ['High Protein', 'Dairy Rich', 'Traditional'],
        rating: 4.5,
        votes: 342
      },
      lunch: {
        title: 'Nutritious Punjabi Lunch',
        timing: '12:00 PM - 02:30 PM',
        items: [
          'Punjabi Rajma Masala (Slow-cooked red kidney beans)',
          'Steamed Fragrant Basmati Rice',
          'Aloo Gobi Adraki (Dry Cauliflower & Potato Sabzi)',
          'Tawa Phulka / Roti with Ghee',
          'Fresh Green Salad (Cucumber, Beetroot, Onion)',
          'Roasted Crispy Papad'
        ],
        special: 'Homestyle Rajma-Chawal combo with ghee phulkas',
        calories: '680 kcal',
        isVeg: true,
        dietary: ['Fiber Rich', 'Slow Carbs', 'Comfort Food'],
        rating: 4.6,
        votes: 418
      },
      snacks: {
        title: 'Evening Refreshment & Tea',
        timing: '04:30 PM - 05:30 PM',
        items: [
          'Crisp Punjabi Samosa with Mint-Coriander & Saunth Chutney',
          'Adrak & Elaichi Wali Chai (Hot Ginger Cardamom Tea)',
          'Parle-G & Marie Biscuits'
        ],
        special: 'Piping hot fresh samosas with cutting chai',
        calories: '280 kcal',
        isVeg: true,
        dietary: ['Evening Energizer', 'Classic Street Treat'],
        rating: 4.7,
        votes: 512
      },
      dinner: {
        title: 'Comforting Dinner Feast',
        timing: '07:30 PM - 09:30 PM',
        items: [
          'Paneer Butter Masala (Cottage cheese cubes in rich tomato gravy)',
          'Dal Tadka with Garlic & Cumin Tempering',
          'Jeera Pea Pulao Rice',
          'Soft Tawa Rotis',
          'Sweet Treats: Kesar Vermicelli Kheer (Sewaiyan)'
        ],
        special: 'Rich Paneer Butter Masala & warm vermicelli kheer',
        calories: '720 kcal',
        isVeg: true,
        dietary: ['High Protein', 'Sweet Dessert Included'],
        rating: 4.8,
        votes: 620
      }
    }
  },

  tuesday: {
    dayName: 'Tuesday',
    theme: 'Healthy Start & Kadhi Specials',
    meals: {
      breakfast: {
        title: 'Light & Energizing Breakfast',
        timing: '07:30 AM - 09:30 AM',
        items: [
          'Indori Poha garnished with crunchy roasted peanuts & ratlami sev',
          'Steamed Corn & Kala Chana Chaat',
          'Hot Bournvita / Warm Spiced Milk',
          'Toasted Bread with Mixed Fruit Jam',
          'Seasonal Fresh Banana'
        ],
        special: 'Indori spiced Poha with fresh roasted peanuts',
        calories: '490 kcal',
        isVeg: true,
        dietary: ['Iron Rich', 'Light Digestive', 'Gluten Free Option'],
        rating: 4.2,
        votes: 290
      },
      lunch: {
        title: 'Authentic Desi Kadhi Lunch',
        timing: '12:00 PM - 02:30 PM',
        items: [
          'Punjabi Kadhi Pakora (Spiced buttermilk curry with soft onion fritters)',
          'Jeera Rice (Basmati rice infused with toasted cumin)',
          'Aloo French Beans Sabzi',
          'Soft Tawa Roti',
          'Boondi Raita / Plain Butter Curd',
          'Papad & Lemon-chilli garnish'
        ],
        special: 'Tangy Punjabi Kadhi with crispy pakoras',
        calories: '650 kcal',
        isVeg: true,
        dietary: ['Probiotic', 'Tangy & Satisfying'],
        rating: 4.4,
        votes: 380
      },
      snacks: {
        title: 'Crispy Evening Chai Time',
        timing: '04:30 PM - 05:30 PM',
        items: [
          'Crispy Mixed Vegetable Cutlets with Tomato Ketchup',
          'Hot Ginger Masala Tea / Black Coffee',
          'Sweet Rusk'
        ],
        special: 'Golden fried vegetable cutlets',
        calories: '260 kcal',
        isVeg: true,
        dietary: ['Crunchy Snack'],
        rating: 4.1,
        votes: 275
      },
      dinner: {
        title: 'Deluxe Chole & Poori Night',
        timing: '07:30 PM - 09:30 PM',
        items: [
          'Amritsari Pindi Chole (Tender dark chickpeas in whole spices)',
          'Fluffy Bedmi Pooris & Soft Tawa Rotis',
          'Vegetable Biryani Rice with Mint',
          'Kachumber Salad (Chopped onions, tomatoes, coriander)',
          'Dessert: Soft Hot Gulab Jamun (1-2 pcs)'
        ],
        special: 'Amritsari Chole with hot fluffy pooris and gulab jamun',
        calories: '750 kcal',
        isVeg: true,
        dietary: ['High Fiber Chickpeas', 'Dessert Delight'],
        rating: 4.7,
        votes: 560
      }
    }
  },

  wednesday: {
    dayName: 'Wednesday',
    theme: 'South-Indian Flare & Shahi Paneer',
    meals: {
      breakfast: {
        title: 'South Indian Coastal Delight',
        timing: '07:30 AM - 09:30 AM',
        items: [
          'Steamed Soft Idlis & Golden Crispy Medu Vadas',
          'Drumstick & Veggie Sambhar (Hot & Tangy)',
          'Fresh Coconut Chutney & Tomato-Onion Dip',
          'Filter Coffee / Elaichi Tea',
          'Bread & Butter station'
        ],
        special: 'Crispy Medu Vada dipped in piping hot sambhar',
        calories: '510 kcal',
        isVeg: true,
        dietary: ['Fermented Gut-Friendly', 'South Indian Classic'],
        rating: 4.6,
        votes: 490
      },
      lunch: {
        title: 'Protein-Packed Wednesday Lunch',
        timing: '12:00 PM - 02:30 PM',
        items: [
          'Black Chana Rassa Masala (Brown chickpea wholesome curry)',
          'Seasonal Aloo Shimla Mirch (Capsicum & potato dry roast)',
          'Steamed Long Grain White Rice',
          'Fresh Ghee Phulka Rotis',
          'Carrot & Radish Salad with Green Chillies',
          'Spiced Buttermilk (Chaas) Glass'
        ],
        special: 'Chilled spiced chaas with healthy black chana curry',
        calories: '630 kcal',
        isVeg: true,
        dietary: ['High Protein', 'Hydrating Chaas'],
        rating: 4.3,
        votes: 310
      },
      snacks: {
        title: 'Warm Beverage & Cookies',
        timing: '04:30 PM - 05:30 PM',
        items: [
          'Veg Spring Roll Slices / Puff Pastry Patties',
          'Hot Filter Coffee or Masala Tea',
          'Butter Biscuits'
        ],
        special: 'Crispy potato pastry puffs with masala chai',
        calories: '270 kcal',
        isVeg: true,
        dietary: ['Comfort Snack'],
        rating: 4.3,
        votes: 320
      },
      dinner: {
        title: 'Royal Mughal Wednesday Dinner',
        timing: '07:30 PM - 09:30 PM',
        items: [
          'Shahi Paneer (Paneer cubes in silky cashew-tomato gravy)',
          'Panchmel Dal (5-Lentil comforting yellow dal)',
          'Steamed Green Peas Pulao',
          'Hot Tandoori Style Roti / Phulka',
          'Sweet Treat: Chilled Fruit Custard with Fresh Apples & Grapes'
        ],
        special: 'Rich Shahi Paneer with chilled fruit custard',
        calories: '710 kcal',
        isVeg: true,
        dietary: ['Royal Feast', 'Fruit Enriched Dessert'],
        rating: 4.8,
        votes: 640
      }
    }
  },

  thursday: {
    dayName: 'Thursday',
    theme: 'Traditional Homestyle Comfort',
    meals: {
      breakfast: {
        title: 'Crispy Methi Paratha Morning',
        timing: '07:30 AM - 09:30 AM',
        items: [
          'Stuffed Methi & Ajwain Paratha (Fenugreek flatbread)',
          'Fresh White Butter (Makkhan) & Spiced Dahi',
          'Sweet Corn & Moong Sprout Bowl',
          'Hot Chai / Turmeric Spiced Milk',
          'Toasted Bread with Jam & Honey'
        ],
        special: 'Fenugreek herbal parathas with fresh makkhan',
        calories: '530 kcal',
        isVeg: true,
        dietary: ['Ayurvedic Fenugreek', 'Wholesome Greens'],
        rating: 4.4,
        votes: 315
      },
      lunch: {
        title: 'Dhabe Wali Dal & Sabzi Lunch',
        timing: '12:00 PM - 02:30 PM',
        items: [
          'Dal Tadka Dhaba Style (Double tadka with garlic & whole red chillies)',
          'Aloo Matar Paneer dry bhujia',
          'Steamed Jeera Rice',
          'Tawa Rotis with Ghee',
          'Cucumber & Onion Kachumber Salad',
          'Mint Boondi Raita'
        ],
        special: 'Smoky Dhaba Dal Tadka with fresh green peas bhujia',
        calories: '640 kcal',
        isVeg: true,
        dietary: ['Hearty Flavors', 'Balanced Carbs'],
        rating: 4.5,
        votes: 395
      },
      snacks: {
        title: 'Monsoon Style Pakoras',
        timing: '04:30 PM - 05:30 PM',
        items: [
          'Crunchy Pyaaz & Palak Bhajia (Onion spinach fritters)',
          'Kadhak Masala Chai (Special boiled milk tea)',
          'Green Mint & Garlic Dip'
        ],
        special: 'Crisp onion-spinach pakoras with piping hot chai',
        calories: '290 kcal',
        isVeg: true,
        dietary: ['Rainy Day Favorite', 'Spiced'],
        rating: 4.7,
        votes: 530
      },
      dinner: {
        title: 'Rich Kofta & Halwa Night',
        timing: '07:30 PM - 09:30 PM',
        items: [
          'Malai Kofta / Veg Kofta in creamy golden onion gravy',
          'Moong Dal Fry with fresh coriander',
          'Steamed Long Grain Basmati Rice',
          'Butter Tawa Phulka',
          'Dessert: Hot Desi Ghee Moong Dal Halwa'
        ],
        special: 'Melt-in-mouth Malai Kofta & rich Desi Ghee Moong Dal Halwa',
        calories: '740 kcal',
        isVeg: true,
        dietary: ['Sweet Tooth Favorite', 'Pure Vegetarian'],
        rating: 4.7,
        votes: 590
      }
    }
  },

  friday: {
    dayName: 'Friday',
    theme: 'Cheesy & Special Coastal Vibes',
    meals: {
      breakfast: {
        title: 'Onion Uttapam & Dalia Breakfast',
        timing: '07:30 AM - 09:30 AM',
        items: [
          'Thick Veg Onion & Tomato Uttapam with golden crust',
          'Vegetable Daliya (Healthy broken wheat savory porridge)',
          'Red Tomato Chutney & Coconut Dip',
          'Hot Masala Tea / Coffee / Warm Milk',
          'Boiled Eggs / Protein peanut spread corner'
        ],
        special: 'Freshly cast griddle Uttapams with two chutneys',
        calories: '500 kcal',
        isVeg: true,
        dietary: ['High Fiber Broken Wheat', 'South Indian Griddle'],
        rating: 4.3,
        votes: 330
      },
      lunch: {
        title: 'Punjabi Chole & Jeera Aloo',
        timing: '12:00 PM - 02:30 PM',
        items: [
          'White Chole Masala (Kabuli Chana in authentic Punjabi masala)',
          'Crispy Jeera Aloo Roast with fenugreek garnish',
          'Vegetable Pulao Rice',
          'Tawa Hot Rotis with desi butter',
          'Chilled Beetroot Curd Raita',
          'Sirke Wale Pyaaz (Pickled pink onions)'
        ],
        special: 'Pickled vinegared onions with Punjabi Chole Rice',
        calories: '670 kcal',
        isVeg: true,
        dietary: ['Rich Minerals', 'Digestive Vinegar Onions'],
        rating: 4.5,
        votes: 410
      },
      snacks: {
        title: 'Crispy Bread Pakora Friday',
        timing: '04:30 PM - 05:30 PM',
        items: [
          'Stuffed Paneer Bread Pakora with green chutney & saunth',
          'Cardamom Ginger Chai',
          'Assorted Sweet Biscuits'
        ],
        special: 'Spiced potato & paneer stuffed golden bread pakora',
        calories: '310 kcal',
        isVeg: true,
        dietary: ['Hostel Classic Favorite'],
        rating: 4.8,
        votes: 680
      },
      dinner: {
        title: 'Weekend Starter Feast',
        timing: '07:30 PM - 09:30 PM',
        items: [
          'Matar Paneer (Juicy green peas & cottage cheese in rich gravy)',
          'Dal Panchratna with roasted cumin',
          'Hyderabadi Spiced Biryani Rice with golden fried onions',
          'Soft Tawa Roti',
          'Dessert: Hot Sweet Suji Halwa garnished with cashews'
        ],
        special: 'Hyderabadi spiced veg biryani with hot cashew halwa',
        calories: '730 kcal',
        isVeg: true,
        dietary: ['Weekend Kickoff', 'Aromatic Rice'],
        rating: 4.6,
        votes: 520
      }
    }
  },

  saturday: {
    dayName: 'Saturday',
    theme: 'Weekend Leisure & Paratha Bonanza',
    meals: {
      breakfast: {
        title: 'Stuffed Gobhi Paratha Brunch',
        timing: '07:30 AM - 09:30 AM',
        items: [
          'Grated Cauliflower Stuffed Gobhi Paratha',
          'Thick Set Curd with roasted cumin powder & mint',
          'Amul Butter Chiplet & Mango Pickle',
          'Hot Ginger Cardamom Chai / Coffee',
          'Toasted Multigrain Bread with Jam'
        ],
        special: 'Freshly griddled winter Gobhi parathas with white butter',
        calories: '550 kcal',
        isVeg: true,
        dietary: ['Weekend Feast', 'Comfort Classic'],
        rating: 4.7,
        votes: 540
      },
      lunch: {
        title: 'Tangy Sambhar & Lemon Rice',
        timing: '12:00 PM - 02:30 PM',
        items: [
          'South Indian Vegetable Sambhar with drumsticks',
          'Tangy Lemon Rice with curry leaves & roasted peanuts',
          'Aloo Jeera Sukhi Sabzi',
          'Tawa Chapati',
          'Crispy Appalam / Papad',
          'Mix Veg Green Salad'
        ],
        special: 'Fragrant lemon rice with crunchy peanuts & appalam',
        calories: '620 kcal',
        isVeg: true,
        dietary: ['Vitamin C Rich', 'Zesty & Light'],
        rating: 4.3,
        votes: 310
      },
      snacks: {
        title: 'Leisure Evening Snacks',
        timing: '04:30 PM - 05:30 PM',
        items: [
          'Crispy Veg Spring Rolls or Aloo Tikki Chaat',
          'Hot Cutting Chai or Cold Iced Tea',
          'Butter Rusks'
        ],
        special: 'Tangy Aloo Tikki with sweet and green chutneys',
        calories: '280 kcal',
        isVeg: true,
        dietary: ['Street Food Special'],
        rating: 4.4,
        votes: 380
      },
      dinner: {
        title: 'Saturday Special Mushroom & Dal Makhani',
        timing: '07:30 PM - 09:30 PM',
        items: [
          'Mushroom Matar Do Pyaza (Button mushrooms in caramelized onion sauce)',
          'Authentic Dal Makhani (Slow-cooked black lentils overnight with butter)',
          'Jeera Rice with coriander leaves',
          'Tawa Butter Roti',
          'Dessert: Crunchy Hot Jalebi with Rabri / Ice Cream'
        ],
        special: 'Velvety overnight Dal Makhani with hot syrupy jalebis',
        calories: '760 kcal',
        isVeg: true,
        dietary: ['Overnight Simmered Lentils', 'Dessert Star'],
        rating: 4.9,
        votes: 720
      }
    }
  },

  sunday: {
    dayName: 'Sunday',
    theme: 'Mega Grand Sunday Special',
    meals: {
      breakfast: {
        title: 'Grand Chole Bhature Sunday Feast',
        timing: '07:30 AM - 10:00 AM (Extended)',
        items: [
          'Giant Fluffy Amritsari Bhature (Freshly fried to order)',
          'Spicy Tangy Punjabi Chole with ginger juliennes',
          'Sweet Punjabi Lassi / Masala Chaas tall glass',
          'Achar, Green Chilli & Onion Salad',
          'Alternative: Boiled Sprout Chaat & Toast for fitness buffs'
        ],
        special: 'Piping hot balloon bhaturas with rich chole and chilled lassi',
        calories: '780 kcal',
        isVeg: true,
        dietary: ['Highest Rated Meal of the Week', 'Sunday Mega Special'],
        rating: 4.9,
        votes: 890
      },
      lunch: {
        title: 'Dum Biryani & Salan Sunday Lunch',
        timing: '12:00 PM - 02:30 PM',
        items: [
          'Shahi Vegetable Dum Biryani layered with saffron, mint & fried onions',
          'Mirchi Ka Salan (Hyderabadi peanut & sesame pepper gravy)',
          'Cucumber & Mint Burani Raita',
          'Aloo Gobhi dry fry',
          'Tawa Phulka Roti',
          'Fryums & Roasted Papad'
        ],
        special: 'Saffron infused Dum Biryani with authentic Mirchi Ka Salan',
        calories: '690 kcal',
        isVeg: true,
        dietary: ['Aromatic Saffron Layered', 'Hyderabadi Style'],
        rating: 4.7,
        votes: 610
      },
      snacks: {
        title: 'Sunday Sunset Chai & Cake',
        timing: '04:30 PM - 05:30 PM',
        items: [
          'Rich Fruit Cake Slice / Chocolate Muffin',
          'Adrak-Elaichi Wali Masala Chai',
          'Savory Namkeen Mixture'
        ],
        special: 'Bakery fruit cake with hot masala chai',
        calories: '260 kcal',
        isVeg: true,
        dietary: ['Bakery Treat'],
        rating: 4.5,
        votes: 410
      },
      dinner: {
        title: 'Grand Sunday Royal Banquet Dinner',
        timing: '07:30 PM - 09:30 PM',
        items: [
          'Paneer Tikka Butter Masala (Tandoor smoked paneer in velvet gravy)',
          'Dal Maharani (Slow stewed creamy black dal with cream swirl)',
          'Kashmiri Dry Fruit Pulao Rice',
          'Butter Tandoori Style Roti / Missi Roti',
          'Dessert: Vanilla / Butterscotch Ice Cream Cup or Warm Rasgulla'
        ],
        special: 'Smoked Paneer Tikka Masala, Kashmiri Pulao & Ice Cream',
        calories: '770 kcal',
        isVeg: true,
        dietary: ['Grand Weekend Finale', 'Ice Cream Dessert'],
        rating: 4.9,
        votes: 840
      }
    }
  }
};

// ========================================================
// CAMPUS EATERIES, UNIMALL FOOD COURT & ICONIC LPU CAFES (12 SPOTS)
// ========================================================

const CAMPUS_EATERIES = [
  {
    id: 'unimall-foodcourt',
    name: 'UniMall 3rd Floor Mega Food Court',
    location: 'UniMall, Level 3 (Central Campus)',
    type: 'unimall',
    timing: '10:00 AM - 10:00 PM',
    rating: 4.8,
    priceRange: '₹₹ (₹99 - ₹320)',
    highlights: 'Domino’s Pizza, Subway, Chaayos, Baskin Robbins, Wow! Momo, Dosa Express',
    description: 'Central air-conditioned 600-seater food court packing top national chains under one roof with UPI & Pocket-friendly combo deals.',
    phone: '+91 1824 517401',
    tags: ['Branded Chains', 'Air Conditioned', 'Domino’s & Subway', 'UniMall'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'rollers-34',
    name: 'Rollers Underpass Hub (Block 32–34)',
    location: 'Underpass between Block 32 (CSE) & Block 34',
    type: 'kiosk',
    timing: '08:30 AM - 11:00 PM',
    rating: 4.8,
    priceRange: '₹ (₹60 - ₹150)',
    highlights: 'Paneer Makhani Roll, Double Egg Roll, Crispy Soya Chaap Roll, Peri-Peri Fries',
    description: 'The #1 between-lectures hunger savior for CSE & Engineering Vertos. Piping-hot laccha paratha rolls served in under 3 minutes.',
    phone: '+91 98721 00234',
    tags: ['CSE Favorite', 'Budget Friendly', 'Kathi Rolls', 'Underpass'],
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'nk-food-court',
    name: 'NK Food Court & South-North Plaza',
    location: 'Adjacent to Block 34 & Robo Park',
    type: 'kiosk',
    timing: '08:30 AM - 10:00 PM',
    rating: 4.7,
    priceRange: '₹ (₹50 - ₹140)',
    highlights: 'Mysore Masala Dosa, Chole Bhature, Veg Manchurian Fried Rice, Cold Coffee',
    description: 'Open-air shaded student dining plaza famous for crispy South Indian dosas, spicy Indo-Chinese combos, and chilled shakes.',
    phone: '+91 98765 41209',
    tags: ['Dosa & Chinese', 'Quick Lunch', 'Student Crowd', 'Pocket Friendly'],
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'kitchenette-lpu',
    name: 'Kitchenette Continental & Pasta Cafe',
    location: 'Central Academic Spine near Unipolis',
    type: 'unimall',
    timing: '09:30 AM - 10:30 PM',
    rating: 4.7,
    priceRange: '₹₹ (₹90 - ₹220)',
    highlights: 'Creamy White Sauce Penne Pasta, Farmhouse Pizza, Grilled Jumbo Burger, Mojito',
    description: 'Go-to hangout cafe after classes and club meetings, loved across LPU for cheesy pastas, loaded burgers, and mocktails.',
    phone: '+91 98152 66710',
    tags: ['Pasta & Burgers', 'Club Hangout', 'Mocktails', 'Unipolis'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'oven-express',
    name: 'Oven Express Bakery & Confectionery',
    location: 'UniMall Ground Floor & Block 34 Kiosk',
    type: 'unimall',
    timing: '08:30 AM - 10:00 PM',
    rating: 4.6,
    priceRange: '₹ (₹35 - ₹180)',
    highlights: 'Baked Paneer Puff, Chocolate Truffle Birthday Cake, Doughnuts, Hazelnut Frappe',
    description: 'Every hostel birthday cake at LPU comes from Oven Express! Freshly baked puffs, croissants, pastries, and rich cold coffees.',
    phone: '+91 1824 517488',
    tags: ['Birthday Cakes', 'Bakery Puffs', 'Desserts', 'UniMall'],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'bh4-night-canteen',
    name: 'BH-4 Midnight Canteen (Till 2:30 AM)',
    location: 'Courtyard, Boys Hostel 4 (BH-4)',
    type: 'night',
    timing: '08:00 PM - 02:30 AM',
    rating: 4.7,
    priceRange: '₹ (₹40 - ₹120)',
    highlights: 'Double Cheese Maggi, Aloo Pyaaz Paratha, Paneer Bhurji, Thick Oreo Shake',
    description: 'The ultimate midnight fuel station during End-Term exams and coding nights. Delivers hot parathas and Maggi till 2:30 AM.',
    phone: '+91 98724 99811',
    tags: ['Late Night (2:30 AM)', 'Exam Fuel', 'Maggi & Parathas', 'BH-4'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'gh-night-bakery',
    name: 'GH Central Night Canteen & Waffle Bar',
    location: 'Inside Girls Hostel Complex (GH-2 / GH-5)',
    type: 'night',
    timing: '07:30 PM - 01:30 AM',
    rating: 4.6,
    priceRange: '₹ (₹45 - ₹140)',
    highlights: 'Belgian Chocolate Waffle, Peri-Peri Maggi, Momos, Hot Chocolate, Fruit Smoothies',
    description: 'Exclusive inside-complex late evening cafe for GH residents so girls can enjoy hot snacks & waffles safely after 7:30 PM biometric curfew.',
    phone: '+91 98724 77102',
    tags: ['GH Exclusive', 'Late Night', 'Waffles & Momos', 'Safe Inside GH'],
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'protein-house-gym',
    name: 'Protein House — Fitness & Gym Diet Bar',
    location: 'Near Indoor Olympic Stadium & Block 55',
    type: 'kiosk',
    timing: '06:30 AM - 09:30 PM',
    rating: 4.8,
    priceRange: '₹ (₹60 - ₹190)',
    highlights: 'Grilled Tandoori Paneer Salad, Boiled Egg Bowl, Peanut Butter Banana Whey Shake, Oats',
    description: 'Macro-counted high-protein meals and post-workout shakes crafted for LPU athletes, swimmers, and hostel gym regulars.',
    phone: '+91 98882 55120',
    tags: ['Gym Diet', 'High Protein', 'Clean Eating', 'Indoor Stadium'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'cafe-coffee-day-13',
    name: 'Café Coffee Day (CCD) Central Library',
    location: 'Beside Block 13 Central Library',
    type: 'kiosk',
    timing: '08:30 AM - 10:30 PM',
    rating: 4.5,
    priceRange: '₹₹ (₹110 - ₹250)',
    highlights: 'Devil’s Own Frappe, Cappuccino, Chilli Cheese Toast, Sizzling Brownie',
    description: 'Cozy seating right next to the 9-floor Central Library—ideal for project discussions, startup pitches, and study breaks.',
    phone: '+91 1824 517440',
    tags: ['Coffee', 'Library Study Spot', 'AC Lounge', 'Block 13'],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'law-gate-food-strip',
    name: 'Law Gate Street Food & Dhaba Hub',
    location: 'Just Outside Gate 4 (Law Gate)',
    type: 'night',
    timing: '10:00 AM - 01:00 AM',
    rating: 4.7,
    priceRange: '₹ (₹40 - ₹180)',
    highlights: 'Amritsari Chole Kulche, Kurkure Tandoori Momos, Afghani Soya Chaap, Handi Biryani',
    description: 'Iconic student street-food paradise outside Gate 4 packed with vibrant Punjabi dhabas, momo carts, lassi corners, and budget thalis.',
    phone: '+91 98140 12890',
    tags: ['Law Gate', 'Street Food', 'Momos & Chaap', 'Late Evening'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'robopark-tea-gazebos',
    name: 'Robo Park & Helipad Chai Gazebos',
    location: 'Robo Park Lawns (Near Block 30 & BH-3)',
    type: 'kiosk',
    timing: '08:00 AM - 09:30 PM',
    rating: 4.6,
    priceRange: '₹ (₹20 - ₹90)',
    highlights: 'Kulhad Adrak Chai, Bun Maska, Sweet Corn Cup, Maggi, Lemon Iced Tea',
    description: 'Breezy outdoor kiosks surrounded by giant student-built robot sculptures—LPU’s favorite golden-hour evening hangout spot.',
    phone: '+91 98720 33145',
    tags: ['Kulhad Chai', 'Evening Hangout', 'Robo Park', 'Budget'],
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'underpass-juice-shanti',
    name: 'Fresh Cold-Pressed Fruit & Shake Bar',
    location: 'Near Block 30 & Uni-Hospital Road',
    type: 'kiosk',
    timing: '07:30 AM - 09:30 PM',
    rating: 4.6,
    priceRange: '₹ (₹40 - ₹100)',
    highlights: 'Anar & Mausambi Fresh Juice, Mango Mastani Shake, Mixed Fruit Chaat Bowl',
    description: '100% pure cold-pressed seasonal fruit juices and energizing shakes without artificial syrups.',
    phone: '+91 98882 34091',
    tags: ['Fresh Juice', 'Healthy', 'Fruit Bowls', 'Hydration'],
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=60'
  }
];

// ========================================================
// COMPLETE LPU A-TO-Z ENCYCLOPEDIA DATA (FOR LPU HUB TAB)
// ========================================================

const LPU_ENCYCLOPEDIA = {
  stats: [
    { label: 'Campus Area', value: '600+ Acres', sub: 'Single-Campus Smart Township on NH-44', icon: 'fa-earth-asia', color: 'text-orange-400' },
    { label: 'NAAC Accreditation', value: 'A++ Grade', sub: '3.68 / 4.0 Score (Highest Among Private Unis)', icon: 'fa-award', color: 'text-amber-400' },
    { label: 'Global Community', value: '35,000+ Vertos', sub: 'Students from 50+ Countries & All 28 States', icon: 'fa-users', color: 'text-cyan-400' },
    { label: 'Placement Record', value: '₹3 Cr / ₹64 LPA', sub: '2,000+ Recruiters • Fortune 500 Giants', icon: 'fa-briefcase', color: 'text-emerald-400' },
    { label: 'Olympic Glory', value: '24+ Olympians', sub: 'Neeraj Chopra, Bajrang Punia & Hockey Stars', icon: 'fa-medal', color: 'text-purple-400' },
    { label: 'Residential Scale', value: '16+ Hostels', sub: 'BH-1..8, GH-1..6, Apartments & Uni-Hotel', icon: 'fa-building-shield', color: 'text-rose-400' }
  ],

  blocksGuide: [
    { blocks: 'Block 1 – 4', school: 'Hotel Management, Fashion Design, Multimedia & Polytechnic', highlights: 'Uni-Hotel, Culinary Kitchens, Fashion Runways, Design Studios' },
    { blocks: 'Block 5 – 8', school: 'Pharmaceutical Sciences, Ayurveda & Physiotherapy', highlights: 'PCI Labs, Medicinal Herbal Garden, Rehab Clinics' },
    { blocks: 'Block 13', school: 'Central Library (9 Floors), DSW & School of Architecture', highlights: '1.5M+ Books, 2 AM Exam Study Halls, Student Welfare Clubs HQ' },
    { blocks: 'Block 14 & 25 – 28', school: 'Mittal School of Business (MSB), Law, Commerce & Humanities', highlights: 'ACBSP Accredited, Moot Court Hall, Mock Stock Floor' },
    { blocks: 'Block 18 – 20', school: 'Journalism, Film Production & Performing Arts', highlights: 'TV Chroma Studios, Radio Booths, Music & Theatre Stages' },
    { blocks: 'Block 29 – 31', school: 'Chancellor Secretariat, Admissions, Exam Cell & International Office', highlights: 'Block 30 Admin HQ, Fee Counters, Global Tie-ups' },
    { blocks: 'Block 32 & 33', school: 'School of Computer Science & Engineering (CSE) & Placement Cell', highlights: 'AI/DS Labs, Apple iOS Lab, Google Cloud, Career Services' },
    { blocks: 'Block 34 & 35', school: 'Mechanical, Aerospace, Mechatronics & Robotics Center', highlights: 'Real Aircraft Hangar, Formula Car Garage, Drone & 3D Labs' },
    { blocks: 'Block 36 & 37', school: 'Civil Engineering, Biotechnology, Food Tech & Basic Sciences', highlights: 'Smart City Lab, Cleanroom Biotech, Structural Testing' },
    { blocks: 'Block 38', school: 'Electronics, VLSI, IoT & Electrical Engineering', highlights: 'Chip Design Stations, Embedded IoT, Solar Microgrid' },
    { blocks: 'Block 55 – 57', school: 'School of Agriculture (ICAR Accredited) & Organic Farms', highlights: '1st Private Uni with ICAR Accreditation, Polyhouses, Hydroponics' }
  ],

  digitalPortals: [
    { name: 'UMS (University Management System)', tag: 'ums.lpu.in', icon: 'fa-server', desc: 'The digital backbone of LPU: Check attendance, timetable, CA/MTE/ETE marks, fee receipts, exam seating plans, hostel leave passes, and official announcements.' },
    { name: 'LPU Touch Mobile App', tag: 'Android & iOS', icon: 'fa-mobile-screen-button', desc: 'Scan classroom QR attendance, view Digital Verto ID, mess QR meal coupons, real-time push alerts, CGPA tracker, and gate pass barcode.' },
    { name: 'MyClass & LPU Live', tag: 'myclass.lpu.in', icon: 'fa-chalkboard-user', desc: 'Online lecture recordings, assignment uploads, coding lab submissions, doubt chat with faculty mentors, and digital course syllabi.' },
    { name: 'RMS (Relationship Mgmt System)', tag: 'UMS -> RMS Ticket', icon: 'fa-screwdriver-wrench', desc: '24-hour SLA grievance & maintenance portal—raise tickets for hostel AC/carpenter/Wi-Fi repair, academic queries, or mess feedback.' },
    { name: 'LPUNEST & Study Grant Portal', tag: 'nest.lpu.in', icon: 'fa-graduation-cap', desc: 'National Entrance & Scholarship Test offering up to 100% tuition fee scholarships based on LPUNEST, JEE, CUET, Sports, Defence & Innovation.' },
    { name: 'Sophos Campus Wi-Fi Grid', tag: '24x7 High-Speed', icon: 'fa-wifi', desc: '10+ Gbps campus-wide wireless network across all blocks, hostels, parks, and messes—login via Registration No. & Captive Portal password.' }
  ],

  festsAndCulture: [
    { title: 'One India & One World', badge: 'Flagship Cultural Mega-Carnival', icon: 'fa-globe', desc: 'LPU’s signature annual festivals where 35,000+ students transform campus roads into miniature pavilions of all 28 Indian states and 50+ countries!' },
    { title: 'YouthVibe — Global Open Fest', badge: 'Unipolis Mega Fest', icon: 'fa-music', desc: 'Pan-India cultural, tech, esports, fashion, and battle-of-bands championship with celebrity EDM & Bollywood concert nights at Unipolis.' },
    { title: '106th Indian Science Congress & VIP Summits', badge: 'Historic Milestones', icon: 'fa-atom', desc: 'Hosted Prime Ministers, Presidents, Nobel Laureates, Dalai Lama, Smriti Irani, Shah Rukh Khan, and global tech CEOs on campus.' },
    { title: 'DSW Clubs, Coding & Startup School', badge: '100+ Student Orgs', icon: 'fa-rocket', desc: 'Division of Student Welfare (Block 13) powers GDG/AWS/GFG coding chapters, Robotics Society, Entrepreneurship Cell (Startup School), NCC & NSS.' }
  ],

  transitAndRules: [
    { title: 'Internal E-Rickshaw & Golf Carts', detail: 'Available every 2 mins from Gate 1 -> UniMall -> Block 32 -> BH-8 / Stadium at flat ₹10–₹20 student fare.' },
    { title: 'Rail & Airport Connectivity', detail: 'Chaheru Station (2 km) • Phagwara Jn (7 km) • Jalandhar Cantt (8 km) • Jalandhar City (14 km) • Adampur/Amritsar/Chandigarh Airports.' },
    { title: 'Hostel Biometric & UMS Gate Pass', detail: 'Apply Day Pass or Night/Home Leave on UMS -> Warden + Parent OTP verification -> Scan barcode/biometric at Hostel & Main Gate.' },
    { title: '75% Attendance + Duty/Medical Rule', detail: 'Minimum 75% aggregate attendance required for End-Term Exams (65%–74% considered only with approved Medical/DSW Duty Leave).' },
    { title: 'Uni-Laundry, Gym & Olympic Pool', detail: 'Automated washing/ironing bag cycles in every hostel + optional student subscriptions for Indoor Stadium Mega Gym & Heated Olympic Pool.' },
    { title: 'PEP & Career Services (Block 32)', detail: 'Dedicated Professional Enhancement Program (PEP) classes from Sem 1 covering DSA, Aptitude, Soft Skills, Mock Interviews & Company Drives.' }
  ]
};

// ========================================================
// AUTHENTICATION & USERS DATABASE (Local Simulated)
// ========================================================

const DEFAULT_USERS = [
  {
    id: 'user_1',
    regNo: '12204598',
    email: 'rohan.12204598@lpu.in',
    name: 'Rohan Verma',
    password: 'password123',
    role: 'student',
    hostel: 'BH-4',
    room: '412',
    program: 'B.Tech CSE (AI & Data Science)',
    messPlan: 'Standard North Indian Mess',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Rohan',
    bookmarks: ['block-32', 'unimall', 'rollers-34']
  },
  {
    id: 'user_2',
    regNo: '12215890',
    email: 'priya.12215890@lpu.in',
    name: 'Priya Sharma',
    password: 'password123',
    role: 'student',
    hostel: 'GH-2',
    room: '204',
    program: 'MBA (Marketing & FinTech)',
    messPlan: 'Special Diet Mess',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Priya',
    bookmarks: ['block-25-28', 'unimall']
  },
  {
    id: 'user_admin',
    regNo: 'EMP-7801',
    email: 'warden.bh4@lpu.co.in',
    name: 'Dr. V. K. Sharma (Chief Warden)',
    password: 'admin123',
    role: 'warden',
    hostel: 'BH-4 Mess Committee',
    room: 'Admin Block Office 102',
    program: 'Hostel Affairs & Mess Administration',
    messPlan: 'Faculty Dining',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=WardenSharma',
    bookmarks: []
  }
];

// Preloaded Community Live Reviews
const DEFAULT_COMMUNITY_REVIEWS = [
  {
    id: 'rev_1',
    author: 'Aakash Gill',
    regNo: '12108842',
    hostel: 'BH-4',
    meal: 'Breakfast',
    rating: 5,
    text: 'Aloo Paratha and fresh Dahi in BH-4 mess today was amazing! Hot and properly stuffed.',
    timestamp: '25 mins ago',
    likes: 18
  },
  {
    id: 'rev_2',
    author: 'Simran Kaur',
    regNo: '12201944',
    hostel: 'GH-2',
    meal: 'Lunch',
    rating: 4,
    text: 'Rajma Chawal combination was fresh, salad cucumber slices were crisp. Great improvement in GH mess!',
    timestamp: '1 hour ago',
    likes: 12
  },
  {
    id: 'rev_3',
    author: 'Kartik Iyer',
    regNo: '12304910',
    hostel: 'South-Special',
    meal: 'Breakfast',
    rating: 5,
    text: 'Crispy Medu Vada and Sambhar coconut chutney in South Mess is the closest to home comfort food.',
    timestamp: '2 hours ago',
    likes: 24
  }
];

// Preloaded Mess Rebates list
const DEFAULT_REBATES = [
  {
    id: 'reb_1',
    studentName: 'Rohan Verma',
    regNo: '12204598',
    hostel: 'BH-4',
    fromDate: '2026-11-01',
    toDate: '2026-11-06',
    days: 5,
    reason: 'Diwali Festival Break / Home Visit',
    status: 'Approved',
    rebateAmount: '₹ 650 Credit',
    approvedBy: 'Chief Warden Office'
  }
];

// Helper: Get Current Active Meal according to real time
function getCurrentMealInfo() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const totalMins = hours * 60 + minutes;

  // 07:30 (450m) - 09:30 (570m): Breakfast
  // 12:00 (720m) - 14:30 (870m): Lunch
  // 16:30 (990m) - 17:30 (1050m): Snacks
  // 19:30 (1170m) - 21:30 (1290m): Dinner

  if (totalMins >= 450 && totalMins <= 570) {
    return {
      status: 'active',
      meal: 'breakfast',
      name: 'Breakfast',
      closingIn: 570 - totalMins,
      message: 'Breakfast is currently being served in all messes!'
    };
  } else if (totalMins > 570 && totalMins < 720) {
    return {
      status: 'upcoming',
      meal: 'lunch',
      name: 'Lunch',
      startsIn: 720 - totalMins,
      message: 'Next meal: Lunch starts at 12:00 PM.'
    };
  } else if (totalMins >= 720 && totalMins <= 870) {
    return {
      status: 'active',
      meal: 'lunch',
      name: 'Lunch',
      closingIn: 870 - totalMins,
      message: 'Lunch is currently being served! Closes at 02:30 PM.'
    };
  } else if (totalMins > 870 && totalMins < 990) {
    return {
      status: 'upcoming',
      meal: 'snacks',
      name: 'Evening Snacks',
      startsIn: 990 - totalMins,
      message: 'Next meal: Evening Tea & Snacks at 04:30 PM.'
    };
  } else if (totalMins >= 990 && totalMins <= 1050) {
    return {
      status: 'active',
      meal: 'snacks',
      name: 'Evening Snacks',
      closingIn: 1050 - totalMins,
      message: 'Evening Snacks & Masala Chai is active!'
    };
  } else if (totalMins > 1050 && totalMins < 1170) {
    return {
      status: 'upcoming',
      meal: 'dinner',
      name: 'Dinner',
      startsIn: 1170 - totalMins,
      message: 'Next meal: Dinner service opens at 07:30 PM.'
    };
  } else if (totalMins >= 1170 && totalMins <= 1290) {
    return {
      status: 'active',
      meal: 'dinner',
      name: 'Dinner',
      closingIn: 1290 - totalMins,
      message: 'Dinner service is currently active! Closes at 09:30 PM.'
    };
  } else {
    return {
      status: 'closed',
      meal: 'breakfast',
      name: 'Breakfast',
      startsIn: (24 * 60 - totalMins) + 450,
      message: 'Messes are closed for the night. Next meal: Breakfast at 07:30 AM.'
    };
  }
}
