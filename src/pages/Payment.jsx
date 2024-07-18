import React, { useEffect, useState } from "react";
import logo from "../assets/icons/google-pay.png";
import axios from "axios";
import Order from "../components/common/Order";
import { getAddress } from "../utils/api";

const Payment = () => {
  const [address, setAddress] = useState([]);
  const userName = localStorage.getItem("userName");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await getAddress(userId);
        setAddress(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAddress();
  }, [userId]);

  const handleCheckout = async (amount) => {
    let data1 = await axios.get("http://localhost:8000/api/getKey");
    let data2 = await axios.post("http://localhost:8000/api/checkout", {
      amount,
    });

    const options = {
      key: data1.data.key,
      amount: data2.data.order.amount,
      currency: "INR",
      name: "Solemates Footwears",
      description: "Online footware selling company",
      image: logo,
      order_id: data2.data.order.id,
      callback_url: "http://localhost:8000/api/paymentverification",
      prefill: {
        name: userName, // from login user
        email: "gaurav.kumar@example.com", // form login user
        contact: "9000090000", // from login used
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#000000",
      },
    };
    var razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="w-[90%] md:w-[85%] mx-auto mt-10 mb-20">
      <h1 className="font-semibold text-2xl">Your Cart Details</h1>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-8 gap-10 md:gap-20">
        <div className="w-full">
          <Order type={"payment"} />
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

          <button
            onClick={() => handleCheckout(7998)}
            className="w-full mt-5 bg-black text-white py-2 rounded-md hover:bg-black focus:outline-none"
          >
            Complete Payment
          </button>

          <div className="mt-10">
            <h2 className="font-semibold">Delivery Address</h2>
            {address.map((item) => (
              <div className="mt-5">
                <p>
                  {item.firstName} {item.lastName}
                </p>
                <p>{item.address}</p>
                <p>{item.street}</p>
                <p>
                  {item.city}, {item.state}, {item.zip}, IN
                </p>
                <p>+91 {item.mobile}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
