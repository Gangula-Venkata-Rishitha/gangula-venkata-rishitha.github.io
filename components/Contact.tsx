import React, { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../constants";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Option 1: Use Formspree (requires setup at https://formspree.io)
      // Uncomment and replace YOUR_FORM_ID with your Formspree form ID
      /*
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setIsSent(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSent(false), 5000);
        return;
      }
      */

      // Option 2: Use mailto (works immediately, opens default email client)
      const subject = encodeURIComponent("Contact from Portfolio");
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      
      setIsSent(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again or email directly at " + PERSONAL_INFO.email);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer id="contact" className="py-32 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          {/* Left Side: Contact Info & Title */}
          <div className="flex-1 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Let’s build something great.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-500 mb-12 max-w-lg mx-auto md:mx-0"
            >
              Have a project in mind or want to discuss the latest in AI? I'd love to hear from you.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="flex justify-center md:justify-start space-x-8 mb-16 md:mb-0"
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group space-y-2"
              >
                <div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Github className="w-6 h-6 text-gray-700 group-hover:text-black" />
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover:text-black">GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group space-y-2"
              >
                 <div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover:text-blue-600">LinkedIn</span>
              </a>
               <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex flex-col items-center group space-y-2"
              >
                 <div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Mail className="w-6 h-6 text-gray-700 group-hover:text-red-500" />
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover:text-red-500">Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 w-full max-w-lg mx-auto md:mx-0"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center space-x-2 ${
                  isSent 
                    ? "bg-green-600" 
                    : "bg-black hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isSent ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-24 text-center text-gray-400 text-sm border-t border-gray-200 pt-8">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;