import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const LatestWork = ({ data }) => {
  const { nodes: works } = data.allMarkdownRemark;

  return (
    <div>
      {works.map((work) => {
        const projectImage = getImage(work.frontmatter.projectimage);
        return (
          <Row className="latest-work" key={work.id}>
            <Col md="7" className="mt-3">
              <Link to={work.fields.slug}>
                {projectImage ? (
                  <GatsbyImage
                    image={projectImage}
                    alt="Recently Completed Project"
                    style={{ width: "100%" }}
                  />
                ) : (
                  <div
                    style={{
                      display: "block",
                      width: "100%",
                      backgroundColor: "#ccc",
                    }}
                  >
                    No Image
                  </div>
                )}
              </Link>
            </Col>
            <Col md="5" className="mt-3">
              <div className="latest-project-info">
                <strong>Recently Completed</strong>
                <Link to={work.fields.slug}>
                  <h2>{work.frontmatter.projectname}</h2>
                </Link>
                <span>
                  Project Type <b>{work.frontmatter.projectscope}</b>
                </span>
                <p>{work.frontmatter.sortdescription}</p>
              </div>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

LatestWork.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          frontmatter: PropTypes.shape({
            projectname: PropTypes.string.isRequired,
            projectscope: PropTypes.string.isRequired,
            sortdescription: PropTypes.string.isRequired,
            projectimage: PropTypes.object,
          }),
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }),
        })
      ),
    }),
  }).isRequired,
};

export default LatestWork;

export const query = graphql`
  query LatestWorkQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "Projectdetail/index" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 1
    ) {
      nodes {
        id
        frontmatter {
          projectname
          projectscope
          sortdescription
          projectimage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;
