import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-20 py-12 px-4 bg-[#F1FAEE]"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Header Section */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-[#1D3557]">
        Customer Testimonials
      </h1>
      <p className="text-[#457B9D] mb-10 text-center">
        Discover what our satisfied users have to say about their experiences.
      </p>

      {/* Testimonials Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-white via-[#A8DADC] to-[#F1FAEE] p-8 rounded-xl shadow-lg border-2 border-[#457B9D]/20 w-full cursor-pointer transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#E63946] rounded-full blur-md opacity-20"></div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="relative rounded-full w-16 h-16 border-2 border-[#457B9D] shadow-md mb-4 object-cover"
                />
              </div>

              {/* User Information */}
              <h2 className="text-xl font-semibold text-[#1D3557]">{testimonial.name}</h2>
              <p className="text-[#457B9D] text-sm">{testimonial.role}</p>

              {/* Rating */}
              <div className="flex gap-1 my-3">
                {Array(testimonial.stars)
                  .fill("")
                  .map((_, idx) => (
                    <img
                      key={idx}
                      src={assets.rating_star}
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-[#1D3557]/80 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
