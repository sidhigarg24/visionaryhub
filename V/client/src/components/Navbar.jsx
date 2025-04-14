import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Star, LogOut, User, CreditCard } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const { setShowLogin, user, credit, logout } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 px-6 bg-[#F1FAEE]">
      {/* Logo Part */}
      <Link to="/" className="hover:opacity-90 transition-opacity">
        <Logo />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-[#A8DADC] px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:bg-[#457B9D] hover:text-white transition-all duration-300"
            >
              <Star className="w-5 h-5 text-[#E63946]" />
              <p className="text-xs sm:text-sm font-medium text-[#1D3557]">
                Credits: {credit}
              </p>
            </button>
            <p className="text-[#1D3557] max-sm:hidden pl-4 font-medium">
              Hi, {user.name}
            </p>
            <div className="relative group">
              <div className="w-10 h-10 bg-[#A8DADC] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#457B9D] hover:text-white transition-all duration-300">
                <User className="w-6 h-6 text-[#1D3557] group-hover:text-white transition-colors" />
              </div>
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-lg shadow-lg border border-[#A8DADC]">
                  <li
                    onClick={logout}
                    className="flex items-center gap-2 py-2 px-4 text-sm cursor-pointer hover:bg-[#E63946] hover:text-white rounded-md transition-all duration-300"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 text-[#1D3557] hover:text-[#E63946] transition-colors"
            >
              <CreditCard className="w-5 h-5" />
              <span className="text-sm font-medium">Pricing</span>
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-gradient-to-r from-[#457B9D] to-[#1D3557] text-white px-7 py-2 sm:px-8 sm:py-2.5 text-sm rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
