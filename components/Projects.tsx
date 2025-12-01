import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { ArrowRight, ExternalLink, Briefcase, Globe, Code } from "lucide-react";
import { Project } from "../types";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    switch (project.type) {
      case "internship":
        return <Briefcase className="w-5 h-5" />;
      case "web":
        return <Globe className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getColorScheme = () => {
    switch (project.type) {
      case "internship":
        return {
          bg: "bg-purple-50",
          border: "border-purple-200",
          text: "text-purple-600",
          badge: "bg-purple-100 text-purple-700",
          hover: "hover:border-purple-400 hover:shadow-purple-100",
        };
      case "web":
        return {
          bg: "bg-emerald-50",
          border: "border-emerald-200",
          text: "text-emerald-600",
          badge: "bg-emerald-100 text-emerald-700",
          hover: "hover:border-emerald-400 hover:shadow-emerald-100",
        };
      default:
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-600",
          badge: "bg-blue-100 text-blue-700",
          hover: "hover:border-blue-400 hover:shadow-blue-100",
        };
    }
  };

  const colors = getColorScheme();

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`block group relative overflow-hidden rounded-2xl border-2 ${colors.border} ${colors.hover} bg-white transition-all duration-300 shadow-sm hover:shadow-xl`}
    >
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Content */}
      <div className="relative p-8 md:p-10">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              className={`p-3 rounded-xl ${colors.bg} ${colors.text} group-hover:scale-110 transition-transform duration-300`}
              whileHover={{ rotate: 5 }}
            >
              {getIcon()}
            </motion.div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${colors.badge}`}>
              {project.category}
            </span>
          </div>
          <motion.div
            className={`${colors.text} opacity-0 group-hover:opacity-100 transition-all duration-300`}
            animate={{ x: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
          {project.description}
        </p>

        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-gray-900">
          <span>View {project.type === "internship" ? "Certificate" : project.type === "web" ? "Website" : "Project"}</span>
          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        initial={false}
        animate={{ x: isHovered ? "200%" : "-100%" }}
        transition={{ duration: 0.6 }}
      />
    </motion.a>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "project" | "internship" | "web">("all");

  const filteredProjects = filter === "all" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === filter);

  const filterButtons = [
    { id: "all", label: "All" },
    { id: "project", label: "Projects" },
    { id: "internship", label: "Internships" },
    { id: "web", label: "Web Projects" },
  ] as const;

  return (
    <section id="projects" className="bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
            Projects & Experience
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A collection of my work, internships, and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                filter === btn.id
                  ? "bg-black text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
