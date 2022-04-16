import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Fotter from "./pages/Fotter/Fotter";
import Header from "./pages/Header/Header";
import Breakfast from "./pages/Home/Breakfast/Breakfast";
import Dinner from "./pages/Home/Dinner/Dinner";
import Home from "./pages/Home/Home/Home";
import Lucnch from "./pages/Home/Lunch/Lucnch";
import Order from "./pages/Home/Order/Order";
import Login from "./pages/Login/Login";
import Signup from "./pages/SIgnup/Signup";

export const onionDataContext = createContext();

function App() {
  const [onionData, setonionData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setonionData(data));
  }, []);
  return (
    <div>
      <onionDataContext.Provider value={[onionData,setonionData]}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
        <Route path="/" element={<Breakfast></Breakfast>}></Route>
        <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
          <Route path="/lunch" element={<Lucnch></Lucnch>}></Route>
          <Route path="/dinner" element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path="/order/:orderId" element={<Order></Order>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Fotter></Fotter>
      </onionDataContext.Provider>
    </div>
  );
}

export default App;
