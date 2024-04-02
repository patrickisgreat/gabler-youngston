import React from "react";
import { getSrc } from "gatsby-plugin-image";
import "./banner.css";

const AboutBanner = ({ headerImage }) => {
  // Assuming `headerImage` is now an object with `childImageSharp`
  const imageUrl = getSrc(headerImage.childImageSharp) || headerImage;

  return (
    <div>
      <div
        className="Banner-min"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="container">
          <h1>
            Our <span>Studio</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
