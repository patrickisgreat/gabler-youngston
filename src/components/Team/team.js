import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import "./team.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const OurTeam = ({ data }) => {
  const teamRowRef = useRef(null);
  const h3Ref = useRef(null);

  useEffect(() => {
    const updateH3Alignment = () => {
      const teamImages = teamRowRef.current.querySelectorAll(".our_team");
      const numImages = teamImages.length;
      const lastImageRight =
        teamImages[numImages - 1]?.getBoundingClientRect().right || 0;
      const rowRight = teamRowRef.current.getBoundingClientRect().right;
      const offset = rowRight - lastImageRight;
      const offsetPadded = offset - 12;
      h3Ref.current.style.paddingRight = `${offsetPadded}px`;
    };

    updateH3Alignment();
    window.addEventListener("resize", updateH3Alignment);

    return () => {
      window.removeEventListener("resize", updateH3Alignment);
    };
  }, []);

  const { nodes: teams } = data.allMarkdownRemark;

  return (
    <div className="team-section">
      <div className="Our_team">
        <h3 ref={h3Ref}>Team</h3>
      </div>
      <Row ref={teamRowRef}>
        {teams.map((team) => {
          const memberImage = getImage(team.frontmatter.memberimage);
          return (
            <Col md={3} sm={6} xs={6} key={team.fields.slug}>
              <div className="our_team">
                {memberImage && (
                  <GatsbyImage image={memberImage} alt="Our Team" />
                )}
                <Link to={team.fields.slug}>
                  <div className="team_info">
                    <h5>{team.frontmatter.title}</h5>
                    <span>{team.frontmatter.designation}</span>
                  </div>
                </Link>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

OurTeam.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            designation: PropTypes.string,
            memberimage: PropTypes.object.isRequired,
          }),
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }),
        })
      ),
    }),
  }).isRequired,
};

export default OurTeam;

export const query = graphql`
  query OurTeamQuery {
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
