import React from "react";
import Heading from "../component/heading.jsx";

export const WriterMode = () => {
  return (
    <div>
      <Heading title={`Writer Mode`} />
      <form className="">
        <div className="container">
          <div className="row ">
            <div className="col-4 form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="inputArtist"
                placeholder="Artist Name Here"
              />
              <label for="inputArtist" className="form-label">
                Artist
              </label>
            </div>
            <div className="col-4 form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="inputProject"
                placeholder="Project Name Here"
              />
              <label for="inputProject" className="form-label">
                Project
              </label>
            </div>
            <select
              className="col form-select"
              aria-label="Default select example"
            >
              <option selected>Select section</option>
              <option value="Music">Music</option>
              <option value="Movies">Movies</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <span className="input-group-text">Text Here</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>
      </form>
    </div>
  );
};
