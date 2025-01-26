import React, { useContext } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { IoCloseSharp } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import TotalCartFee from "../total-cart-fee/TotalCartFee";

function CartPage() {
  const { cartItems, setCartsItems } = useContext(StoreContext);
  // increaseQuantity function
  const increaseQuantity = (itemId) => {
    setCartsItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity ? item.quantity + 1 : 2,
            }
          : item
      )
    );
    toast.success("Quantity increased!");
  };
  // decreaseQuantity function
  const decreaseQuantity = (itemId) => {
    setCartsItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity:
                item.quantity && item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
    toast.error("Quantity decreased!");
  };

  // removeItem Function
  const removeItems = (itemId) => {
    setCartsItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
    toast.error("Remove item!");
  };



  return (
    <div className="px-4 md:px-20 pb-10">
      <div className="font-inter">
        <div className="text-center grid justify-center items-center grid-cols-4  md:grid-cols-6 gap-2 text-base md:text-lg border-b pb-1 text-[#1D2A35] sticky top-[4.4rem] h-10 bg-white overflow-hidden">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p className="hidden md:block">Quantity</p>
          <p>Total</p>
          <p className="hidden md:block">Remove</p>
        </div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="text-center grid justify-center items-center grid-cols-4  md:grid-cols-6 gap-2 border-b pb-2 mt-4 md:text-base text-sm"
          >
            <img
              className="w-24 h-16 object-cover border border-gray-300 rounded-sm mx-auto hover:scale-105 transition-all duration-500 cursor-pointer"
              src={item.thumbnail || item.product_photo}
              alt="product-img"
            />
            <p>{item.title || item.product_title.slice(0, 20)}</p>
            <p>${item.price || item.product_price}</p>
            <div className="hidden  md:flex justify-center items-center gap-2.5">
              <button
                type="button"
                className="border rounded-full p-1.5"
                onClick={() => decreaseQuantity(item.id)}
              >
                <FaMinus color="#E02335" size={15} />
              </button>
              <p>{item.quantity || 1}</p>
              <button
                type="button"
                className="border rounded-full p-1.5"
                onClick={() => increaseQuantity(item.id)}
              >
                <FaPlus color="#49E227" size={15} />
              </button>
            </div>
            <p>
              $
              {(item.price * item.quantity).toFixed(2) ||
                item.product_price * item.quantity}
            </p>

            <button
              type="button"
              onClick={() => removeItems(item.id)}
              className="hidden md:flex justify-center hover:text-[#EF4444] transition-all duration-200"
            >
              <IoCloseSharp size={24} />
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between lg:mx-14 mt-10">
        <TotalCartFee />
        <div className="">
          <div className="font-outfit">
            <p className="text-[1.1rem] text-gray-800">
              If you have a promo code, Enter it here
            </p>
            <div className=" xl:w-[450px] flex">
              <input
                className="w-full mt-2 py-2 px-2 border border-gray-400 rounded-l-md bg-slate-100 focus:outline-none"
                type="text"
                name="text"
                id=""
                placeholder="Enter promo code"
              />
              <button
                type="button"
                className="px-2 md:px-6 py-2 bg-[#3A80E9] hover:bg-[#3e85efee] transition-all duration-200 border border-gray-400 text-white text-md mt-2 rounded-r-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
