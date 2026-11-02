#!/usr/bin/env python3
"""
CampusGrid v8.0 — Full-Stack REST API & SQLite Database Backend
Created & Developed by Aryan Khan (@iamaryaann), Lovely Professional University (LPU)
"""

import datetime
import http.server
import json
import os
import sqlite3
import urllib.parse

PORT = int(os.environ.get("PORT", 3000))
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "campusgrid.db")


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS students (
            reg_no TEXT PRIMARY KEY,
            pin TEXT NOT NULL,
            name TEXT NOT NULL,
            section TEXT,
            program TEXT,
            hostel TEXT,
            payload_json TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )
    """)

    cur.execute("""
        CREATE TABLE IF NOT EXISTS bazaar_items (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            price INTEGER NOT NULL,
            cat TEXT,
            hostel TEXT,
            seller TEXT,
            phone TEXT,
            time TEXT,
            created_ts INTEGER
        )
    """)

    cur.execute("""
        CREATE TABLE IF NOT EXISTS lost_found (
            id TEXT PRIMARY KEY,
            kind TEXT NOT NULL,
            item TEXT NOT NULL,
            where_loc TEXT,
            poster TEXT,
            phone TEXT,
            time TEXT,
            created_ts INTEGER
        )
    """)

    cur.execute("""
        CREATE TABLE IF NOT EXISTS teamup_posts (
            id TEXT PRIMARY KEY,
            event TEXT NOT NULL,
            role TEXT,
            spots TEXT,
            stack TEXT,
            leader TEXT,
            phone TEXT,
            time TEXT,
            created_ts INTEGER
        )
    """)

    cur.execute("""
        CREATE TABLE IF NOT EXISTS mess_poll (
            id INTEGER PRIMARY KEY CHECK (id = 1),
            good INTEGER DEFAULT 52,
            okay INTEGER DEFAULT 12,
            skip INTEGER DEFAULT 6
        )
    """)

    cur.execute("INSERT OR IGNORE INTO mess_poll (id, good, okay, skip) VALUES (1, 52, 12, 6)")

    # Seed default Bazaar items if empty
    cur.execute("SELECT COUNT(*) FROM bazaar_items")
    if cur.fetchone()[0] == 0:
        seeds_bz = [
            ("bz1", "Casio fx-991ES Plus Scientific Calculator", 480, "Electronics", "BH-4", "Harsh (3rd Yr)", "9876543210", "2h ago", 1005),
            ("bz2", "Prestige 1.5L Electric Kettle (Like New)", 390, "Electronics", "BH-5", "Aditya", "9876501234", "4h ago", 1004),
            ("bz3", "Mini Drafter + Sheet Holder Tube (ME/Civil)", 220, "Books & Lab", "BH-2", "Karan", "9876512345", "Yesterday", 1003),
            ("bz4", "White Lab Coat (Size L — Biotech / Chem)", 160, "Books & Lab", "GH-3", "Ananya", "9876523456", "Yesterday", 1002),
            ("bz5", "Hero Sprint Geared Campus Cycle + Lock", 2400, "Cycle & Gear", "BH-6", "Vikram (4th Yr)", "9876534567", "2d ago", 1001),
        ]
        cur.executemany(
            "INSERT INTO bazaar_items VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            seeds_bz,
        )

    # Seed default Lost & Found if empty
    cur.execute("SELECT COUNT(*) FROM lost_found")
    if cur.fetchone()[0] == 0:
        seeds_lf = [
            ("lf1", "LOST", "Black boAt Airdopes Charging Case", "Block 32 Room 405 / Underpass", "Rohan (BH-4)", "9876543210", "1h ago", 1003),
            ("lf2", "FOUND", "Blue Milton Thermosteel Bottle (1L)", "Central Library (Block 13) 3rd Floor Desk", "Simran (GH-2)", "9876509876", "3h ago", 1002),
            ("lf3", "FOUND", "LPU Student ID Card (B.Tech CSE 1st Yr)", "UniMall Food Court Billing Counter", "Aakash", "9876598765", "Yesterday", 1001),
        ]
        cur.executemany(
            "INSERT INTO lost_found VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            seeds_lf,
        )

    # Seed default Team-Up posts if empty
    cur.execute("SELECT COUNT(*) FROM teamup_posts")
    if cur.fetchone()[0] == 0:
        seeds_tm = [
            ("tm1", "Smart India Hackathon (SIH 2026)", "AI / ML Engineer", "Need 2 Members", "Python, FastAPI, RAG/LLM, React", "Aryan Khan (K24AI)", "9876543210", "1h ago", 1004),
            ("tm2", "CSE Minor / Capstone Project", "Frontend / Mobile Dev", "Need 1 Member", "React Native / Next.js + Firebase", "Mehak (K23CS)", "9876501234", "3h ago", 1003),
            ("tm3", "YouthVibe & One India Tech Stall", "UI/UX & Pitch Deck", "Need 2 Members", "Figma, Canva, Live Product Demo", "Raghav (BH-5)", "9876512345", "Yesterday", 1002),
            ("tm4", "Smart Hostel IoT Automation", "Hardware / IoT", "Need 1 Member", "ESP32, Sensors, C++ (Block 38 Lab)", "Devansh (ECE)", "9876523456", "2d ago", 1001),
        ]
        cur.executemany(
            "INSERT INTO teamup_posts VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            seeds_tm,
        )

    conn.commit()
    conn.close()


class CampusGridAPIHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def send_json(self, status_code, data):
        body = json.dumps(data).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def read_json_body(self):
        length = int(self.headers.get("Content-Length", 0))
        if length <= 0:
            return {}
        raw = self.rfile.read(length).decode("utf-8", errors="ignore")
        try:
            return json.loads(raw)
        except Exception:
            return {}

    def get_community_snapshot(self):
        conn = get_db()
        cur = conn.cursor()

        cur.execute("SELECT * FROM bazaar_items ORDER BY created_ts DESC LIMIT 40")
        bazaar = [dict(r) for r in cur.fetchall()]

        cur.execute("SELECT id, kind, item, where_loc AS 'where', poster, phone, time FROM lost_found ORDER BY created_ts DESC LIMIT 40")
        lostfound = [dict(r) for r in cur.fetchall()]

        cur.execute("SELECT * FROM teamup_posts ORDER BY created_ts DESC LIMIT 40")
        teamup = [dict(r) for r in cur.fetchall()]

        cur.execute("SELECT good, okay, skip FROM mess_poll WHERE id = 1")
        row = cur.fetchone()
        poll = {"good": row["good"], "okay": row["okay"], "skip": row["skip"]} if row else {"good": 52, "okay": 12, "skip": 6}

        cur.execute("SELECT COUNT(*) FROM students")
        student_count = cur.fetchone()[0]

        conn.close()
        return {
            "ok": True,
            "engine": "SQLite3 + Python REST API v8.0",
            "developer": "Aryan Khan (@iamaryaann)",
            "stats": {
                "studentsSynced": student_count,
                "bazaarCount": len(bazaar),
                "lostFoundCount": len(lostfound),
                "teamUpCount": len(teamup),
            },
            "bazaar": bazaar,
            "lostfound": lostfound,
            "teamup": teamup,
            "messPoll": poll,
        }

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path in ("/api/health", "/api/community"):
            return self.send_json(200, self.get_community_snapshot())
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        body = self.read_json_body()
        now_ts = int(datetime.datetime.now().timestamp())
        conn = get_db()
        cur = conn.cursor()

        try:
            if parsed.path == "/api/bazaar":
                item = body.get("item", body)
                cur.execute(
                    "INSERT OR REPLACE INTO bazaar_items VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    (
                        item.get("id", f"bz_{now_ts}"),
                        item.get("title", "Item"),
                        int(item.get("price", 0)),
                        item.get("cat", "Hostel Essentials"),
                        item.get("hostel", "BH-4"),
                        item.get("seller", "Aryan Khan"),
                        item.get("phone", ""),
                        "Just now",
                        now_ts,
                    ),
                )
                conn.commit()
                conn.close()
                return self.send_json(201, self.get_community_snapshot())

            elif parsed.path == "/api/lostfound":
                item = body.get("item", body)
                cur.execute(
                    "INSERT OR REPLACE INTO lost_found VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                    (
                        item.get("id", f"lf_{now_ts}"),
                        item.get("kind", "LOST"),
                        item.get("item", "Item"),
                        item.get("where", "LPU Campus"),
                        item.get("poster", "Aryan Khan"),
                        item.get("phone", ""),
                        "Just now",
                        now_ts,
                    ),
                )
                conn.commit()
                conn.close()
                return self.send_json(201, self.get_community_snapshot())

            elif parsed.path == "/api/teamup":
                item = body.get("item", body)
                cur.execute(
                    "INSERT OR REPLACE INTO teamup_posts VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    (
                        item.get("id", f"tm_{now_ts}"),
                        item.get("event", "Hackathon"),
                        item.get("role", "Developer"),
                        item.get("spots", "Need 1 Member"),
                        item.get("stack", "Open Stack"),
                        item.get("leader", "Aryan Khan"),
                        item.get("phone", ""),
                        "Just now",
                        now_ts,
                    ),
                )
                conn.commit()
                conn.close()
                return self.send_json(201, self.get_community_snapshot())

            elif parsed.path == "/api/poll":
                choice = body.get("choice", "good")
                if choice in ("good", "okay", "skip"):
                    cur.execute(f"UPDATE mess_poll SET {choice} = {choice} + 1 WHERE id = 1")
                    conn.commit()
                conn.close()
                return self.send_json(200, self.get_community_snapshot())

            elif parsed.path == "/api/cloud-save":
                reg_no = str(body.get("regNo", "")).strip()
                pin = str(body.get("pin", "1234")).strip() or "1234"
                payload = body.get("payload", {})
                if not reg_no:
                    conn.close()
                    return self.send_json(400, {"ok": False, "error": "Missing Registration No"})

                cur.execute("SELECT pin FROM students WHERE reg_no = ?", (reg_no,))
                existing = cur.fetchone()
                if existing and existing["pin"] != pin:
                    conn.close()
                    return self.send_json(403, {"ok": False, "error": "Incorrect 4-digit PIN for this Reg No"})

                prof = payload.get("p", {})
                now_str = datetime.datetime.now().strftime("%d %b %Y %I:%M %p")
                cur.execute(
                    "INSERT OR REPLACE INTO students VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                    (
                        reg_no,
                        pin,
                        prof.get("name", "Aryan Khan"),
                        prof.get("section", "K24AI"),
                        prof.get("program", "B.Tech CSE"),
                        prof.get("hostel", "BH-4"),
                        json.dumps(payload),
                        now_str,
                    ),
                )
                conn.commit()
                conn.close()
                return self.send_json(200, {"ok": True, "regNo": reg_no, "updatedAt": now_str})

            elif parsed.path == "/api/cloud-load":
                reg_no = str(body.get("regNo", "")).strip()
                pin = str(body.get("pin", "1234")).strip() or "1234"
                cur.execute("SELECT * FROM students WHERE reg_no = ? AND pin = ?", (reg_no, pin))
                row = cur.fetchone()
                conn.close()
                if not row:
                    return self.send_json(404, {"ok": False, "error": "No cloud backup found for this Reg No & PIN"})
                return self.send_json(
                    200,
                    {
                        "ok": True,
                        "regNo": row["reg_no"],
                        "updatedAt": row["updated_at"],
                        "payload": json.loads(row["payload_json"]),
                    },
                )

            conn.close()
            return self.send_json(404, {"ok": False, "error": "Unknown endpoint"})
        except Exception as e:
            conn.close()
            return self.send_json(500, {"ok": False, "error": str(e)})


if __name__ == "__main__":
    init_db()
    print(f"CampusGrid v8.0 SQLite + REST Backend running on http://0.0.0.0:{PORT}", flush=True)
    server = http.server.ThreadingHTTPServer(("0.0.0.0", PORT), CampusGridAPIHandler)
    server.serve_forever()
