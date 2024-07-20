import React, { useEffect, useState } from "react";
import Empty from "../components/common/Empty";
import { Link } from "react-router-dom";
import Order from "../components/common/Order";
import CartSummary from "../components/common/CartSummary";
import { getCartItems } from "../utils/api";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCartItems(userId);
        setCartItems(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="w-[90%] md:w-[85%] mx-auto mt-10 mb-20">
      <h1 className="font-semibold text-2xl">Your Cart Details</h1>
      {cartItems.length === 0 ? (
        <Empty type={"cart"} />
      ) : (
        <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-8 gap-10 md:gap-20">
          <div className="w-full">
            <Order cartItems={cartItems} setCartItems={setCartItems} typ={"cart"} />
          </div>
          <div className="w-full">
            <CartSummary cartItems={cartItems} />
            <Link to="/checkout">
              <button className="w-full mt-5 bg-black text-white py-2 rounded-md hover:bg-black focus:outline-none">
                Proceed to checkout
              </button>
            </Link>
            <div className="mt-10">
              <h2 className="font-semibold text-1xl">Have Coupon?</h2>
              <div className="flex items-center mt-3">
                <input
                  type="Coupon"
                  id="Coupon"
                  name="Coupon"
                  placeholder="Coupon Code"
                  autoComplete="current-Coupon"
                  className="w-full border py-2 px-4 outline-none rounded-bl-md rounded-tl-md"
                />
                <button className="bg-black px-12 text-white py-2 rounded-br-md rounded-tr-md hover:bg-black focus:outline-none">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
