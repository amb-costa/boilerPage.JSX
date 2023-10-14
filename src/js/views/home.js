import React from "react";
import Heading from "../component/heading.jsx";
import Carousel from "../component/carousel.jsx";
import "../../styles/home.css";

export const Home = () => (
  <div className="text-center mt-5">
    <Heading title={`Amber's modern life`} />
    <Carousel />
  </div>
);
