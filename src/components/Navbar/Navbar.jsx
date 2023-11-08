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
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Cards from "../Product/Cards.css";

const menu = ["Mens", "Womens", "Kids", "Home & Living", "Offer"];

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  const wishlistData = useSelector((storeData) => {
    return storeData.productReducer.wishlist;
  });

  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            <NavLink to="/">
              <img src={myntraLogo} alt="logo" height="80px" />
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
        <div className="nav-search">
          <div className="border">
            <FontAwesomeIcon icon={faSearch} className="font-color" />
            <input
              className="padding	"
              type="search"
              placeholder="Search for Products, brands and more..."
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </div>
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
            <div
              className="new-class"
              onClick={() => {
                setShowCart(!showCart);
              }}
            >
              <NavLink
                to={"/bag"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <FontAwesomeIcon icon={faBagShopping} className="font-color" />
                <div>BAG</div>
                <span className="bag-item-count">0</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
