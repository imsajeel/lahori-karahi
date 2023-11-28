import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <img
            src="./images/Lahori-Logo-300x100-white.png"
            alt="Logo"
            style={{ marginTop: "2rem", height: "75px" }}
          />
          <p>
            824 Stockport Rd, Levenshulme, Manchester M19 3AW , United Kingdom
          </p>
          <p>PHONE: 0161 249 3919</p>
          <p>EMAIL: info@lahorimanchester.co.uk</p>
        </div>
        <div>
          <h2>Opening Hours</h2>
          <p>Mon-Sun: &nbsp;&nbsp;&nbsp;&nbsp; 01:00 PM - 11:30 PM</p>
        </div>
        <div>
          <h2>Usefull Links</h2>
          <li>Privacy Policy</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>My Account</li>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &#169; Lahori Karahi & Chargha all Rights Reserved. Designed by{" "}
          <a
            href="https://www.sajeelaalam.co.uk"
            rel="noreferrer"
            target="_blank"
          >
            Sajeel Aalam
          </a>
        </p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/Lahorikarahii"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/lahorikarahi"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@lahorekarahiandchargha"
            rel="noreferrer"
            target="_blank"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
