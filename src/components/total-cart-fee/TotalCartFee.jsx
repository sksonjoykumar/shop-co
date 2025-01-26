import React, { useContext } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { Link } from "react-router-dom";

function TotalCartFee() {
  const { cartTotalAmount } = useContext(StoreContext);

  return (
    <>
      <div>
        <div className="">
          <h1 className="font-inter font-semibold text-3xl text-gray-700 ">
            Cart Total
          </h1>
          <div className="mt-3 w-auto lg:w-80 flex gap-4 justify-between border-b pb-1.5">
            <p className="text-lg font-semibold text-gray-700">Subtotal</p>
            <p className="text-lg font-semibold text-gray-700">
              ${cartTotalAmount().toFixed(2)}
            </p>
          </div>
          <div className="mt-2 w-auto lg:w-80 flex gap-4 justify-between border-b pb-1.5">
            <p className="text-lg font-semibold text-gray-700">Delivery Fee</p>
            <p className="text-lg font-semibold text-gray-700">{5}</p>
          </div>
          <div className="mt-2 w-auto lg:w-80 flex gap-4 justify-between border-b pb-1.5">
            <p className="text-lg font-semibold text-gray-700">Total</p>
            <p className="text-lg font-semibold text-gray-700">
              ${cartTotalAmount().toFixed(2) + 5}
            </p>
          </div>
          <Link to={"/order"}>
            <button
              className="mt-5 hover:bg-[#3e85efee] transition-all duration-200 w-64 px-4 py-2 bg-[#3A80E9] rounded-3xl text-white text-base  "
              type="button"
            >
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TotalCartFee;
