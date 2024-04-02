import React from "react";
import PropTypes from "prop-types";
import { TeamPageTemplate } from "../../templates/Teamdetail/index";

const TeamPagePreview = ({ entry }) => {
  const title = entry.getIn(["data", "title"]);
  const date = entry.getIn(["data", "date"]);
  const memberimage = entry.getIn(["data", "memberimage"]);
  const resume = entry.getIn(["data", "resume"]);
  const designation = entry.getIn(["data", "designation"]);
  const description = entry.getIn(["data", "description"]);

  return (
    <TeamPageTemplate
      title={title}
      date={date}
      memberimage={memberimage}
      resume={resume}
      designation={designation}
      description={description}
    />
  );
};

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default TeamPagePreview;