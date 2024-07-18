import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuth from "../components/common/GoogleAuth";
import view from "../assets/icons/view.png";
import hide from "../assets/icons/hide.png";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { signupApi } from "../utils/api";
import Image from "../components/common/Image";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const payload = {
    name,
    email,
    password,
  };

  const handleSubmit = async () => {
    try {
      const response = await signupApi(payload);

      enqueueSnackbar(response.data.message, { variant: "success" });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      if (error.response && error.response.data) {
        enqueueSnackbar(error.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("An unexpected error occurred", { variant: "error" });
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <SnackbarProvider />
      <div className="h-[90vh] flex justify-center items-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg w-96">
          <div>
            <h2 className="text-2xl font-semibold">Sign Up</h2>
            <p className="mt-1 text-slate-600 text-sm">Create your account</p>
          </div>

          <div className="mt-8">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border py-2 px-4 rounded-md outline-none"
            />
          </div>
          <div className="mt-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border py-2 px-4 rounded-md outline-none"
            />
          </div>

          <div className="mt-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border py-2 px-4 rounded-md outline-none pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 px-3 py-2 focus:outline-none"
            >
              {showPassword ? (
                <Image className="w-5" src={view} alt="view" loading="lazy" />
              ) : (
                <Image className="w-5" src={hide} alt="hide" loading="lazy" />
              )}
            </button>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full mt-5 bg-black text-white py-2 rounded-md hover:bg-black focus:outline-none"
          >
            Sign Up
          </button>

          <p className="mt-3 text-slate-600 text-sm">
            Already have an account?{" "}
            <Link to="/login">
              <u>Login.</u>
            </Link>
          </p>

          <p className="mt-8 text-center">Or signup with</p>

          <div className="mt-5">
            <GoogleAuth />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
