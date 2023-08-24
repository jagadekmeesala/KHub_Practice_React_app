import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="left-content">
        <div className="grid-container">
          <div className="grid-item">
            <img src="" alt="Image 1" />
          </div>
          <div className="grid-item">
            <img src="" alt="Image 2" />
          </div>
          <div className="grid-item">
            <img src="" alt="Image 3" />
          </div>
          {/* ... More grid items */}
        </div>
        <div className="grid-description">
          <h2>Statistics</h2>
          <p>List six different interesting statistics regarding your data (for example min, max, median, etc.)</p>
        </div>
      </div>
      <div className="right-content">
        <div className="card">
          <div className="card-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 448 512"
              className="svg-icon"
            >
              <path xmlns="http://www.w3.org/2000/svg" d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" fill="#FFFFFF"/>
            </svg>
            <div className="card-text">
              <h2>About the Data</h2>
            </div>
          </div>
          <p>Write ~150 to 200 word introduction to your chosen data set</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
