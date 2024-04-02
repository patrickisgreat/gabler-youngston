import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./project_detail.css";
import back_btn_up from "../../img/back-to-top-button.jpg";
import { Link } from "gatsby";

export const WorkPageTemplate = ({ frontmatter }) => {
  return (
    <div className="project_min">
      {/* Banner Start */}
      <div className="project_banner">
        <div className="hero-image-container">
          {frontmatter.projectimage.childImageSharp ? (
            <GatsbyImage
              image={getImage(frontmatter.projectimage.childImageSharp)}
              alt="Banner"
            />
          ) : (
            <img src={frontmatter.projectimage} alt="Banner" />
          )}
        </div>

        <div className="banner-text">
          <h2>{frontmatter.projectname}</h2>
          <span>{frontmatter.projecttagline}</span>
        </div>
      </div>
      {/* Banner End */}
      {/* Project Destils Start */}
      {frontmatter.descriptionblockone.map((items, i) => (
        <div className="project_details" key={i}>
          <Container>
            {items.imagepos === "left" ? (
              <Row className="d-flex flex-wrap align-items-center">
                <Col md="6" className="mt-4">
                  {items.image.childImageSharp ? (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <GatsbyImage
                        image={getImage(items.image.childImageSharp)}
                        alt="Project Image"
                        objectFit="contain"
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <img src={items.image.publicURL} alt="Projects" />
                    </div>
                  )}
                </Col>
                <Col md="6" className="mt-4">
                  <h5>
                    <span>{i + 1}</span> {items.descriptiontitle}
                  </h5>
                  {items.description}
                </Col>
              </Row>
            ) : (
              <Row className="d-flex flex-wrap align-items-center">
                <Col md="6" className="mt-4">
                  <h5>
                    <span>{i + 1}</span> {items.descriptiontitle}
                  </h5>
                  {items.description}
                </Col>
                <Col md="6" className="mt-4">
                  {items.image.childImageSharp ? (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <GatsbyImage
                        image={getImage(items.image.childImageSharp)}
                        alt="Project Image"
                        objectFit="contain"
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <img src={items.image.publicURL} alt="Projects" />
                    </div>
                  )}
                </Col>
              </Row>
            )}
          </Container>
        </div>
      ))}
      {/* Project Destils End */}

      <div className="project-info">
        <Container>
          <Row>
            <Col md="7">
              <ul>
                {frontmatter.extrafield &&
                  frontmatter.extrafield.map((items, i) => (
                    <li>
                      <b>{items.label}</b> <span>{items.value} </span>
                    </li>
                  ))}
              </ul>
            </Col>
            <Col md="5" className="social_links">
              <div className="back-btn-up">
                <Link to="/works">
                  <img
                    src={back_btn_up}
                    alt="Back Button"
                    style={{ display: "block" }}
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

WorkPageTemplate.propTypes = {
  frontmatter: PropTypes.object,
};
