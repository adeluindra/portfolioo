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
      "Browser-based Indonesian Sign Language alphabet recognition using real-time hand tracking and classification.",
    technologies: ["Next.js", "TypeScript", "MediaPipe", "KNN"],
    githubUrl: "https://github.com/adeluindra/bisindo-detector",
    highlight: "26 alphabet classes",
    coverImage: "/images/projects/bisindo-dashboard.jpg",
    coverAlt:
      "Screenshot of the BISINDO Detector user dashboard showing four application steps",
    caseStudyPath: "/projects/bisindo-detector",
  },
  {
    slug: "parentcare",
    title: "ParentCare",
    label: "Team Capstone",
    summary:
      "A parenting consultation platform with a quiz, community discussion space, and educational articles.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "Supabase",
    ],
    highlight: "Coding Camp 2025",
  },
  {
    slug: "devjourney",
    title: "DevJourney",
    label: "Personal Full-Stack Project",
    summary:
      "A local study tracker with topics, study sessions, REST endpoints, and learning statistics.",
    technologies: ["React", "TypeScript", "Go", "PostgreSQL"],
    githubUrl: "https://github.com/adeluindra/devjourney",
    highlight: "Go REST API",
  },
];