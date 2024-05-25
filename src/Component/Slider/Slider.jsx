import { Slide } from "react-slideshow-image";
import "./slider.css";
import "react-slideshow-image/dist/styles.css";
import { slider1, slider2, slider3 } from "../../assets/images";

const Slider = () => {
  return (
    <Slide
      arrows={false}
      indicators={{}}
      onChange={function noRefCheck() {}}
      onStartChange={function noRefCheck() {}}
    >
      <div className="each-slide-effect">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${slider1}`,
          }}
        >
          <div className="content">
            <h5>NEW TRENDING</h5>
            <h2>Sofa Collection</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              quaerat laboriosam, suscipit nobis rerum aliquam saepe doloribus
              maxime architecto ipsam?
            </p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${slider2}`,
          }}
        >
          <div className="content">
            <h4>NEW TRENDING</h4>
            <h2>Sofa Collection</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              quaerat laboriosam, suscipit nobis rerum aliquam saepe doloribus
              maxime architecto ipsam?
            </p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${slider3}`,
          }}
        >
          <div className="content">
            <h4>NEW TRENDING</h4>
            <h2>Sofa Collection</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              quaerat laboriosam, suscipit nobis rerum aliquam saepe doloribus
              maxime architecto ipsam?
            </p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Slider;
