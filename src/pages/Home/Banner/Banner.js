import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner flex justify-center items-center">
      <div className="absolute">
        <input
          className="sm:min-w-full focus:outline-none md:w-96 py-2 rounded-full px-2"
          type="search"
          name=""
          id=""
          placeholder="search your food"
        />
      </div>
      <div className="relative sm:left-28 md:left-40">
        <button className="bg-red-600 rounded-full px-4 py-2 text-white">search</button>
      </div>
    </div>
  );
};

export default Banner;
