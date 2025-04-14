import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Wand2, Sparkles } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import "../index.css";

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = () => {
    setIsLoading(true);

    setTimeout(() => {
      if (user) {
        navigate("/result");
      } else {
        setShowLogin(true);
      }
      scrollTo(0, 0);
      setIsLoading(false);
    }, 500);
  };

  return (
    <motion.div
      className="pb-16 text-center"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.h1
        className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-[#1D3557] to-[#E63946] text-transparent bg-clip-text mt-4 mb-6 md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        See the magic. Try now
      </motion.h1>

      {/* Button */}
      <motion.button
        onClick={onClickHandler}
        disabled={isLoading}
        className={`inline-flex items-center gap-3 px-12 py-4 rounded-full text-white bg-gradient-to-r from-[#1D3557] to-[#E63946] hover:from-[#457B9D] hover:to-[#E63946] shadow-lg 
                    hover:shadow-xl transition-all duration-500 ${
                      isLoading ? "opacity-60 cursor-not-allowed" : ""
                    }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Generate Images"
      >
        {isLoading ? (
          <span className="flex items-center gap-3">
            <div className="w-6 h-6 relative">
              <div className="absolute inset-0 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
              <div className="absolute inset-1 rounded-full border-2 border-white border-t-transparent animate-spin-reverse"></div>
            </div>
            Generating...
          </span>
        ) : (
          <>
            Generate Images
            <div className="flex items-center gap-2">
              <Wand2 className="w-5 h-5" />
              <Sparkles className="w-5 h-5" />
            </div>
          </>
        )}
      </motion.button>
    </motion.div>
  );
};

export default GenerateBtn;
