import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-center gap-10 mt-10 font-bold'>
            <CustomLink to='/breakfast'>Breakfast</CustomLink>
            <CustomLink to='/lunch'>Lunch</CustomLink>
            <CustomLink to='/dinner'>Dinner</CustomLink>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Navbar;