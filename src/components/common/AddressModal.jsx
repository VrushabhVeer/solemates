import React, { useEffect, useState } from "react";
import { updateAddress } from "../../utils/api";
import { enqueueSnackbar } from "notistack";

const AddressModal = ({ closeModal, address, refreshAddresses }) => {
    const [validationErrors, setValidationErrors] = useState({});
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        mobile: "",
    });

    useEffect(() => {
        if (address) {
            setFormData({
                firstName: address.firstName || "",
                lastName: address.lastName || "",
                address: address.address || "",
                street: address.street || "",
                city: address.city || "",
                state: address.state || "",
                zip: address.zip || "",
                mobile: address.mobile || "",
            });
        }
    }, [address]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setValidationErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "", // Clear the error when user starts typing
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
            const response = await updateAddress(address[0]._id, formData);
            if (response.status === 200) {
                enqueueSnackbar(response.data.message, { variant: "success" });
                closeModal();
                refreshAddresses();
            }
        } catch (error) {
            enqueueSnackbar("Failed to update address.", { variant: "error" });
        }
    };

    const getBorderColor = (value) => {
        return value ? "border-green-500" : "border-gray-300";
    };

    return (
        <div
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-50 flex items-center justify-center"
        >
            <div className="relative p-8 w-full max-w-lg bg-white rounded-md shadow-lg">
                <h2 className="font-semibold text-1xl">Add New Address</h2>

                <button
                    type="button"
                    className="absolute top-3 right-3 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-md w-8 h-8 flex items-center justify-center"
                    onClick={closeModal}
                >
                    <svg
                        className="w-3 h-3"
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1 13 13M1 13 13 1"
                        />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>

                <form onSubmit={handleSubmit} className="mt-8">
                    <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4">
                        <div className="w-full">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(formData.firstName)}`}
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
                                className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(formData.lastName)}`}
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
                            className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(formData.address)}`}
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
                            className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(formData.street)}`}
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
                            className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(formData.city)}`}
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
                            className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(formData.state)}`}
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
                                className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(formData.zip)}`}
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
                                className={`w-full border py-2 px-4 rounded-md outline-none ${getBorderColor(formData.mobile)}`}
                            />
                            {validationErrors.mobile && (
                                <p className="text-red-500 text-sm">
                                    {validationErrors.mobile}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex mt-8 items-center gap-5">
                        <button
                            type="submit"
                            className="bg-green-500 px-12 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none"
                        >
                            Save
                        </button>

                        <button
                            type="button"
                            className="ml-3 text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-md text-sm px-5 py-2.5 text-center"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddressModal;
