import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4 sm:mb-6"
          >
            Technical Proficiency
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-500 text-base sm:text-lg px-4"
          >
              A comprehensive toolkit for building modern solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 sm:pb-4">
                {category.category}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 text-base sm:text-lg font-medium hover:text-black transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
