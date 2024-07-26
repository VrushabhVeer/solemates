import React, { useState } from "react";
import Image from "../components/common/Image";
import user from "../assets/icons/avatar.png";
import { useNavigate } from "react-router-dom";
import Address from "../components/common/Address";

const Profile = () => {
  const username = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  const createdAt = localStorage.getItem("createdAt");
  const [activeView, setActiveView] = useState("myOrders");
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const renderView = () => {
    switch (activeView) {
      case "myOrders":
        return <p>Your orders will be displayed here.</p>;
      case "address":
        return <Address />;
      default:
        return;
    }
  };

  return (
    <div className="w-[90%] md:w-[85%] mx-auto mt-10 mb-10">
      <div className="w-[30%] md:w-[15%] lg:w-[10%] mx-auto">
        <Image src={user} alt="user" />
      </div>
      <div className="text-center mt-3">
        <h2 className="font-medium text-xl">{username}</h2>
        <p>{userEmail}</p>
        <p>Solemates member since {formatDate(createdAt)}</p>
      </div>

      <div className="border-t pt-6 mt-6 flex justify-center flex-wrap gap-6">
        <button
          onClick={() => navigate("/wishlist")}
          className="text-sm md:text-base py-2 px-6 rounded-full bg-gray-100"
        >
          Favourite
        </button>

        <button
          onClick={() => setActiveView("myOrders")}
          className={`text-sm md:text-base py-2 px-6 rounded-full ${
            activeView === "myOrders" ? "bg-gray-300" : "bg-gray-100"
          }`}
        >
          My Orders
        </button>

        <button
          onClick={() => navigate("/cart")}
          className="text-sm md:text-base  py-2 px-6 rounded-full bg-gray-100"
        >
          Cart
        </button>

        <button
          onClick={() => setActiveView("address")}
          className={`text-sm md:text-base py-2 px-6 rounded-full ${
            activeView === "address" ? "bg-gray-300" : "bg-gray-100"
          }`}
        >
          Address
        </button>
      </div>
      <div className="mt-6">{renderView()}</div>
    </div>
  );
};

export default Profile;
