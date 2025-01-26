import React from "react";
import blogBanner from "../../assets/images/blog-banner.png";
import fashion from "../../assets/images/fashion-1.jpg";
import fashion2 from "../../assets/images/fashion-2.jpg";
import { IoIosArrowForward } from "react-icons/io";

function Blog() {
  return (
    <>
      <main className="px-4 md:px-20">
        <div className="mt-4">
          <section className="">
            <img
              className="rounded-sm h-[29rem] border w-full object-center"
              src={blogBanner}
              alt="Blog-Banner"
            />
          </section>
          {/* Blog 1 */}
          <section className="blog my-16 xl:mx-14 flex flex-wrap lg:flex-nowrap gap-7">
            <div className="w-auto lg:max-w-xl">
              {" "}
              <img
                className="rounded-md border w-full h-auto opacity-85 cursor-pointer hover:scale-105 transition-all duration-300"
                src={fashion}
                alt="blog-img"
              />
            </div>
            <div className=" font-inter">
              <h1 className="font-semibold text-4xl text-[#EF4444]">
                Fashion <span className="text-[#3A80E9]">Creativity</span>
              </h1>
              <p className="mt-2 text-gray-600 leading-relaxed text-base">
                The success of the modern-day fashion industry relies on popular
                style trends. And at the centre of these trends are fashion
                bloggers. Since 2007, when the blogosphere began to skyrocket in
                size and influence, fashion bloggers have been at the forefront
                of events at global fashion weeks. They sway creative decisions
                made by brands and play a significant role in determining which
                products win and fail with each fashion season.{" "}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed text-base">
                Fashion blogs were a big deal, even before the days of the
                Instagram influencer. Fashion-forward consumers are invested in
                what bloggers, influencers, and celebs are wearing – and it’s no
                surprise fashion blogs can earn significant numbers of views,
                inspire brand collaborations and make money.
              </p>
              <div className="mt-4">
                <button
                  className="border border-[#3A80E9] hover:bg-[#3A80E9] hover:text-white transition-all duration-300 flex items-center px-5 py-1.5 rounded-3xl text-sm hover:outline-none"
                  type="button"
                >
                  Learn More
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </section>
          {/* Blog 2 */}
          <section className="blog my-16 xl:mx-14 flex flex-wrap lg:flex-nowrap gap-7">
            <div className="w-auto lg:max-w-xl">
              {" "}
              <img
                className="rounded-md border w-full h-auto opacity-85 cursor-pointer hover:scale-105 transition-all duration-300"
                src={fashion2}
                alt="blog-img"
              />
            </div>
            <div className=" font-inter">
              <h1 className="font-semibold text-4xl text-[#EF4444]">
                Fashion <span className="text-[#3A80E9]">Dress</span>
              </h1>
              <p className="mt-2 text-gray-600 leading-relaxed text-base">
                The success of the modern-day fashion industry relies on popular
                style trends. And at the centre of these trends are fashion
                bloggers. Since 2007, when the blogosphere began to skyrocket in
                size and influence, fashion bloggers have been at the forefront
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed text-base">
                Fashion blogs were a big deal, even before the days of the
                Instagram influencer. Fashion-forward consumers are invested in
                what bloggers, influencers, and celebs are wearing – and it’s no
                surprise fashion blogs can earn significant numbers of views,
                inspire brand collaborations and make money.
              </p>
              <div className="mt-4">
                <button
                  className="border border-[#3A80E9] hover:bg-[#3A80E9] hover:text-white transition-all duration-300 flex items-center px-5 py-1.5 rounded-3xl text-sm hover:outline-none"
                  type="button"
                >
                  Learn More
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </section>
          {/* Blog 3 */}
          <section className="blog my-16 xl:mx-14 flex flex-wrap lg:flex-nowrap gap-7">
            <div className="w-auto lg:max-w-xl">
              {" "}
              <img
                className="rounded-md border w-full h-auto opacity-85 cursor-pointer hover:scale-105 transition-all duration-300"
                src={blogBanner}
                alt="blog-img"
              />
            </div>
            <div className=" font-inter">
              <h1 className="font-semibold text-4xl text-[#EF4444]">
                Fashion <span className="text-[#3A80E9]">Dress</span>
              </h1>
              <p className="mt-2 text-gray-600 leading-relaxed text-base">
                The success of the modern-day fashion industry relies on popular
                style trends. And at the centre of these trends are fashion
                bloggers. Since 2007, when the blogosphere began to skyrocket in
                size and influence, fashion bloggers have been at the forefront
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed text-base">
                Fashion blogs were a big deal, even before the days of the
                Instagram influencer. Fashion-forward consumers are invested in
                what bloggers, influencers, and celeb
              </p>
              <div className="mt-4">
                <button
                  className="border border-[#3A80E9] hover:bg-[#3A80E9] hover:text-white transition-all duration-300 flex items-center px-5 py-1.5 rounded-3xl text-sm hover:outline-none"
                  type="button"
                >
                  Learn More
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Blog;
