import React, { useEffect, useState } from "react";
import { addAddress, getCartItems } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import Image from "../components/common/Image";
import CartSummary from "../components/common/CartSummary";

const Checkout = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    street: "",
    zip: "",
    mobile: "",
    city: "",
    state: "",
    userId,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCartItems(userId);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.address || !formData.street || !formData.state || !formData.zip || !formData.mobile) {
      enqueueSnackbar("Please fill in all required fields", { variant: "error" });
      return;
    }

    try {
      const response = await addAddress(formData);
      enqueueSnackbar(response.data.message, { variant: "success" });
      setTimeout(() => {
        navigate("/payment");
      }, 1500);
    } catch (error) {
      enqueueSnackbar("Error adding address", { variant: "error" });
      console.error("Error adding address:", error);
    }
  };

  return (
    <>
      <SnackbarProvider />

      <div className="w-[90%] md:w-[85%] mx-auto mt-10 mb-10">
        <h1 className="font-semibold text-2xl">Checkout</h1>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-8 gap-10 md:gap-20">
          <div className="w-full">
            <h2 className="font-semibold text-1xl">Shipping Details</h2>

            <form onSubmit={handleSubmit} className="mt-3">
              <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4">
                <div className="w-full">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border py-2 px-4 rounded-md outline-none"
                    required
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border py-2 px-4 rounded-md outline-none"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address Line"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border py-2 px-4 rounded-md outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Street"
                  value={formData.street}
                  onChange={handleChange}
                  className="w-full border py-2 px-4 rounded-md outline-none"
                  required
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border py-2 px-4 rounded-md outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full border py-2 px-4 rounded-md outline-none"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4 mt-4">
                <div className="w-full">
                  <input
                    type="number"
                    id="zip"
                    name="zip"
                    placeholder="Zip Code"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full border py-2 px-4 rounded-md outline-none"
                    required
                  />
                </div>
                <div className="w-full">
                  <input
                    type="number"
                    id="mobile"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full border py-2 px-4 rounded-md outline-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 bg-black px-12 text-white py-2 rounded-md hover:bg-black focus:outline-none"
              >
                Proceed to payment
              </button>
            </form>
          </div>

          <div className="w-full">

            <CartSummary cartItems={data} />

            <div className="mt-10">
              <h2 className="font-semibold text-1xl">Order Details</h2>
              {data.map((item) => (
                <div className="flex items-center gap-5 border-b border-gray-300 mt-4" key={item._id}>
                  <div className="w-2/12">
                    <Image
                      className="w-full h-20 object-cover rounded-sm"
                      src={item.img1}
                      alt="product_img"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-8/12">
                    <h2 className="font-semibold text-sm">{item.title}</h2>
                    <h2 className="font-semibold text-sm">₹ {item.originalPrice}</h2>
                    <p className="text-gray-500 italic text-sm mt-1">{item.title2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;