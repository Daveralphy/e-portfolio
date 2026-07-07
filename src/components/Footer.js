import React from "react";

// Shared footer used across all pages
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="section-fade-divider" />
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-text">
            &copy; {currentYear} Raphael Daveal Eferire. All rights reserved.
          </p>
          <p className="footer-credit">Designed with 💖 by Daveralphy</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;