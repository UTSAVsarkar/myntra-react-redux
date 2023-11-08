import React, { useState } from "react";
import "./Navbar.css";
import myntraLogo from "../Myntra.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faSearch,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Cards from "../Product/Cards.css";
import { useSelector } from "react-redux";

const menu = ["Mens", "Womens", "Kids", "Home & Living", "Offer"];

const Navbar = () => {
  const bagItems = useSelector((store) => store.bag);

  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            <NavLink to="/">
              <img src={myntraLogo} alt="logo" height="50px" />
            </NavLink>
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <div className="flexed">
            {menu.map((item) => (
              <div className="inner-content" key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="search_bar">
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="user-profile">
          <div className="flexed">
            {/* Profile */}
            <div className="p-r-10">
              <FontAwesomeIcon icon={faUser} className="font-color" />
              <p>PROFILE</p>
            </div>

            {/* Whishlist */}
            <div className="p-r-10">
              <FontAwesomeIcon icon={faHeart} className="font-color" />
              <div>WISHLIST</div>
            </div>

            {/* Cart */}
            <div className="new-class">
              <NavLink
                to={"/bag"}
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginTop: 10,
                }}
              >
                <FontAwesomeIcon icon={faBagShopping} className="font-color" />
                <div>BAG</div>
                <span className="bag-item-count">{bagItems.length}</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
