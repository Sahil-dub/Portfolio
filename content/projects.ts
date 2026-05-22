export type ProjectType = "Analytics" | "Data Engineering" | "ML" | "Backend";

export type Project = {
  slug: string;
  title: string;
  businessProblem: string;
  techStack: string[];
  status: string;
  types: ProjectType[];
  githubUrl: string | null;
  demoUrl: string | null;
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
    slug: "spendsense-ai",
    title: "SpendSense-AI",
    businessProblem:
      "Personal spending data is often hard to interpret because transactions are messy, categories are inconsistent, and monthly patterns are not obvious from raw statements.",
    techStack: ["Python", "SQL", "FastAPI", "PostgreSQL", "Dashboarding"],
    status: "In progress",
    types: ["Analytics", "Backend"],
    githubUrl: "https://github.com/Sahil-dub/Spensense-AI",
    demoUrl: null,
    caseStudyUrl: "/projects/spendsense-ai",
    previewImage: "/projects/analytics-preview.svg",
    overview:
      "SpendSense-AI is a personal finance analytics project that organizes transaction data, exposes clean API endpoints, and prepares dashboard views for spending patterns and category-level review.",
    dataInputs: [
      "Transaction-like records with dates, descriptions, amounts, and categories.",
      "Cleaned category labels used for monthly summaries and spend breakdowns.",
      "PostgreSQL tables designed for repeatable analysis instead of one-off spreadsheet work.",
    ],
    approach: [
      "Modeled the core entities around transactions, categories, and monthly summaries.",
      "Used API-first thinking so cleaned spending data can be reused by dashboards or future assistant features.",
      "Kept the first dashboard scope focused on category trends, monthly totals, and review-friendly breakdowns.",
    ],
    results: [
      "Created a clearer project structure for moving from raw spending records to dashboard-ready data.",
      "Prepared the project for honest portfolio review by separating data cleaning, storage, API, and visualization concerns.",
      "No savings amount or financial impact is claimed because this is a personal analytics project, not a production finance product.",
    ],
    challenges: [
      "Handling inconsistent transaction descriptions without overcomplicating the first version.",
      "Keeping the dashboard useful while avoiding too many categories and vanity charts.",
      "Designing the project so it can grow without hiding the simple core workflow.",
    ],
    learnings: [
      "Good analytics starts with clean definitions, not with charts.",
      "A small API layer can make a portfolio analytics project feel more like a real data product.",
      "Financial dashboards need careful wording because unclear categories can lead to misleading conclusions.",
    ],
  },
  {
    slug: "industrial-sensor-quality-prediction",
    title: "Industrial Sensor Quality Prediction",
    businessProblem:
      "Sensor readings can indicate quality issues before manual inspection, but raw signals need cleaning, feature preparation, and careful evaluation before they are useful.",
    techStack: ["Python", "Pandas", "scikit-learn", "Model evaluation"],
    status: "Case study draft",
    types: ["ML", "Analytics"],
    githubUrl: "https://github.com/Sahil-dub/sales-prediction-analysis",
    demoUrl: null,
    caseStudyUrl: "/projects/industrial-sensor-quality-prediction",
    previewImage: "/projects/ml-preview.svg",
    overview:
      "An ML case study focused on preparing industrial sensor-style data, building a baseline quality prediction workflow, and explaining model evaluation in practical terms.",
    dataInputs: [
      "Sensor-style tabular data with numeric readings and a quality target.",
      "Train/test split used to separate model development from final evaluation.",
      "Feature checks for missing values, scale differences, and potentially noisy readings.",
    ],
    approach: [
      "Started with exploratory data checks to understand feature ranges and target balance.",
      "Built a baseline model before considering more complex alternatives.",
      "Focused on evaluation language that explains tradeoffs instead of only reporting a score.",
    ],
    results: [
      "Built a structured ML workflow that can be reviewed from data preparation through evaluation.",
      "Documented limitations and next steps rather than presenting the model as production-ready.",
      "No production quality or factory impact is claimed because the project is a learning-focused portfolio case study.",
    ],
    challenges: [
      "Avoiding overconfidence when working with limited or simplified sensor data.",
      "Choosing evaluation metrics that match the quality prediction task.",
      "Explaining model behavior clearly enough for a non-ML reviewer.",
    ],
    learnings: [
      "Baseline models are useful because they make later improvements easier to judge.",
      "Quality prediction needs careful handling of false positives and false negatives.",
      "Model documentation should include what the model cannot tell you.",
    ],
  },
  {
    slug: "supply-chain-analytics-pipeline",
    title: "Supply Chain Analytics Pipeline",
    businessProblem:
      "Supply chain data often lives across orders, inventory, and shipment tables, making it difficult to answer basic questions about delays, stock movement, and supplier performance.",
    techStack: ["Python", "SQL", "PostgreSQL", "ETL"],
    status: "Case study draft",
    types: ["Data Engineering", "Analytics"],
    githubUrl: "https://github.com/Sahil-dub/supply-chain-delay-intelligence-platform",
    demoUrl: null,
    caseStudyUrl: "/projects/supply-chain-analytics-pipeline",
    previewImage: "/projects/pipeline-preview.svg",
    overview:
      "A data engineering and analytics project that models supply chain data, prepares ETL steps, and creates analysis-ready tables for operational reporting.",
    dataInputs: [
      "Order, product, inventory, and shipment-style records.",
      "Derived fields for delivery timing, fulfillment status, and stock movement.",
      "Relational tables designed for SQL analysis and dashboard consumption.",
    ],
    approach: [
      "Defined a simple relational model before writing transformation logic.",
      "Built ETL steps around cleaning, joining, and validating supply chain records.",
      "Prepared analytics outputs that support delay tracking, inventory review, and supplier-level summaries.",
    ],
    results: [
      "Created a clearer path from raw operational records to analysis-ready supply chain tables.",
      "Improved the project story by showing both engineering decisions and analytics use cases.",
      "No cost reduction or operational improvement is claimed because the project uses portfolio-level data.",
    ],
    challenges: [
      "Keeping the schema realistic while still small enough for a portfolio project.",
      "Handling joins across entities without losing the business meaning of each table.",
      "Separating pipeline validation from dashboard logic.",
    ],
    learnings: [
      "Good data engineering work is easier to trust when table purpose is clearly documented.",
      "Supply chain analytics depends heavily on consistent definitions for delay, stock, and fulfillment.",
      "ETL projects should show how data will actually be consumed, not only how it is transformed.",
    ],
  },
  {
    slug: "business-kpi-dashboard-analytics-system",
    title: "Business KPI Dashboard Analytics System",
    businessProblem:
      "Business performance data is difficult to act on when KPIs are scattered across tables, spreadsheets, and disconnected views.",
    techStack: ["Python", "SQL", "Dashboarding", "KPI analysis"],
    status: "Case study draft",
    types: ["Analytics"],
    githubUrl: "https://github.com/Sahil-dub/business-kpi-dashboard-analytics-system",
    demoUrl: null,
    caseStudyUrl: "/projects/business-kpi-dashboard-analytics-system",
    previewImage: "/projects/analytics-preview.svg",
    overview:
      "An analytics project focused on structuring business KPI data into clear dashboard views for performance review and decision support.",
    dataInputs: [
      "Business KPI-style records with time periods, categories, and performance measures.",
      "Cleaned metric definitions prepared for repeatable reporting.",
      "Dashboard-ready summaries for trend and comparison views.",
    ],
    approach: [
      "Defined the KPI questions before designing the dashboard structure.",
      "Prepared data summaries that keep metric logic separate from presentation.",
      "Organized dashboard views around performance trends, category comparisons, and review-friendly summaries.",
    ],
    results: [
      "Created a clearer analytics workflow for turning KPI records into dashboard-ready views.",
      "Kept outcomes focused on portfolio evidence rather than claiming business impact without production data.",
    ],
    challenges: [
      "Keeping KPI definitions consistent across views.",
      "Avoiding a dashboard that looks busy but does not help answer business questions.",
    ],
    learnings: [
      "Strong KPI dashboards depend on metric clarity before visual design.",
      "Recruiter-friendly analytics projects should show how the dashboard supports decisions.",
    ],
  },
  {
    slug: "steam-insights-dashboard",
    title: "Steam Insights Dashboard",
    businessProblem:
      "Game catalog and engagement data can reveal useful market patterns, but raw platform-style datasets need cleaning and focused exploration before they are understandable.",
    techStack: ["Python", "SQL", "Data visualization", "Dashboarding"],
    status: "Case study draft",
    types: ["Analytics"],
    githubUrl: "https://github.com/Sahil-dub/steam-insights-dashboard",
    demoUrl: null,
    caseStudyUrl: "/projects/steam-insights-dashboard",
    previewImage: "/projects/analytics-preview.svg",
    overview:
      "An analytics dashboard project for exploring Steam-style game data, genre patterns, pricing signals, and review or engagement trends.",
    dataInputs: [
      "Steam-style game catalog records with genres, pricing, ratings, and metadata.",
      "Cleaned fields for category comparison and trend analysis.",
      "Aggregated views prepared for dashboard exploration.",
    ],
    approach: [
      "Cleaned and grouped platform-style records into analysis-friendly categories.",
      "Focused dashboard views on market patterns instead of overwhelming users with raw tables.",
      "Used visual summaries to compare genres, price ranges, and review patterns.",
    ],
    results: [
      "Created a portfolio-ready analytics project showing exploratory dashboard thinking.",
      "Kept conclusions descriptive and avoided claiming market predictions from exploratory data.",
    ],
    challenges: [
      "Handling noisy category labels and incomplete catalog-style data.",
      "Choosing visuals that summarize patterns without overclaiming causality.",
    ],
    learnings: [
      "Exploratory dashboards work best when they guide the next question.",
      "Consumer platform data needs careful interpretation because popularity signals can be biased.",
    ],
  },
  {
    slug: "job-application-manager-bot",
    title: "Job Application Manager Bot",
    businessProblem:
      "Students applying to many roles need a reliable way to track applications, statuses, follow-ups, and notes without losing context across spreadsheets and inboxes.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Automation"],
    status: "In progress",
    types: ["Backend", "Data Engineering"],
    githubUrl: "https://github.com/Sahil-dub/inventory-management-system",
    demoUrl: null,
    caseStudyUrl: "/projects/job-application-manager-bot",
    previewImage: "/projects/pipeline-preview.svg",
    overview:
      "A backend-focused project for organizing job application data, tracking status changes, and preparing structured reminders or follow-up workflows.",
    dataInputs: [
      "Application records with company, role, location, status, date, and notes.",
      "Status history used to understand follow-up timing and application progress.",
      "Structured fields that can later support dashboards or lightweight automation.",
    ],
    approach: [
      "Modeled applications, statuses, and notes as structured records rather than free-form text.",
      "Designed backend endpoints around common actions: add, update, review, and filter applications.",
      "Kept automation scoped to tracking and reminders instead of making claims about applying automatically.",
    ],
    results: [
      "Defined a practical backend project that connects directly to a real student workflow.",
      "Prepared the data model for future dashboard views such as active roles, response status, and follow-up queue.",
      "No hiring outcome or application success claim is made because the tool supports organization, not selection decisions.",
    ],
    challenges: [
      "Avoiding feature creep in a workflow that could become too broad quickly.",
      "Designing status values that are specific enough to be useful but simple enough to maintain.",
      "Keeping automation responsible and focused on user-owned tracking data.",
    ],
    learnings: [
      "Useful backend projects often start with a clear everyday workflow.",
      "A simple data model can make personal productivity data easier to analyze later.",
      "Automation should reduce manual tracking work without pretending to replace human judgment.",
    ],
  },
];
