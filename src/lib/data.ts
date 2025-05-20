
import { CertificationItem, EducationItem, ExperienceItem, ProjectItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    title: "Senior MLOps Engineer",
    company: "skima.ai",
    location: "Remote",
    date: "Jan 2022 - Present",
    description: [
      "Designed and implemented robust ML infrastructure and automation pipelines",
      "Led a team of engineers to optimize ML workflows ensuring scalability and reproducibility",
      "Integrated ML solutions into existing systems, empowering organizations to leverage data effectively",
      "Reduced model training time by 40% through optimization of pipeline architecture"
    ],
    skills: ["Docker", "Kubernetes", "Git Actions", "HuggingFace", "Python", "AWS"]
  },
  {
    title: "Lead MLOps Engineer",
    company: "tarang.ai (MLx)",
    location: "Remote",
    date: "Jul 2020 - Jan 2022",
    description: [
      "Established MLOps best practices and workflows for the organization",
      "Developed CI/CD pipelines for machine learning models",
      "Implemented model monitoring and observability solutions",
      "Collaborated with data scientists to streamline model deployment"
    ],
    skills: ["TensorFlow", "PyTorch", "Azure ML", "CI/CD", "Python", "Docker"]
  },
  {
    title: "Machine Learning Engineer",
    company: "DataTech Solutions",
    location: "San Francisco, CA",
    date: "Mar 2018 - Jun 2020",
    description: [
      "Built and deployed machine learning models for predictive analytics",
      "Created data processing pipelines for large-scale datasets",
      "Collaborated with cross-functional teams to implement ML solutions",
      "Performed model evaluation and optimization for production environments"
    ],
    skills: ["Python", "Scikit-learn", "TensorFlow", "SQL", "AWS", "GCP"]
  }
];

export const educations: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    date: "2016 - 2018",
    description: "Specialized in Machine Learning and Artificial Intelligence",
    gpa: "3.9/4.0"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Indian Institute of Technology",
    location: "Delhi, India",
    date: "2012 - 2016",
    description: "Focus on algorithms, data structures, and software engineering fundamentals",
    gpa: "9.2/10.0"
  }
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "ML Model Deployment Platform",
    description: "A platform for seamless deployment of machine learning models with monitoring capabilities",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000",
    tags: ["machine-learning", "python", "kubernetes", "docker"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "Automated ML Pipeline",
    description: "End-to-end ML pipeline with automated feature engineering and model selection",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    tags: ["machine-learning", "python", "airflow", "sklearn"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Tailwind CSS",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000",
    tags: ["web", "react", "tailwind", "typescript"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 4,
    title: "DevOps Dashboard",
    description: "A dashboard for monitoring CI/CD pipelines and infrastructure",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    tags: ["devops", "react", "grafana", "prometheus"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 5,
    title: "Real-time Anomaly Detection",
    description: "System for detecting anomalies in streaming data using machine learning",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000",
    tags: ["machine-learning", "python", "kafka", "spark"],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 6,
    title: "Cloud Cost Optimizer",
    description: "Tool for optimizing cloud infrastructure costs across multiple providers",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000",
    tags: ["devops", "python", "aws", "terraform"],
    demoUrl: "#",
    codeUrl: "#"
  }
];

export const certifications: CertificationItem[] = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2022",
    url: "#"
  },
  {
    id: 2,
    name: "Google Professional Machine Learning Engineer",
    organization: "Google Cloud",
    date: "2021",
    url: "#"
  },
  {
    id: 3,
    name: "Microsoft Azure AI Engineer Associate",
    organization: "Microsoft",
    date: "2021",
    url: "#"
  },
  {
    id: 4,
    name: "TensorFlow Developer Certificate",
    organization: "Google",
    date: "2020",
    url: "#"
  },
  {
    id: 5,
    name: "Deep Learning Specialization",
    organization: "Coursera / deeplearning.ai",
    date: "2019",
    url: "#"
  }
];

export const skills = [
  { name: "Python", level: 90 },
  { name: "Machine Learning", level: 85 },
  { name: "Deep Learning", level: 80 },
  { name: "DevOps", level: 85 },
  { name: "Docker & Kubernetes", level: 90 },
  { name: "AWS/GCP/Azure", level: 85 },
  { name: "CI/CD", level: 80 },
  { name: "REST/gRPC APIs", level: 85 },
  { name: "Git", level: 90 },
  { name: "JavaScript/TypeScript", level: 75 },
  { name: "React", level: 70 },
  { name: "Node.js", level: 75 },
];
