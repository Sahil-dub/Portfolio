export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export type LearningArea = {
  title: string;
  description: string;
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Querying",
    description:
      "Core languages used for data analysis, APIs, and project development.",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "Java"],
  },
  {
    title: "Data Analytics",
    description:
      "Skills used to clean data, explore patterns, and communicate business metrics clearly.",
    items: [
      "Pandas",
      "NumPy",
      "Excel",
      "Power BI",
      "Matplotlib",
      "KPI Reporting",
      "Data Cleaning",
      "Exploratory Data Analysis",
    ],
  },
  {
    title: "Machine Learning",
    description:
      "Practical ML skills used for baseline modeling, feature work, and honest evaluation.",
    items: [
      "Scikit-learn",
      "Feature Engineering",
      "Model Evaluation",
      "Classification",
      "Regression",
      "Logistic Regression",
      "Random Forest",
      "SHAP",
    ],
  },
  {
    title: "Data Engineering",
    description:
      "Skills used to clean, transform, validate, and serve data for analytics workflows.",
    items: [
      "ETL Pipelines",
      "PostgreSQL",
      "REST APIs",
      "Data Validation",
      "Data Transformation",
      "Batch Processing",
      "API Integration",
      "JSON Processing",
    ],
  },
  {
    title: "Backend & Deployment",
    description:
      "Tools used to build project APIs, ship portfolio work, and manage development workflows.",
    items: ["FastAPI", "Streamlit", "Git", "Docker", "Vercel", "Linux", "VS Code"],
  },
];

export const currentlyExploring: LearningArea[] = [
  {
    title: "PySpark Fundamentals",
    description:
      "Learning distributed data processing concepts for scalable ETL and analytics workflows.",
  },
  {
    title: "Docker Workflow Improvements",
    description:
      "Improving reproducible development setups for backend and data projects.",
  },
  {
    title: "Data Pipeline Orchestration Basics",
    description:
      "Exploring how scheduled workflows, validation steps, and monitoring fit into analytics systems.",
  },
];
