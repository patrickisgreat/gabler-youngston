import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset, widgetsFor }) => {
    const image = entry.getIn(["data", "image"]);
    const title = data.getIn(["data", "title"]);
    const slides = data.getIn(["data", "slides"]).toJS();
    const galleryImages = data.getIn(["data", "galleryImages"]).toJS();

    return (
      <IndexPageTemplate
        image={image}
        title={title}
        slides={slides}
        galleryImages={galleryImages}
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