import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PERSONAL_INFO } from "../constants";
import { Download } from "lucide-react";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-white"
    >
      <motion.div style={{ y: y1, opacity }} className="text-center px-4 z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-gray-100 ring-4 ring-gray-50">
            <img 
              src="/WhatsApp Image 2025-12-01 at 7.15.04 PM (1).jpeg" 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image not found
                (e.target as HTMLImageElement).src = "https://picsum.photos/id/64/400/400";
              }}
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-black mb-4 sm:mb-6 px-2"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500 font-medium tracking-tight max-w-2xl mx-auto leading-relaxed px-4"
          >
            Computer Science Engineer <br className="md:hidden" />
            <span className="hidden md:inline mx-2">·</span>
            Creative Technologist
          </motion.p>
          
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
          >
              <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-xs sm:text-sm font-medium text-gray-500 backdrop-blur-sm whitespace-nowrap">
                  Available for Summer 2026
              </span>
              <motion.a
                href="/RISHITHA_RESUME_FINAL.pdf"
                download="RISHITHA_RESUME_FINAL.pdf"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Download Resume
              </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-50/50 rounded-full blur-[120px] opacity-60" />
      </div>
      
       <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
       >
         <p className="text-xs text-gray-400 uppercase tracking-widest">Scroll to Explore</p>
       </motion.div>
    </section>
  );
};

export default Hero;
