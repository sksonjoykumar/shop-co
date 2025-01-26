import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Colors() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="mt-4 font-inter">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <h3 className="font-semibold text-base text-gray-800">Colors</h3>
          {toggle && toggle ? (
            <IoIosArrowDown size={18} className="text-gray-700" />
          ) : (
            <IoIosArrowUp size={18} className="text-gray-700" />
          )}
        </div>
        {toggle && (
          <div className="mt-2 mx-1 flex justify-between flex-wrap gap-1">
            <button
              type="button"
              className=" w-8 h-8 border rounded-full bg-red-600 hover:scale-105 hover:border-2 hover:border-[#0F925C]"
            ></button>
            <button
              type="button"
              className=" w-8 h-8 border rounded-full bg-blue-600 hover:scale-105 hover:border-2 hover:border-[#0F925C]"
            ></button>
            <button
              type="button"
              className=" w-8 h-8 border rounded-full bg-orange-600 hover:scale-105 hover:border-2 hover:border-[#0F925C]"
            ></button>
            <button
              type="button"
              className=" w-8 h-8 border rounded-full bg-violet-600 hover:scale-105 hover:border-2 hover:border-[#0F925C]"
            ></button>
            <button
              type="button"
              className=" w-8 h-8 border rounded-full bg-pink-600 hover:scale-105 hover:border-2 hover:border-[#0F925C]"
            ></button>
            <button
              type="button"
              className=" w-8 h-8 border rounded-full bg-amber-300 hover:scale-105 hover:border-2 hover:border-[#0F925C]"
            ></button>
            <button
              type="button"
              className=" w-8 h-8 border rounded-full bg-slate-300 hover:scale-105 hover:border-2 hover:border-[#0F925C]"
            ></button>
            <button
              type="button"
              className=" w-8 h-8 border rounded-full bg-black hover:scale-105 hover:border-2 hover:border-[#0F925C]"
            ></button>
            <button
              type="button"
              className=" w-8 h-8 border rounded-full bg-neutral-500 hover:scale-105 hover:border-2 hover:border-[#0F925C]"
            ></button>
            <button
              type="button"
              className=" w-8 h-8 border rounded-full bg-lime-500 hover:scale-105 hover:border-2 hover:border-[#0F925C]"
            ></button>
            <button
              type="button"
              className=" w-8 h-8 border rounded-full bg-emerald-400 hover:scale-105 hover:border-2 hover:border-[#0F925C]"
            ></button>
            <button
              type="button"
              className=" w-8 h-8 border rounded-full bg-rose-300 hover:scale-105 hover:border-2 hover:border-[#0F925C]"
            ></button>
          </div>
        )}
      </div>
    </>
  );
}

export default Colors;
