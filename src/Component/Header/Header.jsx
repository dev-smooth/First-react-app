import {
  FaMobileScreen,
  FaShuffle,
  FaRegHeart,
  FaRegUser,
  FaChevronDown,
} from "react-icons/fa6";
import "./header.css";
import { useState } from "react";
import us from "../../assets/images/us.png";
import en from "../../assets/images/eng.png";
import fr from "../../assets/images/fn.png";
import logo from "../../assets/images/logo_dark.png";

function Header() {
  const [country, setCountry] = useState("United States");
  const [countryimg, setCOuntryimg] = useState(us);
  const [currency, setCurrency] = useState("USD");

  return (
    <header>
      <div className="info">
        <div className="settings">
          <div className="dropdown lg-dropdown" id="country_selector">
            <div
              className="select"
              onClick={() =>
                document
                  .getElementById("country_menu")
                  .classList.toggle("hidden")
              }
            >
              <img src={countryimg} alt="" />
              <span className="selected">{country}</span>
              <FaChevronDown />
            </div>
            <div
              className="menu lg-menu hidden"
              onClick={() =>
                (document.getElementById("country_menu").style.display = "none")
              }
              id="country_menu"
            >
              <ul>
                <li
                  onClick={() => {
                    setCountry("United States");
                    setCOuntryimg(us);
                  }}
                >
                  <img src={us} alt="usa's flag" />
                  United States
                </li>
                <li
                  onClick={() => {
                    setCountry("English");
                    setCOuntryimg(en);
                  }}
                >
                  <img src={en} alt="uk's flag" />
                  English
                </li>
                <li
                  onClick={() => {
                    setCountry("France");
                    setCOuntryimg(fr);
                  }}
                >
                  <img src={fr} alt="french's flag" />
                  France
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown money-dropdown" id="currency_selector">
            <div
              className="select"
              onClick={() =>
                document.getElementById("money_menu").classList.toggle("hidden")
              }
            >
              <span className="selected">{currency}</span>
              <FaChevronDown />
            </div>
            <div
              className="menu hidden"
              id="money_menu"
              onClick={() =>
                (document.getElementById("money_menu").style.display = "none")
              }
            >
              <ul>
                <li onClick={() => setCurrency("USD")}>USD</li>
                <li onClick={() => setCurrency("EUR")}>EUR</li>
                <li onClick={() => setCurrency("GBR")}>GBR</li>
              </ul>
            </div>
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
      <hr />
      <div className="navbar">
        <div>
          <img src={logo} alt="logo" className="logo" draggable="false" />
        </div>
        <ul className="nav">
          <li>
            <a href=""></a>HOME
          </li>
          <li>PAGES</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
