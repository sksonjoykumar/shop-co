import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { reviews } from "./review";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Reviews() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className=" mb-6">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 uppercase">
        Our happy Customer Reviews
      </h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 2s ease-in-out"
        transitionDuration={2000} // Transition duration in milliseconds
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="  mx-3 border p-5 rounded-md shadow-sm font-inter cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <div className="flex gap-1">
              <MdOutlineStarPurple500 className="text-yellow-400 size-6" />
              <MdOutlineStarPurple500 className="text-yellow-400 size-6" />
              <MdOutlineStarPurple500 className="text-yellow-400 size-6" />
              <MdOutlineStarPurple500 className="text-yellow-400 size-6" />
              <MdOutlineStarPurple500 className="text-yellow-400 size-6" />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-base mt-1 ml-1 font-semibold text-gray-800">
                {review.name}
              </p>
              <p>
                {" "}
                <IoIosCheckmarkCircle className="text-[#01AB31] size-5" />
              </p>
            </div>
            <p className="mt-1 text-sm text-gray-700">{review.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Reviews;
