import React from "react";
import { useNavigate } from "react-router-dom";

const DinnerItem = ({ dinner }) => {
  const { name, picture, balance, id } = dinner;
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/order/${id}`)} className="text-center">
      <div>
        <img className="mx-auto" width={300} src={picture} alt="" />
      </div>
      <p className="font-bold mt-4">{name}</p>
      <p className="font-bold mt-4">{balance}</p>
    </div>
  );
};

export default DinnerItem;
