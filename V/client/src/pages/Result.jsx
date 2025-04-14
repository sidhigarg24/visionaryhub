import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import "../dot.css";

const Result = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [image, setImage] = useState(assets.image13);

  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };

  return (
    <motion.form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center justify-center min-h-[90vh] py-6 bg-[#F1FAEE]/30"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative mb-6 group hover:scale-[1.02] transition-transform duration-300">
        <img
          className="max-w-sm rounded-xl shadow-lg transition-all duration-300 ease-in-out border-2 border-[#A8DADC]/20"
          src={image}
          alt="Generated result"
        />
        {loading && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1D3557] to-[#E63946] animate-pulse rounded-b-xl" />
        )}
      </div>

      {
        <div className={`flex items-center gap-2 ${!loading ? "hidden" : ""}`}>
          <div className="dot-flashing"></div>
        </div>
      }

      {!isImageLoaded && (
        <div className="flex items-center bg-white/80 p-3 rounded-full w-full max-w-xl mt-8 shadow-md hover:shadow-lg transition-all duration-300 border border-[#A8DADC]/20">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="flex-1 bg-[#F1FAEE] outline-none text-[#1D3557] placeholder-[#457B9D]/60 px-6 py-3 rounded-full focus:ring-2 focus:ring-[#E63946] transition-all duration-200"
            type="text"
            placeholder="Describe what you want to generate"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-[#1D3557] to-[#E63946] text-white px-8 py-3 rounded-full ml-4 hover:from-[#457B9D] hover:to-[#E63946] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => {
              setIsImageLoaded(false);
              setInput("");
            }}
            className="bg-[#F1FAEE] text-[#1D3557] px-8 py-3 rounded-full hover:bg-[#A8DADC]/20 transition-all duration-300 shadow-md hover:shadow-lg border border-[#A8DADC]/20"
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-gradient-to-r from-[#457B9D] to-[#1D3557] text-white px-8 py-3 rounded-full hover:from-[#1D3557] hover:to-[#457B9D] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
