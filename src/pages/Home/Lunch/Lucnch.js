import React, { useContext } from "react";
import { onionDataContext } from "../../../App";
import Lunchitem from "../Lunchitem/Lunchitem";

const Lucnch = () => {
  const [onionData] = useContext(onionDataContext);
  const lunchItem = onionData.filter((onion) => onion.category === "lunch");
  return (
    <div>
      <div className="md:grid grid-cols-3 mt-10 gap-20">
        {lunchItem.map((lunch) => (
          <Lunchitem key={lunch.id} lunch={lunch}/>
        ))}
      </div>
    </div>
  );
};

export default Lucnch;
