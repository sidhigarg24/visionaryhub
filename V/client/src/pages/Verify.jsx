import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const transactionId = searchParams.get("transactionId");

  const { backendUrl, loadCreditsData, token } = useContext(AppContext);

  const navigate = useNavigate();

  // Function to verify stripe payment
  const verifyStripe = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/verify-stripe",
        { success, transactionId },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        loadCreditsData();
      } else {
        toast.error(data.message);
      }

      navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      verifyStripe();
    }
  }, [token]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#F1FAEE] p-8">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-[#A8DADC] border-t-4 border-t-[#E63946] rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-[#1D3557] rounded-full flex items-center justify-center">
            <Logo className="w-10 h-10 text-[#F1FAEE]" />
          </div>
        </div>
      </div>
      <p className="mt-6 text-[#457B9D] text-lg font-medium">
        Verifying your payment...
      </p>
      <p className="mt-2 text-[#1D3557] text-sm">
        Please wait while we process your transaction
      </p>
    </div>
  );
};

export default Verify;
