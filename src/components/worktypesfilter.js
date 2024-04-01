import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Link, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

const WorkTypefilter = ({ data }) => {
  console.log("DATA", data);
  const { nodes: cats } = data;

  return (
    <Row>
      <Col lg="7"></Col>
      <Col lg="5" className="">
        <div className="filter_div">
          <strong>Filter by category</strong>
          <ul>
            <li>
              <Link activeClassName="active-cat" to="/works">
                All
              </Link>
            </li>
            {cats.map((cat, index) => (
              <li key={index}>
                <Link
                  activeClassName="active-cat"
                  to={`/projectcat/${kebabCase(cat.frontmatter.categoryname)}/`}
                  state={{ fromFilter: true }}
                >
                  {cat.frontmatter.categoryname}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
};

WorkTypefilter.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: PropTypes.shape({
            categoryname: PropTypes.string.isRequired,
          }),
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }),
        })
      ),
    }),
  }).isRequired,
};

export default WorkTypefilter;
