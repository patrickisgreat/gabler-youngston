import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import "./worklists.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

const WorkLists = ({ data }) => {
  const { nodes: works } = data;

  return (
    <Row>
      {works.map((work) => (
        <Col key={work.fields.slug} md="4" sm="6" xs="6">
          <div className="hvrbox">
            <img
              src={work.frontmatter.projectimage.childImageSharp.original.src}
              alt="Our Team"
              style={{ display: "block", width: "100%" }}
              className="hvrbox-layer_bottom"
            />
            <Link to={work.fields.slug} className="hvrbox-layer_top">
              <div className="hvrbox-text">
                <h5>{work.frontmatter.projectname}</h5>
                <span>
                  Project Type: <b>{work.frontmatter.projectscope}</b>
                </span>
              </div>
            </Link>
          </div>
        </Col>
      ))}
    </Row>
  );
};

WorkLists.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: PropTypes.shape({
            projectname: PropTypes.string.isRequired,
            projectimage: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                original: PropTypes.shape({
                  src: PropTypes.string.isRequired,
                }),
              }),
            }).isRequired,
            projectscope: PropTypes.string.isRequired,
          }),
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }),
        })
      ),
    }),
  }).isRequired,
};

export default WorkLists;
