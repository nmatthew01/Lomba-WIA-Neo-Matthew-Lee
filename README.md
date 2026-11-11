# SambungWarga (working title)

**SambungWarga** is a community platform that brings emergency help, public service tracking and civic problem reporting into one app, so residents can see what happens after a problem is reported.
*SambungWarga adalah platform komunitas yang menyatukan bantuan darurat, pelacakan layanan publik, dan pelaporan masalah warga dalam satu aplikasi.*

| | |
|---|---|
| **Competition** | Web In Action (WIA) 2026, First Draft Submission |
| **Team** | Neo |
| **Theme** | Designing Digital Futures |
| **Sub-themes** | Open Government Data, Public Service Tracking, Civic Reporting & Accountability |
| **Repository** | https://github.com/nmatthew01/Lomba-WIA---Neo-Matthew-Lee |

> Status: working front-end prototype with sample data. The backend is planned, not built yet ([plan](docs/BACKEND_PLAN.txt)).

## Screenshots
| Landing page (desktop) | Find help for me | Report progress |
|---|---|---|
| ![Home](docs/screenshots/01-home-desktop.png) | ![Find help](docs/screenshots/02-find-help-desktop.png) | ![Progress](docs/screenshots/03-report-progress-desktop.png) |

| Analytics dashboard | Home (phone) | Emergency (phone) | Assistance flow (phone) |
|---|---|---|---|
| ![Analytics](docs/screenshots/04-analytics-desktop.png) | ![Mobile home](docs/screenshots/05-home-mobile.png) | ![Emergency](docs/screenshots/06-emergency-mobile.png) | ![Assistance flow](docs/screenshots/07-assistance-flow-mobile.png) |

Sitemap and wireframes: [docs/SITEMAP.md](docs/SITEMAP.md)

## Tech stack
- **Front-end:** HTML, CSS, vanilla JavaScript (single page, no framework, no build step, about 125 KB)
- **Offline / install:** Progressive Web App (`sw.js` + `manifest.webmanifest`)
- **Storage (prototype):** browser `localStorage` for settings, notes, demo accounts and offline-submitted reports
- **Dev server:** `http-server` (npm) or Python's built-in server
- **Planned backend:** Node.js + Express, PostgreSQL (Supabase), OpenStreetMap/Leaflet

## How to run
```bash
# 1. clone
git clone https://github.com/nmatthew01/Lomba-WIA---Neo-Matthew-Lee.git
cd Lomba-WIA---Neo-Matthew-Lee

# 2. install
npm install

# 3. run
npm start
# open http://localhost:8080
```
No Node.js? Run `python3 -m http.server 8080` in the folder instead.
Offline mode needs **HTTPS or localhost**. Open the app once online, then turn off your network and reload.

### Demo accounts
| Role | Username | Password |
|---|---|---|
| Registered user | `user` | `user1234` |
| Verified contributor | `contributor` | `contributor1234` |
| Moderator | `moderator` | `moderator1234` |
| Administrator | `admin` | `admin1234` |
| Super administrator | `superadmin` | `superadmin1234` |

You can also create an account. New accounts are always Registered users; only an administrator can grant the Administrator role.

## How information is verified and presented
1. **Submitted:** a signed-in resident reports a problem. It is not shown as verified.
2. **Reviewed:** a moderator checks location, evidence and duplicates.
3. **Verified:** accepted for action. Photos or votes alone never verify a report.
4. **Tracked:** every update is logged with author role, time and a label (**Official**, **Verified field update** or **Community**). Corrections keep history.
5. **Resolved & verified:** an administrator confirms completion with evidence.

**Freshness and "real-time":** each record shows when it was last updated. This prototype uses sample data and updates only inside the browser; it does not claim live government feeds. In production, official open-data sources would sync on a schedule and each card would show its last-sync time. Rewards on crime reports are never automatic: an administrator must approve them, and awarding on an unresolved case needs a second confirmation that is written to the audit log.

## Mentor feedback and what we added
| Suggestion | What the prototype now has |
|---|---|
| Sharper narrative on verification and real-time data | "How we verify what you see" on Home, verification labels on every update, freshness note, audit log |
| Personalization by location and need | **Find help for me** (neighborhood + need, ranked with reasons, official-only and my-neighborhood filters), followed topics, saved preferences |
| Analytics dashboard for managers | Admin **Analytics**: KPIs, reports by category, stage and neighborhood, "needs attention" list, computed live from the records |
| Open government data | Anonymized **open data CSV** download (no names, descriptions or crime-report titles) |
| Mobile accessibility and readability | Bottom tab bar, 44 px+ touch targets, **Simple mode** (bigger buttons, fewer details), skip link, visible focus, text size, high contrast, reduce motion, English and Bahasa Indonesia |
| Clearer sitemap and wireframes | [docs/SITEMAP.md](docs/SITEMAP.md) |

## Current progress
Done (prototype):
- Three modes (Emergency, Public Services, Civic Reports), responsive for phone, tablet and desktop
- Emergency Mode works **without sign-in** and **offline**: six categories with typical situations (including childbirth), numbers and safety tips in two languages, nearby-help alarm, personal emergency contact, GPS coordinates
- **Assistance flow** for every emergency category: situations specific to the category (for example, active labor only appears under medical help, never under police), official numbers with call buttons, clearly labeled simulated nearby providers, a simulated request with a status timeline (Request Submitted, Provider Assigned, Assistance En Route), and basic advice for the wait that is specific to the situation (English and Bahasa Indonesia, works offline)
- Offline notes are submitted automatically as reports for moderator review when the connection returns (demo: stored in this browser)
- Civic reports with progress timelines, delay reasons, verification labels, moderation queue, filters (all, submitted by me, community, resolved)
- Crime report type with private tips and admin-approved rewards (simulated points)
- Accounts with passwords, role-based screens, role grants by administrators, audit log
- Settings (gear icon, open to guests): theme, accent color, text size, contrast, motion, simple mode, language, topics, emergency contact, notifications

Not done yet:
- Real backend, database and server-side authentication (accounts and roles are simulated in the browser)
- Live maps, real provider and open-data feeds, real photo upload, push or email notifications
- Full Bahasa Indonesia coverage (navigation, Home, Emergency, Settings only)
- Automated tests in the repository

## Simulated features and limits
- The advice shown while waiting is general guidance, not medical, legal or rescue advice, and it should be reviewed by qualified professionals (for example a midwife, doctor and rescue agency) before release. No real emergency dispatch, ambulance booking or payment happens. Requests and rewards are simulations with sample data.
- Emergency numbers need verification against official Indonesian sources before release. 112 is not connected in every region, and sources disagree on whether 129 is the disaster post or the violence-against-women-and-children line.
- Browser-side passwords are for the demo only and are not secure. Production needs server-side hashing and sessions.

## Project structure
```
index.html              the app (HTML, CSS, JS)
sw.js                   service worker (offline cache)
manifest.webmanifest    install metadata
docs/SITEMAP.md         sitemap and wireframes
docs/BACKEND_PLAN.txt   planned backend (plain text)
docs/screenshots/       screenshots used above
package.json            dev server script
```
