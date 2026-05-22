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
  overview: string;
  dataInputs: string[];
  approach: string[];
  results: string[];
  challenges: string[];
  learnings: string[];
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
    caseStudyUrl: "/projects/analytics-case-study",
    previewImage: "/projects/analytics-preview.svg",
    overview:
      "A draft analytics case study focused on turning operational data into a dashboard that helps stakeholders understand performance quickly.",
    dataInputs: [
      "Placeholder operational dataset with dates, categories, and performance metrics.",
      "Derived KPI fields for trend, volume, and comparison views.",
      "Dashboard-ready tables shaped for fast filtering and review.",
    ],
    approach: [
      "Define the business question before choosing charts.",
      "Clean and model the data with SQL/Python so metrics are reusable.",
      "Design a dashboard flow around summary KPIs, trends, and drill-down views.",
    ],
    results: [
      "Placeholder result: dashboard structure prepared for recruiter review.",
      "No quantified business impact is claimed until the real dataset and metrics are finalized.",
    ],
    challenges: [
      "Keeping the dashboard focused instead of adding too many charts.",
      "Making assumptions visible where placeholder data is still being used.",
    ],
    learnings: [
      "Recruiters should be able to understand the business question before reading the code.",
      "A small, well-labeled dashboard can be more credible than a large unfocused one.",
    ],
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
    caseStudyUrl: "/projects/data-pipeline-project",
    previewImage: "/projects/pipeline-preview.svg",
    overview:
      "A draft data engineering case study for a simple ingestion, transformation, and serving workflow.",
    dataInputs: [
      "Placeholder source records from a file or API-like input.",
      "Validation rules for required fields, types, and duplicate handling.",
      "PostgreSQL tables prepared for downstream analytics.",
    ],
    approach: [
      "Separate ingestion, transformation, storage, and access concerns.",
      "Use Python and FastAPI patterns that are easy to inspect and test.",
      "Store cleaned records in PostgreSQL with a schema designed for querying.",
    ],
    results: [
      "Placeholder result: pipeline architecture and project story are defined.",
      "No uptime, scale, or performance claims are made until measured in the completed project.",
    ],
    challenges: [
      "Balancing clean architecture with the need to keep a portfolio project small.",
      "Showing data quality checks without making the page too technical.",
    ],
    learnings: [
      "A recruiter-friendly engineering project should make reliability decisions visible.",
      "Clear input/output contracts make backend and data work easier to evaluate.",
    ],
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
    caseStudyUrl: "/projects/machine-learning-project",
    previewImage: "/projects/ml-preview.svg",
    overview:
      "A draft ML case study focused on a practical model workflow, evaluation, and explainable decision-making.",
    dataInputs: [
      "Placeholder tabular dataset with features and a prediction target.",
      "Train/test split and validation notes for evaluation discipline.",
      "Feature list prepared for review and future model documentation.",
    ],
    approach: [
      "Start with a baseline model before adding complexity.",
      "Evaluate performance with metrics that match the problem type.",
      "Document model limits so the result is understandable outside the notebook.",
    ],
    results: [
      "Placeholder result: ML workflow structure is ready for real metrics.",
      "No accuracy, lift, or production-readiness claims are made until the model is completed and evaluated.",
    ],
    challenges: [
      "Avoiding overclaiming from a small or placeholder dataset.",
      "Presenting model quality in a way that is understandable to non-specialists.",
    ],
    learnings: [
      "A practical ML project needs baseline comparisons and clear limitations.",
      "Explaining why a metric matters is as important as reporting the metric itself.",
    ],
  },
];
