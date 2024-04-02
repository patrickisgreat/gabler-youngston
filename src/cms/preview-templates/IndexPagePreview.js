import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset, widgetsFor }) => {
    const image = entry.getIn(["data", "image"]);
    const title = entry.getIn(["data", "title"]);
    const slides = entry.getIn(["data", "slides"]).toJS();
    const galleryImages = entry.getIn(["data", "galleryImages"]).toJS();
    const footerWorks = entry.getIn(["data", "footerWorks"]).toJS();

    return (
      <IndexPageTemplate
        image={image}
        title={title}
        slides={slides}
        galleryImages={galleryImages}
        footerWorks={footerWorks}
      />
    );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;