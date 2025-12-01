import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../constants";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
        {/* Image Section */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center w-full"
        >
          <div className="relative group w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="/WhatsApp Image 2025-12-01 at 7.15.04 PM (1).jpeg" 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Fallback to placeholder if image not found
                (e.target as HTMLImageElement).src = "https://picsum.photos/id/64/400/400";
              }}
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-8 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            About Me.
          </h2>
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
            <p>
              I am Gangula Venkata Rishitha, a Computer Science Engineering student at JNTUA College of Engineering, expected to graduate in 2026.
            </p>
            <p>
               With a CGPA of 8.63 and a passion for solving complex problems, I specialize in Data Structures, Algorithms, and Web Development. I have hands-on experience in C, Java, Python, and React, alongside a strong interest in Generative AI.
            </p>
            <p>
              My journey involves building blink-based cognitive load detectors, fine-tuning chatbots, and managing seminar systems. I thrive in collaborative environments and am always eager to learn new technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;