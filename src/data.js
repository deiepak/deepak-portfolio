export const patents = [
  {
    id: 1,
    title: "Drone Immobilization Over 2.4GHz",
    focus: "Counter-UAV | Wireless Jamming | Security",
    summary:
      "Design and implementation of a system that can safely immobilize unauthorized drones operating on 2.4GHz bands, focusing on controlled disruption without collateral interference.",
    tags: ["RF Engineering", "Signal Processing", "Embedded Systems", "Counter-UAV"],
    badge: "Flagship Patent",
  },
  {
    id: 2,
    title: "Solar Panel Surface Cleaning System",
    focus: "Renewable Energy | Automation",
    summary:
      "Automated cleaning mechanism for solar panels to maximize power output by reducing dust accumulation, designed with low water usage and minimal manual intervention.",
    tags: ["Mechatronics", "Control Systems", "Sustainability", "Robotics"],
    badge: "Patent Published",
  },
  {
    id: 3,
    title: "Mechanized Lifting System",
    focus: "Mechanical Design | Safety",
    summary:
      "Mechanized lifting solution aimed at safely handling loads in constrained spaces, with focus on ergonomics, safety and ease of operation.",
    tags: ["CAD", "Mechanical Design", "Safety Engineering"],
    badge: "Patent Published",
  },
];

export const experiences = [
  {
    id: 1,
    company: "National Innovation Center (NIC)",
    role: "Frontend Developer & DevOps Engineer",
    type: "Internship (Partially Remote)",
    period: "July 2026 – Present",
    status: "Active",
    location: "Nepal / Hybrid",
    description:
      "Driving frontend development and DevOps infrastructure for mission-critical wildlife technology initiatives. Delivering robust monitoring interfaces, sensor telemetry dashboards, and continuous cloud deployment pipelines.",
    highlights: [
      "Engineered intuitive, high-performance web dashboards for wildlife tracking and environmental sensor visualization.",
      "Configured automated CI/CD workflows, Docker containerization, and Ubuntu Server 24 cloud VPS deployment for 99.9% telemetry uptime.",
      "Collaborated with researchers and hardware engineers to bridge real-time field data with web applications.",
    ],
    tech: ["React", "JavaScript", "DevOps", "Ubuntu Server 24", "VPS Management", "Docker", "CI/CD", "Cloud Infrastructure"],
  },
  {
    id: 2,
    company: "Adventure Sewa Pvt. Ltd.",
    role: "Solo Product Designer, QA Tester & DevOps Engineer",
    type: "Internship (Partially Remote)",
    period: "August 2025 – Present",
    status: "Active",
    location: "Hybrid / Remote",
    description:
      "Spearheading end-to-end product design, quality assurance testing, and DevOps deployment for enterprise-grade hospitality, resort, and adventure activity management software.",
    highlights: [
      "Designed user experience flows and interactive UI mockups for resort booking, POS billing, and adventure activity scheduling.",
      "Formulated comprehensive automated and manual test plans for rock-solid transaction reliability.",
      "Provisioned and hardened Ubuntu Server 24 VPS environments, automating server setups, Nginx reverse proxy routing, and release cycles.",
    ],
    tech: ["Product Design", "Figma", "DevOps", "Ubuntu Server 24", "VPS Management", "Cloudflare DNS", "QA & Automated Testing", "CI/CD"],
  },
];

