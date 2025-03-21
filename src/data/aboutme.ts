export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  soundcloudUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Shrinidhi Mahesh",
  title: "Masters of Science - Electrical and Computer Engineering (Machine Learning and Data Science)",
  institution: "University of Southern California",
  // Note that links work in the description
  description:
    "I'm a first-year <a href='https://usc.edu/'>MS candidate</a> working at the intersection of music and machine learning. My research focuses on developing robust, interpretable systems that can reason about cause and effect in complex environments.",
  email: "shrinidh@usc.edu",
  imageUrl:
    "https://avatars.githubusercontent.com/u/66459886?s=400&u=bb66939efe343630e2a09da26f1a1730c45d4eca&v=4",
  googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=Ykjb4AMAAAAJ",
  githubUsername: "shrinidhimahesh2001",
  linkedinUsername: "shrinidhi-mahesh-7680b41a5",
  twitterUsername: "shrinimahesh",
  soundcloudUrl: "https://soundcloud.com/shrinidhimahesh",
  cvUrl: "https://drive.google.com/file/d/1yh3GFziJ23RSjsmlZDDEydyyNAO6E7cS/view?usp=sharing",
  institutionUrl: "https://usc.edu/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
