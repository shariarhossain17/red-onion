import React from 'react';

const Breakfastitem = ({breakfast}) => {
    const {name,picture,balance,id} = breakfast
    return (
        <div className='text-center'>
            <div>
                <img className='mx-auto' width={300} src={picture} alt="" />
            </div>
            <p className='font-bold mt-4'>{name}</p>
            <p className='font-bold mt-4'>{balance}</p>
        </div>
    );
};

export default Breakfastitem;