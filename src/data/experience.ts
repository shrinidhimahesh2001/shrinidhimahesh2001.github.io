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
    date: "2023-2024",
    title: "Analyst -Data Engineering ",
    company: "Deloitte Consulting",
    description:
      "Developed and maintained end-to-end data analytics pipeline to transform raw business data for a leading water utility company into actionable insights using Apache NiFi. Leveraged advanced SQL scripts to decipher key patterns and trends within data which was influential in decision - making process of the client . Accelerated power outage analysis and response effectiveness for an electrical utility company through ETL processes on Microsoft Azure. Created and tested interactive Power BI dashboards that provide stakeholders with real-time insights. Collaborated with stakeholders to perform business analysis, providing strategic consulting to align technical solutions with business objectives."
  }
];
