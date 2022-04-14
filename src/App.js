import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SIgnup/Signup";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
