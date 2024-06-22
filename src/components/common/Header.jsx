import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-3 text-center text-white bg-black">
      <p className="text-xs">
        <Link to="/signup">
          <u>Signup</u>
        </Link>{" "}
        & get 20% off on your first order.
      </p>
    </div>
  );
};

export default Header;
