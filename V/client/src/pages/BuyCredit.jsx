import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";
import Logo from "../components/Logo";

const BuyCredit = () => {
  const { backendUrl, loadCreditsData, user, token, setShowLogin } =
    useContext(AppContext);

  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razor",
            response,
            { headers: { token } }
          );
          if (data.success) {
            loadCreditsData();
            navigate("/");
            toast.success("Credit Added");
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        { headers: { token } }
      );
      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      className="min-h-[80vh] text-center pt-14 mb-10 bg-[#F1FAEE]"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-[#1D3557] text-4xl font-bold mb-4">
        Choose Your Plan
      </h1>
      <p className="text-[#457B9D] text-lg mb-10 max-w-2xl mx-auto">
        Unlock the power of AI-generated images with our flexible credit plans
      </p>
      <div className="flex flex-wrap justify-center gap-8 text-left">
        {plans.map((item, index) => (
          <div
            className="relative w-full md:w-96 bg-gradient-to-br from-[#F1FAEE] to-[#A8DADC] rounded-2xl p-8 shadow-xl hover:scale-105 transition-all duration-500 border border-[#457B9D]/20"
            key={index}
          >
            <div className="absolute top-0 right-0 bg-[#E63946] text-white px-4 py-2 rounded-tr-2xl rounded-bl-2xl text-sm font-medium">
              {item.id}
            </div>
            <Logo className="w-12 h-12 mb-6" />
            <p className="text-[#1D3557] text-2xl font-bold mb-2">
              {item.credits} Credits
            </p>
            <p className="text-[#457B9D] mb-6">{item.desc}</p>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold text-[#1D3557]">
                ₹{item.price}
              </span>
              <span className="text-[#457B9D] ml-2">one-time</span>
            </div>
            <button
              onClick={() => paymentRazorpay(item.id)}
              className="w-full py-3 bg-[#E63946] text-white rounded-xl font-medium hover:bg-[#E63946]/90 transition-colors flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
