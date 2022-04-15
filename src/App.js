import { Route, Routes } from "react-router-dom";
import "./App.css";
import Fotter from "./pages/Fotter/Fotter";
import Header from "./pages/Header/Header";
import Breakfast from "./pages/Home/Breakfast/Breakfast";
import Dinner from "./pages/Home/Dinner/Dinner";
import Home from "./pages/Home/Home/Home";
import Lunch from "./pages/Home/Lunch/Lunch";
import Login from "./pages/Login/Login";
import Signup from "./pages/SIgnup/Signup";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="/" element={<Lunch></Lunch>}></Route>
          <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
          <Route path="/Lunch" element={<Lunch></Lunch>}></Route>
          <Route path="/dinner" element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
