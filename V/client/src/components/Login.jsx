import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Login = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { backendUrl, setShowLogin, setToken, setUser } =
    useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // Disable scrolling on body when the login is open
    document.body.style.overflow = "hidden";

    // Cleanup function to re-enable scrolling
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-[#1D3557]/30 flex justify-center items-center">
      <motion.form
        onSubmit={onSubmitHandler}
        className="relative bg-[#F1FAEE] p-10 rounded-xl text-[#457B9D] shadow-2xl w-full max-w-md"
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-center text-3xl text-[#1D3557] font-bold mb-2">
          {state}
        </h1>

        <p className="text-sm text-center mb-6">
          Welcome to VisionaryHub - Where Imagination Meets AI
        </p>

        {state !== "Login" && (
          <div className="border-2 border-[#A8DADC] px-6 py-3 flex items-center gap-2 rounded-lg mb-4 focus-within:border-[#457B9D] transition-colors">
            <img src={assets.email_icon} alt="" className="w-5 h-5" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="outline-none text-sm bg-transparent w-full text-[#1D3557] placeholder-[#457B9D]/60"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
        )}

        <div className="border-2 border-[#A8DADC] px-6 py-3 flex items-center gap-2 rounded-lg mb-4 focus-within:border-[#457B9D] transition-colors">
          <img src={assets.email_icon} alt="" className="w-5 h-5" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="outline-none text-sm bg-transparent w-full text-[#1D3557] placeholder-[#457B9D]/60"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="border-2 border-[#A8DADC] px-6 py-3 flex items-center gap-2 rounded-lg mb-2 focus-within:border-[#457B9D] transition-colors">
          <img src={assets.lock_icon} alt="" className="w-5 h-5" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="outline-none text-sm bg-transparent w-full text-[#1D3557] placeholder-[#457B9D]/60"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <p className="text-sm text-[#E63946] hover:text-[#E63946]/80 mb-6 cursor-pointer transition-colors">
          Forgot password?
        </p>

        <button className="bg-[#E63946] w-full text-white py-3 rounded-lg font-semibold hover:bg-[#E63946]/90 transition-colors">
          {state === "Login" ? "Sign In" : "Create Account"}
        </button>

        {state === "Login" ? (
          <p className="mt-6 text-center">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-[#E63946] hover:text-[#E63946]/80 cursor-pointer font-medium transition-colors"
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-6 text-center">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-[#E63946] hover:text-[#E63946]/80 cursor-pointer font-medium transition-colors"
            >
              Sign in
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          className="absolute top-4 right-4 cursor-pointer w-6 h-6 hover:opacity-80 transition-opacity"
          src={assets.cross_icon}
          alt="Close"
        />
      </motion.form>
    </div>
  );
};

export default Login;
