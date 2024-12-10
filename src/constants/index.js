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
    title: "ASP.NET Core Developer",
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
    name: "Svelte",
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
    name: "ASP.NET Core",
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
    name: "AI-Powered Quiz Generation Platform",
    description:
      "Pioneered the development of a real-time quiz platform for 30+ teachers using webhooks, Fiber, and MongoDB, leveraging AI to generate quizzes to curb the issue of a limited user-content base.",
    tags: [
      {
        name: "svelte",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "golang",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Glioh/ai-quiz-project",
  },
  {
    name: "Web3 Crowdfunding Platform",
    description:
      "Developed a Web3 crowdfunding platform using Solidity, enabling secure Ethereum transactions with Metamask and smart contract integration for a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
      {
        name: "ethereum",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Autonomous Drone System and Navigation",
    description:
      "Collaborated on developing keyboard-based drone controls using Tello UAV, implementing a face tracking algorithm with 95% accuracy and engineering an autonomous line-following navigation system.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "uav",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };