import {
  backend,
  web,
  mern,
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
 git,
  // figma,
  // docker,
  CPP,
  CSharp,
  MVCDotnet,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pinnacle,
  codsoft,
  bses,
  motioncut
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
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mern Developer",
    icon:mern,
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
    name: "C++",
    icon: CPP,
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
    name: "Git",
    icon: git,
  },
  {
    name: "C#",
    icon: CSharp,
  },
  {
    name: "MVC.NET",
    icon: MVCDotnet,
  },
];

const experiences = [
  {
    title: "C++ Developer Internship",
    company_name: "Pinnacle Labs Pvt",
    icon:pinnacle,
    iconBg: "#383E56",
    date: "July 2021 - Aug 2021",
    points: [
      "Developed algorithms and functions using C++ to optimize the company's core system performance.",
      "Assisted in debugging and troubleshooting complex C++ code for improved stability and efficiency.",
      "Collaborated with senior developers to enhance existing features and implement new functionalities in the company's software.",
      "Performed code reviews and recommended improvements to ensure adherence to coding standards."
    ],
  },
  {
    title: "Dotnet Developer Internship",
    company_name: "BSES",
    icon:bses,
    iconBg: "#E6DEDD",
    date: "July 2021 - Aug 2021",
    points: [
      "Developed and maintained web applications using ASP.NET and MVC architecture.",
      "Integrated backend services with databases to enable smooth data storage and retrieval.",
      "Collaborated with cross-functional teams to gather and implement user requirements.",
      "Enhanced system performance through code optimization and bug fixes in .NET applications."
  
    ],
  },
  {
    title: "Frontend Developer Internship",
    company_name: "MotionCut",
    icon: motioncut,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Designed and developed responsive user interfaces using HTML, CSS, and JavaScript.",
      "Worked closely with UX/UI designers to create visually appealing and user-friendly web pages.",
      "Optimized web pages for maximum speed and scalability using modern frontend frameworks.",
      "Debugged and resolved frontend-related issues to ensure smooth user interactions."
    ],
  },
  {
    title: "Web Developer Internship",
    company_name: "CodSoft",
    icon: codsoft,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Built and deployed dynamic websites using React.js and Node.js with an emphasis on clean code.",
      "Collaborated with backend developers to integrate APIs and ensure data synchronization.",
      "Implemented responsive design to improve user experience across multiple device types.",
      "Participated in daily standups and sprint meetings to report progress and discuss improvements."
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "3D Visualization Portfolio",
    description:
    "A dynamic portfolio showcasing 3D models and animations using Three.js. This project allows users to interact with 3D objects and experience a visually engaging web environment. It demonstrates advanced JavaScript skills and seamless integration of Tailwind CSS for a modern, responsive design.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
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
    name: "Sorting Visualizer",
    description:
    "An interactive web application that visualizes sorting algorithms like Bubble Sort, Quick Sort, and Merge Sort. Users can see real-time animations of data being sorted, helping them understand how these algorithms work. Built with JavaScript and styled with Tailwind, this tool is perfect for students learning data structures.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Data Structure",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Mock Interview App",
    description:
    "A cutting-edge web application that simulates real-time job interviews using AI. The app generates interview questions based on user input and evaluates their responses using natural language processing techniques. Built with Next.js and React, this project leverages Gemini AI to provide users with constructive feedback and help them prepare for job interviews.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Gemini AI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
