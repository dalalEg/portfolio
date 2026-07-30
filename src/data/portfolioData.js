import movieDiscoveryScreenshot from "../assets/Screenshot 2025-09-18 201243.png";
import SeatSelectionScreenshot from "../assets/SeatSelecting.png";
import BookingCheckoutScreenshot from "../assets/BookingDeatails.png";
import NotificationScreenshot from "../assets/Notification.png"
import BarcodeScreen from "../assets/Barcode-Cards.png";
import HardwareStackScreen from "../assets/hardware.png";
import Navigation from "../assets/sensorsAllocation.png";
import SoundFeedback from "../assets/Feedback.png";
import Profile from "../assets/Profile.png";
import Search from "../assets/EditPost.png";
import ConnectionsSuggestions from "../assets/ConnectionsSuggestions.png";
import AddPost from "../assets/NewPost.png";
export const skills = {
  languages: ["Python", "JavaScript", "C++", "C", "SQL"],

  frontend: [
    "React",
    "HTML",
    "CSS",
    "React Router"
  ],

  backend: [
    "Django",
    "Django REST Framework",
    "REST APIs"
  ],

  database: [
    "PostgreSQL",
    "SQLite"
  ],

  tools: [
    "Git",
    "Docker",
    "GitHub Actions",
    "Linux",
    "Redis",
    "Celery",
    "GitHub"
  ]
};

export const projects = [
  {
    eyebrow: "Featured Project",
    title: "Movie Theater Booking System",
    description:
      "Production-style full-stack movie booking platform featuring real-time seat reservation, booking lifecycle automation, REST APIs, and asynchronous background processing.",
    techStack: [
      "Django REST Framework",
      "React",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Render",
      "Netlify",
    ],
    keyFeatures: [
      "Atomic seat booking to prevent double-booking under concurrent load",
      "Interactive seat maps with real-time availability and dynamic pricing",
      "Booking lifecycle automation (Pending -> Confirmed -> Attended)",
      "Notification engine for reminders, watchlist updates, and favorites",
      "Admin analytics for revenue and top-performing movies",
      "Session-based auth with CSRF protection and email verification rules",
    ],
    metrics: [
      { label: "Domain Models", value: "16+" },
      { label: "REST Endpoints", value: "15+" },
      { label: "Backend Tests", value: "80+" },
      { label: "Code Coverage", value: "~80%" },
    ],
    architecture: [
      "React",
      "->",
      "Axios",
      "->",
      "Django REST API",
      "->",
      "PostgreSQL",
      "Celery",
      "->",
      "Redis",
    ],
    links: {
      github: "https://github.com/dalalEg/CS50W",
      liveDemo: "https://dali-movie-theater.netlify.app",
      learnMore: "https://youtu.be/YrqwYAZTVQ8?si=2Mfxi42zWNURMIaX",
    },
    galleryItems: [
      {
        title: "Movie Discovery",
        detail: "Advanced filtering and search flow",
        image: movieDiscoveryScreenshot,
      },
      {
        title: "Seat Selection",
        detail: "Interactive auditorium seat map",
        image: SeatSelectionScreenshot,
      },
      {
        title: "Booking Checkout",
        detail: "Payment and booking confirmation",
        image: BookingCheckoutScreenshot,
      },
      { title: "Notifications", detail: "Reminders and activity timeline", image: NotificationScreenshot },
    ],
  },
  {
    eyebrow: "IoT Robotics",
    title: "Robotic Maze Solver (Coding Minion)",
    description:
      "Autonomous robot that navigates a maze using barcode-driven instructions, sensor input, and embedded path logic on ESP32.",
    techStack: ["C++", "Sensors", "Algorithms", "IoT", "ESP32"],
    keyFeatures: [
      "Barcode-driven offline programming using color cards",
      "Maze solving with turn logic at walls and junctions",
      "Parallel wall movement and 90/180-degree turns",
      "Integrated behavior effects including LEDs, buzzer, and dance motions",
      "Modular sensor and component test folders in repository",
    ],
    metrics: [
      { label: "Distance Sensors", value: "3" },
      { label: "DC Motors", value: "2" },
      { label: "RGB LEDs", value: "3" },
      { label: "Resistors", value: "14" },
    ],
    links: {
      github: "https://github.com/Nadeen145/Coding-Minion-IOT",
      liveDemo:
        "https://www.dropbox.com/scl/fi/y2xssjx69hejrivqjxy7q/Coding-Minion.mp4?rlkey=mbwz7omu8md29fg1xs7ji59vn&dl=0",
      learnMore:
        "https://www.youtube.com/watch?v=xytOwOuyp5M",
    },
    galleryItems: [
      {
        title: "Barcode Instruction Cards",
        detail: "Cards are scanned before run-time to set movement flow",
        image: BarcodeScreen,
      },
      {
        title: "Maze Navigation",
        detail: "Real-world wall and junction decisions on hardware",
        image: Navigation,
      },
      {
        title: "Interactive Behaviors",
        detail: "Lighting, sound  feedback",
        image: SoundFeedback,
      },
      {
        title: "Hardware Stack",
        detail: "ESP32 with sensors, motors, driver, and custom chassis",
        image: HardwareStackScreen,
      },
    ],
  },
  {
    eyebrow: "Web Platform",
    title: "CS50 Social Network",
    description:
      "Social platform supporting posts, follows, likes, editing, comments, and paginated feeds with asynchronous interactions.",
    techStack: [
      "Django",
      "JavaScript",
      "Bootstrap 4",
      "SQLite",
      "Python",
    ],
    keyFeatures: [
      "Authentication flow with registration, login, and logout",
      "All-posts and following feeds with pagination",
      "Asynchronous like, comment, and in-place post editing",
      "User profiles with follow and unfollow actions",
      "Search across usernames and post keywords",
    ],
    metrics: [
      { label: "Feed Types", value: "2" },
      { label: "Posts per Page", value: "10" },
      { label: "Core Modules", value: "Django + JS" },
      { label: "Course Project", value: "CS50W" },
    ],
    links: {
      github: "https://github.com/dalalEg/CS50W/tree/main/project4",
      learnMore: "https://www.youtube.com/watch?v=TELOnfr8meY",
    },
    galleryItems: [
      {
        title: "AddPost",
        detail: "Create new posts with text and media",
        image: AddPost,
      },
      {
        title: "Profile View",
        detail: "Follower/following counts and user activity",
        image: Profile,
      },
      {
        title: "Connections Suggestions",
        detail: "Discover new users to follow randomly ",
        image: ConnectionsSuggestions,
      },
      {
        title: "Edit Post",
        detail: "Edit existing posts with text and media",
        image: Search,
      },
    ],
  },
];

