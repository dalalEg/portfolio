import movieDiscoveryScreenshot from "../assets/Screenshot 2025-09-18 201243.png";
import SeatSelectionScreenshot from "../assets/SeatSelecting.png";
import BookingCheckoutScreenshot from "../assets/BookingDetails.png";
export const skills = {
  languages: ["Python", "JavaScript", "C++", "C", "SQL"],

  frontend: [
    "React",
    "HTML",
    "CSS",
    "Axios",
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
    "GitHub",
    "Docker",
    "GitHub Actions",
    "Linux",
    "Redis",
    "Celery"
  ]
};
export const techStack = [
  "Django REST Framework",
  "React",
  "PostgreSQL",
  "Redis",
  "Celery",
  "Docker",
  "Render",
  "Netlify",
];

export const keyFeatures = [
  "Atomic seat booking to prevent double-booking under concurrent load",
  "Interactive seat maps with real-time availability and dynamic pricing",
  "Booking lifecycle automation (Pending -> Confirmed -> Attended)",
  "Notification engine for reminders, watchlist updates, and favorites",
  "Admin analytics for revenue and top-performing movies",
  "Session-based auth with CSRF protection and email verification rules",
];

export  const metrics = [
  { label: "Domain Models", value: "16+" },
  { label: "REST Endpoints", value: "15+" },
  { label: "Backend Tests", value: "80+" },
  { label: "Code Coverage", value: "~80%" },
];

export const projectLinks = {
  github: "https://github.com/dalalEg/CS50W",
  liveDemo: "https://dali-movie-theater.netlify.app",
  youtubeDemo: "https://youtu.be/YrqwYAZTVQ8?si=2Mfxi42zWNURMIaX",
};

export  const galleryItems = [
  {
    title: "Movie Discovery",
    detail: "Advanced filtering and search flow",
    image: movieDiscoveryScreenshot,
  },
  { title: "Seat Selection", 
    detail: "Interactive auditorium seat map", 
    image: SeatSelectionScreenshot },
  { title: "Booking Checkout",
     detail: "Payment and booking confirmation",
      image: BookingCheckoutScreenshot },
  { title: "Notifications", detail: "Reminders and activity timeline" },
];
