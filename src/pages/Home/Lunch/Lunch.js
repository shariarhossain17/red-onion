import React, { useEffect, useState } from 'react';
import Lunchitem from '../Lunchitem/Lunchitem';

const Lunch = () => {
    const [items,setItems] = useState([])
    useEffect(()=>{
        fetch("launc.json")
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div>
            <div  className='md:grid grid-cols-3 mt-20 text-center gap-6'>
                {
                    items.map(item => <Lunchitem key={item.id} item={item}></Lunchitem>)
                }
            </div>
        </div>
    );
};

export default Lunch;