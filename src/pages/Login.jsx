import React, { useState } from "react";
import google from "../assets/icons/google.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="h-[90vh] flex justify-center items-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg w-96">
        <div>
          <h2 className="text-2xl font-semibold">Login</h2>
          <p className="mt-1 text-slate-600 text-sm">Login to your account</p>
        </div>
        <div className="mt-8">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border py-2 px-4 rounded-md"
          />
        </div>
        <div className="mt-4">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border py-2 px-4 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-5 bg-black text-white py-2 rounded-md hover:bg-black focus:outline-none"
        >
          Login
        </button>

        <p className="mt-3 text-slate-600 text-sm">
          Don't have an account? <Link to="/signup"><u>Signup.</u></Link>
        </p>

        <p className="mt-8 text-center">Or login with</p>

        <div className="mt-5">
          <button
            type="submit"
            className="flex gap-2 items-center justify-center w-full border py-2 rounded-md focus:outline-none"
          >
            Google <img className="w-5" src={google} alt="google" loading="lazy" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
