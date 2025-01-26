import React from "react";
import Banner from "../../components/banner/Banner";
import Brands from "../../components/brands/Brands";
import AllProducts from "../../components/all-products/AllProducts";
import TopSellingProducts from "../../components/top-selling-products/TopSellingProducts";
import Reviews from "../../components/reviews/Reviews";

function Home() {
  return (
    <div className="px-4 md:px-20">
      <Banner />
      <Brands />
      <AllProducts heading={"Top Selling Products"} />
      <TopSellingProducts heading={" New Arrivals"} />
      <Reviews />
    </div>
  );
}

export default Home;
