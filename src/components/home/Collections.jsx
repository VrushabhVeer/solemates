import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../utils/api";
import Image from "../common/Image";

const Collections = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let response = await getAllProducts();
      setData(response.data);
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[90%] md:w-[85%] mx-auto mt-10 md:mt-28">
      <div>
        <h2 className="font-bold text-2xl md:text-4xl text-center">
          Our Collection
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.slice(0, 8).map((item) => (
          <Link to={`/${item._id}`} key={item._id}>
            <div>
              <div>
                <Image
                  className={`w-full h-[50vh] object-cover rounded-md`}
                  src={item.img1}
                  alt="productImage"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <h2 className="text font-semibold">{item.title}</h2>
                <div className="flex flex-row items-center gap-3 mt-1 text-sm">
                  <p className="">₹ {item.offerPrice}</p>

                  <p className="text-red-500 line-through">
                    ₹ {item.originalPrice}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center mt-8">
        <Link to="/products">
          <button className="mt-8 bg-black text-white px-16 py-4 text-sm font-medium rounded-full">
            Explore All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Collections;
