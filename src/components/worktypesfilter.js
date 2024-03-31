import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Link, graphql, useStaticQuery } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

const WorkTypefilter = () => {
  const data = useStaticQuery(graphql`
    query WorkTypefilterQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "projectcat" } } }
      ) {
        nodes {
          frontmatter {
            categoryname
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const { nodes: cats } = data.allMarkdownRemark;

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

export default WorkTypefilter;
