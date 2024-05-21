import {
  payment1,
  payment2,
  payment3,
  payment4,
  payment5,
} from "../../assets/images";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <p>
          &copy; {new Date().getFullYear()} All Rights Reserved by
          Bestwebcreator
        </p>
      </div>
      <div className="pay-method">
        <a href="#">
          <img src={payment1} alt="visa" />
        </a>
        <a href="#">
          <img src={payment2} alt="discover" />
        </a>
        <a href="#">
          <img src={payment3} alt="master card" />
        </a>
        <a href="#">
          <img src={payment4} alt="paypal" />
        </a>
        <a href="#">
          <img src={payment5} alt="american express" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
