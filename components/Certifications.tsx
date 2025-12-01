import React from "react";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../constants";
import { Award, ExternalLink } from "lucide-react";

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="bg-gray-50 py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-4 sm:mb-6">
            Certifications
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto px-4">
            Continuous learning and skill development across various technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-yellow-600 transition-colors opacity-0 group-hover:opacity-100" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 line-clamp-2">
                  {cert.title}
                </h3>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-600">
                    {cert.issuer}
                  </p>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

