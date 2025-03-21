export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2023",
    conference: "Advances in Science and Technology",
    title: "Classification of imbalanced datasets using various techniques along with variants of SMOTE oversampling and ANN",
    authors: "Shrinidhi Mahesh ,TK Kaushik Jegannathan, R Jeya",
    paperUrl: "https://www.scientific.net/AST.124.504",
    codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
   
  }
];
