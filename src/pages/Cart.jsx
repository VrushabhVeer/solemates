import React, { useState } from "react";
import Empty from "../components/common/Empty";
import { Link } from "react-router-dom";
import Order from "../components/common/Order";

const Cart = () => {
  const [cartItems, setCartItems] = useState({});

  const handleCartData = (data) => {
    setCartItems(data);
  };

  return (
    <div className="w-[90%] md:w-[85%] mx-auto mt-10 mb-20">
      <h1 className="font-semibold text-2xl">Your Cart Details</h1>
      {cartItems.length === 0 ? (
        <Empty type={"cart"} />
      ) : (
        <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-8 gap-10 md:gap-20">
          <div className="w-full">
            <Order onCartDataFetched={handleCartData} typ={"cart"} />
          </div>

          <div className="w-full">
            <h2 className="font-semibold text-1xl">Order Summary</h2>

            <div className="mt-5">
              <div className="flex items-center justify-between">
                <div>
                  <p>Subtotal</p>
                  <p className="mt-3">Tax</p>
                  <p className="mt-3">Shipping</p>
                </div>
                <div>
                  <p>₹ 3999</p>
                  <p className="mt-3">₹ 10</p>
                  <p className="mt-3">₹ 89</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 border-t border-slate-300">
                <p className="mt-2 font-medium">Total</p>
                <p className="mt-2 font-medium">₹ 4100</p>
              </div>
            </div>
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
