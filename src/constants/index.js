import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  flutter,
  cypress,
  mongo,
  express,
  eleven,
  ABT,
  pizza,
  acl,
  nike,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "cypress",
    icon: cypress,
  },
  {
    name: "Mongo DB",
    icon: mongo,
  },
  {
    name: "express",
    icon: express,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "ABT IT Innovations",
    icon: ABT,
    iconBg: "#333333",
    date: "july 2023 - sep 2023",
  },
  {
    title: "Flutter Developer ",
    company_name: "Eleven",
    icon: eleven,
    iconBg: "#333333",
    date: "July 2024 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Pizza Hut",
    description: "A pizzaHut web app dynamic + Responsive & attractive.",
    tags: [
      {
        name: "react",
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
    image: pizza,
    repo: "",
    demo: "",
  },
  {
    id: "project-2",
    name: "ACL Tear Detector",
    description:
      "Final Year Project which is used to detect and predict ACL tears using ML technology and MRI images.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: acl,
    repo: "",
    demo: "",
  },
  {
    id: "project-3",
    name: "Nike App",
    description:
      "This is full fledge dynamic Nike clone app using the MERN stack",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    repo: "",
  },
];

export { services, technologies, experiences, projects };
