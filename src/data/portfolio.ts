export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Emotion Recognition on MTG-Jamendo Dataset",
    description:
      "A short experiment on classifying emotions in music using the MTG-Jamendo dataset. I trained a simple CNN model on the mel-spectrograms of the audio clips and achieved an accuracy of around 70%. The project is still a work in progress and I plan to explore more advanced architectures and techniques to improve the performance.",
    technologies: ["Python", "PyTorch", "Librosa", "CNNs"],
    projectUrl: "",
    imageUrl:
      "",
    codeUrl: "https://github.com/shrinidhimahesh2001/EmoteTune",
  },
  {title: "Collection of Carnatic Music Performances and recordings",
    description: "Over the years, I have been actively involved in performing Carnatic music. This collection includes audio recordings of practice sessions of traditional compositions.",
    technologies: [],
    imageUrl: "",
    projectUrl: "https://on.soundcloud.com/hX4A131WN3CpRZv3IO",
    codeUrl: ""}
];
