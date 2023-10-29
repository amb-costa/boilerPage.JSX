import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <div>
      <Heading title={`Writer Mode`} />
      <form
        className=""
        id="writerMode"
        onSubmit={(e) => {
          actions.setArticle({
            artist: artist,
            project: project,
            section: section,
            title: title,
            tags: tags,
            url: photoUrl,
            text: message,
          }),
            navigate("/"),
            e.preventDefault();
        }}
      >
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
            <div className="col-5 form-floating mb-3">
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
            <div className="col form-floating">
              <select
                className="form-select"
                id="inputSelection"
                aria-label="Default select example"
                onChange={(e) => setSection(e.target.value)}
              >
                <option value="">Select section</option>
                <option value="Music">Music</option>
                <option value="Movies">Movies</option>
              </select>
              <label htmlFor="inputSelection">Select section</label>
            </div>
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
          <div className="row justify-content-center">
            <div className="col-6 form-floating">
              <textarea
                className="form-control"
                aria-label="With textarea"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Text here"
                id="inputMessage"
              ></textarea>
              <label htmlFor="inputMessage">Text Here</label>
            </div>
          </div>

          <button type="submit" className="btn btn-outline-secondary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
