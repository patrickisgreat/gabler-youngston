import React from "react";
import { getSrc } from "gatsby-plugin-image";
import "./banner.css";

const AboutBanner = class extends React.Component {
  render() {
    // Assuming `headerImage` is now an object with `childImageSharp`
    const imageUrl =
      getSrc(this.props.headerImage.childImageSharp) || this.props.headerImage;

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
  }
};

export default AboutBanner;
