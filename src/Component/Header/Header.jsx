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

function Header() {
  const [country, setCountry] = useState("United States");
  const [countryimg, setCOuntryimg] = useState(us);
  const [currency, setCurrency] = useState("USD");

  return (
    <header>
      <div className="info">
        <div className="settings">
          <div className="lg-dropdown">
            <div className="dropdown" id="country_selector">
              <div className="select">
                <img src={countryimg} alt="" />
                <span className="selected">{country}</span>
                <FaChevronDown />
              </div>
              <div className="menu lg-menu">
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
          </div>
          <div className="money-dropdown">
            <div className="dropdown" id="currency_selector">
              <div className="select">
                <span className="selected">{currency}</span>
                <FaChevronDown />
              </div>
              <div className="menu">
                <ul>
                  <li onClick={() => setCurrency("USD")}>USD</li>
                  <li onClick={() => setCurrency("EUR")}>EUR</li>
                  <li onClick={() => setCurrency("GBR")}>GBR</li>
                </ul>
              </div>
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
    </header>
  );
}

export default Header;
