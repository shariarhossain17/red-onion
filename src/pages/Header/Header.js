import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../images/logo2.png";

const Header = () => {
  return (
    <div className="sm:block mx-auto md:flex justify-between px-20 py-4">
      <Link to="/">
        <div>
          <img width={150} src={logo2} alt="" />
        </div>
      </Link>
      <div className="sm:block">
        <small>
          <FontAwesomeIcon className="md:px-6" icon={faShoppingCart} />
        </small>
        <small>
          <Link className="md:px-6  font-bold" to="/login">
            Login
          </Link>
        </small>
        <small>
          {" "}
          <Link
            className=" bg-red-600 px-6 py-2 rounded-full text-white font-semibold"
            to="/signup"
          >
            Signup
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Header;
