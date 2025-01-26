import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function PriceRange() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="mt-4 font-inter">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <h3 className="font-semibold text-base text-gray-800">Price</h3>
          {toggle && toggle ? (
            <IoIosArrowDown size={18} className="text-gray-700" />
          ) : (
            <IoIosArrowUp size={18} className="text-gray-700" />
          )}
          
        </div>
        {toggle && (
          <div className="mt-2 mx-1">
            <input
              className="w-full cursor-pointer "
              type="range"
              name="price"
              id=""
            />
            <p className="text-base font-semibold text-gray-600">$300</p>
          </div>
        )}
      </div>
    </>
  );
}

export default PriceRange;
