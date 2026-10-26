
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
    technologies: [
      "Next.js",
      "TypeScript",
      "MediaPipe",
      "KNN",
    ],
    githubUrl:
      "https://github.com/adeluindra/bisindo-detector",
    highlight: "26 alphabet classes",
    coverImage:
      "/images/projects/bisindo-dashboard.jpg",
    coverAlt:
      "BISINDO Detector user dashboard",
    caseStudyPath:
      "/projects/bisindo-detector",
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
    caseStudyPath:
      "/projects/parentcare",
  },
  {
    slug: "devjourney",
    title: "DevJourney",
    label: "Personal Full-Stack Project",
    summary:
      "A local study tracker with topics, study sessions, REST endpoints, and learning statistics.",
    technologies: [
      "React",
      "TypeScript",
      "Go",
      "PostgreSQL",
    ],
    githubUrl:
      "https://github.com/adeluindra/devjourney",
    highlight: "Go REST API",
  },
];
