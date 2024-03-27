import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image"; // Import GatsbyImage and getImage

class LatestWork extends React.Component {
  render() {
    const { data } = this.props;
    const { nodes: works } = data.allMarkdownRemark;

    return (
      <div>
        {works.map((work) => {
          // Use the getImage helper function to get the image data
          const projectImage = getImage(work.frontmatter.projectimage);

          return (
            <Row className="latest-work" key={work.id}>
              <Col md="7" className="mt-3">
                <Link to={work.fields.slug}>
                  {projectImage ? (
                    <GatsbyImage
                      image={projectImage}
                      alt="Recently Completed Project"
                      style={{ width: "100%" }} // Adjust styles as needed
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
                    </div> // Placeholder in case there's no image
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
  }
}

LatestWork.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};

const LatestWorkWrapper = () => (
  <StaticQuery
    query={graphql`
      query LatestWorkQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { templateKey: { eq: "Projectdetail/index" } }
          }
          sort: { frontmatter: { date: DESC } }
          limit: 1
        ) {
          nodes {
            id
            frontmatter {
              projectname
              projectscope
              sortdescription
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={(data) => <LatestWork data={data} />}
  />
);

export default LatestWorkWrapper;
