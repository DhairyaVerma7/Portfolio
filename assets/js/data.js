/**
 * Portfolio Data Configuration
 * Easily update project info, roles, skills, and metrics here
 */

const portfolioData = {
  profile: {
    name: "Dhairya Verma",
    roles: [
      "Data Scientist",
      "C++ Developer",
      "Full Stack Engineer",
      "AI / ML Specialist",
      "Competitive Programmer"
    ],
    experienceYears: 5,
    projectsCount: 30,
    clientSatisfaction: "99%",
    email: "vermadhairya96@gmail.com",
    location: "New Delhi, India (Available Worldwide Remote)"
  },

  projects: [
    {
      id: "smart-attendance",
      title: "SmartAttend — AI Attendance & Analytics",
      category: "realtime",
      categoryLabel: "AI Vision & Real-Time",
      image: "smartattend.jpg",
      summary: "AI-driven automated attendance tracking system with facial verification, real-time presence logs, and instant analytics dashboard.",
      tags: ["AI Recognition", "Google AI Studio", "Student Analytics", "Node.js", "Render Live"],
      githubUrl: "https://github.com/DhairyaVerma7",
      liveUrl: "https://smartattendence-o7on.onrender.com",
      details: {
        description: "SmartAttend is an AI-powered academic attendance and intelligence platform built to eliminate tedious manual roll-calls. Powered by AI facial verification and real-time attendance streams with dynamic report exports.",
        keyFeatures: [
          "AI facial recognition model integrated with Google AI Studio",
          "Real-time student logging and classroom attendance analytics",
          "Automated Excel/CSV export and detailed absence logs",
          "Deployed live as a high-performance web app on Render"
        ],
        techStack: ["Google AI Studio", "Node.js", "Express", "REST API", "Render Live"]
      }
    },
    {
      id: "codetantraa",
      title: "CodeTantraa — AI & DSA Workspace",
      category: "hackathon",
      categoryLabel: "Hackathon Build & DSA",
      image: "codetantraa.jpg",
      summary: "Full-stack competitive coding and developer arena featuring automated C++ & Python test runner, real-time leaderboards, and algorithmic challenges.",
      tags: ["C++", "Python", "Supabase", "Kvicha AI", "Algorithmic Sandbox"],
      githubUrl: "https://github.com/DhairyaVerma7",
      liveUrl: "https://codetantraa.onrender.com",
      details: {
        description: "CodeTantraa was conceived to elevate coding competitions. Combines Dhairya's deep passion for DSA with fast web backends to deliver immediate algorithmic feedback.",
        keyFeatures: [
          "Automated C++ and Python sandbox code execution engine",
          "Live contest leaderboards updated in real time via Supabase channels",
          "Custom problem bank covering key DSA patterns: DP, Graphs, and Trees",
          "Full interactive developer workspace deployed live on Render"
        ],
        techStack: ["C++20", "Python 3", "Supabase Realtime", "Node.js", "Render Live"]
      }
    },
    {
      id: "rookie-chess",
      title: "Rookie.com — Live Multiplayer Chess",
      category: "realtime",
      categoryLabel: "Multiplayer Web App",
      image: "rookie.jpg",
      summary: "High-performance multiplayer chess web app featuring sub-millisecond WebSocket move dispatch, full rule validation, and instant room invites.",
      tags: ["Node.js", "Socket.io", "JavaScript", "Chess Logic", "WebSockets"],
      githubUrl: "https://github.com/DhairyaVerma7",
      liveUrl: "https://rookie-com.onrender.com",
      details: {
        description: "A standalone real-time multiplayer chess application engineered for chess enthusiasts. Leverages low-latency WebSockets for instant player pairing, turn-by-turn move validation, and live board updates.",
        keyFeatures: [
          "Bi-directional WebSocket communication for sub-millisecond move dispatch",
          "Complete chess engine rules: check, checkmate, castling, en passant, and pawn promotion",
          "Shareable one-click room links with instant player join logic",
          "Deployed live on Render with active multiplayer matchmaking"
        ],
        techStack: ["Node.js", "Socket.io", "JavaScript ES6+", "HTML5 Canvas", "Render Live"]
      }
    },
    {
      id: "skill-setu",
      title: "Skill Setu — Career & Skill Bridge",
      category: "hackathon",
      categoryLabel: "Hackathon Build",
      image: "skillsetu.jpg",
      summary: "Dynamic platform built under intense hackathon constraints to bridge youth skills with real-world industry pathways.",
      tags: ["Node.js", "Supabase", "Express", "REST APIs", "Rapid MVP"],
      githubUrl: "https://github.com/DhairyaVerma7",
      liveUrl: "https://github.com/DhairyaVerma7",
      details: {
        description: "Skill Setu was built to solve the skill discovery gap during a competitive hackathon. Featuring real-time milestone tracking, instant credential verification, and automated skill mapping with Supabase backing.",
        keyFeatures: [
          "Real-time database sync via Supabase row-level subscriptions",
          "Rapid Node.js REST API with on-the-fly endpoint routing",
          "Responsive, dark-aesthetic UI engineered for lightning-speed hackathon judging",
          "Skill verification & dynamic roadmap generator"
        ],
        techStack: ["Node.js", "Express.js", "Supabase DB", "HTML5/CSS3", "Git/GitHub"]
      }
    },
    {
      id: "vidya-setu",
      title: "VidyaSetu — Peer Education Portal",
      category: "hackathon",
      categoryLabel: "Hackathon Build",
      image: "skillsetu.jpg",
      summary: "Community education portal facilitating peer resource sharing, real-time study rooms, and interactive learning streams.",
      tags: ["Firebase", "Node.js", "React.js", "Real-Time DB", "Hackathon"],
      githubUrl: "https://github.com/DhairyaVerma7",
      liveUrl: "https://github.com/DhairyaVerma7",
      details: {
        description: "Engineered under high-pressure hackathon deadlines to democratize access to quality educational resources. Uses Firebase for instantaneous authentication and live community document feeds.",
        keyFeatures: [
          "Seamless peer-to-peer resource curation with instantaneous search",
          "Firebase Auth & real-time document change listeners",
          "Interactive discussion boards with low-latency updates",
          "Optimized state management for zero lag during multi-user interaction"
        ],
        techStack: ["Firebase Auth", "Firestore DB", "Node.js", "React.js", "HTML5/CSS3"]
      }
    },
    {
      id: "dsa-core-engine",
      title: "Algorithmic DSA Engine (C++ & Python)",
      category: "dsa",
      categoryLabel: "DSA & Core",
      image: "codetantraa.jpg",
      summary: "Comprehensive repository of 70+ optimized algorithmic implementations, dynamic programming paradigms, and graph algorithms.",
      tags: ["C++20", "Python 3", "Algorithms", "Data Structures", "Benchmarking"],
      githubUrl: "https://github.com/DhairyaVerma7",
      liveUrl: "https://github.com/DhairyaVerma7",
      details: {
        description: "A meticulously organized collection of solutions and custom data structures designed to achieve optimal time and space bounds in C++ STL and Python.",
        keyFeatures: [
          "Optimized Graph algorithms: Dijkstra, Bellman-Ford, Tarjan's SCC, Prim's",
          "Advanced Trees: Segment Trees, Fenwick Trees (BIT), Trie structures",
          "Comprehensive DP patterns: Knapsack variants, MCM, Tree DP, Bitmask DP",
          "Clean modular code adhering to modern competitive programming standards"
        ],
        techStack: ["C++20 STL", "Python 3", "Data Structures", "Algorithmic Analysis", "GitHub"]
      }
    }
  ]
};
