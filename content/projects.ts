export type ProjectType = "Analytics" | "Data Engineering" | "ML" | "Backend";

export type Project = {
  slug: string;
  title: string;
  businessProblem: string;
  techStack: string[];
  status: string;
  types: ProjectType[];
  githubUrl: string;
  demoUrl: string;
  caseStudyUrl: string;
  previewImage: string;
};

export const projects: Project[] = [
  {
    slug: "analytics-case-study",
    title: "Analytics Case Study",
    businessProblem:
      "Turn raw operational data into a focused dashboard that helps stakeholders spot trends, bottlenecks, and next actions quickly.",
    techStack: ["Python", "SQL", "PostgreSQL", "Dashboarding"],
    status: "Portfolio draft",
    types: ["Analytics"],
    githubUrl: "#",
    demoUrl: "#",
    caseStudyUrl: "#",
    previewImage: "/projects/analytics-preview.svg",
  },
  {
    slug: "data-pipeline-project",
    title: "Data Pipeline Project",
    businessProblem:
      "Design a reliable ingestion and transformation workflow so clean data is available for analysis without manual spreadsheet cleanup.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "ETL"],
    status: "Portfolio draft",
    types: ["Data Engineering", "Backend"],
    githubUrl: "#",
    demoUrl: "#",
    caseStudyUrl: "#",
    previewImage: "/projects/pipeline-preview.svg",
  },
  {
    slug: "machine-learning-project",
    title: "Machine Learning Project",
    businessProblem:
      "Build and evaluate a practical model workflow that makes predictions explainable enough for non-technical review.",
    techStack: ["Python", "scikit-learn", "Pandas", "Model evaluation"],
    status: "Portfolio draft",
    types: ["ML", "Analytics"],
    githubUrl: "#",
    demoUrl: "#",
    caseStudyUrl: "#",
    previewImage: "/projects/ml-preview.svg",
  },
];
