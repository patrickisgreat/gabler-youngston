import React from "react";
import PropTypes from "prop-types";
import { WorkPageTemplate } from "../../templates/Projectdetail/index";

const WorkPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]);

  if (data) {
    return <WorkPageTemplate frontmatter={data} />;
  } else {
    return <div>Loading...</div>;
  }
};

WorkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default WorkPagePreview;
