import React, { useEffect, useState } from "react";
import heart from "../assets/icons/heart.png";
import { deleteWishlistItem, getWishlistItems } from "../utils/api";
import Empty from "../components/common/Empty";
import { Link } from "react-router-dom";
import Image from "../components/common/Image";
import deleteIcon from "../assets/icons/delete.png";
import { enqueueSnackbar } from "notistack";
import Modal from "../components/common/Modal";

const Wishlist = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWishlistItems(userId);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userId]);

  const handleDelete = async () => {
    try {
      const response = await deleteWishlistItem(itemIdToDelete);
      enqueueSnackbar(response.data.message, { variant: "success" });
      setData((prevData) =>
        prevData.filter((item) => item._id !== itemIdToDelete)
      );
    } catch (error) {
      console.log(error);
    } finally {
      setShowModal(false);
      setItemIdToDelete(null);
    }
  };

  const openModal = (id) => {
    setShowModal(true);
    setItemIdToDelete(id);
  };

  const closeModal = () => {
    setShowModal(false);
    setItemIdToDelete(null);
  };

  return (
    <div className="w-[90%] md:w-[85%] mx-auto mt-10 mb-20">
      <h1 className="font-semibold text-2xl">Wishlist</h1>
      {data.length === 0 ? (
        <Empty type={"wishlist"} />
      ) : (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <div key={item.id}>
              <div className="relative">
                <Link to={`/${item._id}`} key={item._id}>
                  <Image
                    className="w-full h-[50vh] object-cover rounded-t-md"
                    src={item.img1}
                    alt="productImage"
                    loading="lazy"
                  />
                </Link>
                <div className="absolute top-5 left-5 bg-white p-2 rounded-full">
                  <Image
                    className="w-5"
                    src={heart}
                    alt="heart"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex flex-col md:flex-row gap-1 md:items-center justify-between">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <p className="text-slate-600">₹ {item.offerPrice}</p>
                  <Image
                    onClick={() => openModal(item._id)}
                    className="w-5 cursor-pointer"
                    src={deleteIcon}
                    alt="delete icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <Modal type={"wishlist"} closeModal={closeModal} handleDelete={handleDelete} />
      )}

    </div>
  );
};

export default Wishlist;
