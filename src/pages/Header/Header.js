import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom";
import logo2 from '../../images/logo2.png';

const Header = () => {
    return (
        <div className="mx-auto md:flex justify-between px-20 py-4 align">
            <Link to='/'>
            <div>
                <img  width={150} src={logo2} alt="" />
            </div>
            </Link>
            <div className="">
            <FontAwesomeIcon  className="md:px-6" icon={faShoppingCart} />
            <Link className="md:px-6  font-bold" to="/login">Login</Link>
            <Link className="bg-red-600 px-6 py-2 rounded-full text-white font-semibold" to="/signup">Signup</Link>
            </div>
        </div>
    );
};

export default Header;