import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Product/HomePage";
import Bag from "./components/Bag/Bag.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bag" element={<Bag />} />
      </Routes>
    </>
  );
};

export default App;
