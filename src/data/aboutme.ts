export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string | string[];
  email: string;
  imageUrl?: string;
  soundcloudUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  blogUrl?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Shrinidhi Mahesh",
  title: "Masters of Science - Electrical Engineering (Machine Learning and Data Science)",
  institution: "University of Southern California",
  // Note that links work in the description
  description:[
    "Hi there,My name is Shrinidhi Mahesh and I am wrapping up a MS in EE from USC with my courses focused towards MLDS.",
    "My technical background combines Cloud Data Engineering production experience at Deloitte along with rigorous graduate coursework at USC in Deep Learning, Machine Learning, Reinforcement Learning and LLMs and Speech Processing.",
    "I have also been passionately training in Carnatic Music as a vocalist for the past 10+ years which drives my interest for Music Information Retrieval (MIR) and Audio ML."
  ],
  email: "shrinidhimdev@gmail.com",
  imageUrl:
    "https://avatars.githubusercontent.com/u/66459886?s=400&u=bb66939efe343630e2a09da26f1a1730c45d4eca&v=4",
  googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=Ykjb4AMAAAAJ",
  githubUsername: "shrinidhimahesh2001",
  linkedinUsername: "shrinidhi-mahesh-7680b41a5",
  blogUrl:"https://shrinidhimahesh.substack.com/",
  twitterUsername: "shrinimahesh",
  soundcloudUrl: "https://soundcloud.com/shrinidhimahesh",
  cvUrl: "https://drive.google.com/file/d/1yh3GFziJ23RSjsmlZDDEydyyNAO6E7cS/view?usp=sharing",
  institutionUrl: "https://usc.edu/",
  // altName: "",
  secretDescription: "I know 4+ languages and love cooking! I am a huge foodie and slowly picking up chess too!",
};
