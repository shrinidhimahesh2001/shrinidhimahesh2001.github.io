import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#audio">Audio Playground</Link></li>
            <li><Link href="#resume">Resume</Link></li>
            <li><Link href="#publications">Publications</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-4xl font-bold">Welcome to My Interactive Portfolio</h2>
        <p className="mt-4 text-gray-400">Exploring Machine Learning, DSP, and Audio Processing</p>
      </section>
      
      {/* Sections */}
      <section id="projects" className="p-10 border-t border-gray-700">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="text-gray-400">Interactive demos of ML/DSP applications.</p>
      </section>

      <section id="audio" className="p-10 border-t border-gray-700">
        <h2 className="text-3xl font-semibold">Audio Playground</h2>
        <p className="text-gray-400">Try out real-time DSP filters and ML-based emotion classification.</p>
      </section>

      <section id="resume" className="p-10 border-t border-gray-700">
        <h2 className="text-3xl font-semibold">Resume</h2>
        <p className="text-gray-400">Download my resume here.</p>
      </section>

      <section id="publications" className="p-10 border-t border-gray-700">
        <h2 className="text-3xl font-semibold">Publications</h2>
        <p className="text-gray-400">A list of my research papers and contributions.</p>
      </section>

      <section id="contact" className="p-10 border-t border-gray-700">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="text-gray-400">Reach out via email or social media.</p>
      </section>
    </div>
  );
}
