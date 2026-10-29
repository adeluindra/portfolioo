
export type ProjectSummary = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  technologies: readonly string[];
  githubUrl?: string;
  highlight: string;
  coverImage?: string;
  coverAlt?: string;
  caseStudyPath?: string;
};

export const projects: readonly ProjectSummary[] = [
  {
    slug: "bisindo-detector",
    title: "BISINDO Detector",
    label: "Thesis / Machine Learning",
    summary:
      "A real-time Indonesian Sign Language alphabet recognition application featuring webcam-based hand tracking, machine learning classification, and interactive practice.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MediaPipe",
      "KNN",
    ],
    githubUrl:
      "https://github.com/adeluindra/bisindo-detector",
    highlight: "26 alphabet classes · ~91% model evaluation accuracy",
    coverImage:
      "/images/projects/bisindo-realtime-detection.png",
    coverAlt:
      "BISINDO Detector performing real-time sign language recognition with hand landmarks and prediction feedback",
    caseStudyPath: "/projects/bisindo-detector",
  },
  {
    slug: "parentcare",
    title: "ParentCare",
    label: "Coding Camp 2025 / Team Capstone",
    summary:
      "A collaborative parenting platform featuring an interactive parenting-style quiz, personalized recommendations, community discussions, and educational articles.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Supabase",
    ],
    highlight: "Interactive parenting consultation",
    coverImage:
      "/images/projects/parentcare-home.png",
    coverAlt:
      "ParentCare homepage with a family illustration and parenting quiz introduction",
    caseStudyPath: "/projects/parentcare",
  },
  {
    slug: "devjourney",
    title: "DevJourney",
    label: "Personal Full-Stack Project",
    summary:
      "A local learning tracker for managing study topics, recording sessions, and reviewing statistics with a Go REST API and PostgreSQL database.",
    technologies: [
      "React",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    githubUrl:
      "https://github.com/adeluindra/devjourney",
    highlight: "Go REST API + PostgreSQL",
    coverImage:
      "/images/projects/devjourney-dashboard.png",
    coverAlt:
      "DevJourney dark-mode learning dashboard showing learning statistics and recent study sessions",
    caseStudyPath: "/projects/devjourney",
  },
];
