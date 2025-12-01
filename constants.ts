import { Project, Experience, SkillCategory, Certification } from "./types";

export const PERSONAL_INFO = {
  name: "Gangula Venkata Rishitha",
  role: "Software Engineer & Creative Technologist",
  email: "devirishi1004@gmail.com",
  phone: "+91-9550567164",
  location: "Andhra Pradesh, India",
  linkedin: "https://www.linkedin.com/in/g-v-rishitha",
  github: "https://github.com/Gangula-Venkata-Rishitha",
  tagline: "Crafting simple solutions for complex problems.",
};

export const PROJECTS: Project[] = [
  // Internships
  {
    id: "intern-1",
    title: "Associate Software Engineer Intern",
    category: "Internship",
    description:
      "Worked on Rapid Data Loader (RDL) to perform efficient data migration. Supported SAP ERP deployment through testing and on-site team collaboration.",
    link: "https://drive.google.com/file/d/1nj7yDHOAhxnetvZDPi1YPVXAwLBTMVXc/view",
    type: "internship",
  },
  {
    id: "intern-2",
    title: "TICT Computers - Intern Instructor",
    category: "Internship",
    description:
      "Instructor for C Language and Python. Designed and delivered hands-on coding exercises to strengthen student skills.",
    link: "https://drive.google.com/file/d/1LlKD2-JpqMfvTx2VHritzLjbXvhyDx8W/view",
    type: "internship",
  },
  // Research Projects
  {
    id: "proj-1",
    title: "Blink-Based Cognitive Load Detection",
    category: "AI & Computer Vision",
    description:
      "A blink-based cognitive load detection system robust to noisy visual conditions. Built using a lightweight EAR/MediaPipe pipeline to extract blink features, demonstrating that longer neutral baselines improve stability.",
    link: "https://github.com/Gangula-Venkata-Rishitha/Blink-Detection-Noisy-Environments",
    type: "project",
  },
  {
    id: "proj-2",
    title: "Fine-Tuned ChatBot",
    category: "Generative AI",
    description:
      "A context-aware document Q&A chatbot processing PDFs. Powered by a fine-tuned Cohere LLM, LangChain, and FAISS-based semantic retrieval for accurate information extraction.",
    link: "https://github.com/Gangula-Venkata-Rishitha/finetuned_chatbot",
    type: "project",
  },
  {
    id: "proj-3",
    title: "Online Seminar Management System",
    category: "Web Application",
    description:
      "A comprehensive platform designed for universities to manage Head of Department accounts. Streamlines the creation and management of departmental accounts with a user-friendly interface.",
    link: "https://github.com/Gangula-Venkata-Rishitha/JNTUA_SEMINAR",
    type: "project",
  },
  // Web Projects
  {
    id: "web-1",
    title: "TICT Computers Website",
    category: "Web Development",
    description:
      "Professional website for TICT Computers showcasing services and company information with modern, responsive design.",
    link: "https://tictcomputers.onrender.com/",
    type: "web",
  },
  {
    id: "web-2",
    title: "Friends Web Portal",
    category: "Web Development",
    description:
      "Interactive web portal designed for social connections and networking features.",
    link: "https://ching-chong.netlify.app/",
    type: "web",
  },
  {
    id: "web-3",
    title: "College Day 2025",
    category: "Web Development",
    description:
      "Event website for College Day 2025 with dynamic content, schedule, and registration features.",
    link: "https://collegeday2025.netlify.app/",
    type: "web",
  },
  {
    id: "web-4",
    title: "Race 2K25 - Tech Fest",
    category: "Web Development",
    description:
      "Landing page for technical symposium and fest with modern UI/UX and event information.",
    link: "https://race2k25.netlify.app/",
    type: "web",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "e1",
    company: "Accenture India",
    role: "Associate Software Engineer Intern",
    period: "May 2025 - July 2025",
    type: "Internship",
    description: [
      "Worked on Rapid Data Loader (RDL) to perform efficient data migration.",
      "Supported SAP ERP deployment through testing and on-site team collaboration.",
    ],
    link: "https://drive.google.com/file/d/1nj7yDHOAhxnetvZDPi1YPVXAwLBTMVXc/view",
  },
  {
    id: "e2",
    company: "TICT Computers",
    role: "Intern Instructor",
    period: "June 2023 - Jan 2024",
    type: "Work",
    description: [
      "Instructor for C Language and Python.",
      "Designed and delivered hands-on coding exercises to strengthen student skills.",
    ],
    link: "https://drive.google.com/file/d/1LlKD2-JpqMfvTx2VHritzLjbXvhyDx8W/view",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Jawaharlal Nehru Technological University College Of Engineering, Anantapur",
    period: "Expected 2026",
    grade: "CGPA: 8.63",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College, Anantapur",
    period: "2020 - 2022",
    grade: "Percentage: 97.1%",
    extra: "EAPCET Rank: 4533",
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Sri Chaitanya English Medium High School, Anantapur",
    period: "2019 - 2020",
    grade: "GPA: 10.0",
  },
] as Array<{
  degree: string;
  institution: string;
  period: string;
  grade: string;
  extra?: string;
}>;

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Certificate in Cloud Computing",
    issuer: "NPTEL",
    year: "2025",
    link: "#",
  },
  {
    id: "cert-2",
    title: "Python Data Structures & Algorithms + Leetcode Exercises",
    issuer: "Udemy",
    year: "2025",
    link: "#",
  },
  {
    id: "cert-3",
    title: "Databases: Relational Databases and SQL",
    issuer: "Edx (Stanford)",
    year: "2024",
    link: "#",
  },
  {
    id: "cert-4",
    title: "HTML5 and CSS Fundamentals",
    issuer: "Edx (W3CX)",
    year: "2024",
    link: "#",
  },
  {
    id: "cert-5",
    title: "Python Basics for Data Science",
    issuer: "Edx (IBM)",
    year: "2024",
    link: "#",
  },
  {
    id: "cert-6",
    title: "Learning Linux for LFCA Certification",
    issuer: "Coursera",
    year: "2023",
    link: "#",
  },
  {
    id: "cert-7",
    title: "Full Stack Web Development",
    issuer: "Internshala",
    year: "2023",
    link: "#",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript"],
  },
  {
    category: "Web Tech",
    skills: ["React", "HTML5", "CSS3", "Tailwind", "Node.js"],
  },
  {
    category: "Core CS",
    skills: ["Data Structures", "Algorithms", "DBMS", "OS", "Networks"],
  },
  {
    category: "Tools & AI",
    skills: ["Git/GitHub", "Generative AI", "n8n", "VS Code"],
  },
];
