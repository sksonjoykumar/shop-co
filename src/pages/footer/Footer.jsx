import React from "react";
import { Link } from "react-router-dom";
import bank from "../../assets/images/bank.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="px-4 md:px-20  border-t border-gray-200 pt-7  mt-4">
        <div className="font-inter grid gap-5  xl:gap-10 grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="item-1">
            <Link to={"/"} className="logo">
              <h1 className="font-bold text-3xl">SHOP.CO</h1>
            </Link>
            <p className="mt-2 text-sm  text-gray-600 ">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <ul className="flex gap-2 mt-3 space-x-1 my-2">
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <a href="#">
                  <FaXTwitter size={20} />
                </a>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <a href="#">
                  <FaFacebook size={20} />
                </a>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <a href="#">
                  <FaInstagram size={20} />
                </a>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <a href="#">
                  <FaYoutube size={20} />
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="uppercase font-semibold text-base  text-[#0F925C]">
              Company
            </h4>
            <ul className="text-sm space-y-1.5 mt-3 text-gray-600">
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>About</Link>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>Features</Link>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>Works</Link>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>Career</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="uppercase font-semibold text-base  text-[#0F925C]">
              Help
            </h4>
            <ul className="text-sm space-y-1.5 mt-3 text-gray-600">
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>Customer Sunspot</Link>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>Delivery Details</Link>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>Terms & Conditions</Link>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="uppercase font-semibold text-base  text-[#0F925C]">
              FAQ
            </h4>
            <ul className="text-sm space-y-1.5 mt-3 text-gray-600">
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>Account</Link>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>Manage Deliveries</Link>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>Orders</Link>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>Payments</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="uppercase font-semibold text-base  text-[#0F925C]">
              Recourses
            </h4>
            <ul className="text-sm space-y-1.5 mt-3 text-gray-600">
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>Free eBooks</Link>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>Development Tutorial</Link>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>How to - Blog</Link>
              </li>
              <li className="hover:text-[#3A80E9] transition-all duration-200">
                <Link>YouTube Playlist</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* copyright section */}
        <div className="flex flex-wrap justify-between items-center border-t border-gray-200 mt-4 py-3">
          <div>
            <p className="text-[.8rem]  text-gray-500 font-inter">
              Shop.co © 2000-2025, All Rights Reserved
            </p>
          </div>
          <div>
            <img
              src={bank}
              className="cursor-pointer object-cover border rounded-sm b"
              alt="bank img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
