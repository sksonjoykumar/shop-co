import React from "react";
import notFound from "../../assets/images/not.jpg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="px-4 md:px-20">
        <div className="flex justify-center items-center py-10 flex-col gap-3">
          <Link to={"/"}>
            <button
              className="mt-5 hover:bg-[#3e85efee] transition-all duration-200 w-64 px-4 py-2 bg-[#3A80E9] rounded-3xl text-white text-base  "
              type="button"
            >
              Back to home
            </button>
          </Link>
          <img
            src={notFound}
            alt="not-found page"
            className="w-auto h-auto md:w-[60%] md:h-[500px] rounded-md"
          />
        </div>
      </div>
    </>
  );
}

export default NotFound;
