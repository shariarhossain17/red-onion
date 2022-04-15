import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../navbar/Navbar';
import WhyChosseus from '../WhyChosseus/WhyChosseus';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Navbar></Navbar>
            <WhyChosseus></WhyChosseus>
        </div>
    );
};

export default Home;