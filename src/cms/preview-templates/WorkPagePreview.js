import React from "react";
import PropTypes from "prop-types";
import { WorkPageTemplate } from "../../templates/Projectdetail/index";

const WorkPagePreview = ({ entry }) => {
  const projectname = entry.getIn(["data", "projectname"]);
  const projecttagline = entry.getIn(["data", "projecttagline"]);
  const projectimage = entry.getIn(["data", "projectimage"]);
  const projectcategory = entry.getIn(["data", "projectcategory"]);
  const projectscope = entry.getIn(["data", "projectscope"]);
  const date = entry.getIn(["data", "date"]);
  const sortdescription = entry.getIn(["data", "sortdescription"]);
  const descriptionblockone = entry.getIn(["data", "descriptionblockone"]).toJS();
  const extrafield = entry.getIn(["data", "extrafield"]).toJS();

  return (
    <WorkPageTemplate
      projectname={projectname}
      projecttagline={projecttagline}
      projectimage={projectimage}
      projectcategory={projectcategory}
      projectscope={projectscope}
      date={date}
      sortdescription={sortdescription}
      descriptionblockone={descriptionblockone}
      extrafield={extrafield}
    />
  );
};

WorkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default WorkPagePreview;