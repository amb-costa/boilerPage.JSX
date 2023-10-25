import React from "react";
import "../../styles/home.css";

const Heading = ({ title }) => {
  return (
    <div className="text-center mt-5">
      <h1>{title}</h1>
    </div>
  );
};

export default Heading;
