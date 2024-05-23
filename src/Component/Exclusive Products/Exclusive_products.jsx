import { Product } from "../index";
import "./exclusive_products.css";
import {
  furni1,
  furni2,
  furni3,
  furni4,
  furni5,
  furni6,
  furni7,
  furni8,
} from "../../assets/images";

const Exclusive_products = () => {
  return (
    <div className="session">
      <div className="session-exclusive">
        <h2>Exclusive Products</h2>
      </div>
      <div className="exclusive-content">
        <Product
          product_img={furni1}
          productName="Enim Expedita Sed"
          sale="$45.00"
          price="$55.25"
          rating="80%"
          rating_num="(21)"
        />
        <Product
          product_img={furni2}
          productName="Adipisci Officia Libero"
          sale="$55.00"
          price="$95.00"
          rating="70%"
          rating_num="(15)"
        />
        <Product
          product_img={furni3}
          productName="Internet Tend To Repeat"
          sale="$68.00"
          price="$99.00"
          rating="90%"
          rating_num="(25)"
        />
        <Product
          product_img={furni4}
          productName="Many Desktop Publishing"
          sale="$69.00"
          price="$89.00"
          rating="70%"
          rating_num="(22)"
        />
        <Product
          product_img={furni5}
          productName="Injected Humour Repetition"
          sale="$45.00"
          price="$55.25"
          rating="80%"
          rating_num="(21)"
        />
        <Product
          product_img={furni6}
          productName="Randomised Humour Words"
          sale="$55.00"
          price="$95.00"
          rating="70%"
          rating_num="(15)"
        />
        <Product
          product_img={furni7}
          productName="Expedita Distinctio Rerum"
          sale="$68.00"
          price="$99.00"
          rating="90%"
          rating_num="(25)"
        />
        <Product
          product_img={furni8}
          productName="Itaque Earum Rerum"
          sale="$69.00"
          price="$89.00"
          rating="70%"
          rating_num="(22)"
        />
      </div>
    </div>
  );
};

export default Exclusive_products;
