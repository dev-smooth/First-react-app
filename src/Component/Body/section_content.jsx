import {
    FaShuffle,
    FaRegHeart

} from "react-icons/fa6";
import { SlMagnifierAdd } from "react-icons/sl";


import "./section_content.css";
import furniture1 from "../../assets/images/furniture_img1.jpg"

function SectionContent(){
return(
    <body>
        <div class="section_content">
            <div class="shop_container">
                <div class="product-items">
                    <div class="product_box">
                        <div class="product_img">
                            <img src={furniture1} alt="furniture_img1"></img>
                            <div class="product_action_box">
                                <ul class="pr_action_btn">
                                    <li><a href="#" class="popup-ajax"><i><FaShuffle/></i></a></li>
                                    <li><a href="#" class="popup-ajax"><i><FaRegHeart/></i></a></li>
                                    <li><a href="#"><i><SlMagnifierAdd/></i></a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="product_info">
                            <h6 class="product_title"><a href="#">enim expedita sed</a></h6>
                            <div class="product_price">
                                <span class="price">$45.00</span>
                                <del>$55.25</del>
                            </div>
                            {/* <div class="rating_wrap">
                                <div class="rating">
                                    <div class="product_rate" style="width:80%"></div>
                                </div>
                                <span class="rating_num">(21)</span>
                            </div> */}
                            <div class="pr_desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                            </div>
                            <div class="add-to-cart">
                                <a href="#" class="btn btn-fill-out btn-radius"><i class="icon-basket-loaded"></i> Add To Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    );
}
     


export default SectionContent;
