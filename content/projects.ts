export type Project = {
  slug: string;
  title: string;
  summary: string;
  focus: string[];
  status: "placeholder" | "published";
};

export const projects: Project[] = [
  {
    slug: "analytics-case-study",
    title: "Analytics Case Study",
    summary:
      "Placeholder project for a recruiter-readable analytics case study.",
    focus: ["Data Analytics", "SQL", "Visualization"],
    status: "placeholder",
  },
  {
    slug: "data-pipeline-project",
    title: "Data Pipeline Project",
    summary:
      "Placeholder project for a data engineering workflow and pipeline case study.",
    focus: ["Data Engineering", "Python", "ETL"],
    status: "placeholder",
  },
  {
    slug: "machine-learning-project",
    title: "Machine Learning Project",
    summary:
      "Placeholder project for a practical ML model development case study.",
    focus: ["Machine Learning", "Modeling", "Evaluation"],
    status: "placeholder",
  },
];
