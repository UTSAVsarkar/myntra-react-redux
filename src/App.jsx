import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Details from "./components/DetailsPage/Details.jsx";
import HomePage from "./components/Product/HomePage.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:detailslug" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
