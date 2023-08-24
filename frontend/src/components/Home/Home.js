import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="left-content">
        <div className="grid-container">
          <div className="grid-item">
            <img src="https://clipground.com/images/square-clipart-image-9.png" alt="Image 1" />
          </div>
          <div className="grid-item">
            <img src="https://clipground.com/images/square-clipart-image-9.png" alt="Image 2" />
          </div>
          <div className="grid-item">
            <img src="https://clipground.com/images/square-clipart-image-9.png" alt="Image 3" />
          </div>
          <div className="grid-item">
            <img src="https://clipground.com/images/square-clipart-image-9.png" alt="Image 1" />
          </div>
          <div className="grid-item">
            <img src="https://clipground.com/images/square-clipart-image-9.png" alt="Image 2" />
          </div>
          <div className="grid-item">
            <img src="https://clipground.com/images/square-clipart-image-9.png" alt="Image 3" />
          </div>
          {/* ... More grid items */}
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
              {/* ... SVG path */}
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
