import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Statement from "./components/Statement";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import GitHubRepos from "./components/GitHubRepos";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Statement />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <GitHubRepos />
        <Contact />
      </main>
    </div>
  );
};

export default App;