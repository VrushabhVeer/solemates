import { enqueueSnackbar, SnackbarProvider } from "notistack";
import React, { useState } from "react";

const Newslater = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setError("");
      enqueueSnackbar(`Subscribed successfully with ${email}`, {
        variant: "success",
      });
      setEmail("")
    } else {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <div className="w-full bg-black text-white py-10 mt-20">
      <SnackbarProvider />
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-between gap-5 md:gap-20 lg:gap-48">
        <div className="w-full">
          <h2 className="text-2xl md:text-4xl text-center md:text-left font-bold text-white">
            Stay upto date about our latest offers
          </h2>
        </div>

        <div className="w-full">
          <div>
            <input
              className="w-full rounded-full px-6 py-3 bg-white text-black outline-none"
              type="text"
              value={email}
              onChange={handleChange}
              placeholder="Enter email address"
            />
            {error && (
              <p className="text-red-400 text-center mt-1 text-sm">{error}</p>
            )}
          </div>
          <div>
            <button
              onClick={handleSubscribe}
              className="w-full rounded-full px-4 py-3 bg-white text-black mt-3"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslater;
