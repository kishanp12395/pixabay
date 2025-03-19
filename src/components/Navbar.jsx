import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";


const Navbar = () => {
  
  const { fetchImageByCategory, setSearch } = useContext(PixabayContext);
  return (
    <>
      <div className="main-container">
        <div className="top">
          <div className="logo">
            <p className="logo-text">PixSnap</p>
          </div>
          <div className="search-bar">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search PixSnap"
              className="search-input"
            />
          </div>
          <div className="upload-section">
            <input type="file" id="file-upload" className="upload" />
            <label htmlFor="file-upload">Upload</label>
          </div>
        </div>

        <div className="bottom">
          <div className="button-container">
            <button type="button" className="btn home">
              Home
            </button>
            <button
              type="button"
              onClick={() => fetchImageByCategory("nature")}
              className="btn"
            >
              Nature
            </button>
            <button
              type="button"
              onClick={() => fetchImageByCategory("science")}
              className="btn"
            >
              Science
            </button>
            <button
              type="button"
              onClick={() => fetchImageByCategory("computer")}
              className="btn"
            >
              Computer
            </button>
            <button
              type="button"
              onClick={() => fetchImageByCategory("religion")}
              className="btn"
            >
              Religion
            </button>
            <button
              type="button"
              onClick={() => fetchImageByCategory("animals")}
              className="btn"
            >
              Animals
            </button>
            <button
              type="button"
              onClick={() => fetchImageByCategory("industry")}
              className="btn"
            >
              Industry
            </button>
            <button
              type="button"
              onClick={() => fetchImageByCategory("education")}
              className="btn"
            >
              Education
            </button>
            <button
              type="button"
              onClick={() => fetchImageByCategory("music")}
              className="btn"
            >
              Music
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
