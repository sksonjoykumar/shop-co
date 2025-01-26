import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../global-context/GlobalContext";
import { FadeLoader } from "react-spinners";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import NewArrivals from "../new-arrivals/NewArrivals";
import TopSellingProducts from "../top-selling-products/TopSellingProducts";

function ArrivalsProductDetails() {
  const { id } = useParams();
  const { productsTwo } = useContext(StoreContext);
  const [arrivalsDetails, setArrivalsDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (productsTwo?.length > 0) {
      const sinProduct = productsTwo.find((p) => p.id === id);
      setArrivalsDetails(sinProduct);
    } else {
      setArrivalsDetails(null);
    }
    setLoading(false);
  }, [id, productsTwo]);

  // loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader
          color="#826DDC"
          cssOverride={{ display: "block", margin: "0 auto" }}
          loading
          margin={8}
          radius={2}
          speedMultiplier={1}
        />
      </div>
    );
  }

  console.log(arrivalsDetails);
  return (
    <>
      <div className="px-4 md:px-20 mt-4">
        <div className="">
          <div>
            <h1 className="font-inter text-4xl lg:text-5xl  font-bold text-[#EF4444]">
              Product <span className="text-[#0F925C]">Information</span>
            </h1>
            <div className="flex justify-center md:justify-start items-center md:items-start  flex-col md:flex-row  gap-8 lg:gap-14 my-6">
              <div className="md:w-[550px] h-[450px]">
                <img
                  src={arrivalsDetails.product_photo}
                  className="w-full h-full object-cover border rounded-md shadow-sm hover:scale-105 transition-all duration-200 cursor-pointer"
                  alt="product-img"
                />
              </div>
              <div className="font-inter text-center md:text-left max-w-80 lg:max-w-96 xl:max-w-2xl">
                <p className="font-semibold text-3xl text-[#3A80E9]">
                  {arrivalsDetails.product_title}
                </p>
                <p className="font-semibold text-xl lg:text-xl leading-tight text-gray-700 mt-3">
                  {arrivalsDetails.product_title}
                </p>
                <p className="font-semibold text-4xl text-[#0F925C] mt-2">
                  {arrivalsDetails.product_price}
                </p>
                <div className="mt-2">
                  <div className="flex justify-center md:justify-start mt-1">
                    <MdOutlineStarBorderPurple500 className="size-5 text-yellow-600" />
                    <MdOutlineStarBorderPurple500 className="size-5 text-yellow-600" />
                    <MdOutlineStarBorderPurple500 className="size-5 text-yellow-600" />
                    <MdOutlineStarBorderPurple500 className="size-5 text-yellow-600" />
                    <MdOutlineStarBorderPurple500 className="size-5 text-yellow-600" />
                  </div>
                  <p className="mt-1 text-gray-600 text-lg">
                    Rating :{" "}
                    <span className=" font-semibold text-gray-700">
                      {arrivalsDetails.product_star_rating}
                    </span>
                  </p>
                </div>
                <div className="">
                  <p className="mt-1 text-gray-600 text-base">
                    Currency:{" "}
                    <span className=" font-semibold text-gray-700">
                      {arrivalsDetails.currency}
                    </span>
                  </p>
                  <p className="mt-1 text-gray-600 text-base">
                    Sales Volume:{" "}
                    <span className=" font-semibold text-gray-700">
                      {arrivalsDetails.sales_volume}
                    </span>
                  </p>
                  <p className="mt-1 text-gray-600 text-base">
                    Status:{" "}
                    <span className=" font-semibold text-gray-700">
                      In Stock
                    </span>
                  </p>
                  <p className="mt-1 text-gray-600 text-base">
                    Warranty:{" "}
                    <span className=" font-semibold text-gray-700">
                      1 year warranty
                    </span>
                  </p>
                </div>
                <div className="">
                  <button
                    type="button"
                    className="mt-5 bg-[#0F925C] hover:bg-[#12a96a] transition-all duration-200 px-4 py-2 w-64 md:w-96 rounded-3xl text-lg font-semibold text-white"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <TopSellingProducts heading={"Similar Products"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArrivalsProductDetails;
