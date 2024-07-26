import React, { useState } from "react";
import { deleteCartItem } from "../../utils/api";
import { Link } from "react-router-dom";
import remove from "../../assets/icons/remove.png";
import Image from "./Image";
import { enqueueSnackbar } from "notistack";
import Modal from "./Modal";

const CartItems = ({ cartItems, setCartItems, type }) => {
  const [showModal, setShowModal] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  const handleDelete = async () => {
    try {
      const response = await deleteCartItem(itemIdToDelete);
      enqueueSnackbar(response.data.message, { variant: "success" });
      setCartItems((prevItems) =>
        prevItems.filter((item) => item._id !== itemIdToDelete)
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

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(1, Math.min(3, item.quantity + delta)) }
          : item
      )
    );
  };

  return (
    <div>
      {cartItems.map((item) => (
        <div
          className="flex items-center gap-5 border-b border-slate-300 mt-4 mb-4"
          key={item.id}
        >
          <div className="w-4/12">
            <Link to={`/${item._id}`} key={item._id}>
              <Image
                className="w-full h-40 object-cover rounded-sm"
                src={item.img1}
                alt="product_img"
                loading="lazy"
              />
            </Link>
          </div>

          <div className="w-8/12">
            <div className="flex items-start justify-between">
              <h2 className="font-semibold">{item.title}</h2>
              {type === "payment" ? (
                ""
              ) : (
                <Image
                  onClick={() => openModal(item._id)}
                  className="w-5 cursor-pointer"
                  src={remove}
                  alt="remove_icon"
                  loading="lazy"
                />
              )}
            </div>
            <h2 className="font-semibold">₹ {item.offerPrice}</h2>
            <p className="text-slate-600 italic">{item.title2}</p>
            <p>Size {item.size}</p>

            {type === "payment" ? (
              ""
            ) : (
              <div className="flex items-center gap-3 mt-5">
                <button
                  className="border border-black px-2 rounded-sm"
                  onClick={() => handleQuantityChange(item._id, 1)}
                  disabled={item.quantity >= 3}
                >
                  +
                </button>
                {item.quantity}
                <button
                  className="border border-black px-2 rounded-sm"
                  onClick={() => handleQuantityChange(item._id, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {showModal && (
        <Modal type={"cart"} closeModal={closeModal} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default CartItems;