export const projects = [
  {
    id: "college-portal",
    title: "Department Event Registration & Verification System",
    role: "Lead Full-Stack Developer & DevOps",
    context: "College Department • Real-Life Deployed",
    badge: "Production Deployed",
    category: "deployed",
    featured: true,
    description:
      "A scaled, real-life deployed competition and event registration portal with an instant verification system built for the college department. Handles massive registration surges, dynamic ticket generation with tamper-proof QR codes, organizer scanner interface for real-time check-ins, and an administrative analytics dashboard.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Ubuntu Server 24",
      "VPS Hosting",
      "Cloudflare DNS",
      "QR Verification",
      "Docker",
    ],
  },
  {
    id: "freelance-websites",
    title: "Freelance Business Websites (10 Deployed)",
    role: "Full-Stack Web Developer & Designer",
    context: "Client Solutions • 10 Deployed Sites",
    badge: "10 Deployed",
    category: "deployed",
    featured: true,
    description:
      "Architected, built, and launched 10+ custom production websites for businesses and individual clients. Includes e-commerce platforms, corporate showcases, booking systems, and interactive RSVP sites with 95+ Google Lighthouse scores, mobile-first UX, Cloudflare DNS configuration, and dynamic CMS capabilities.",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "WordPress",
      "Node.js",
      "Cloudflare DNS",
      "SEO Optimization",
      "Vercel / Netlify",
    ],
  },
  {
    id: "cu-mgmt",
    title: "CU Management System Staff Portal",
    role: "Product Designer",
    context: "Chandigarh University | ERP Feature Design",
    badge: "Deployed: staff.cuchd.in",
    category: "deployed",
    featured: true,
    description:
      "Developed and designed user-centric features for the staff-facing CU Management System 2.0 portal, improving technical support interfaces, UX navigation, and internal ticket management. Live in production at staff.cuchd.in.",
    tech: ["UI/UX Design", "ERP Systems", "Figma", "Prototyping", "Design Systems"],
  },
  {
    id: "screen-share",
    title: "Real-Time Screen Sharing & Classroom Stream",
    role: "Lead Developer",
    context: "WebRTC Web Application",
    badge: "Docker Deployed",
    category: "web",
    featured: true,
    description:
      "A browser-based screen sharing platform enabling educators to create secure broadcast rooms and students to join with code. Engineered with WebRTC for sub-second peer-to-peer streaming and Socket.IO for signaling, containerized via Docker on Render.",
    tech: ["WebRTC", "Socket.IO", "Node.js", "Express.js", "Docker", "Render", "JavaScript"],
  },
  {
    id: "agri-doctor",
    title: "Agri_Doctor — Plant Disease Diagnosis",
    role: "AI Developer",
    context: "AI-Powered Agritech System",
    badge: "3-Tier AI System",
    category: "ai",
    featured: true,
    description:
      "An intelligent 3-tier system that classifies plant diseases from imagery, guides diagnosis using an interactive Akinator-style questionnaire, and delivers remedy strategies with regional geo-tagging maps.",
    tech: ["Python", "FastAPI", "OpenAI API", "Machine Learning", "GIS / GEO", "React"],
  },
  {
    id: "desert-nav",
    title: "Desert Offroad Navigator",
    role: "AI/ML Developer",
    context: "Hackathon Award Winner",
    badge: "Ranked 3 / 300",
    category: "ai",
    featured: true,
    description:
      "Real-time terrain segmentation and NLP voice guidance system for off-road drivers, fusing GPS telemetry and spatial mapping to identify safe pathways and terrain hazards in desert environments.",
    tech: ["Computer Vision", "Segmentation", "GPS / GIS", "NLP", "Python"],
  },
  {
    id: "cunss-election",
    title: "CUNSS Secure Election Portal",
    role: "Lead Developer",
    context: "University Community Platform",
    badge: "Active Community Tool",
    category: "web",
    description:
      "A secure election portal developed for the Chandigarh University Nepalese Student Society, providing OAuth-verified ballots, prevention of duplicate votes, and transparent real-time counting.",
    tech: ["React", "Node.js", "Google OAuth", "Express.js", "MongoDB"],
  },
  {
    id: "algolabs",
    title: "Algolabs — Algorithm Visualizer",
    role: "Full-Stack Developer",
    context: "EdTech Learning Platform",
    badge: "Interactive D3.js",
    category: "web",
    description:
      "Interactive digital platform for mastering Data Structures and Algorithms with real-time graphical step-by-step animations on Canvas and D3.js.",
    tech: ["React", "D3.js", "TypeScript", "Canvas API", "SEO Optimization"],
  },
  {
    id: "smart-irrigation",
    title: "IoT Smart Irrigation System",
    role: "Lead Hardware & Firmware Engineer",
    context: "Chandigarh University | IoT Project",
    badge: "Hardware Prototype",
    category: "hardware",
    description:
      "End-to-end intelligent irrigation system combining ESP32 microcontrollers, moisture sensors, temperature probes, and rain forecast APIs to minimize water consumption automatically.",
    tech: ["ESP32", "C/C++", "Sensors", "IoT Protocols", "REST API"],
  },
  {
    id: "restaurant-portal",
    title: "Restaurant Management Portal",
    role: "Full-Stack Developer",
    context: "Enterprise Web App",
    badge: "Management Suite",
    category: "web",
    description:
      "Comprehensive restaurant order orchestrator managing live table orders, dynamic menus, and kitchen status displays across multiple staff tiers.",
    tech: ["Flask", "Python", "MySQL", "REST APIs", "HTML/CSS"],
  },
  {
    id: "scam-guard",
    title: "Scam-Guard Browser Extension",
    role: "Security Developer",
    context: "Cybersecurity Web Tool",
    badge: "Browser Security",
    category: "web",
    description:
      "Browser extension performing real-time DOM heuristic analysis to detect phishing patterns, deceptive redirects, and malicious form actions.",
    tech: ["JavaScript", "Browser Extension API", "HTML Scraping", "Security Heuristics"],
  },
  {
    id: "exam-portal",
    title: "Examination Portal",
    role: "Backend Developer",
    context: "Academic Assessment System",
    badge: "Evaluation Engine",
    category: "web",
    description:
      "Online testing platform supporting timed question delivery, randomized test banks, cheat prevention heuristics, and automated score computations.",
    tech: ["Python", "Flask", "MySQL", "Authentication"],
  },
];

export const awards = [
  {
    id: 1,
    title: "Top 3 Team — SAP Hackfest 2026",
    organization: "SAP",
    date: "2026",
    badge: "Top 3 / 1,300+ Participants",
    icon: "🏆",
    description:
      "Secured a top 3 finish out of 1,300+ participants. Identified a friction-heavy real-world problem and engineered an impactful, full-fledged technical solution with high operational feasibility and clean architecture.",
    tags: ["Real-World Impact", "System Design", "Enterprise Tech", "SAP Hackfest"],
  },
  {
    id: 2,
    title: "Top 6 Finalist — Hack n Win 2026",
    organization: "Hack n Win Hackathon",
    date: "February 2026",
    badge: "Top 6 / 250 Teams",
    icon: "🏅",
    description:
      "Awarded among the top 6 teams out of 250 competing teams. Built a working prototype from scratch under rapid hackathon sprint conditions, excelling in technical execution and presentation.",
    tags: ["Rapid Prototyping", "Full-Stack Development", "Top 6 of 250 Teams"],
  },
  {
    id: 3,
    title: "Ranked 3 / 300 Teams — AI Navigation Challenge",
    organization: "Offroad AI Hackathon",
    date: "2025",
    badge: "Ranked 3 / 300",
    icon: "🥉",
    description:
      "Developed Desert Offroad Navigator — an AI/CV terrain segmentation and NLP voice guidance system for extreme desert drivers, finishing 3rd out of 300 teams.",
    tags: ["Computer Vision", "AI / ML", "Real-Time Telemetry"],
  },
];

