import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset, widgetsFor }) => {
  const data = entry.getIn(["data"]);
  console.log("DATA", data);
  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        slides={data.slides}
        galleryImages={data.galleryImages}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
