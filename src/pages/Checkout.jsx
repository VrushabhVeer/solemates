import React, { useEffect, useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    street: "",
    zip: "",
    mobile: "",
    landmark: "",
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
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
                />
              </div>
            </div>

            <div className="mt-4">
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border py-2 px-4 rounded-md outline-none"
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
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                id="landmark"
                name="landmark"
                placeholder="Landmark ( Optional )"
                value={formData.landmark}
                onChange={handleChange}
                className="w-full border py-2 px-4 rounded-md outline-none"
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

            <div className="flex items-center justify-between mt-4 border-t border-gray-300">
              <p className="mt-2 font-medium">Total</p>
              <p className="mt-2 font-medium">₹ 4100</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-semibold text-1xl">Order Details</h2>
            {data.map((item) => (
              <div className="flex items-center gap-5 border-b border-gray-300 pb-4 mt-5">
                <div className="w-2/12">
                  <img
                    className="w-full h-20 object-cover rounded-sm"
                    src={item.img1}
                    alt="product_img"
                    loading="lazy"
                  />
                </div>
                <div className="w-8/12">
                  <h2 className="font-semibold">{item.title}</h2>
                  <h2 className="font-semibold">₹ {item.originalPrice}</h2>
                  <p className="text-gray-500 italic">{item.title2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;