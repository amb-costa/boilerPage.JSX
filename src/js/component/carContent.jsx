import React from "react";

//CarContent : slide for home's carousel
// img = img url for display
// alt = alternative title in case the image doesn't load
// artist = artist name
// project = project name
// active by default = "Latest" slide
const CarContent = ({ url, alt, artist, project }) => {
  return (
    <div
      className={artist == `Latest` ? "carousel-item active" : "carousel-item"}
      style={{ height: "400px" }}
    >
      <img
        src={url}
        className="d-block w-100 h-100"
        style={{ objectFit: "cover", objectPosition: "50% 25%" }}
        alt={alt}
      />
      <div className="carousel-caption d-none d-md-block bg-secondary bg-opacity-50">
        <h5>{artist}</h5>
        <p>{project}</p>
      </div>
    </div>
  );
};

export default CarContent;
