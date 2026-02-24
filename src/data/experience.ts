export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2025 - Present",
    title: "Research Assistant",
    company: "University of Southern California",
    description:
      ""
  },
  {
    date: "2023-2024",
    title: "Analyst - Data Engineering ",
    company: "Deloitte Consulting",
    description:
      ""
  }
];
