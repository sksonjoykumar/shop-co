import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser, FaRegHeart } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { HiMiniBars3 } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import "./navbar.css";
import { StoreContext } from "../../global-context/GlobalContext";

function Navbar() {
  const { cartItems, favorite } = useContext(StoreContext);
  const [menu, setMenu] = useState(false);
  return (
    <div className="px-4 md:px-20 py-[1.2rem] bg-white sticky top-0 border-b z-50">
      <div className=" relative manu-wrapper font-inter gap-3 xl:gap-6 flex justify-between  items-center text-gray-700">
        <Link to={"/"} className="logo">
          <h1 className="font-bold text-2xl">SHOP.CO</h1>
        </Link>
        <ul className="hidden md:flex items-center gap-3 lg:gap-6 text-base">
          <li className="flex items-center justify-center text-[#000000] hover:text-[#0F925C] transition-all duration-200">
            <NavLink to={"/shop"}>Shop</NavLink>
            <MdOutlineKeyboardArrowDown size={22} />
          </li>
          <li className=" text-[#000000] hover:text-[#0F925C] transition-all duration-200">
            <NavLink to={"/products"}>Products</NavLink>
          </li>

          <li className=" text-[#000000] hover:text-[#0F925C] transition-all duration-200">
            <NavLink to={"/new-arrivals"}>New Arrival</NavLink>
          </li>
          <li className=" text-[#000000] hover:text-[#0F925C] transition-all duration-200">
            <NavLink to={"/brands"}>Brands</NavLink>
          </li>
          <li className=" text-[#000000] hover:text-[#0F925C] transition-all duration-200">
            <NavLink to={"/cart"}>Cart</NavLink>
          </li>
          <li className=" text-[#000000] hover:text-[#0F925C] transition-all duration-200">
            <NavLink to={"/order"}>Order</NavLink>
          </li>
          <li className=" text-[#000000] hover:text-[#0F925C] transition-all duration-200">
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
          <div className=" hidden  md:flex items-center relative ">
            <input
              className=" py-1.5 lg:py-2 w-[110px] lg:w-[250px] xl:w-[300px] 2xl:w-[500px]  border rounded-3xl  focus:outline-none text-sm px-3 lg:px-6 lg:pl-10 bg-gray-100 border-[#0eadc6]"
              type="search"
              name="search"
              id=""
              placeholder="Search for products..."
            />
            <FiSearch
              className="hidden lg:block absolute left-2 text-gray-400"
              size={23}
            />
          </div>
        </ul>

        <div className="flex gap-4 ">
          <Link to={"/favorite"} className="relative">
            <FaRegHeart size={22} />
            <span className="absolute -top-5 -right-2 h-5 w-5 bg-[#EF4444] rounded-full text-center text-white text-sm">
              {favorite.length}
            </span>
          </Link>

          <Link to={"/cart"} className="relative">
            {" "}
            <MdOutlineShoppingCart size={23} />
            <span className="absolute -top-5 -right-2 h-5 w-5 bg-[#EF4444] rounded-full text-center text-white text-sm">
              {cartItems.length}
            </span>
          </Link>
          <Link to={"/login"}>
            <FaRegCircleUser size={22} />
          </Link>

          {/* responsive mobile icon */}
          <button
            className="block md:hidden"
            type="button"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <IoClose size={24} /> : <HiMiniBars3 size={24} />}
          </button>
        </div>

        {menu && (
          <div className="md:hidden z-50 absolute overflow-hidden rounded-sm  h-screen pt-10  flex justify-center   bg-white border-l w-[200px] top-[3.2rem] -right-4">
            <ul className="block text-base text-center space-y-3">
              <li className="flex items-center justify-center text-[#000000] hover:text-[#0F925C] transition-all duration-200">
                <NavLink to={"/shop"}>Shop</NavLink>
                <MdOutlineKeyboardArrowDown size={22} />
              </li>
              <li className="  text-[#000000] hover:text-[#0F925C] transition-all duration-200">
                <NavLink to={"/products"}>Products</NavLink>
              </li>

              <li className=" text-[#000000] hover:text-[#0F925C] transition-all duration-200">
                <NavLink to={"/new-arrivals"}>New Arrival</NavLink>
              </li>
              <li className=" text-[#000000] hover:text-[#0F925C] transition-all duration-200">
                <NavLink to={"/brands"}>Brands</NavLink>
              </li>
              <li className=" text-[#000000] hover:text-[#0F925C] transition-all duration-200">
                <NavLink to={"/cart"}>Cart</NavLink>
              </li>
              <li className=" text-[#000000] hover:text-[#0F925C] transition-all duration-200">
                <NavLink to={"/order"}>Order</NavLink>
              </li>
              <li className=" text-[#000000] hover:text-[#0F925C] transition-all duration-200">
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>

              <div className=" flex items-center relative pt-3">
                <input
                  className=" py-1.5 lg:py-2 w-[160px]  border rounded-3xl  focus:outline-none text-sm px-3 lg:px-6 lg:pl-10 bg-gray-100 border-[#0eadc6]"
                  type="search"
                  name="search"
                  id=""
                  placeholder="Search for products..."
                />
                <FiSearch
                  className="hidden lg:block absolute left-2 text-gray-400"
                  size={23}
                />
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
