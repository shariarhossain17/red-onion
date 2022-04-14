import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";
import './Login.css';

const Login = () => {
  return (
    <div className="form">
      <div className="form-container">
       <div className=" mb-20">
       <img className="mx-auto" width={250} src={logo} alt="" />
       </div>
        <form action="">
          <input type="email" name="text" id="text" placeholder="Email" />
          <input type="password" name="text" id="text" placeholder="password" />
         <button className="bg-red-600 rounded w-4/5 py-2 text-white mb-4">login</button>
        </form>
        <p>You are new?<Link className="text-red-600" to='/signup'>signup</Link></p>
      </div>
    </div>
  );
};

export default Login;
