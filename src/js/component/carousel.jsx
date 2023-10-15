import React from "react";
import Vaporwave from "../../img/vaporwave.jpeg";
import SoulGlo from "../../img/soulGlo.jpeg";
import EdWood from "../../img/edWood.jpeg";
import CarContent from "./carContent.jsx";
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
        <CarContent
          img={Vaporwave}
          alt="Vaporwave"
          title="Latest"
          desc="Amber is drowning in the V A P O R W A V E"
        />
        <CarContent
          img={SoulGlo}
          alt="Soul Glo"
          title="Soul Glo"
          desc="Space here for the Soul Glo review"
        />
        <CarContent
          img={EdWood}
          alt="Ed Wood"
          title="Ed Wood"
          desc="Space here for the Ed Wood review"
        />
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
