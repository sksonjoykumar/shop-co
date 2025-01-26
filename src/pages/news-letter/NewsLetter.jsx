import React from "react";

function NewsLetter() {
  return (
    <>
      <div className="px-4 md:px-20">
        <div className="bg-gray-700 p-6 rounded-md shadow-sm flex flex-col sm:flex-row justify-between text-white">
          <div className="flex items-center justify-center md:justify-start ">
            <h1 className="font-inter font-bold text-2xl lg:text-3xl">
              STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
            </h1>
          </div>
          <div className="pt-5 md:pt-0">
            <input
              className="w-full xl:w-96  px-4 py-2.5 text-sm font-inter text-black rounded-3xl border-none focus:outline-none"
              type="email"
              name="email"
              id=""
              placeholder="Enter email address"
            />
            <br />
            <button
              className="w-full  xl:w-96  px-4 py-2.5 font-inter text-sm bg-white hover:bg-gray-200 transition-all duration-200 text-black mt-3 rounded-3xl border-none focus:outline-none"
              type="button"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
