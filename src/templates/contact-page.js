import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../pages/contact/contact-style.css";

const ContactPageTemplate = ({ frontmatter }) => {
  return (
    <section className="Contact-min">
      <Container>
        <Row>
          <Col md={8}>
            <h1>{frontmatter.title}</h1>
            <span>
              T:{" "}
              <a href={`tel: ${frontmatter.contactnumber}`}>
                {frontmatter.contactnumber}
              </a>
            </span>
            <a href={`mailto: ${frontmatter.contactnumberone}`}>
              {frontmatter.contactnumberone}
            </a>{" "}
            <br />
          </Col>
          <Col md={4}>
            {frontmatter.sidebarcontent.map((sidebar, i) => (
              <div className="contact-f" key={i}>
                <strong>{sidebar.title}</strong>
                <p>{sidebar.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

ContactPageTemplate.propTypes = {
  frontmatter: PropTypes.object,
};

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactPageQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
        frontmatter {
          title
          contactnumber
          contactnumberone
          contactnumbertwo
          sidebarcontent {
            description
            title
          }
        }
      }
    }
  `);

  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate frontmatter={frontmatter} />
    </Layout>
  );
};

export default ContactPage;
