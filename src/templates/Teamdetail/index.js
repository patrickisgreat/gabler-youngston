import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./team_detail.css";
import Purpose2 from "../../img/Bitmap2.png";
import backbutton from "../../img/back-btn.jpg";
import OurTeam from "../../components/Team/team";

const TeamPageTemplate = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const memberImage = getImage(frontmatter?.memberimage?.childImageSharp);
  const teamData = data;

  return (
    <div>
      <div className="team_detail_min">
        <h3>Team</h3>
        <div className="columns">
          <div className="column is-4">
            {memberImage && <GatsbyImage image={memberImage} alt="Our Team" />}
            <img
              className="hide-phone"
              src={Purpose2}
              alt="Our purpose"
              style={{ padding: "25px 0 0 30px", width: "100%" }}
            />
            <Link to="/about" className="back-btn hide-phone">
              <img className="hide-phone" src={backbutton} alt="back Button" />
              <span>Back</span>
            </Link>
          </div>
          <div className="column is-8">
            {/* Other content remains unchanged */}
            <OurTeam data={teamData} />
            <Link to="/about" className="back-btn only-phone">
              <img src={backbutton} alt="back Button" />
              <span>Back</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query Teamdetails($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        templateKey
        description
        designation
        memberimage {
          childImageSharp {
            gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
          }
        }
        resume
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "Teamdetail/index" } } }
      sort: { frontmatter: { date: ASC } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          designation
          memberimage {
            childImageSharp {
              gatsbyImageData(width: 2048, quality: 100, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;

export default TeamPageTemplate;
