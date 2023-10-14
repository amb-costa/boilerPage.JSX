import React from "react";
import Vaporwave from "../../img/vaporwave.jpeg";
import "../../styles/home.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="bg-image">
            <img
              src={Vaporwave}
              className="d-block"
              style={{
                opacity: "0.6",
                height: "300px",
                width: "100%",
                objectFit: "cover",
              }}
              alt="vaporwave"
            />
            <div
              className="mask"
              style={{ backgroundColor: "hsla(0, 0%, 0%, 0.6)" }}
            >
              <div className="d-flex justify-content-center">
                <span className="">text!</span>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
