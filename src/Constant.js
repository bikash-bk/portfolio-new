// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import clerkLogo from "./assets/tech_logo/clerkLogo.png";
import novem from "./assets/company_logo/novem.png";
import amdox from "./assets/company_logo/amdox.png";
import food_delivery from "./assets/work_logo/foodDelivery.png";
import ai_interview from "./assets/work_logo/aiInterview.png";
import documeindAi from "./assets/work_logo/documindAI.png";
import employeeManagement from "./assets/work_logo/emplyeeManagement.png";
import saasNotes from "./assets/work_logo/saasNotes.png";
import kcet from "./assets/education_logo/kcet.png";
import rajarshi from "./assets/education_logo/rajarshi.png";
import galaxy from "./assets/education_logo/galaxy.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const skillsInfo = [
  {
    tittle: "Frontend",
    skills: [
      {
        name: "HTML",
        logo: htmlLogo,
      },
      {
        name: "CSS",
        logo: cssLogo,
      },
      {
        name: "Javascript",
        logo: javascriptLogo,
      },
      {
        name: "ReactJS",
        logo: reactjsLogo,
      },
      {
        name: "NextJs",
        logo: nextjsLogo,
      },
      {
        name: "Tailwind CSS",
        logo: tailwindcssLogo,
      },
      {
        name: "Bootstrap",
        logo: bootstrapLogo,
      },
    ],
  },
  {
    tittle: "Backend",
    skills: [
      {
        name: "node js",
        logo: nodejsLogo,
      },
      {
        name: "Express js ",
        logo: expressjsLogo,
      },
      {
        name: "MongoDB",
        logo: mongodbLogo,
      },
      {
        name: "postgreSQL",
        logo: postgreLogo,
      },
      {
        name: "clerk",
        logo: clerkLogo,
      },
    ],
  },
  {
    tittle: "Languages",
    skills: [
      {
        name: "python",
        logo: pythonLogo,
      },
      {
        name: "Javascript",
        logo: javascriptLogo,
      },
    ],
  },

  {
    tittle: "Tools",
    skills: [
      {
        name: "Git",
        logo: gitLogo,
      },
      {
        name: "Github",
        logo: githubLogo,
      },
      {
        name: "VS code",
        logo: vscodeLogo,
      },
      {
        name: "postman",
        logo: postgreLogo,
      },
      {
        name: "compass",
        logo: mcLogo,
      },
      {
        name: "vercel",
        logo: vercelLogo,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: novem,
    role: "Mern stack Developer Training",
    company: "Novem Control",
    date: "Apr 2024 - oct 2024",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: amdox,
    role: "Fullstack Engineer Intern",
    company: "Amdox",
    date: "Jan 2025 - June 2025",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript,node js , express js , mongodb Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDB",
      " Next Js",
    ],
  },
];

export const projects = [
  {
    id: 0,
    tittle: "Food Delivery App",
    description:
      "A powerful and user-friendly React.js application designed for food delivery. functionalities of adding item in the cart section with total amount counting with bill .",
    image: food_delivery,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    ithub: "",
    webapp: "",
  },
  {
    id: 1,
    title: "AI-Interview-Mocker",
    description:
      "A full-stack project named AI Interview Mocker using Next.js, Clerk, PostgreSQL, Prisma, and Google Gemini Flash.",
    image: ai_interview,
    tags: ["Nextjs", "PostgreSql", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/bikash-bk/Ai-interview-mocker",
    webapp: "https://ai-interview-mocker-pi-eight.vercel.app/",
  },

  {
    id: 2,
    title: "DocuMind AI",
    description:
      "Designed and developed the UI/UX and frontend for an LLM-powered document processing system that retrieved precise clauses from lengthy documents in plain English. Integrated semantic search (FAISS) and backend APIs, enhancing document review efficiency by 40% for 50+ users",
    image: documeindAi,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "python", "nodejs"],
    github: "https://github.com/bikash-bk/LLM-document-processing-system",
    webapp: "",
  },
  {
    id: 3,
    title: "Employee Management system ",
    description:
      "A full-stack based project for employee management system with having functionalities of supporting multiple tenants.",
    image: employeeManagement,
    tags: ["React JS", "Node.js", "mongoDB"],
    github: "https://github.com/bikash-bk/employee-management",
    webapp: "",
  },
  {
    id: 4,
    title: "Saas Notes Application ",
    description:
      "a full stack based peoject with functionalities of multiple tenants with protected data so that only authorized tenants will access the data of other notes ",
    image: saasNotes,
    tags: ["React JS", "Node.js", "mongoDB"],
    github: "https://github.com/bikash-bk/sass-notes-application",
    webapp: "",
  },
];
