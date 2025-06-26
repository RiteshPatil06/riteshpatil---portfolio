
import { CertificationItem, EducationItem, ExperienceItem, ProjectItem } from "@/types";

export const experiences: ExperienceItem[] = [
  // {
  //   title: "Senior MLOps Engineer",
  //   company: "skima.ai",
  //   location: "Remote",
  //   date: "Jan 2022 - Present",
  //   description: [
  //     "Designed and implemented robust ML infrastructure and automation pipelines",
  //     "Led a team of engineers to optimize ML workflows ensuring scalability and reproducibility",
  //     "Integrated ML solutions into existing systems, empowering organizations to leverage data effectively",
  //     "Reduced model training time by 40% through optimization of pipeline architecture"
  //   ],
  //   skills: ["Docker", "Kubernetes", "Git Actions", "HuggingFace", "Python", "AWS"]
  // },
  // {
  //   title: "Lead MLOps Engineer",
  //   company: "tarang.ai (MLx)",
  //   location: "Remote",
  //   date: "Jul 2020 - Jan 2022",
  //   description: [
  //     "Established MLOps best practices and workflows for the organization",
  //     "Developed CI/CD pipelines for machine learning models",
  //     "Implemented model monitoring and observability solutions",
  //     "Collaborated with data scientists to streamline model deployment"
  //   ],
  //   skills: ["TensorFlow", "PyTorch", "Azure ML", "CI/CD", "Python", "Docker"]
  // },
  // {
  //   title: "Machine Learning Engineer",
  //   company: "DataTech Solutions",
  //   location: "San Francisco, CA",
  //   date: "Mar 2018 - Jun 2020",
  //   description: [
  //     "Built and deployed machine learning models for predictive analytics",
  //     "Created data processing pipelines for large-scale datasets",
  //     "Collaborated with cross-functional teams to implement ML solutions",
  //     "Performed model evaluation and optimization for production environments"
  //   ],
  //   skills: ["Python", "Scikit-learn", "TensorFlow", "SQL", "AWS", "GCP"]
  // }
];

export const educations: EducationItem[] = [
  {
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "Savitribai Phule Pune University",
    location: "Pune, India",
    date: "2022 - 2026",
    description: "Major in Electronics and Communication Engineering with a focus on machine learning and data science",
    gpa: "8.0/10.0"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board of Secondary and Higher Secondary Education",
    location: "Pune, India",
    date: "2020 - 2022",
    description: "Pre-university education with a focus on science and mathematics",
    gpa: "83%"
  }
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "AI-Powered Answer Machine",
    description: "AI driven question-answering system leveraging Groq function calling, Langchain and OpenAI APIs",
    image: "https://i.ibb.co/TDgTrsZh/Screenshot-2025-05-21-120308.png",
    tags: ["machine-learning", "python", "Langchain", "OpenAi", "nodejs", "typescript"],
    demoUrl: "https://answer-machine-perplexcity-style.vercel.app/",
    codeUrl: "https://github.com/RiteshPatil06/Answer-Machine"
  },
  
  {
    id: 2,
    title: "IPL Match Winning Prediction",
    description: "Using ML Algorithms to predict the winning team in an IPL Match.",
    image: "https://i.ibb.co/wh9DWz9X/Screenshot-2025-05-21-114901.png",
    tags: ["machine-learning", "python", "streamlit", "sklearn", "pandas"],
    demoUrl: "",
    codeUrl: "https://github.com/RiteshPatil06/IPL2023_WinningPrediction_EDA_Dashboard-main"
  },
  {
    id: 3,
    title: "AI Case Assistant",
    description: "Consent Management System with an AI Case Assistant.",
    image: "https://ik.imagekit.io/6ilngyaqa/1747801766400-demo_DKYeUoDb5.jpg",
    tags: ["Streamlit", "pandas", "Scikit-learn", "SQL", "machine-learning", "python"],
    demoUrl: "",
    codeUrl: "https://github.com/RiteshPatil06/AI-Case-Assistant"
  },
  {
    id: 4,
    title: "Zoom Clone",
    description: "A real-time video conferencing application built with WebRTC and Node.js",
    image: "https://i.ibb.co/zWpY5Vb2/Screenshot-2025-05-21-121242.png",
    tags: ["clerk", "react", "Stream API", "UI/UX", "web RTC", "webdev", "typescript"],
    demoUrl: "https://zoom-clone-tau-drab.vercel.app/",
    codeUrl: "https://github.com/RiteshPatil06/zoom-clone"
  },
  {
    id: 5,
    title: "chat with PDF",
    description: "LLM app with RAG to chat with PDF in just 30 lines of Python Code.",
    image: "https://ik.imagekit.io/6ilngyaqa/1747804444322-Screenshot_2025-05-21_104228_di7jZFnu0.png",
    tags: ["machine-learning", "python", "Streamlit", "OpenAi", "chat-bot"],
    demoUrl: "",
    codeUrl: "https://github.com/RiteshPatil06/chat-with-PDF"
  },
  {
    id: 6,
    title: "US Population Dashboard",
    description: "A Streamlit application that shows US population using pandas for data wrangling and Plotly for data visualization.",
    image: "https://ik.imagekit.io/6ilngyaqa/1747810633027-Screenshot_2025-05-21_122112_wYIwcTxe-.png",
    tags: ["pandas", "data wrangling", "Data Visualization"],
    demoUrl: "https://us-population-dashboard06.streamlit.app/",
    codeUrl: "https://github.com/RiteshPatil06/US-population-dashboard"
  }
];

export const certifications: CertificationItem[] = [
  {
    id: 1,
    name: "Google AI Essentials",
    organization: "Coursera / Google",
    date: "2024",
    url: "https://coursera.org/verify/6G8EDCKLSQQG"
  },
  {
    id: 2,
    name: "Google Data Analytics Professional Certificate",
    organization: "Coursera / Google",
    date: "2024",
    url: "https://coursera.org/verify/J55IQRWPRGO8"
  },
  {
    id: 3,
    name: "Meta Front-End Developer Professional Certificate",
    organization: "Coursera / Meta",
    date: "2023",
    url: "https://coursera.org/verify/8SVFANUYQU7N"
  },
  {
    id: 4,
    name: "100 days of Python",
    organization: "udemy",
    date: "2025",
    url: "https://www.udemy.com/certificate/UC-02b8797a-22f0-407d-81a3-a5a4435fada4/"
  },
  {
    id: 5,
    name: "Deep Learning Specialization",
    organization: "Coursera / deeplearning.ai",
    date: "2025",
    url: ""
  },
  {
    id: 6,
    name: "Generative AI",
    organization: "Guvi.ai",
    date: "2024",
    url: "https://www.guvi.in/share-certificate/ai13777122l127c15J"
  },
  {
    id: 7,
    name: "SWAIT.AI Learnathon",
    organization: "Guvi.ai",
    date: "2024",
    url: "https://www.guvi.in/share-certificate/7a27iTRZ71E0Q860d7"
  }
];

export const skills = [
  { name: "Python3", level: 80 },
  { name: "Machine Learning", level: 75 },
  { name: "Deep Learning", level: 70 },
  { name: "Langchain", level: 80 },
  { name: "Pytorch", level: 90 },
  { name: "Power BI", level: 85 },
  { name: "CI/CD", level: 80 },
  { name: "SQL", level: 85 },
  { name: "Git", level: 90 },
  { name: "JavaScript/TypeScript", level: 75 },
  { name: "React", level: 70 },
  { name: "Node.js", level: 75 },
];
