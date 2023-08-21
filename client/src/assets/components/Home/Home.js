import React from 'react';
import './Home.css'; // Make sure to import the corresponding CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        
      </div>
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper libero eget ligula ultrices, vel euismod justo venenatis.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
