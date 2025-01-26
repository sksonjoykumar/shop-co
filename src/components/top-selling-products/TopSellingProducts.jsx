import React, { useContext, useState } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { GoHeartFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function TopSellingProducts({ heading }) {
  const {
    productsTwo,
    addToCart,
    removeFromCart,
    isInCart,
    addToFav,
    removeFromFav,
    isFavorite,
  } = useContext(StoreContext);

  //   sliceTopSellingProducts items
  const topSelling = productsTwo.slice(0, 5);

  return (
    <>
      <div className="">
        <div className="title font-inter my-7">
          <h1 className=" text-xl md:text-4xl text-center font-bold text-gray-800 uppercase">
            {heading}
          </h1>
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 font-inter">
          {topSelling.map((item, index) => (
            <div
              key={index}
              className="border shadow-sm rounded-md hover:border hover:border-[#3A80E9] transition-all duration-200 p-4 cursor-pointer relative"
            >
              <Link
                to={`/arrivalsproductdetails/${item.id}`}
                className="product-info "
              >
                <img
                  src={item.product_photo}
                  alt="product-img"
                  className="w-full h-56 object-cover rounded-md hover:scale-110 transition-all duration-300 bg-slate-100"
                />

                <p className="mt-2 uppercase text-gray-500 text-sm">
                  {item.product_title.slice(0, 20)}
                </p>
                <p className="text-gray-700 font-semibold">
                  {item.product_title.slice(0, 60)}...
                </p>

                <div className="flex mt-1">
                  <MdOutlineStarBorderPurple500 className="size-5 text-gray-500" />
                  <MdOutlineStarBorderPurple500 className="size-5 text-gray-500" />
                  <MdOutlineStarBorderPurple500 className="size-5 text-gray-500" />
                  <MdOutlineStarBorderPurple500 className="size-5 text-gray-500" />
                  <MdOutlineStarBorderPurple500 className="size-5 text-gray-500" />
                </div>
                <p className="mt-2 text-2xl font-semibold text-[#3A80E9]">
                  ${item.product_price}
                </p>
              </Link>
              <div className="absolute top-5 right-6">
                <button type="button">
                  {isFavorite(item.id) ? (
                    <GoHeartFill
                      size={23}
                      onClick={() => removeFromFav(item.id)}
                      color="red"
                    />
                  ) : (
                    <FiHeart size={23} onClick={() => addToFav(item)} />
                  )}
                </button>
                <IoEyeOutline size={23} />
              </div>
              <div className="mt-6 ">
                <button
                  type="button"
                  className="border w-full rounded-3xl py-2.5 text-base hover:bg-[#0F925C] hover:text-white transition-all duration-200"
                  onClick={() =>
                    isInCart(item.id)
                      ? removeFromCart(item.id)
                      : addToCart(item)
                  }
                >
                  {isInCart(item.id) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-7">
          <Link
            to={"/new-arrivals"}
            className="px-10 py-1.5 text-sm bg-slate-50 hover:bg-slate-100 transition-all duration-200 border rounded-3xl"
          >
            View All
          </Link>
        </div>
      </div>
    </>
  );
}

export default TopSellingProducts;
