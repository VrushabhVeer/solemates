import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useSearchParams } from "react-router-dom";

const OrderPlaced = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNumber = searchQuery.get("reference");

  return (
    <>
      <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto mt-10 mb-20 text-center">
        <div>
          <div className="w-4/12 mx-auto">
            <Player
              autoplay
              loop
              src="https://assets8.lottiefiles.com/private_files/lf30_dfspihm8.json"
            ></Player>
          </div>
          <h2 className="text-3xl font-semibold">Order Placed</h2>
          <p className="font-medium text-lg">Thank You for shopping with us.</p>
        </div>

        <div className="mt-6 rounded-md">
          <p className="font-medium">Your Order Id: {referenceNumber}</p>
          <p className="mt-1">
            Confirmation mail with order details sent to your registered email.
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderPlaced;
