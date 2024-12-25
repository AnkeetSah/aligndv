import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <div className="contact">
        <div className="div1">
          <ul style={{ display: "flex" }}>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
          <p className="locate">
            602, Ackruti Centre Point,M.I.D.C <br />
            Chakala, Andheri(E), 400093
          </p>
        </div>
        <div className="div2">
          <h2>Instagram  |  Facebook  |  LinkedIn</h2>
        </div>
        <div className="div1">
          <ul style={{ display: "flex" }}>
            <li>Brand</li>

            <li>Tech</li>
            <li>Media</li>
          </ul>

          <h2 className="locate  l1">
          © 2024 Align DigiVentures. <br />
          All Rights Reserved
          </h2>
        </div>
      </div>

      <img
        src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/669a0fe49935295140bb52dc_Frame%201000003821.png"
        alt=""
      />
    </div>
  );
};

export default Footer;
