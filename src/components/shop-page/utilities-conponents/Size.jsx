import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Size() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="mt-4 font-inter">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <h3 className="font-semibold text-base text-gray-800">Size</h3>
          {toggle && toggle ? (
            <IoIosArrowDown size={18} className="text-gray-700" />
          ) : (
            <IoIosArrowUp size={18} className="text-gray-700" />
          )}
        </div>
        {toggle && (
          <div className="mt-2 mx-1 font-inter flex gap-2 flex-wrap ">
            <button
              type="button"
              className="border px-2.5 py-1.5 rounded-3xl bg-gray-100 hover:border-[#0F925C] transition-all duration-100 text-sm text-gray-800"
            >
              XX-Small
            </button>
            <button
              type="button"
              className="border px-2.5 py-1.5 rounded-3xl bg-gray-100 hover:border-[#0F925C] transition-all duration-100 text-sm text-gray-800"
            >
              X-Small
            </button>
            <button
              type="button"
              className="border px-2.5 py-1.5 rounded-3xl bg-gray-100 hover:border-[#0F925C] transition-all duration-100 text-sm text-gray-800"
            >
              Small
            </button>
            <button
              type="button"
              className="border px-2.5 py-1.5 rounded-3xl bg-gray-100 hover:border-[#0F925C] transition-all duration-100 text-sm text-gray-800"
            >
              Medium
            </button>
            <button
              type="button"
              className="border px-2.5 py-1.5 rounded-3xl bg-gray-100 hover:border-[#0F925C] transition-all duration-100 text-sm text-gray-800"
            >
              Large
            </button>
            <button
              type="button"
              className="border px-2.5 py-1.5 rounded-3xl bg-gray-100 hover:border-[#0F925C] transition-all duration-100 text-sm text-gray-800"
            >
              X-Large
            </button>
            <button
              type="button"
              className="border px-2.5 py-1.5 rounded-3xl bg-gray-100 hover:border-[#0F925C] transition-all duration-100 text-sm text-gray-800"
            >
              XX-Large
            </button>
            <button
              type="button"
              className="border px-2.5 py-1.5 rounded-3xl bg-gray-100 hover:border-[#0F925C] transition-all duration-100 text-sm text-gray-800"
            >
              3X-Large
            </button>
            <button
              type="button"
              className="border px-2.5 py-1.5 rounded-3xl bg-gray-100 hover:border-[#0F925C] transition-all duration-100 text-sm text-gray-800"
            >
              4X-Large
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Size;
