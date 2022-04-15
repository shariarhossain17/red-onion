import React from 'react';
import logo from '../../images/logo.png';

const Fotter = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='bg-black py-20'>
            <div className='md:flex justify-around'>
                <div>
                    <img width={150} src={logo} alt="" />
                </div>
                <div  className='text-white list-none'>
                    <li>About online food</li>
                    <li>Read our Blog</li>
                    <li>sign up to deliver</li>
                    <li>Add your restaurant</li>
                </div>
                <div className='text-white list-none'>
                    <li>Get help</li>
                    <li>Read Faq</li>
                    <li>View all cities</li>
                    <li>Restaurant Near me </li>
                </div>
            </div>
            <div className='md:flex justify-around mt-16'>
              <div>
              <p className='text-white'>copyright&copy;{year}  onion food</p>
              </div>
              <div className='list-none text-white md:flex justify-around gap-10'>
                  <li>Privacy policy</li>
                  <li>Term of use</li>
                  <li>pricing</li>
              </div>
            </div>
        </div>
    );
};

export default Fotter;