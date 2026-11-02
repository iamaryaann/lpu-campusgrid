# 🏫 CampusGrid — LPU Campus Navigator & Live Hostel Mess Portal

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Leaflet](https://img.shields.io/badge/Leaflet_GPS_Map-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![PWA](https://img.shields.io/badge/PWA_Mobile_Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)

A sleek, cyberpunk dark-mode web application built for **Lovely Professional University (LPU)** students (*Vertos*) and hostel wardens. Combines an **Interactive LPU GPS Campus Map**, **7-Day Live Hostel Mess Menu**, **Student & Warden Portal**, **Digital Verto ID Card**, **UMS Mess Leave Rebate Calculator**, **PWA Mobile Installability**, and an **In-App Project Presentation & Automated Video Tour**.

---

## ✨ Key Features

### 1. 🗺️ Interactive LPU GPS Campus Map (`Leaflet.js` + `OpenStreetMap`)
- Centered on LPU Phagwara campus (`31.2536° N, 75.7037° E`) with custom dark-mode map tiles and glowing markers.
- Covers **20+ verified campus landmarks**: Academic Blocks (Block 32 CSE, Block 34 Mechanical, Block 36 Civil, Block 38 ECE, Mittal School of Business, Central Library), Boys Hostels (`BH-1` to `BH-8`), Girls Hostels (`GH-1` to `GH-6`), UniMall, Unipolis, Shanti Devi Mittal Auditorium, Uni-Hospital (24×7), and Gates 1, 2 & 4 (Law Gate).
- Instant autocomplete search bar, category filters, smooth fly-to animations, and live GPS **"Locate Me"**.

### 2. 🍲 7-Day Live Hostel Mess Food Portal
- **Smart Clock Detection**: Automatically detects the current meal (*Breakfast, Lunch, Evening Snacks, or Dinner*) and displays live serving status & countdown timers.
- **Full Monday–Sunday Menu**: Includes dish breakdowns, calorie badges, pure-veg indicators, ratings, and a live **Mess Crowd Rush Meter**.

### 3. 🔐 Student & Warden Authentication + Digital Verto ID
- Full registration & sign-in flow plus **1-Click Demo Logins**:
  - 👨‍🎓 **Rohan Verma** (`BH-4` Student)
  - 👩‍🎓 **Priya Sharma** (`GH-2` Student)
  - 👨‍💼 **Dr. V. K. Sharma** (Hostel Mess Warden)
- **Digital Verto ID Card** modal with LPU registration details, hostel/room info, and active mess plan badge.

### 4. 📝 UMS Mess Leave Rebate & Warden Console
- Students can apply for mess leave rebates for **3+ days** with automatic refund calculation (`₹130/day`).
- Wardens unlock a dedicated **Warden Management Console** to approve/reject rebate applications and broadcast live mess announcements.

### 5. 💬 Student Buzz, UniMall Guide & 24×7 Emergency Helpline
- Real-time student dish reviews & star ratings feed.
- Curated directory of popular campus food hubs (*UniMall Food Court, Rollers Hub, Night Canteens, CCD, Law Gate*).
- Quick-dial campus security, Uni-Hospital ambulance, fire safety, and anti-ragging helplines.

### 6. 📱 Installable PWA & Built-in Presentation Mode
- Installable on Android, iOS, and Desktop via `manifest.json` and offline Service Worker (`sw.js`).
- Includes an integrated **8-Slide Project PPT** tab and **Automated Video Walkthrough** (`video_tour.js`) with on-screen subtitles.

---

## 📂 Project Structure

```text
├── index.html          # Main Single-Page Application (7 tabs + modals)
├── styles.css          # Cyberpunk dark theme (#070b12), glassmorphism & map styling
├── data.js             # LPU GPS coordinates, 7-day mess schedule & campus eateries
├── app.js              # Auth, Leaflet map controller, rebates, reviews & PPT logic
├── video_tour.js       # Automated self-playing project walkthrough & WebM recorder
├── manifest.json       # Progressive Web App (PWA) manifest
├── sw.js               # Service Worker for offline caching
└── icon.svg            # Vector app icon
```

---

## 🚀 Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/lpu-campusgrid.git
   cd lpu-campusgrid
   ```
2. Start any static HTTP server (or open `index.html` directly in a browser):
   ```bash
   python -m http.server 3000
   ```
3. Open `http://localhost:3000` in your browser.
