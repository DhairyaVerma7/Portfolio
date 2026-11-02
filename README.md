# Dhairya Verma - Personal Portfolio Website

A luxury, high-performance, dark-and-orange personal portfolio website crafted for Data Scientists, Software Engineers, and AI Specialists.

## ✨ Key Features & Design Highlights
- **Visual Aesthetic**: Matte charcoal/black backgrounds (`#0a0a0e`), glassmorphic panels, and glowing neon amber/orange accents inspired by modern Figma design systems.
- **Interactive Plexus Particle Background**: Dynamic 60fps HTML5 canvas constellation network reacting to mouse movement and ambient pulses.
- **Dynamic Typing Hero**: Smooth typewriter animation showcasing multiple roles and titles.
- **Skills & Marquee**: Infinite smooth scrolling tech stack ticker with categorized cards, level bars, and skill badges.
- **Project Showcase & Multi-Category Filter**: Filter projects by *All, AI/ML, Web Apps, Systems & C++, Mobile* with detailed pop-up modals, architecture breakdowns, GitHub links, and live demos.
- **Career & Education Timeline**: Dual-column resume timeline with milestone markers and tech tags.
- **Achievements & Certifications**: Grid showcasing hackathon wins, competitive programming ratings (LeetCode), and cloud certifications.
- **Interactive Contact Form & Modals**: Fully functional contact form with client-side validation, instant toast feedback, and a dedicated "Hire Me" fast inquiry modal.
- **100% Responsive**: Tailored layouts for Mobile, Tablet, Laptop, and Ultra-wide screens.

---

## 📁 Project Structure
```
portfolio/
├── index.html            # Main semantic markup
├── assets/
│   ├── css/
│   │   └── style.css     # Glassmorphism, animations, dark-orange theme tokens
│   ├── js/
│   │   ├── particles.js  # Interactive Plexus canvas mesh
│   │   ├── data.js       # Easily editable projects, bio, and social info
│   │   └── main.js       # App logic, modal manager, typing effect, toasts
│   └── images/           # Custom images and graphics
└── README.md             # Project documentation
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch
Simply double click or open `index.html` in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Live Server (Node / Python / VS Code)
Using Python:
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

---

## 🛠️ How to Customize Your Content
1. **Change Profile Info & Projects**: Open `assets/js/data.js` and edit the `portfolioData.profile` object or add/modify projects in the `portfolioData.projects` array.
2. **Change Personal Details & Links**: Open `index.html` to update your email, GitHub, LinkedIn, or Twitter URLs.
3. **Change Theme Colors**: Open `assets/css/style.css` and adjust the root variables (`--accent-orange`, `--bg-primary`).

---

## 🌐 Free 1-Click Deployment
- **Vercel**: Drag and drop the `portfolio` directory into your [Vercel Dashboard](https://vercel.com).
- **GitHub Pages**: Push this directory to a GitHub repository, go to **Settings > Pages**, and select `main` branch.
- **Netlify**: Drag and drop the folder into [Netlify Drop](https://app.netlify.com/drop).
