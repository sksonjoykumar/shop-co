import React, { useContext, useState } from "react";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import PriceRange from "./utilities-conponents/PriceRange";
import Colors from "./utilities-conponents/Colors";
import { IoIosArrowDown } from "react-icons/io";
import Size from "./utilities-conponents/Size";
import Dress from "./utilities-conponents/Dress";
import { StoreContext } from "../../global-context/GlobalContext";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GoHeartFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import ShopLeftSide from "./utilities-conponents/ShopLeftSide";
function Shop() {
  const {
    productsTwo,
    addToCart,
    removeFromCart,
    isInCart,
    addToFav,
    removeFromFav,
    isFavorite,
  } = useContext(StoreContext);
  const [toggle, setToggle] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [hideToggle, setHideToggle] = useState(false);

  // styles array
  const styles = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  // handleStyleClick function
  const handleStyleClick = (style) => {
    setSelectedStyle((prevStyle) => (prevStyle === style ? null : style));
  };

  //   sliceTopSellingProducts items
  const topSelling = productsTwo.slice(0, 8);
  return (
    <>
      <main className="px-4 md:px-20">
        <div className="flex gap-10 my-5 relative">
          {/* left sidebar  */}
          <div className="hidden md:block w-1/3 lg:w-1/5">
            <ShopLeftSide />
          </div>
          {/* Right side */}
          <div className="w-full">
            <div className="">
              <div className="title font-inter flex justify-between items-center">
                <h1 className="mt-1 mb-4 text-xl md:text-3xl font-bold text-gray-800 uppercase">
                  Products
                </h1>
                <button
                  type="button"
                  className="block md:hidden hover:scale-105 transition-all duration-300"
                  onClick={() => setHideToggle(!hideToggle)}
                >
                  {hideToggle && hideToggle ? (
                    <IoClose size={26} />
                  ) : (
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 24 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_29_1240)">
                        <path
                          d="M13.125 9.125V17.75C13.125 18.0484 13.0065 18.3345 12.7955 18.5455C12.5845 18.7565 12.2984 18.875 12 18.875C11.7016 18.875 11.4155 18.7565 11.2045 18.5455C10.9935 18.3345 10.875 18.0484 10.875 17.75V9.125C10.875 8.82663 10.9935 8.54048 11.2045 8.3295C11.4155 8.11853 11.7016 8 12 8C12.2984 8 12.5845 8.11853 12.7955 8.3295C13.0065 8.54048 13.125 8.82663 13.125 9.125ZM18.75 15.5C18.4516 15.5 18.1655 15.6185 17.9545 15.8295C17.7435 16.0405 17.625 16.3266 17.625 16.625V17.75C17.625 18.0484 17.7435 18.3345 17.9545 18.5455C18.1655 18.7565 18.4516 18.875 18.75 18.875C19.0484 18.875 19.3345 18.7565 19.5455 18.5455C19.7565 18.3345 19.875 18.0484 19.875 17.75V16.625C19.875 16.3266 19.7565 16.0405 19.5455 15.8295C19.3345 15.6185 19.0484 15.5 18.75 15.5ZM21 11.75H19.875V1.25C19.875 0.951631 19.7565 0.665483 19.5455 0.454505C19.3345 0.243526 19.0484 0.125 18.75 0.125C18.4516 0.125 18.1655 0.243526 17.9545 0.454505C17.7435 0.665483 17.625 0.951631 17.625 1.25V11.75H16.5C16.2016 11.75 15.9155 11.8685 15.7045 12.0795C15.4935 12.2905 15.375 12.5766 15.375 12.875C15.375 13.1734 15.4935 13.4595 15.7045 13.6705C15.9155 13.8815 16.2016 14 16.5 14H21C21.2984 14 21.5845 13.8815 21.7955 13.6705C22.0065 13.4595 22.125 13.1734 22.125 12.875C22.125 12.5766 22.0065 12.2905 21.7955 12.0795C21.5845 11.8685 21.2984 11.75 21 11.75ZM5.25 12.5C4.95163 12.5 4.66548 12.6185 4.4545 12.8295C4.24353 13.0405 4.125 13.3266 4.125 13.625V17.75C4.125 18.0484 4.24353 18.3345 4.4545 18.5455C4.66548 18.7565 4.95163 18.875 5.25 18.875C5.54837 18.875 5.83452 18.7565 6.0455 18.5455C6.25647 18.3345 6.375 18.0484 6.375 17.75V13.625C6.375 13.3266 6.25647 13.0405 6.0455 12.8295C5.83452 12.6185 5.54837 12.5 5.25 12.5ZM7.5 8.75H6.375V1.25C6.375 0.951631 6.25647 0.665483 6.0455 0.454505C5.83452 0.243526 5.54837 0.125 5.25 0.125C4.95163 0.125 4.66548 0.243526 4.4545 0.454505C4.24353 0.665483 4.125 0.951631 4.125 1.25V8.75H3C2.70163 8.75 2.41548 8.86853 2.2045 9.0795C1.99353 9.29048 1.875 9.57663 1.875 9.875C1.875 10.1734 1.99353 10.4595 2.2045 10.6705C2.41548 10.8815 2.70163 11 3 11H7.5C7.79837 11 8.08452 10.8815 8.2955 10.6705C8.50647 10.4595 8.625 10.1734 8.625 9.875C8.625 9.57663 8.50647 9.29048 8.2955 9.0795C8.08452 8.86853 7.79837 8.75 7.5 8.75ZM14.25 4.25H13.125V1.25C13.125 0.951631 13.0065 0.665483 12.7955 0.454505C12.5845 0.243526 12.2984 0.125 12 0.125C11.7016 0.125 11.4155 0.243526 11.2045 0.454505C10.9935 0.665483 10.875 0.951631 10.875 1.25V4.25H9.75C9.45163 4.25 9.16548 4.36853 8.9545 4.5795C8.74353 4.79048 8.625 5.07663 8.625 5.375C8.625 5.67337 8.74353 5.95952 8.9545 6.1705C9.16548 6.38147 9.45163 6.5 9.75 6.5H14.25C14.5484 6.5 14.8345 6.38147 15.0455 6.1705C15.2565 5.95952 15.375 5.67337 15.375 5.375C15.375 5.07663 15.2565 4.79048 15.0455 4.5795C14.8345 4.36853 14.5484 4.25 14.25 4.25Z"
                          fill="black"
                          fill-opacity="0.4"
                          shape-rendering="crispEdges"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_29_1240"
                          x="-2.125"
                          y="0.125"
                          width="28.25"
                          height="26.75"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_29_1240"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_29_1240"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  )}
                </button>
              </div>
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 font-inter">
                {topSelling.map((item, index) => (
                  <div
                    key={index}
                    className="border shadow-sm rounded-md hover:border hover:border-[#3A80E9] transition-all duration-200 p-4 cursor-pointer relative"
                  >
                    <Link
                      to={`/arrivalsproductdetails/${item.id}`}
                      className="product-info "
                    >
                      <img
                        src={item.product_photo}
                        alt="product-img"
                        className="w-full h-56 object-cover rounded-md hover:scale-110 transition-all duration-300 bg-slate-100"
                      />

                      <p className="mt-2 uppercase text-gray-500 text-sm">
                        {item.product_title.slice(0, 20)}
                      </p>
                      <p className="text-gray-700 font-semibold">
                        {item.product_title.slice(0, 60)}...
                      </p>

                      <div className="flex mt-1">
                        <MdOutlineStarBorderPurple500 className="size-5 text-gray-500" />
                        <MdOutlineStarBorderPurple500 className="size-5 text-gray-500" />
                        <MdOutlineStarBorderPurple500 className="size-5 text-gray-500" />
                        <MdOutlineStarBorderPurple500 className="size-5 text-gray-500" />
                        <MdOutlineStarBorderPurple500 className="size-5 text-gray-500" />
                      </div>
                      <p className="mt-2 text-2xl font-semibold text-[#3A80E9]">
                        ${item.product_price}
                      </p>
                    </Link>
                    <div className="absolute top-5 right-6">
                      <button type="button">
                        {isFavorite(item.id) ? (
                          <GoHeartFill
                            size={23}
                            onClick={() => removeFromFav(item.id)}
                            color="red"
                          />
                        ) : (
                          <FiHeart size={23} onClick={() => addToFav(item)} />
                        )}
                      </button>
                      <IoEyeOutline size={23} />
                    </div>
                    <div className="mt-6 ">
                      <button
                        type="button"
                        className="border w-full rounded-3xl py-2.5 text-base hover:bg-[#0F925C] hover:text-white transition-all duration-200"
                        onClick={() =>
                          isInCart(item.id)
                            ? removeFromCart(item.id)
                            : addToCart(item)
                        }
                      >
                        {isInCart(item.id) ? "Remove from Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center my-7">
                <Link
                  to={"/new-arrivals"}
                  className="px-10 py-1.5 text-sm bg-slate-50 hover:bg-slate-100 transition-all duration-200 border rounded-3xl"
                >
                  View All
                </Link>
              </div>
            </div>

            {hideToggle && (
              <div className="md:hidden h-full absolute -right-4 top-12 bg-white w-[200px] z-40">
                <ShopLeftSide />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Shop;
