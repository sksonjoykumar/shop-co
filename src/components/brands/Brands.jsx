import React from "react";
import brandOne from "../../assets/images/brand-1.png";
import brandTwo from "../../assets/images/brand-2.png";
import brandThree from "../../assets/images/brand-3.png";
import brandFour from "../../assets/images/brand-4.png";
import brandFive from "../../assets/images/brand-5.png";
import { Link } from "react-router-dom";

function Brands() {
  return (
    <div className="">
      <div className="bg-gray-900 flex justify-around gap-6 flex-wrap py-6 mt-3 rounded-md shadow-sm">
        <Link>
          <img src={brandOne} alt="brand-img" />
        </Link>
        <Link>
          {" "}
          <img src={brandTwo} alt="brand-img" />
        </Link>
        <Link>
          <img src={brandThree} alt="brand-img" />
        </Link>
        <Link>
          <img src={brandFour} alt="brand-img" />
        </Link>
        <Link>
          {" "}
          <img src={brandFive} alt="brand-img" />
        </Link>
      </div>
    </div>
  );
}

export default Brands;
