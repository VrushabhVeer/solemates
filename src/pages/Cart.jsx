import React, { useEffect, useState } from "react";
import remove from "../assets/icons/remove.png";
import axios from "axios";
import Empty from "../components/common/Empty";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/cart");
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[90%] md:w-[85%] mx-auto mt-10 mb-20">
      {data.length === 0 ? (
        <Empty />
      ) : (
        <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-8 gap-10 md:gap-20">
          <div className="w-full">
            {data.map((item) => (
              <div className="flex items-center gap-5 border-b border-slate-300 mt-4 mb-4">
                <div className="w-4/12">
                  <img
                    className="w-full h-40 object-cover rounded-sm"
                    src={item.img1}
                    alt="product_img"
                    loading="lazy"
                  />
                </div>
                <div className="w-8/12">
                  <div className="flex items-start justify-between">
                    <h2 className="font-semibold">{item.title}</h2>
                    <img
                      className="w-5"
                      src={remove}
                      alt="remove_icon"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="font-semibold">₹ {item.offerPrice}</h2>
                  <p className="text-slate-600 italic">{item.title2}</p>
                  <p>Size {item.size}</p>
                  <div className="flex items-center gap-3 mt-5">
                    <button className="border border-black px-2 rounded-sm">
                      +
                    </button>
                    {item.quantity}
                    <button className="border border-black px-2 rounded-sm">
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

            <button className="w-full mt-5 bg-black text-white py-2 rounded-md hover:bg-black focus:outline-none">
              Proceed to checkout
            </button>

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
