import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 mt-20 bg-gradient-to-b from-white to-[#F1FAEE] text-[#1D3557]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Logo />
      </motion.div>

      {/* Copyright Text */}
      <motion.p
        className="flex-1 border-t md:border-l border-[#A8DADC] md:border-t-0 md:pl-6 text-md text-[#457B9D] mt-6 md:mt-0 md:ml-6 flex items-center justify-center md:justify-start gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Made with <Heart className="w-4 h-4 text-[#E63946]" fill="#E63946" /> by
        Siddhi
      </motion.p>

      {/* Social Media Icons */}
      <motion.div
        className="flex gap-6 mt-6 md:mt-0"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[#F1FAEE] text-[#457B9D] hover:bg-[#A8DADC] hover:text-[#1D3557] transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Linkedin className="w-5 h-5" />
        </motion.a>
        <motion.a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[#F1FAEE] text-[#457B9D] hover:bg-[#A8DADC] hover:text-[#1D3557] transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Github className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
