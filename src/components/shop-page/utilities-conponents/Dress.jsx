import React, { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";

function Dress() {
  const [toggle, setToggle] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState(null);

  const handleStyleClick = (style) => {
    setSelectedStyle((prevStyle) => (prevStyle === style ? null : style));
  };

  const styles = ["Casual", "Formal", "Party", "Gym"];

  return (
    <>
      <div className="mt-4 font-inter">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <h3 className="font-semibold text-base text-gray-800">Dress Style</h3>
          {toggle ? (
            <IoIosArrowDown size={18} className="text-gray-700" />
          ) : (
            <IoIosArrowUp size={18} className="text-gray-700" />
          )}
        </div>
        {toggle && (
          <div>
            {styles.map((style) => (
              <div
                key={style}
                className="flex justify-between items-center cursor-pointer hover:bg-gray-100 mt-1 py-1 px-1.5 rounded-xl transition-all duration-200"
                onClick={() => handleStyleClick(style)}
              >
                <p className="text-sm text-gray-700">{style}</p>
                {selectedStyle === style ? (
                  <IoIosArrowDown className="text-gray-700" />
                ) : (
                  <IoIosArrowForward className="text-gray-700" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Dress;
