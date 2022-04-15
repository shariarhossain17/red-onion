import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center gap-6 mt-6">
        <CustomLink className="text-xl font-semibold" to="/breakfast">Breakfast</CustomLink>
        <CustomLink className="text-xl font-semibold" to="/Lunch">Lunch</CustomLink>
        <CustomLink className="text-xl font-semibold" to="/dinner">Breakfast</CustomLink>
      </div>
      <div>
          <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Navbar;
