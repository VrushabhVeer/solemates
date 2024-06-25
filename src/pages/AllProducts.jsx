import React, { useEffect, useState } from "react";
import Loader from "../components/common/Loader";
import { Link } from "react-router-dom";
import { getAllProducts } from "../utils/api";
import Image from "../components/common/Image";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await getAllProducts();
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-[90%] md:w-[85%] mx-auto mt-10 md:mt-28 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item) => (
          <Link to={`/${item._id}`} key={item._id}>
            <div>
              <div>
                <Image
                  className="w-full h-[50vh] object-cover rounded-md"
                  src={item.img1}
                  alt="productImage"
                  loading="lazy"
                />
              </div>
              <div className="mt-3">
                <h2 className="text font-semibold">{item.title}</h2>
                <div className="flex flex-row items-center gap-3 mt-1 text-sm">
                  <p className="">₹ {item.offerPrice}</p>

                  <p className="text-red-600 line-through">
                    ₹ {item.originalPrice}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
