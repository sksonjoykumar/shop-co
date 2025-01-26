import React from "react";
import TotalCartFee from "../total-cart-fee/TotalCartFee";
import { Link } from "react-router-dom";

function Order() {
  return (
    <>
      <div className="px-4 md:px-20">
        <div className=" flex flex-col md:flex-row justify-center items-center  gap-7 md:justify-between xl:mx-20 my-10">
          <div className="  font-inter">
            <h3 className=" text-center md:text-left font-semibold text-3xl text-gray-700">
              Delivery Information
            </h3>

            <form className="mt-7  w-auto md:w-[400px] lg:w-[444px]">
              <div className="flex gap-3">
                <input
                  className="border w-full  ring-1 ring-[#0f925c] py-2 px-2 text-sm shadow-sm rounded-md focus:outline-none"
                  type="text"
                  name="text"
                  id=""
                  placeholder="First name"
                />
                <input
                  className="border w-full ring-1 ring-[#0f925c] py-2 px-2 text-sm shadow-sm rounded-md focus:outline-none"
                  type="text"
                  name="text"
                  id=""
                  placeholder="Last name"
                />
              </div>
              <input
                className="mt-4 w-full  border ring-1 ring-[#0f925c] py-2 px-2 text-sm shadow-sm rounded-md focus:outline-none"
                type="email"
                name="email"
                id=""
                placeholder="Email address"
              />
              <div className="flex gap-3 mt-4">
                <input
                  className="border w-full ring-1 ring-[#0f925c] py-2 px-2 text-sm shadow-sm rounded-md focus:outline-none"
                  type="text"
                  name="text"
                  id=""
                  placeholder="City"
                />
                <input
                  className="border w-full ring-1 ring-[#0f925c] py-2 px-2 text-sm shadow-sm rounded-md focus:outline-none"
                  type="text"
                  name="text"
                  id=""
                  placeholder="State"
                />
              </div>

              <input
                className="mt-4 w-full  border ring-1 ring-[#0f925c] py-2 px-2 text-sm shadow-sm rounded-md focus:outline-none"
                type="text"
                name="text"
                id=""
                placeholder="Stress"
              />
              <div className="flex gap-3 mt-4">
                <input
                  className="border w-full  ring-1 ring-[#0f925c] py-2 px-2 text-sm shadow-sm rounded-md focus:outline-none"
                  type="text"
                  name="text"
                  id=""
                  placeholder="Zip code"
                />
                <input
                  className="border w-full ring-1 ring-[#0f925c] py-2 px-2 text-sm shadow-sm rounded-md focus:outline-none"
                  type="text"
                  name="text"
                  id=""
                  placeholder="Country"
                />
              </div>
              <input
                className="mt-4 w-full  border ring-1 ring-[#0f925c] py-2 px-2 text-sm shadow-sm rounded-md focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                name="number"
                id=""
                placeholder="Phone"
              />
              <Link className="flex justify-center md:justify-start">
                <button
                  type="button"
                  className="w-72 bg-[#0f925c] hover:bg-[#119d63] transition-all duration-200 mt-4 py-2 rounded-3xl text-base font-semibold  text-white"
                >
                  Submit
                </button>
              </Link>
            </form>
          </div>
          <div className="">
            <TotalCartFee />
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
