import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { Star, Sparkles, Wand2 } from "lucide-react";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Tagline */}
      <motion.div
        className="text-[#E63946] inline-flex items-center gap-2 bg-[#F1FAEE] px-6 py-2 rounded-full border border-[#A8DADC] shadow-md hover:shadow-lg transition-shadow"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Sparkles className="w-5 h-5" />
        <p className="font-medium">Best text to image generator</p>
        <Star className="w-5 h-5" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-center mx-auto mt-10 text-4xl font-extrabold max-w-[300px] sm:text-6xl sm:max-w-[590px] text-[#1D3557]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.5 }}
      >
        From Text{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#457B9D] to-[#1D3557]">
          to
        </span>{" "}
        Art{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E63946] to-[#457B9D]">
          in Seconds.
        </span>
        .
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 text-[#457B9D] text-sm sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Harness the power of AI to generate stunning visuals from your words. It's fast, easy, and completely effortless.
      </motion.p>

      {/* Generate Button */}
      <motion.button
        className="sm:text-lg text-[#F1FAEE] bg-gradient-to-r from-[#1D3557] to-[#E63946] hover:from-[#457B9D] hover:to-[#E63946] w-auto mt-8 px-12 py-3 flex items-center gap-3 rounded-full shadow-lg group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
        onClick={onClickHandler}
      >
        Generate Images
        <Wand2 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </motion.button>

      {/* Sample Images */}
      <motion.div
        className="flex flex-wrap justify-center mt-16 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {Array(6)
          .fill("")
          .map((_, index) => (
            <motion.img
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer w-20 sm:w-24 lg:w-28"
              key={index}
              src={index % 2 === 0 ? assets.image1 : assets.image4}
              alt={`Sample ${index + 1}`}
              whileHover={{ scale: 1.05 }}
            />
          ))}
      </motion.div>

      {/* Footer Note */}
      <motion.p
        className="mt-2 text-[#457B9D] text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Generated images from{" "}
        <span className="bg-gradient-to-r font-bold from-[#1D3557] via-[#457B9D] to-[#A8DADC] text-transparent bg-clip-text">
          Visionary
        </span>
        <span className="bg-gradient-to-r font-bold from-[#A8DADC] via-[#E63946] to-[#1D3557] text-transparent bg-clip-text">
          Hub
        </span>
      </motion.p>
    </motion.div>
  );
};

export default Header;
