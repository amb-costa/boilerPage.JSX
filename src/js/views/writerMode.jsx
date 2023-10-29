import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Heading from "../component/heading.jsx";

export const WriterMode = () => {
  const { store, actions } = useContext(Context);
  const [artist, setArtist] = useState("");
  const [project, setProject] = useState("");
  const [section, setSection] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  return (
    <div>
      <Heading title={`Writer Mode`} />
      <form className="">
        <div className="container text-center">
          <div className="row">
            <div className="col-4 form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="inputArtist"
                onChange={(e) => setArtist(e.target.value)}
                placeholder="Artist Name Here"
              />
              <label htmlFor="inputArtist" className="form-label">
                Artist
              </label>
            </div>
            <div className="col-4 form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="inputProject"
                onChange={(e) => setProject(e.target.value)}
                placeholder="Project Name Here"
              />
              <label htmlFor="inputProject" className="form-label">
                Project
              </label>
            </div>
            <select
              className="col form-select"
              aria-label="Default select example"
              onChange={(e) => setSection(e.target.value)}
            >
              <option value="">Select section</option>
              <option value="Music">Music</option>
              <option value="Movies">Movies</option>
            </select>
          </div>
          <div className="row">
            <div className="col-4 form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="inputTitle"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title Name Here"
              />
              <label htmlFor="inputTitle" className="form-label">
                Title
              </label>
            </div>
            <div className="col-4 form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="inputTags"
                onChange={(e) => setTags(e.target.value)}
                placeholder="Use a comma to separate tags"
              />
              <label htmlFor="inputTags" className="form-label">
                Tags
              </label>
            </div>
            <div className="col-4 form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="inputURL"
                onChange={(e) => setPhotoUrl(e.target.value)}
                placeholder="URL Photo here"
              />
              <label htmlFor="inputURL" className="form-label">
                Photo URL
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <span className="input-group-text">Text Here</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
