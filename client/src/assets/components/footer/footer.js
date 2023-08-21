import React from 'react';
import '../footer/footer.css'; // Make sure to import the corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="social-icons">
           {/*<a href="#"><img src="path-to-icon1.png" alt="Icon 1" /></a>
          <a href="#"><img src="path-to-icon2.png" alt="Icon 2" /></a>
          */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
