import React from "react";
import Vaporwave from "../../img/vaporwave.jpeg";
import SoulGlo from "../../img/soulGlo.jpeg";
import "../../styles/home.css";

const Carousel = () => {
  return (
    <div id="carouselDesc" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselDesc"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselDesc"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselDesc"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Vaporwave} className="d-block w-100" alt="Vaporwave" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Latest</h5>
            <p>Amber is drowning in the V A P O R W A V E</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={SoulGlo} className="d-block w-100" alt="SoulGlo" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Music reviews</h5>
            <p>Space here for the Soul Glo review</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="EdWood" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Movie reviews</h5>
            <p>Space here for the Ed Wood review</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselDesc"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselDesc"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
