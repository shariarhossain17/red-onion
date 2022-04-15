import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../../images/adult-blur-blurred-background-687824.png";

const FirstDelivary = () => {
  return (
    <div>
      <div>
        <img width={400} src={logo} alt="" />
      </div>
      <div className="bg-red-600 text-sm w-6 h-6 rounded-full text-center ml-4 mt-5">
        <FontAwesomeIcon
          className="bg-red-600 text-white "
          icon={faCar}
        ></FontAwesomeIcon>
      </div>
      <h2 className="text-2xl ml-4 mb-2">Fast Delivary</h2>
      <p className=" ml-4 ">
        For most people, the ping of an incoming SMS will induce some level of
        excitement — or mild intrigue at least. But with SMS scams on the rise,
        many may now be meeting this same sound with trepidation.
      </p>{" "}
      <span className="text-blue-600 font-bold ml-4">see more...</span>
    </div>
  );
};

export default FirstDelivary;
