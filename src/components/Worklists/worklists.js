import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, useStaticQuery } from "gatsby";
import "./worklists.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

const WorkLists = () => {
  const data = useStaticQuery(graphql`
    query WorkListsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "Projectdetail/index" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          frontmatter {
            projectname
            projectimage {
              childImageSharp {
                original {
                  src
                }
              }
            }
            projectscope
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const { nodes: works } = data.allMarkdownRemark;

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

export default WorkLists;
