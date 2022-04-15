import React from 'react';
import FirstDelivary from './FirstDelivary/FirstDelivary';
import HomeDelivary from './HomeDelivary/HomeDelivary';
import Roosponder from './Roosponder/Roosponder';

const WhyChosseus = () => {
    return (
        <div>
          <div className='w-80 mt-10'>
          <h1 className='text-2xl'>WHy choose  us</h1>
            <p>We provide exceptional delivery service 24/7 from our Polish centre of excellence, with a targeted service level of 99.8%. Quality.</p>
          </div>
          <div className='mt-6 md:grid grid-cols-3'>
              <FirstDelivary></FirstDelivary>
              <Roosponder></Roosponder>
              <HomeDelivary></HomeDelivary>
          </div>
        </div>
    );
};

export default WhyChosseus;