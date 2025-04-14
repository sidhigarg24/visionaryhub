import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { Sparkles, Palette, Zap } from "lucide-react";

const Description = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28 bg-gradient-to-b from-[#F1FAEE] via-[#A8DADC] to-white"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-[#1D3557] to-[#E63946] text-transparent bg-clip-text"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Transform Your Vision
      </motion.h1>
      <motion.p
        className="text-[#457B9D] text-lg mb-12 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Where AI Innovation Meets Creative Excellence
      </motion.p>

      {/* Content Section */}
      <div className="flex flex-col gap-8 md:gap-16 md:flex-row items-center">
        {/* Image */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img
            src={assets.image3}
            className="w-80 xl:w-96 rounded-2xl shadow-2xl"
            alt="AI-generated masterpiece"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute -bottom-4 -right-4 bg-[#E63946] text-white px-6 py-2 rounded-full shadow-lg transform rotate-3">
            <Sparkles className="inline-block w-5 h-5 mr-2" />
            AI Powered
          </div>
        </motion.div>

        {/* Description Content */}
        <div className="max-w-xl">
          <motion.h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-transparent bg-clip-text leading-tight"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Unleash the Power of AI-Driven Creativity
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              className="flex items-start gap-4"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#F1FAEE] p-3 rounded-full">
                <Palette className="w-6 h-6 text-[#E63946]" />
              </div>
              <p className="text-[#457B9D] leading-relaxed">
                Experience the future of digital creation with our state-of-the-art AI image generator. VisionaryHub empowers artists, designers, and dreamers to transform their ideas into stunning visual masterpieces with unprecedented ease and precision.
              </p>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#F1FAEE] p-3 rounded-full">
                <Zap className="w-6 h-6 text-[#E63946]" />
              </div>
              <p className="text-[#457B9D] leading-relaxed">
                From concept to creation in seconds - our advanced AI understands your vision and brings it to life with remarkable accuracy. Whether you're crafting marketing materials, developing creative concepts, or exploring artistic expressions, VisionaryHub is your gateway to limitless possibilities.
              </p>
            </motion.div>

            <motion.div
              className="flex items-start gap-4"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#F1FAEE] p-3 rounded-full">
                <Sparkles className="w-6 h-6 text-[#E63946]" />
              </div>
              <p className="text-[#457B9D] leading-relaxed">
                Join the creative revolution where cutting-edge AI technology meets human imagination. Let VisionaryHub be your partner in turning extraordinary ideas into visual reality.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
