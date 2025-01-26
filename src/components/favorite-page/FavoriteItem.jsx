import React, { useContext } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";

function FavoriteItem() {
  const { favorite, setFavorite, isInCart, addToCart, removeFromCart } =
    useContext(StoreContext);
  console.log(favorite);

  const removeItems = (favId) => {
    setFavorite((prevFav) => prevFav.filter((fav) => fav.id !== favId));
    toast.error("Fav item remove!");
  };
  return (
    <>
      <div className="px-4 md:px-20 mb-10">
        <div className="w-auto lg:max-w-xl font-inter mt-2 ">
          <h1 className="text-2xl font-semibold text-gray-700">
            Favorite Products
          </h1>
          <p className="text-sm mt-1 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            atque ab eos quo soluta, impedit optio nisi. Eos magnam nobis
            dolorem! Error debitis facere vero neque pariatur sunt eos autem.
            Molestias numquam nemo voluptas eligendi, illum eos voluptate harum
            odit?
          </p>
        </div>

        {favorite.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap md:flex-nowrap gap-5 border-t mt-6 pt-5"
          >
            <div className="">
              <img
                className="border rounded-md w-full md:w-52 h-36  p-1 cursor-pointer hover:scale-105 transition-all duration-300 shadow-sm"
                src={item.thumbnail || item.product_photo}
                alt=""
              />
            </div>
            <div className="font-inter ">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg text-gray-600">
                  {item.title || item.product_title}
                </p>
                <button
                  type="button"
                  onClick={() => removeItems(item.id)}
                  className="mr-4 flex justify-center hover:text-[#EF4444] transition-all duration-200"
                >
                  <IoCloseSharp size={24} />
                </button>
              </div>
              <p className="font-normal text-base mt-1 text-gray-600">
                {item.description || item.product_title}
              </p>

              <div className="">
                <p className="mt-1 text-gray-600 text-base">
                  Brand:{" "}
                  <span className=" font-semibold text-gray-700">
                    {item.brand || "Not Found"}
                  </span>
                </p>
                <p className="mt-1 text-gray-600 text-base">
                  Category:{" "}
                  <span className=" font-semibold text-gray-700">
                    {item.category || "Not Found"}
                  </span>
                </p>
                <p className="mt-1 text-gray-600 text-base">
                  Status:{" "}
                  <span className=" font-semibold text-gray-700">
                    {item.availabilityStatus || "Not Found"}
                  </span>
                </p>
                <p className="mt-1 text-gray-600 text-base">
                  Warranty:{" "}
                  <span className=" font-semibold text-gray-700">
                    {item.warrantyInformation || "Not Found"}
                  </span>
                </p>
              </div>

              <div className="mt-6 ">
                <button
                  type="button"
                  className="border w-52 rounded-3xl py-2.5 text-base hover:bg-[#0F925C] hover:text-white transition-all duration-200"
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
          </div>
        ))}
      </div>
    </>
  );
}

export default FavoriteItem;
