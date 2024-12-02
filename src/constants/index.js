import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  first,
  iu13,
  psu,
  lockhead,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Embedded Systems Developer",
    icon: creator,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Lockhead Martin",
    icon: lockhead,
    iconBg: "#383E56",
    date: "June 2025 - Aug 2025",
    points: [
      "Prospective Software Engineer at Lockheed Martin, a global aerospace, defense, and security company.",
    ],
  },
  {
    title: "Assistant Researcher - Machine Learning in Analyzing Joint Health",
    company_name: "Pennsylvania State University MC REU",
    icon: psu,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Developed ML models with biomedical engineering student to classify ligament damage from medical imaging",
      "Explored CNN image processing techniques to analyze joint health and diagnostic methods",
      "Presented research demonstrating AI's potential to reduce orthopedic diagnostic time by 40% at MC REU Exhibition"
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Lancaster-Lebanon IU13",
    icon: iu13,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Developed a multi-page website with C#, ASP.NET Core, SQL, and JavaScript, targeting ≈50,000 monthly users",
      "Integrated a company-wide localization framework, improving multi-language support across all company sites",
      "Completed daily workshops on DevOps, REST API, cloud computing, and Version Control",
      "Orchestrated an automated SMS appointment reminder system for client websites, processing 1,000+ daily notifications across 22 school districts"
    ],
  },
  {
    title: "Robotics Engineer",
    company_name: "FIRST",
    icon: first,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - July 2024",
    points: [
      "Orchestrated design of custom motion-profiling algorithm for robotic systems",
      "Improved robot precision by 30% compared to traditional PID controllers, enhancing overall efficiency",
      "Leveraged advanced kinematics calculations to refine complex movement trajectories",
      "Qualified for PA State Championship in FIRST Tech Challenge (FTC) robotics competition"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };