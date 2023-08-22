import React from 'react';
import './Home.css'; // Make sure to create this CSS file for styling

function HomePage() {
  return (
    <div className="home-page">
      <div className="left-content">
        <div className="grid-container">
          <div className="grid-item">Item 1</div>
          <div className="grid-item">Item 2</div>
          <div className="grid-item">Item 3</div>
          <div className="grid-item">Item 4</div>
          <div className="grid-item">Item 5</div>
          <div className="grid-item">Item 6</div>
        </div>
      </div>
      <div className="right-content">
        <div className="card">
          <h2>About the Data</h2>
          <p>Write ~150 to 200 word introduction to your chosen data set</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