export const experience = {
  title: "AI Training Engineer",
  company: "Scale AI",
  location: "Remote",
  timeframe: "Nov 2024 – Jan 2025",
  points: [
    "Evaluated AI-generated code and technical responses.",
    "Improved model quality through structured feedback.",
    "Worked across Python, C++, JavaScript, and software engineering tasks.",
  ],
};

export const education = {
  school: "Technion - Israel Institute of Technology",
  degree: "B.Sc. Computer Science",
  coursework: [
    "Operating Systems",
    "Computer Networks",
    "Network Security",
    "Artificial Intelligence",
    "Database",
    "Algorithms and Data Structures",
  ],
  certifications: [
    {
      title: "edX Verified Certificate for CS50's Web Programming with Python and JavaScript",
      issuer: "edX",
      issued: "Nov 2025",
      credentialId: "be096cd76ef143238d165449cbaf0361",
      credentialUrl: "https://courses.edx.org/certificates/be096cd76ef143238d165449cbaf0361",
      skills: [
        "Full-Stack Development",
        "CSS",
        "Django",
        "JavaScript",
        "REST APIs",
      ],
      relatedLink: {
        label: "Related GitHub Projects",
        url: "https://github.com/dalalEg/CS50W",
      },
    },
  ],
};

export const contact = {
  email: "mailto:dalal.eg@campus.technion.ac.il",
  github: "https://github.com/dalalEg",
  linkedin: "https://linkedin.com/in/dalal-eghbaria-a9283820a",
  resume: "https://drive.google.com/file/d/1g0k5r6J4X8F3G9K2L5H7J8K9L0M1N2O3/view?usp=sharing",
};
