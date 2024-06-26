import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import wishlist from "../../assets/icons/wishlist.png";
import cart from "../../assets/icons/bag.png";
import user from "../../assets/icons/user.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white sticky top-0 z-50">
        <div className="w-[90%] md:w-[85%] mx-auto flex h-16 items-center justify-between">
          <button className="md:hidden lg:hidden" onClick={handleToggle}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          <div>
            <Link to="/">
              <p className="font-playwrite font-semibold text-xl">solemates</p>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/">
              <span>Collections</span>
            </Link>
            <Link to="/products">
              <span>Products</span>
            </Link>
            <Link to="/">
              <span>Brands</span>
            </Link>
            <Link to="/">
              <span>Sale</span>
            </Link>
          </div>

          <div className="flex space-x-5">
            <Link to="/wishlist">
              <span className="hidden md:flex">
                <img
                  className="w-5"
                  src={wishlist}
                  alt="wishlist"
                  loading="lazy"
                />
              </span>
            </Link>

            <Link to="/cart">
              <span className="hidden md:flex">
                <img className="w-5" src={cart} alt="cart" loading="lazy" />
              </span>
            </Link>

            <Link to="/">
              <span className="md:flex">
                <img className="w-5" src={user} alt="user" loading="lazy" />
              </span>
            </Link>
          </div>
        </div>

        {isOpen ? (
          <div className="pb-5 pt-5 md:hidden">
            <div className="flex flex-col space-y-5 ml-2">
              <Link to="/">
                <span>Collections</span>
              </Link>
              <Link to="/products">
                <span>Products</span>
              </Link>
              <Link to="/">
                <span>Brands</span>
              </Link>
              <Link to="/">
                <span>Sale</span>
              </Link>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
