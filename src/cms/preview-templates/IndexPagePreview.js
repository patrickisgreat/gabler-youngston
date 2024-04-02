import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset, widgetsFor }) => {
    const data = entry.getIn(["data"]).toJS();
    console.log("DATA", data);
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        slides={data.slides}
        galleryImages={data.galleryImages}
        footerWorks={data.footerWorks}
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