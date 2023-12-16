import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  epsilon,
  dsa,
  c,
  cpp,
  java,
  python,
  sql,
  hackathon,
  corizo,
  Ecommerce,
  Bank,
  Gym,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Software Tester",
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
    name: "DSA",
    icon: dsa
  },
  {
    name: "JAVA",
    icon: java
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "SQL",
    icon: sql
  },
  {
    name: "C",
    icon: c
  },
  {
    name: "CPP",
    icon: cpp
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Testing",
    company_name: "Epsilon",
    icon: epsilon,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Tested the Applications using java selenium.",
      "Worked on UI Automation and API Automation.",
      "Writing all the positive and nagetive test scenarios and implementing it through Automation.",
    ],
  },
  {
    title: "Hackathon",
    company_name: "Hackathon",
    icon: hackathon,
    iconBg: "#E6DEDD",
    date: "Aug 2022",
    points: [
      "Created a WEB3 Application to generate an NFT for certification of pollution control.",
      "Vehicles can be registered and PUC certificates can be produced by authorised users.",
      "Enables users to examin their PUC certificate using the vehicles registration number.",
    ],
  },
  {
    title: "Web Developement Internship",
    company_name: "Corizo",
    icon: corizo,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - May 2022",
    points: [
      "Learnt Front end development using HTML,CSS,JS,ReactJS.",
      "Created and launched the GYM website to connect with customer online.",
      "Built a travel website that informs the visitors about location andn users reviews.",
    ],
  },
];

const projects = [
  {
    name: "E Commerce Website",
    description:
      "Web applicaiton that enables users to create account, search for the required product, add products to their cart and order the items.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: Ecommerce,
    source_code_link: "https://github.com/shrimanm/Amazon_clone-reactjs-firebase-/",
  },
  {
    name: "Bank DBMS",
    description:
      "Web application with all the necessary Bank features with 3 user logins such as manager,employee and customer with their respective roles.",
    tags: [
      {
        name: "HTML | CSS | JS",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: Bank,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gym Website",
    description:
      "A comprehensive Gym Web application that allows users to view about the gym information such as Programs offerd at gym, packages details and many more.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Gym,
    source_code_link: "https://github.com/shrimanm/Gym_website",
  },
];

export { services, technologies, experiences, projects };
