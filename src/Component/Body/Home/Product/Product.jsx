import { FaShuffle, FaRegHeart, FaMagnifyingGlassPlus } from "react-icons/fa6";

import "./product.css";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

function Product({
  product_img,
  productName,
  sale,
  price,
  rating,
  rating_num,
}) {
  const [actionbtn, setActionbtn] = useState(false);
  const onMouseEnter = () => {
    setActionbtn(true);
  };
  const onMouseLeave = () => {
    setActionbtn(false);
  };

  return (
    <div
      className="product_box"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="product_img">
        <img src={product_img} alt="furniture_img1" loading="lazy"></img>
        {actionbtn && (
          <div className="product_action_box">
            <ul className="pr_action_btn">
              <li>
                <a href="#" className="popup-ajax">
                  <FaShuffle size={16} />
                </a>
              </li>
              <li>
                <a href="#" className="popup-ajax">
                  <FaRegHeart size={16} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaMagnifyingGlassPlus size={16} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="product_info">
        <h6 className="product_title">
          <a href="#">{productName}</a>
        </h6>
        <div className="product_price">
          <span className="sale">{sale}</span>
          <del className="price">{price}</del>
        </div>
        <div className="rating_wrap">
          <div className="rating">
            <div className="product_rate" style={{ width: rating }}></div>
          </div>
          <span className="rating_num">{rating_num}</span>
        </div>
        {actionbtn && (
          <div className="add-to-cart">
            <a href="#" className="btn btn-fill-out btn-radius">
              <FaShoppingCart /> Add To Cart
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
