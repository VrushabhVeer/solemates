import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Alert from "../components/common/Alert";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { addToCart, addToWishlist, getProductById } from "../utils/api";
import Image from "../components/common/Image";
import { PRODUCT_IMAGE } from "../utils/constants";

const ProductDetails = () => {
  const [data, setData] = useState({});
  const [size, setSize] = useState(null);
  const params = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await getProductById(params.product_id);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [params.product_id]);

  const handleAction = async (actionFunc, payload, headers) => {
    try {
      const response = await actionFunc(payload, { headers });
      enqueueSnackbar(response.data.message, { variant: "success" });
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;
      enqueueSnackbar(errorMessage, { variant: "warning" });
      console.error(error);
    }
  };

  const handleCart = () => {
    const userId = localStorage.getItem("userId");
    const payload = { ...data, size, quantity: 1, userId };
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    handleAction(addToCart, payload, headers);
  };

  const handleWishlist = () => {
    const userId = localStorage.getItem("userId");
    const payload = { ...data, userId };

    handleAction(addToWishlist, payload);
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-col lg:flex-row justify-between mb-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 w-full md:w-full lg:w-8/12">
          {PRODUCT_IMAGE.map((img, index) => (
            <Image
              className={`w-full md:h-[80vh] object-cover`}
              key={index}
              src={data?.[img]}
              alt="productimg"
            />
          ))}
        </div>

        <div className="w-full md:w-full lg:w-4/12 p-5 md:p-10">
          <div>
            <p className="font-medium">
              {data.gender}{" "}
              <span className="font-medium uppercase ml-3">• {data.brand}</span>
            </p>
          </div>

          <div className="mt-4">
            <h2 className="font-semibold text-xl md:text-3xl">{data.title}</h2>
            <div className="mt-1">
              <p className="italic">{data.title2}</p>
              <p className="mt-2">MRP in Indian currency:</p>
              <p>
                <span className="font-medium text-gray-500 line-through">
                  ₹ {data.originalPrice}
                </span>{" "}
                <span className="font-medium text-red-500 ml-2 mr-1">
                  ₹ {data.offerPrice}
                </span>{" "}
                per pair
              </p>
              <p>(Inclusive of tax)</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-medium text-lg">Sizes</h2>
            <div className="flex flex-wrap gap-1 mt-1">
              {["6", "7", "8", "9", "10", "11", "12"].map((shoeSize) => (
                <button
                  key={shoeSize}
                  onClick={() => setSize(shoeSize)}
                  value={shoeSize}
                  className={`border border-black px-5 text-sm md:text-base py-2 rounded-sm ${size === shoeSize ? "bg-yellow-200" : ""
                    }`}
                >
                  {shoeSize}
                </button>
              ))}
            </div>
          </div>

          <Link to="/size/guide">
            <p className="mt-3 underline">Size Guide</p>
          </Link>

          <div className="mt-10">
            <button
              onClick={handleCart}
              disabled={!size}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-black focus:outline-none"
            >
              Add to Cart
            </button>
            {!size && <Alert message={"Please select size!"} />}
            <button
              onClick={handleWishlist}
              className="w-full flex items-center justify-center border border-black py-2 rounded-md mt-1"
            >
              Add to Wishlist
            </button>
          </div>

          <div className="mt-10">
            <h2 className="font-medium text-lg">Rating</h2>
            <p className="text-green-500 text-lg">{data.rating}</p>

            <p className="mt-4">{data.description}</p>

            <p className="mt-4 underline"> Free Delivery, Free Returns</p>
            <p className="mt-2 underline">
              Delivery within: Metro cities:2-3 days , Others: 4-5 days
            </p>
            <p className="mt-2 underline">
              COD available for orders below ₹5000
            </p>
            <p className="mt-2 underline">
              Secure transactions with hassle free 14 days Exchange and Returns
            </p>
          </div>
        </div>
      </div>
      <SnackbarProvider />
    </>
  );
};

export default ProductDetails;
