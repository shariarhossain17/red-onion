import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../../images/chef-cook-food-33614.png";

const Roosponder = () => {
  return (
      <div>
        <div>
          <img width={400} src={logo} alt="" />
        </div>
        <div className="bg-red-600 text-sm w-6 h-6 rounded-full text-center ml-4 mt-5">
          <FontAwesomeIcon
            className="bg-red-600 text-white "
            icon={faBell}
          ></FontAwesomeIcon>
        </div>
        <h2 className="text-2xl ml-4 mb-2">A Good auto responder</h2>
        <p className=" ml-4 ">
          Autoresponders are a way to dip your toes into email automation.
          They're typically the simplest form of marketing automation to execute
          when setting up your campaigns -- but, when done well, they can be
          incredibly powerful for bringing in additional customers and revenue.
        </p>{" "}
        <span className="text-blue-600 font-bold ml-4">see more...</span>
      </div>
  );
};

export default Roosponder;
