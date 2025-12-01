import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../constants";

const Statement: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900 tracking-tight"
        >
          "{PERSONAL_INFO.tagline}"
        </motion.h2>
      </div>
    </section>
  );
};

export default Statement;
