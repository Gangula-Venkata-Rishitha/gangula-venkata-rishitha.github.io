import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE, EDUCATION } from "../constants";
import { ExternalLink } from "lucide-react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-gray-50 py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-12 sm:mb-16 text-center"
        >
          Journey
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          
          {/* Experience Column */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 border-b pb-3 sm:pb-4"
            >
              Professional Experience
            </motion.h3>
            <div className="space-y-8">
              {EXPERIENCE.map((exp, i) => (
                <motion.a
                  key={exp.id}
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="block bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wide">
                      {exp.type}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {exp.company}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-500 font-medium mb-3 sm:mb-4">
                    {exp.role}
                  </p>
                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {exp.description.map((point, idx) => (
                      <li key={idx} className="text-gray-600 text-xs sm:text-sm leading-relaxed flex items-start">
                        <span className="mr-2 text-blue-500 mt-1.5">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-400 font-medium pt-4 border-t border-gray-50">
                    {exp.period}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 border-b pb-3 sm:pb-4"
            >
              Education
            </motion.h3>
            <div className="space-y-8">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={`edu-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-4">
                    Academic
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-500 font-medium mb-3 sm:mb-4">
                    {edu.degree}
                  </p>
                  <ul className="space-y-2 mb-4 sm:mb-6">
                    <li className="text-gray-600 text-xs sm:text-sm leading-relaxed flex items-start">
                      <span className="mr-2 text-blue-500 mt-1.5">•</span>
                      <span>{edu.grade}</span>
                    </li>
                    {edu.extra && (
                      <li className="text-gray-600 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 text-blue-500 mt-1.5">•</span>
                        <span>{edu.extra}</span>
                      </li>
                    )}
                  </ul>
                  <p className="text-xs text-gray-400 font-medium pt-4 border-t border-gray-50">
                    {edu.period}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;