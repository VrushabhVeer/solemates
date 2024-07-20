import React, { useEffect, useState } from "react";
import logo from "../assets/icons/logo.png";
import Order from "../components/common/Order";
import { CALLBACK_URL, getAddress, getCartItems, getPayment, makePaymant } from "../utils/api";
import CartSummary from "../components/common/CartSummary";

const Payment = () => {
  const [address, setAddress] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  const userId = localStorage.getItem("userId");
  const mobileNumber = address?.[0]?.mobile;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [addressResponse, cartResponse] = await Promise.all([
          getAddress(userId),
          getCartItems(userId),
        ]);
        setAddress(addressResponse.data);
        setCartItems(cartResponse.data);
        localStorage.setItem("isAddressAavilable", addressResponse.data.length ? "yes" : "no");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  const handlePaymentVerification = async (response) => {
    try {
      const res = await fetch("http://localhost:8000/api/payment/paymentverification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        }),
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = data.redirectUrl;
      } else {
        alert("Payment verification failed");
      }
    } catch (error) {
      console.error("Error in payment verification:", error);
    }
  };

  // Handle checkout with dynamic amount
  const handleCheckout = async () => {
    try {
      const { data: paymentData } = await getPayment();
      const { data: paymentOrder } = await makePaymant(cartItems.reduce((total, item) => total + item.offerPrice * item.quantity, 0));

      const options = {
        key: paymentData.key,
        amount: paymentOrder.order.amount,
        currency: "INR",
        name: "Solemates Footwears",
        description: "Online footwear selling company",
        image: logo,
        order_id: paymentOrder.order.id,
        callback_url: CALLBACK_URL,
        prefill: {
          name: userName,
          email: userEmail,
          contact: mobileNumber,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#000000",
        },
        handler: handlePaymentVerification,
      };

      new window.Razorpay(options).open();
    } catch (error) {
      console.error("Error in payment process:", error);
    }
  };


  return (
    <div className="w-[90%] md:w-[85%] mx-auto mt-10 mb-20">
      <h1 className="font-semibold text-2xl">Your Cart Details</h1>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-8 gap-10 md:gap-20">
        <div className="w-full">
          <Order type={"payment"} cartItems={cartItems} />
        </div>

        <div className="w-full">
          <CartSummary cartItems={cartItems} />

          <button
            onClick={() => handleCheckout(7998)}
            className="w-full mt-5 bg-black text-white py-2 rounded-md hover:bg-black focus:outline-none"
          >
            Complete Payment
          </button>

          <div className="mt-10">
            <h2 className="font-semibold">Delivery Address</h2>
            {address.map((item) => (
              <div className="mt-5" key={item._id}>
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
