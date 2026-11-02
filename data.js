// ========================================================
// LPU CAMPUS & MESS PORTAL - COMPREHENSIVE DATASET
// Lovely Professional University, Phagwara, Punjab
// Coordinates center: ~31.2536° N, 75.7037° E
// ========================================================

const CAMPUS_CENTER = [31.2536, 75.7037];
const DEFAULT_ZOOM = 16;

// Key Campus Landmarks and Locations with accurate relative coordinates on LPU campus
const CAMPUS_LOCATIONS = [
  // Academic Blocks
  {
    id: 'block-32',
    name: 'Block 32 - School of Computer Science & Engineering',
    shortName: 'Block 32 (CSE)',
    category: 'academic',
    coords: [31.2542, 75.7025],
    description: 'The epicenter of tech at LPU. Houses the Department of CSE, AI & Data Science labs, high-performance computing centers, and faculty cabins.',
    dept: 'Computer Science, AI/ML, Cloud Computing',
    nearestFood: 'Underpass Food Kiosk & Block 34 Rollers (1 min walk)',
    timings: '08:00 AM - 06:00 PM',
    icon: 'fa-laptop-code',
    color: '#2563eb'
  },
  {
    id: 'block-34',
    name: 'Block 34 - Mechanical & Robotics Labs',
    shortName: 'Block 34 (Mech/Robo)',
    category: 'academic',
    coords: [31.2548, 75.7031],
    description: 'State-of-the-art engineering workshops, automobile prototyping studios, drone testing grounds, and 3D printing laboratories.',
    dept: 'Mechanical, Mechatronics, Aerospace, Robotics',
    nearestFood: 'Block 34 Rollers & Juice Corner (Right downstairs)',
    timings: '08:00 AM - 06:00 PM',
    icon: 'fa-robot',
    color: '#2563eb'
  },
  {
    id: 'block-36',
    name: 'Block 36 - Civil & Environmental Sciences',
    shortName: 'Block 36 (Civil & Bio)',
    category: 'academic',
    coords: [31.2554, 75.7038],
    description: 'Geotechnical engineering labs, concrete testing units, surveying labs, and smart city simulation chambers.',
    dept: 'Civil Engineering, Architecture, Urban Planning',
    nearestFood: 'Block 36 Cafe Corner (Ground Floor)',
    timings: '08:30 AM - 05:30 PM',
    icon: 'fa-trowel-bricks',
    color: '#2563eb'
  },
  {
    id: 'block-38',
    name: 'Block 38 - Electronics & Electrical Engineering',
    shortName: 'Block 38 (ECE/EEE)',
    category: 'academic',
    coords: [31.2560, 75.7045],
    description: 'VLSI design labs, embedded systems stations, IoT incubators, and renewable energy test circuits.',
    dept: 'Electronics, Communication, IoT, Electrical',
    nearestFood: 'Block 38 Tea Stall & Snacks Bar',
    timings: '08:30 AM - 05:30 PM',
    icon: 'fa-microchip',
    color: '#2563eb'
  },
  {
    id: 'block-25-28',
    name: 'Block 25 to 28 - Mittal School of Business (MSB)',
    shortName: 'Block 25-28 (Business)',
    category: 'academic',
    coords: [31.2520, 75.7020],
    description: 'ACBSP accredited business school building housing executive classrooms, mock financial trading floor, and conference halls.',
    dept: 'MBA, BBA, Finance, Marketing, Law, Commerce',
    nearestFood: 'MSB Garden Canteen & CCD Kiosk',
    timings: '08:00 AM - 07:00 PM',
    icon: 'fa-chart-line',
    color: '#2563eb'
  },
  {
    id: 'block-13',
    name: 'Block 13 - Central Library & Architecture',
    shortName: 'Central Library (Block 13)',
    category: 'academic',
    coords: [31.2515, 75.7040],
    description: 'A 9-storey marvel housing over 1.5 million physical and digital books, quiet reading zones, and 24x7 study halls during exams.',
    dept: 'Central Library, School of Architecture & Design',
    nearestFood: 'Library Coffee Lounge & UniMall (Across road)',
    timings: '08:00 AM - 11:00 PM (Late night during exams)',
    icon: 'fa-book-open-reader',
    color: '#2563eb'
  },

  // Central Amenities & Events
  {
    id: 'unimall',
    name: 'UniMall - Shopping & Entertainment Complex',
    shortName: 'UniMall (Central Hub)',
    category: 'amenities',
    coords: [31.2525, 75.7048],
    description: '4-floor multi-facility shopping complex with a mega supermarket, stationery outlets, salons, gadget repairs, and food court.',
    dept: 'Retail, Food Court, Post Office, Bank & ATMs',
    nearestFood: 'Full 3rd Floor Food Court, Dominos, Subway, Waffle Point',
    timings: '09:00 AM - 10:00 PM',
    icon: 'fa-bag-shopping',
    color: '#059669'
  },
  {
    id: 'unipolis',
    name: 'Baldev Raj Mittal Unipolis',
    shortName: 'Unipolis Arena',
    category: 'amenities',
    coords: [31.2530, 75.7032],
    description: 'The iconic grand open-air arena of LPU. Hosts YouthVibe, international celebrity concerts, hackathons, and cultural fests for 10,000+ students.',
    dept: 'Cultural Affairs, Student Mega Events, YouthVibe',
    nearestFood: 'Surrounding food gazebos and UniMall',
    timings: 'Open arena',
    icon: 'fa-landmark-dome',
    color: '#059669'
  },
  {
    id: 'shanti-devi-auditorium',
    name: 'Shanti Devi Mittal Auditorium',
    shortName: 'Auditorium',
    category: 'amenities',
    coords: [31.2505, 75.7035],
    description: 'A world-class acoustic auditorium with 2,500 comfortable pushback seats. Venue for academic convocations, TEDx and guest lectures.',
    dept: 'Convocations, TEDx, High-level Guest Conferences',
    nearestFood: 'Auditorium cafeteria & Gate 1 cafes',
    timings: 'Event specific',
    icon: 'fa-masks-theater',
    color: '#059669'
  },
  {
    id: 'uni-hospital',
    name: 'Uni-Hospital & Healthcare Center',
    shortName: 'Uni-Hospital (24x7)',
    category: 'amenities',
    coords: [31.2550, 75.7058],
    description: 'Full-fledged university hospital with resident doctors, 24x7 ambulance services, pathology lab, dental clinic, and in-house pharmacy.',
    dept: 'Emergency Medicine, OPD, Dental, Pharmacy',
    nearestFood: 'Hospital Medical Canteen (Ground floor)',
    timings: '24 Hours Open (Emergency & Pharmacy)',
    icon: 'fa-hospital',
    color: '#e11d48'
  },
  {
    id: 'sports-complex',
    name: 'Indoor Stadium & Olympic Sports Complex',
    shortName: 'Indoor Sports Arena',
    category: 'amenities',
    coords: [31.2565, 75.7020],
    description: 'Olympic-size indoor swimming pool, badminton wooden courts, squash courts, gymnasium, shooting range, and athletics track.',
    dept: 'Sports, Fitness, Physical Education',
    nearestFood: 'Sports Protein & Juice Bar',
    timings: '06:00 AM - 09:00 PM',
    icon: 'fa-medal',
    color: '#059669'
  },

  // Boys Hostels (BH)
  {
    id: 'bh-1-2',
    name: 'Boys Hostel 1 & 2 (BH-1 & BH-2)',
    shortName: 'BH-1 & BH-2',
    category: 'hostel',
    coords: [31.2510, 75.7065],
    description: 'Resident blocks for undergraduate students with dedicated study rooms, high-speed Wi-Fi, laundry facilities, and dual-wing mess halls.',
    dept: 'Hostel Administration, BH-1 Warden Office',
    nearestFood: 'BH-1 & BH-2 Central Mess, Night Tuck Shop',
    timings: 'Biometric Gate: 06:00 AM - 08:00 PM',
    icon: 'fa-building-user',
    color: '#9333ea'
  },
  {
    id: 'bh-3-4',
    name: 'Boys Hostel 3 & 4 (BH-3 & BH-4)',
    shortName: 'BH-4 (Main Boys Wing)',
    category: 'hostel',
    coords: [31.2522, 75.7072],
    description: 'One of the liveliest hostel complexes on campus. Features a sprawling mess facility, open badminton court, and famous late-night canteen.',
    dept: 'Student Residential Block',
    nearestFood: 'BH-4 Mess Hall (Capacity: 800) & Night Canteen (open till 2 AM)',
    timings: 'Biometric Gate: 06:00 AM - 08:00 PM',
    icon: 'fa-building-user',
    color: '#9333ea'
  },
  {
    id: 'bh-5-6',
    name: 'Boys Hostel 5 & 6 (BH-5 & BH-6)',
    shortName: 'BH-5 & BH-6',
    category: 'hostel',
    coords: [31.2538, 75.7075],
    description: 'Spacious apartment and multi-seater rooms with elevators, recreation lounge with TT tables, and attached modern mess.',
    dept: 'Student Residential Block',
    nearestFood: 'BH-5 & 6 Integrated Mess & Fast Food Booth',
    timings: 'Biometric Gate: 06:00 AM - 08:00 PM',
    icon: 'fa-building-user',
    color: '#9333ea'
  },
  {
    id: 'bh-7-8',
    name: 'Boys Hostel 7 & 8 (BH-7 & BH-8 High-Rise)',
    shortName: 'BH-7 & BH-8',
    category: 'hostel',
    coords: [31.2555, 75.7070],
    description: 'Multi-storey hostel towers with panoramic views of the campus sports fields, modern mess dining hall, and dedicated gym.',
    dept: 'Senior Students & International Scholar Wing',
    nearestFood: 'BH-8 Tower Mess & Cafe 8 Snack Corner',
    timings: 'Biometric Gate: 06:00 AM - 08:00 PM',
    icon: 'fa-building-user',
    color: '#9333ea'
  },

  // Girls Hostels (GH)
  {
    id: 'gh-1-3',
    name: 'Girls Hostel Complex 1, 2 & 3 (GH-1 to GH-3)',
    shortName: 'GH 1-3 Complex',
    category: 'hostel',
    coords: [31.2498, 75.7015],
    description: 'Gated hostel complex with round-the-clock female security wardens, landscaped courtyard, in-house salon, and multi-cuisine mess.',
    dept: 'Girls Hostel Administration Wing A',
    nearestFood: 'GH-1 Dining Hall, GH In-house Fruit & Juice Bar',
    timings: 'Biometric In-Time: Strictly 07:30 PM',
    icon: 'fa-shield-heart',
    color: '#d946ef'
  },
  {
    id: 'gh-4-6',
    name: 'Girls Hostel Complex 4, 5 & 6 (GH-4 to GH-6)',
    shortName: 'GH 4-6 Towers',
    category: 'hostel',
    coords: [31.2488, 75.7028],
    description: 'Modern high-capacity towers featuring soundproof study cubicles, indoor fitness center, laundry laundromat, and diet mess options.',
    dept: 'Girls Hostel Administration Wing B',
    nearestFood: 'GH-5 Grand Dining Hall & Bakery Counter',
    timings: 'Biometric In-Time: Strictly 07:30 PM',
    icon: 'fa-shield-heart',
    color: '#d946ef'
  },

  // Gates & Transport
  {
    id: 'gate-1',
    name: 'LPU Main Gate 1 (Grand GT Road Entrance)',
    shortName: 'Gate 1 (Main Entrance)',
    category: 'gates',
    coords: [31.2475, 75.7042],
    description: 'The monumental main gate facing the Delhi-Jalandhar National Highway (GT Road). Security control room, auto-rickshaw stand, and bus terminal.',
    dept: 'Security Checkpoint, Visitor Pass Desk, Bus Terminus',
    nearestFood: 'Gate 1 Food Strip, Kulcha Junction, Chai Tapri',
    timings: '24 Hours Guarded Entry',
    icon: 'fa-torii-gate',
    color: '#f43f5e'
  },
  {
    id: 'gate-2',
    name: 'Gate 2 - Chaheru Station / Side Exit',
    shortName: 'Gate 2 (Railway Link)',
    category: 'gates',
    coords: [31.2540, 75.6995],
    description: 'Direct pedestrian and two-wheeler access towards Chaheru Railway Station and local transit links.',
    dept: 'Security Outpost',
    nearestFood: 'Local Chaheru Market Dhabas',
    timings: '06:00 AM - 08:30 PM',
    icon: 'fa-door-open',
    color: '#f43f5e'
  },
  {
    id: 'gate-4',
    name: 'Gate 4 - Law Gate & Residential Colony Link',
    shortName: 'Gate 4 (Law Gate)',
    category: 'gates',
    coords: [31.2575, 75.7050],
    description: 'Buzzing back entrance famous for hundreds of student PGs, private hostels, street food dhabas, stationery shops, and late-night eats.',
    dept: 'Law Gate Security Checkpoint',
    nearestFood: 'Law Gate Food Street (Pardesi Dhaba, Rolls, Momo corners)',
    timings: '06:00 AM - 09:30 PM',
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
// CAMPUS EATERIES, UNIMALL FOOD COURT & CANTEENS
// ========================================================

const CAMPUS_EATERIES = [
  {
    id: 'unimall-foodcourt',
    name: 'UniMall 3rd Floor Food Court',
    location: 'UniMall, Level 3',
    type: 'unimall',
    timing: '10:00 AM - 10:00 PM',
    rating: 4.7,
    priceRange: '₹₹ (₹100 - ₹300)',
    highlights: 'Dominos Pizza, Subway, Baskin Robbins, Chaayos, South Indian Dosa Express',
    description: 'Central air-conditioned food court with multi-cuisine branded outlets, lively atmosphere, and card/UPI payment desks.',
    phone: '+91 1824 517401',
    tags: ['Branded', 'Air Conditioned', 'Pizza', 'Burgers', 'Dessert'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'rollers-34',
    name: 'Rollers Underpass Hub',
    location: 'Underpass between Block 32 & 34',
    type: 'all',
    timing: '09:00 AM - 11:30 PM',
    rating: 4.8,
    priceRange: '₹ (₹60 - ₹150)',
    highlights: 'Paneer Makhani Roll, Double Egg Roll, Chicken Shawarma, Peri Peri Fries',
    description: 'The legendary hunger savior for engineering students. Lightning-fast service of hot rolls wrapped in butter laccha parathas.',
    phone: '+91 98721 00234',
    tags: ['Budget Friendly', 'Student Favorite', 'Kathi Rolls', 'Quick Bite'],
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'bh4-night-canteen',
    name: 'BH-4 Late Night Canteen',
    location: 'Ground Floor, Boys Hostel 4',
    type: 'night',
    timing: '08:00 PM - 02:30 AM',
    rating: 4.6,
    priceRange: '₹ (₹40 - ₹120)',
    highlights: 'Midnight Cheese Maggi, Egg Bhurji, Aloo Pyaz Paratha, Cold Coffee, Oreo Shake',
    description: 'The late-night engine during exams and hackathons. Serves steaming Maggi and thick cold shakes deep into the night.',
    phone: '+91 98724 99811',
    tags: ['Late Night (Till 2 AM)', 'Hostel Delivery', 'Maggi & Shakes'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'cafe-coffee-day-13',
    name: 'Café Coffee Day (CCD) Library Block',
    location: 'Adjacent to Central Library (Block 13)',
    type: 'all',
    timing: '08:30 AM - 10:30 PM',
    rating: 4.5,
    priceRange: '₹₹ (₹120 - ₹250)',
    highlights: 'Cappuccino, Devils Own, Garlic Bread, Brownie Fantasy',
    description: 'Cozy indoor and al-fresco seating perfect for group study discussions, project brainstorms, and caffeine boosts.',
    phone: '+91 1824 517440',
    tags: ['Coffee', 'Group Study', 'Quiet Ambiance', 'AC'],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'law-gate-food-strip',
    name: 'Law Gate Food Street Hub',
    location: 'Just Outside Gate 4 (Law Gate)',
    type: 'night',
    timing: '10:00 AM - 01:00 AM',
    rating: 4.7,
    priceRange: '₹ (₹50 - ₹180)',
    highlights: 'Amritsari Kulche, Tandoori Momos, Biryani handis, Lassi, Chaap',
    description: 'A bustling student food haven located right outside Law Gate with dozens of street food vendors, dhabas, and chai stalls.',
    phone: '+91 98140 12890',
    tags: ['Street Food', 'Amritsari Kulcha', 'Affordable', 'Late Evening'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'underpass-juice-shanti',
    name: 'Fresh Fruit & Juice Hub',
    location: 'Near Block 30 & Uni-Hospital',
    type: 'all',
    timing: '07:30 AM - 09:30 PM',
    rating: 4.5,
    priceRange: '₹ (₹40 - ₹90)',
    highlights: 'Fresh Mousambi, Orange, Pomegranate Juice, Fruit Bowls, Protein Smoothies',
    description: '100% freshly pressed cold juices and custom fruit salad bowls for health-conscious Vertos and gym enthusiasts.',
    phone: '+91 98882 34091',
    tags: ['Healthy', 'Fresh Juice', 'Vitamins', 'Gym Nutrition'],
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=60'
  }
];

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
