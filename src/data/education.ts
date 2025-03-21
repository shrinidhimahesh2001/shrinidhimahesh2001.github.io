export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024—Present",
    institution: "University of Southern California",
    degree: "Masters of Science in Electrical and Computer Engineering (Machine Learning and Data Science)"
  },
  {
    year: "2018-2022",
    institution: "SRM Institute of Science and Technology",
    degree: "B.Tech. in Computer Science and Engineering"
   
    // Optional links to thesis
   
  },
];
