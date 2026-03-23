# 🚀 Isaac Pradeep Raj KL – Developer Portfolio

> **Software Developer | AI Systems Engineer | IoT Innovator | SAP-Focused Technology Enthusiast**  
> Madurai, Tamil Nadu, India

---


## ✅ Features

### UI & Theme
- [x] Blue gradient engineering UI (`#00A9FF` · `#89CFF3` · `#A0E9FF` · `#CDF5FD`)
- [x] Dark / Light mode toggle with localStorage persistence
- [x] Sticky glassmorphism navbar with active link highlighting
- [x] Mobile-responsive hamburger menu
- [x] Scroll animations (IntersectionObserver-based, AOS-style)
- [x] Project card 3D tilt effect on hover
- [x] Flagship card cursor glow effect
- [x] Animated particle system on hero section
- [x] Stats counter animation
- [x] Smooth anchor scroll with navbar offset
- [x] Scroll-to-top floating button

### Sections
- [x] **Hero** — Name, tagline, role tags, stats, CTA buttons
- [x] **About Me** — Professional summary with highlights and badges
- [x] **Flagship Projects** — SecureDesk & Cloud ERP+CRM case study layouts with architecture diagrams
- [x] **Core Engineering Projects** — 10 project cards with awards/funding badges
- [x] **Research Publication** — MediAura with publication/DOI links
- [x] **Skills** — 8 categorised skill groups
- [x] **Achievements & Awards** — 6 achievement cards
- [x] **Internships & Certifications** — Timeline layout with 7 entries
- [x] **Leadership & Activities** — 4 cards
- [x] **Patents & Innovations** — Expandable placeholder section
- [x] **Contact** — Info panel + contact form (saves to REST API)
- [x] **Footer** with social links

### Technical
- [x] SEO meta tags (Open Graph, keywords, author, description)
- [x] Contact form data persistence via REST API (`tables/contact_messages`)
- [x] Google Fonts (Inter + Fira Code)
- [x] Font Awesome 6.5 icons
- [x] Fully responsive — tested for 1400px / 1100px / 900px / 768px / 480px

---

## 📁 Project Structure

```
portfolio/
├── index.html              ← Main portfolio page
├── css/
│   ├── style.css           ← Core styles + theme variables + all section styles
│   ├── animations.css      ← Supplementary animation keyframes
│   └── responsive.css      ← Extra responsive breakpoints + print styles
├── js/
│   └── main.js             ← All interactivity (theme toggle, nav, AOS, particles, form)
├── assets/
│   └── resume.pdf         
└── README.md
```

---

## 🔗 Entry Points

| URI | Description |
|-----|-------------|
| `/` or `/index.html` | Full portfolio (all sections) |
| `/index.html#about` | About section |
| `/index.html#flagship` | Flagship Projects (SecureDesk / ERP) |
| `/index.html#projects` | Core Engineering Projects |
| `/index.html#research` | Research Publication |
| `/index.html#skills` | Skills section |
| `/index.html#achievements` | Achievements & Awards |
| `/index.html#internships` | Internships & Certifications |
| `/index.html#contact` | Contact form |

---

## 🗄️ Data Model

### `contact_messages` table

| Field | Type | Description |
|-------|------|-------------|
| `id` | text | Auto-generated UUID |
| `name` | text | Sender's name |
| `email` | text | Sender's email |
| `subject` | text | Message subject |
| `message` | rich_text | Message body |
| `created_at` | datetime | Auto-managed |


---

## 👤 Author

**Isaac Pradeep Raj KL**  
📧 klisaac1806@gmail.com  
🐙 [github.com/Isaac_Pradeep_Raj](https://github.com/Isaac-Pradeep-Raj)  
📍 Madurai, Tamil Nadu, India
