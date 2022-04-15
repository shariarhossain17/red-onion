import React, { useEffect, useState } from 'react';
import DInneritem from '../Dinneritem/DInneritem';

const Dinner = () => {
    const [items,setItem] = useState([])
    useEffect(()=>{
        fetch("dinner.json")
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    return (
        <div>
            <div className="md:grid grid-cols-3 mt-20 text-center gap-6">
        {
            items.map((item) => <DInneritem key={item.id} item={item}></DInneritem> )
        }
      </div>
        </div>
    );
};

export default Dinner;