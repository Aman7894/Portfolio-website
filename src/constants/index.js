import {
  // mobile,
  // backend,
  // creator,
  carbook,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  codtech,
  perceptron,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "CodTech IT Solutions",
    icon: codtech,
    iconBg: "#383E56",
    date: "May 2025 - June 2025",
    points: [
      "Completed a full stack web development internship at CodTech Solutions.",
      "Worked on both frontend and backend using React, Node.js, and Express.js.",
      "Used MongoDB for managing and storing data.",
      "Built responsive and user-friendly web applications.",
      "Worked with a team to test and deploy projects."
    ],
  },
  
];

const projects = [
  {
    name: "DriveEasy Car Booking",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carbook,
    source_code_link: "https://github.com/Aman7894/DriveEasy",
  },
  {
    name: "Perceptron ChatGPT Clone",
    description:
      "A ChatGPT clone web app that allows users to interact with an AI chatbot for real-time conversations, built using modern web technologies for a smooth and responsive experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      
    ],
    image: perceptron,
    source_code_link: "https://github.com/Aman7894/A-Chatbot",
  },
];

export { services, technologies, experiences, projects };
