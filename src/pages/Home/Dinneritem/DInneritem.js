import React from 'react';

const DInneritem = ({item}) => {
    const {picture,name,balance} = item
    return (
        <div>
            <div>
                <img className='mx-auto'  width={300} src={picture} alt="" />
            </div>
            <p className='text-lg font-bold mt-4'>{name}</p>
            <p className='text-lg font-medium'>price<small>{balance}</small></p>
        </div>
    );
};

export default DInneritem;