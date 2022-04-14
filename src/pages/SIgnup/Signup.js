import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";

const Signup = () => {
  return (
    <div className="form">
      <div className="form-container">
        <div className=" mb-20">
          <img className="mx-auto" width={250} src={logo} alt="" />
        </div>
        <form action="">
          <input type="text" name="text" id="text" placeholder="Name" />
          <input type="email" name="email" id="text" placeholder="Email" />
          <input type="password" name="password" id="text" placeholder="password" />
          <input type="password" name="confirmpass" id="text" placeholder="confirm password" />
          <button className="bg-red-600 rounded w-4/5 py-2 text-white mb-4">
            login
          </button>
        </form>
        <p>
          Already Have account?
          <Link className="text-red-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
