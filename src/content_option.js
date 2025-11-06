// ---------- Imports ----------
import drukhealth from "./assets/images/drukhealth.jpeg";
import dermatology from "./assets/images/dermatology.jpeg";
import nuvision from "./assets/images/nuvision.jpeg";
import gender from "./assets/images/gender.jpeg";
import resume from "./assets/images/resume.jpeg";
import room from "./assets/images/room.jpeg";


// ---------- Portfolio Data ----------
const logotext = "Kunzang";

const meta = {
  title: "Kunzang Cheki",
  description:
    "I am Kunzang, an AI & Data Science graduate with 2+ years of internship experience, including 6 months in AI research and application development. Skilled in machine learning, deep learning, NLP, computer vision, cybersecurity, and full-stack development. Known for a maker’s mindset, teamwork, and problem-solving.",
};

const introdata = {
  title: "I’m Kunzang Cheki",
  animated: {
    first: "I love exploring",
    second: "I love AI and ML",
    third: "I am small BUT strong",
  },
  description:
    "AI & Data Science graduate with 2+ years of experience across AI research, model deployment, and full-stack development. Passionate about building solutions that merge AI, design, and accessibility.",
  your_img_url:
    "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "About Myself",
  description:
    "AI & Data Science graduate with a focus on building practical, impactful applications. Experienced across ML model training, web development, and embedded AI systems. I thrive at the intersection of innovation, teamwork, and user-centric design.",
};

const worktimeline = [
  { jobtitle: "Product Owner", where: "Enki Realm", date: "2023" },
  { jobtitle: "Ranger, Intern", where: "Seeed Studio", date: "2023 - Present" },
];

const skills = [
  {
    category: "Technical Skills",
    skills: [
      {
        name: "AI & Machine Learning",
        description:
          "Model training, deployment, computer vision, NLP, deep learning",
      },
      {
        name: "Data Analysis & Visualization",
        description: "NumPy, Pandas, TensorFlow, Matplotlib, Seaborn",
      },
      {
        name: "Frontend Development",
        description: "React.js, HTML5, Tailwind CSS",
      },
      {
        name: "Programming Languages",
        description: "Python, Node.js, JavaScript",
      },
      {
        name: "Databases",
        description: "MongoDB, MySQL",
      },
      {
        name: "Cloud Services",
        description: "Basic knowledge of AWS",
      },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Collaborative" },
      { name: "Disciplined" },
      { name: "Time Management" },
      { name: "Adaptable" },
      { name: "Teamwork" },
      { name: "Leadership" },
    ],
  },
];

// ---------- Projects ----------
const dataportfolio = [
  {
    title: "Druk Health – Zhiwa CTG",
    img: drukhealth,
    role: "Model Trainer, UI Designer, Backend Developer, App Integrator",
    description:
      "Developed an AI-powered Cardiotocography (CTG) interpretation system to monitor fetal health. Built models, backend APIs, and UI for early risk detection in maternal care.",
    skills:
      "Deep Learning, UI/UX Design, Backend Development, System Integration",
    link: "https://github.com/orgs/DrukHealth/repositories",
  },
  {
    title: "AI Dermatology: Skin Problem Detection",
    img: dermatology,
    role: "Model Trainer, Frontend Developer & Project Lead",
    description:
      "Built and trained CNN-based models to analyze skin images and detect dermatological conditions. Created a prototype web interface for instant AI-driven diagnosis.",
    skills: "Deep Learning, Computer Vision, Project Management",
    link: "https://github.com/kunzangcheki/AI-Dermatology",
  },
  {
    title: "NuVision: Currency Detector for Visually Impaired",
    img: nuvision,
    role: "Model Trainer & App Integrator",
    description:
      "Developed a CNN-based mobile app for Bhutanese currency detection to assist visually impaired users. Integrated real-time AI recognition with accessibility features.",
    skills: "Machine Learning, Mobile App Development, Accessibility Design",
    link: "https://github.com/KunzangCheki/NuVision_BTCurrencyDetector",
  },
  {
    title: "Gender Recognition using Machine Learning",
    img: gender,
    role: "Model Trainer & App Integrator",
    description:
      "Trained ML classification models to predict gender from datasets. Designed an interactive web UI for real-time predictions with deployed model integration.",
    skills: "Machine Learning, Frontend Development, Model Deployment",
    link: "https://github.com/kunzangcheki/Gender-Recognition-ML",
  },
  {
    title: "Resume Ranking System using NLP",
    img: resume,
    role: "NLP Engineer & Backend Developer",
    description:
      "Built an NLP-powered system that analyzes and ranks resumes against job descriptions using keyword extraction and similarity scoring for automated shortlisting.",
    skills:
      "Natural Language Processing, Python, Flask, Recommendation Systems",
    link: "https://github.com/KunzangCheki/ResumeRankingSystem",
  },
  {
    title: "Room Reservation System",
    img: room,
    role: "Full-Stack Developer",
    description:
      "Developed a responsive web app for room booking and management, with secure backend and a clean UI for user-friendly reservation tracking.",
    skills: "Web Development, Frontend Design, Database Handling",
    link: "https://github.com/KunznagCheki/room_reservation",
  },
];

// ---------- Contact + Social ----------
const contactConfig = {
  YOUR_EMAIL: "kcheki46@gmail.com",
  YOUR_FONE: "+975 77882444",
  description:
    "I’m always open to new opportunities, collaborations, and discussions about technology, AI, and web development. Feel free to reach out!",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://gitlab.com/12220045.gcit",
  facebook: "https://www.facebook.com/yangchen.lhamo.944023",
  linkedin: "https://www.linkedin.com/in/kunzang-cheki-450326268/",
  twitter: "https://x.com/KCheki8378",
};

// ---------- Exports ----------
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
