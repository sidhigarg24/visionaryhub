import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-32 px-5 bg-gradient-to-b from-[#F1FAEE] to-white"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-[#1D3557]">
        How It Works
      </h1>
      <p className="text-lg text-[#457B9D] mb-8">
        Transform Words Into Stunning Images with Ease
      </p>

      {/* Steps Container */}
      <div className="space-y-6 w-full max-w-3xl">
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-6 p-6 bg-gradient-to-r from-[#A8DADC] via-white to-[#F1FAEE] rounded-xl shadow-lg border-2 border-[#457B9D]/20"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
            }}
          >
            {/* Icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#E63946] rounded-full blur-md opacity-20"></div>
              <img
                width={50}
                src={item.icon}
                alt={`${item.title} icon`}
                className="relative flex-shrink-0 p-2 bg-white rounded-full shadow-md border-2 border-[#457B9D]/20"
              />
            </div>
            {/* Content */}
            <div>
              <h2 className="text-xl font-bold text-[#1D3557]">{item.title}</h2>
              <p className="text-[#457B9D] mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
