import React, { useContext } from "react";
import { onionDataContext } from "../../../App";
import Breakfastitem from "../BreakfastItem/Breakfastitem";

const Breakfast = () => {
  const [onionData] = useContext(onionDataContext);
  const breakfastItem = onionData.filter(
    (onion) => onion.category === "breakfast"
  );
  return (
    <div>
      <div className="md:grid grid-cols-3 mt-10 gap-20">
        {breakfastItem.map((breakfast) => (
          <Breakfastitem
            key={breakfast.id}
            breakfast={breakfast}
          ></Breakfastitem>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
