import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="logo-section">
        <a href="https://github.com/benayaram" className="github-link">
          <img src="https://pngimg.com/uploads/github/github_PNG40.png" alt="GitHub Logo" className="github-logo" />
        </a>
      </div>
      <div className="gold-section">
      <div className="copyright">
          <p>2023 © Copyright Raj Reddy Center for Technology and Society. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
