import React from "react";

//CarContent : slide for home's carousel
// img = image path for background
// alt = alternative title in case the image doesn't load
// title = slide's title (corresponding to each page on the website)
// desc = small description for each slide
// active by default = "Latest" slide
const CarContent = ({ img, alt, title, desc }) => {
  return (
    <div
      className={title == `Latest` ? "carousel-item active" : "carousel-item"}
    >
      <img src={img} className="d-block w-100" alt={alt} />
      <div className="carousel-caption d-none d-md-block">
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CarContent;
