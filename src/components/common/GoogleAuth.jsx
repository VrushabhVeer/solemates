import React from "react";
import google from "../../assets/icons/google.png";
import Image from "./Image";

const GoogleAuth = () => {
  const handleGoogleAuth = () => {
    // Implement Google authentication logic
    console.log("Google authentication triggered.");
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleAuth}
        className="flex gap-2 items-center justify-center w-full border py-2 rounded-md focus:outline-none"
      >
        Google <Image className="w-5" src={google} alt="google" loading="lazy" />
      </button>
    </div>
  );
};

export default GoogleAuth;
