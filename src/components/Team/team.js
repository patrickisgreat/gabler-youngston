import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import "./team.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

class OurTeam extends React.Component {
  render() {
    const { data } = this.props;
    const { nodes: teams } = data.allMarkdownRemark;

    return (
      <div className="Our_team">
        <h3>Team</h3>
        <Row>
          {teams.map((team) => {
            console.log("TEAM", team);
            const memberImage = getImage(team.frontmatter.memberimage);
            return (
              <Col md="3" sm="6" xs="6" key={team.fields.slug}>
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
  }
}

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
  }),
};

const query = graphql`
  query OurTeamQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "team-member" } } }
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
