import React, { useEffect, useState } from "react";
import { addAddress, getCartItems } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import Image from "../components/common/Image";
import CartSummary from "../components/common/CartSummary";
import Address from "../components/common/Address";

const Checkout = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const isAddressAvailbale = localStorage.getItem("isAddressAvailbale");

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

  const [validationErrors, setValidationErrors] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCartItems(userId);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.street) errors.street = "Street is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.zip) errors.zip = "Zip code is required";
    if (!formData.mobile) errors.mobile = "Mobile number is required";

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      enqueueSnackbar("Please fill in all required fields", {
        variant: "warning",
      });
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

  const getBorderColor = (value) => {
    return value ? "border-green-500" : "border-gray-300";
  };

  return (
    <>
      <div className="w-[90%] md:w-[85%] mx-auto mt-10 mb-10">
        <h1 className="font-semibold text-2xl">Checkout</h1>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-8 gap-10 md:gap-20">
          <div className="w-full">
            <h2 className="font-semibold text-1xl">Shipping Details</h2>
            {isAddressAvailbale !== "true" ? (
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
                      className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(
                        formData.firstName
                      )}`}
                    />
                    {validationErrors.firstName && (
                      <p className="text-red-500 text-sm">
                        {validationErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(
                        formData.lastName
                      )}`}
                    />
                    {validationErrors.lastName && (
                      <p className="text-red-500 text-sm">
                        {validationErrors.lastName}
                      </p>
                    )}
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
                    className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(
                      formData.address
                    )}`}
                  />
                  {validationErrors.address && (
                    <p className="text-red-500 text-sm">
                      {validationErrors.address}
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  <input
                    type="text"
                    id="street"
                    name="street"
                    placeholder="Street"
                    value={formData.street}
                    onChange={handleChange}
                    className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(
                      formData.street
                    )}`}
                  />
                  {validationErrors.street && (
                    <p className="text-red-500 text-sm">
                      {validationErrors.street}
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(
                      formData.city
                    )}`}
                  />
                  {validationErrors.city && (
                    <p className="text-red-500 text-sm">
                      {validationErrors.city}
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(
                      formData.state
                    )}`}
                  />
                  {validationErrors.state && (
                    <p className="text-red-500 text-sm">
                      {validationErrors.state}
                    </p>
                  )}
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
                      className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(
                        formData.zip
                      )}`}
                    />
                    {validationErrors.zip && (
                      <p className="text-red-500 text-sm">
                        {validationErrors.zip}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="number"
                      id="mobile"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(
                        formData.mobile
                      )}`}
                    />
                    {validationErrors.mobile && (
                      <p className="text-red-500 text-sm">
                        {validationErrors.mobile}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 bg-black px-12 text-white py-2 rounded-md hover:bg-black focus:outline-none"
                >
                  Proceed to payment
                </button>
              </form>
            ) : (
              <Address />
            )}
          </div>

          <div className="w-full">
            <CartSummary cartItems={data} />

            <div className="mt-10">
              <h2 className="font-semibold text-1xl">Order Details</h2>
              {data.map((item) => (
                <div
                  className="flex items-center gap-5 border-b border-gray-300 mt-4"
                  key={item._id}
                >
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
                    <h2 className="font-semibold text-sm">
                      ₹ {item.originalPrice}
                    </h2>
                    <p className="text-gray-500 italic text-sm mt-1">
                      {item.title2}
                    </p>
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
