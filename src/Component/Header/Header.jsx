import {
  FaMobileScreen,
  FaShuffle,
  FaRegHeart,
  FaRegUser,
  FaChevronDown,
} from "react-icons/fa6";
import "./header.css";
import React, { useState } from "react";

function Header() {
  const [country, setCountry] = useState("United States");
  const [currency, setCurrency] = useState("USD");

  return (
    <header>
      <div className="info">
        <div className="settings">
          <div className="dropdown" id="country_selector">
            <div className="select">
              <span className="selected">{country}</span>
              <FaChevronDown />
            </div>
            <ul className="menu">
              <li onClick={() => setCountry("United States")}>United States</li>
              <li onClick={() => setCountry("English")}>English</li>
              <li onClick={() => setCountry("France")}>France</li>
            </ul>
          </div>
          <div className="dropdown" id="currency_selector">
            <div className="select">
              <span className="selected">{currency}</span>
              <FaChevronDown />
            </div>
            <ul className="menu">
              <li onClick={() => setCurrency("USD")}>USD</li>
              <li onClick={() => setCurrency("EUR")}>EUR</li>
              <li onClick={() => setCurrency("GBR")}>GBR</li>
            </ul>
          </div>
          <div className="contact">
            <FaMobileScreen /> 123-456-789
          </div>
        </div>
        <div className="userinfo">
          <a href="#">
            <FaShuffle /> Compare
          </a>
          <a href="#">
            <FaRegHeart /> Wishlist
          </a>
          <a href="#">
            <FaRegUser /> Login
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
