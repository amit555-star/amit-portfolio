import { Project, Education, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Amit Kumar Chaudhary",
  role: "Frontend Developer",
  tagline: "I'm a", // Used as prefix for typing animation
  about: "Frontend-focused web developer building responsive, user-friendly interfaces with HTML, CSS, JavaScript, React, and Tailwind. Passionate about clean UI, smooth interactions, and continuous learning.",
  email: "chaudahry004@gmail.com",
  profileImage: "https://picsum.photos/600/600?grayscale", 
  aboutImage: "https://picsum.photos/600/600?grayscale",
  socials: {
    github: "https://github.com/amit555-star",
    linkedin: "https://linkedin.com/in/amitkumarchy",
  }
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Smart Expense Tracker",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "A comprehensive solution for personal finance management with built-in currency exchange features.",
    features: ["Real-time expense tracking", "Live currency exchange rates", "Mobile-first swipe-based UI"],
    liveLink: "https://amit555-star.github.io/smart-expense-tracker/",
    repoLink: "https://github.com/amit555-star/smart-expense-tracker",
    image: "images/smart-expense-tracker.png"
  },
  {
    id: 2,
    title: "E-Learning Website",
    tech: ["HTML", "CSS", "Bootstrap", "JS"],
    description: "A responsive educational platform designed to deliver course content effectively with a focus on UI/UX.",
    features: ["Multi-page course layout", "Responsive dashboard", "Distraction-free reading"],
    liveLink: "https://amit555-star.github.io/e-learning-full-website/",
    repoLink: "https://github.com/amit555-star/e-learning-full-website",
    image: "images/e-learning.png"
  },
  {
    id: 3,
    title: "Tic-Tac-Toe Game",
    tech: ["JavaScript", "DOM"],
    description: "An interactive 2-player game demonstrating logic implementation and DOM manipulation.",
    features: ["Turn-based logic", "Win detection", "Board reset functionality"],
    liveLink: "https://amit555-star.github.io/TicTacToe/",
    repoLink: "https://github.com/amit555-star/TicTacToe",
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    id: 4,
    title: "PFC Menu UI Recreation",
    tech: ["HTML", "CSS"],
    description: "A pixel-perfect recreation of a popular food chain's digital menu focusing on modern CSS techniques.",
    features: ["Complex Grid layouts", "Hover effects", "Responsive design"],
    liveLink: "https://amit555-star.github.io/pfcMenu-clone/",
    repoLink: "https://github.com/amit555-star/pfcMenu-clone",
    image: "images/pfc-menu-redesign.png"
  }
];

export const SKILLS: Skill[] = [
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "C Language", category: "language" },
  { name: "Python (Basic)", category: "language" },
  { name: "Git & GitHub", category: "tools" },
  { name: "AWS (Basic)", category: "tools" },
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "BSc in Computer Science",
    institution: "University Of The People",
    status: "Enrolled",
    year: "Aug 2025 - 2029"
  },
  {
    id: 2,
    degree: "Piscine Program",
    institution: "42 Abu Dhabi School",
    status: "Upcoming",
    year: "Apr 2025 - May 2025"
  },
  {
    id: 3,
    degree: "Full-Stack Development",
    institution: "Docsta Institute",
    status: "Completed",
    year: "Feb 2024 - Oct 2024"
  },
  {
    id: 4,
    degree: "+2 Science",
    institution: "Tilingtar Higher Secondary",
    status: "Completed",
    year: "2010 - 2012"
  }
];