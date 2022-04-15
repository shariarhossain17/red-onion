import React, { useEffect, useState } from "react";
import Breakfastitem from "../BreakfastItem/Breakfastitem";

const Breakfast = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("Breakfast.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <div className="md:grid grid-cols-3 mt-20 text-center gap-6">
        {items.map((item) => (
          <Breakfastitem key={item.id} item={item}></Breakfastitem>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
