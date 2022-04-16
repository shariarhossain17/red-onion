import React, { useContext } from "react";
import { onionDataContext } from "../../../App";
import DinnerItem from "../Dinneritem/DinnerItem";

const Dinner = () => {
  const [onionData] = useContext(onionDataContext);
  const dinnerItem = onionData.filter((onion) => onion.category === "dinner");
  return (
    <div>
      <div className="md:grid grid-cols-3 mt-10 gap-20">
        {dinnerItem.map((dinner) => (
          <DinnerItem key={dinner.id} dinner={dinner}></DinnerItem>
        ))}
      </div>
    </div>
  );
};

export default Dinner;
