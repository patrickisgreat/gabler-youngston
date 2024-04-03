import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => {
    const title = entry.getIn(["data", "title"]);
    const section1 = entry.getIn(["data", "section1"]);
    const section2 = entry.getIn(["data", "section2"]);
    const section3 = entry.getIn(["data", "section3"]);
    const section4 = entry.getIn(["data", "section4"]);

    return (
      <AboutPageTemplate
        title={title}
        section1={section1}
        section2={section2}
        section3={section3}
        section4={section4}
      />
    );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
