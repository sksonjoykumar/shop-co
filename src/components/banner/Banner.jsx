import { Carousel, Typography, Button } from "@material-tailwind/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import bannerOne from "../../assets/images/Rectangle 2.png";
import bannerTwo from "../../assets/images/banner-3.png";
import bannerThree from "../../assets/images/banner-4.png";
import bannerFour from "../../assets/images/banner-2.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className=" h-auto lg:h-[550px]  mt-5">
      <Carousel
        className="rounded-md shadow-sm"
        prevArrow={({ handlePrev }) => (
          <span
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
          >
            <IoIosArrowBack color="#0F925C" className="size-6 md:size-14" />
          </span>
        )}
        nextArrow={({ handleNext }) => (
          <span
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
          >
            <IoIosArrowForward color="#0F925C" className="size-6 md:size-14" />
          </span>
        )}
      >
        {/* First Slide */}
        <div className="relative h-full w-full ">
          <img
            src={bannerOne}
            alt="Nature Slide 1"
            className=" h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full bg-black/10 font-inter ">
            <div className="pl-16 lg:pl-20 w-3/4  md:w-2/4 mt-4 lg:mt-10 2xl:mt-16  ">
              <div>
                <h1 className=" mb-2 lg:mb-4 font-extrabold text-xl sm:text-2xl md:text-3xl  lg:text-4xl 2xl:text-6xl text-[#EF4444]">
                  Find Clothes that{" "}
                  <span className=" hidden sm:block text-gray-800  lg:mt-1">
                    Matches Your style
                  </span>
                </h1>

                <p className=" mb-1 md:mb-4 lg:mb-7 opacity-80 text-sm lg:text-base">
                  {" "}
                  Browse through our diverse range of meticulously crafted
                  <span className="hidden sm:block">
                    {" "}
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                  </span>
                </p>
                <Link
                  to={"/shop"}
                  className=" px-3 md:px-6 py-1.5 lg:py-2 rounded-3xl text-white text-xs md:text-base border  bg-[#3A80E9] hover:bg-[#1F2937] transition-all duration-300"
                >
                  {" "}
                  Shop Now
                </Link>
              </div>

              <div className="mt-5 lg:mt-8 hidden md:flex gap-8">
                <div className="border-r pr-3 border-gray-400">
                  <h3 className="text-3xl font-semibold text-gray-800 text-center">
                    200+
                  </h3>
                  <p className="text-sm text-gray-600">International Brands</p>
                </div>
                <div className="border-r pr-3 border-gray-400">
                  <h3 className="text-3xl font-semibold text-gray-800 text-center">
                    2,000+
                  </h3>
                  <p className="text-sm text-gray-600">High-Quality Products</p>
                </div>
                <div className="">
                  <h3 className="text-3xl font-semibold text-gray-800 text-center">
                    30,000+
                  </h3>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second Slide */}
        <div className="relative h-full w-full ">
          <img
            src={bannerTwo}
            alt="Nature Slide 1"
            className=" h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full bg-black/10 font-inter ">
            <div className="pl-16 lg:pl-20 w-3/4  md:w-2/4 mt-4 lg:mt-10 2xl:mt-16  ">
              <div>
                <h1 className=" mb-2 lg:mb-4 font-extrabold text-xl sm:text-2xl md:text-3xl  lg:text-4xl 2xl:text-6xl text-[#EF4444]">
                  Find Clothes that{" "}
                  <span className=" hidden sm:block text-gray-800  lg:mt-1">
                    Matches Your style
                  </span>
                </h1>

                <p className=" mb-1 md:mb-4 lg:mb-7 opacity-80 text-sm lg:text-base">
                  {" "}
                  Browse through our diverse range of meticulously crafted
                  <span className="hidden sm:block">
                    {" "}
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                  </span>
                </p>
                <Link
                  to={"/shop"}
                  className=" px-3 md:px-6 py-1.5 lg:py-2 rounded-3xl text-white text-xs md:text-base border  bg-[#3A80E9] hover:bg-[#1F2937] transition-all duration-300"
                >
                  {" "}
                  Shop Now
                </Link>
              </div>

              <div className="mt-5 lg:mt-8 hidden md:flex gap-8">
                <div className="border-r pr-3 border-gray-400">
                  <h3 className="text-3xl font-semibold text-gray-800 text-center">
                    200+
                  </h3>
                  <p className="text-sm text-gray-600">International Brands</p>
                </div>
                <div className="border-r pr-3 border-gray-400">
                  <h3 className="text-3xl font-semibold text-gray-800 text-center">
                    2,000+
                  </h3>
                  <p className="text-sm text-gray-600">High-Quality Products</p>
                </div>
                <div className="">
                  <h3 className="text-3xl font-semibold text-gray-800 text-center">
                    30,000+
                  </h3>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Slide */}
        <div className="relative h-full w-full ">
          <img
            src={bannerThree}
            alt="Nature Slide 1"
            className=" h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full bg-black/10 font-inter ">
            <div className="pl-16 lg:pl-20 w-3/4  md:w-2/4 mt-4 lg:mt-10 2xl:mt-16  ">
              <div>
                <h1 className=" mb-2 lg:mb-4 font-extrabold text-xl sm:text-2xl md:text-3xl  lg:text-4xl 2xl:text-6xl text-[#EF4444]">
                  Find Clothes that{" "}
                  <span className=" hidden sm:block text-gray-800  lg:mt-1">
                    Matches Your style
                  </span>
                </h1>

                <p className=" mb-1 md:mb-4 lg:mb-7 opacity-80 text-sm lg:text-base">
                  {" "}
                  Browse through our diverse range of meticulously crafted
                  <span className="hidden sm:block">
                    {" "}
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                  </span>
                </p>
                <Link
                  to={"/shop"}
                  className=" px-3 md:px-6 py-1.5 lg:py-2 rounded-3xl text-white text-xs md:text-base border  bg-[#3A80E9] hover:bg-[#1F2937] transition-all duration-300"
                >
                  {" "}
                  Shop Now
                </Link>
              </div>

              <div className="mt-5 lg:mt-8 hidden md:flex gap-8">
                <div className="border-r pr-3 border-gray-400">
                  <h3 className="text-3xl font-semibold text-gray-800 text-center">
                    200+
                  </h3>
                  <p className="text-sm text-gray-600">International Brands</p>
                </div>
                <div className="border-r pr-3 border-gray-400">
                  <h3 className="text-3xl font-semibold text-gray-800 text-center">
                    2,000+
                  </h3>
                  <p className="text-sm text-gray-600">High-Quality Products</p>
                </div>
                <div className="">
                  <h3 className="text-3xl font-semibold text-gray-800 text-center">
                    30,000+
                  </h3>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
