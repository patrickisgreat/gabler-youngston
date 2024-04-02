import React from "react";
import PropTypes from "prop-types";
import { TeamPageTemplate } from "../../templates/Teamdetail/index";

const TeamPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]);
  const teamData = {
    nodes: data.team.map((member) => ({
      fields: {
        slug: member.slug,
      },
      frontmatter: {
        title: member.name,
        designation: member.designation,
        memberimage: member.image,
      },
    })),
  };

  if (data) {
    return (
      <TeamPageTemplate
        data={{
          markdownRemark: { frontmatter: data },
          allMarkdownRemark: teamData,
        }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TeamPagePreview;
