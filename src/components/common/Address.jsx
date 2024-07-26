import React, { useEffect, useState } from "react";
import { getAddress } from "../../utils/api";
import AddressModal from "./AddressModal";

const Address = () => {
    const [address, setAddress] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAddress(userId);
                setAddress(response.data);
                if (response.data === 0) {
                    localStorage.setItem("isAddressAvailbale", "false");
                }else{
                    localStorage.setItem("isAddressAvailbale", "true");
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [userId]);

    const refreshAddresses = async () => {
        try {
            const response = await getAddress(userId);
            setAddress(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const openModal = (address) => {
        setShowModal(true);
        setSelectedAddress(address);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedAddress(null);
    };

    return (
        <>
            <div className="mt-10">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Delivery Address</h2>

                    <button
                        className="underline font-medium"
                        onClick={() => openModal(address)}
                    >
                        Add New
                    </button>
                </div>
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

            {showModal && (
                <AddressModal refreshAddresses={refreshAddresses} closeModal={closeModal} address={selectedAddress} />
            )}
        </>
    );
};

export default Address;
