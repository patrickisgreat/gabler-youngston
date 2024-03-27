import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import AboutBanner from "../components/Aboutbanner/banner";
import OurTeam from "../components/Team/team";
import "./allpage.css";

const AboutPageTemplate = ({
  title,
  section1,
  section2,
  section3,
  section4,
  section5,
  heroImage,
}) => {
  console.log("SECTION 1", section1);
  return (
    <div>
      <div className="about-us">
        {heroImage && <GatsbyImage image={heroImage} alt="About us" />}
        <div className="about_text">
          <p>
            <span>{section1.title}</span> {section1.description}
          </p>
        </div>
      </div>
      <div className="Our_purpose">
        <div className="columns">
          <div className="column is-4">
            {section2.image1.childImageSharp ? (
              <GatsbyImage
                image={getImage(section2.image1.childImageSharp)}
                alt="Our purpose 1"
              />
            ) : (
              <img src={section2.image1} alt="Our purpose 2" />
            )}
            {section2.image2.childImageSharp ? (
              <GatsbyImage
                image={getImage(section2.image2.childImageSharp)}
                alt="Our purpose 3"
                style={{ padding: "25px 0 0 30px", width: "100%" }}
              />
            ) : (
              <img
                src={section2.image2}
                alt="Our purpose 4"
                style={{ padding: "25px 0 0 30px", width: "100%" }}
              />
            )}
          </div>
          <div className="column is-8">
            <div className="columns">
              <div className="column is-6 column.is-6-mobile">
                {section2.image3.childImageSharp ? (
                  <GatsbyImage
                    image={getImage(section2.image3.childImageSharp)}
                    alt="Our purpose 5"
                  />
                ) : (
                  <img src={section2.image3} alt="Our purpose 6" />
                )}
              </div>
              <div className="column is-6 column.is-6-mobile">
                {section2.image4.childImageSharp ? (
                  <GatsbyImage
                    image={getImage(section2.image4.childImageSharp)}
                    alt="Our purpose 7"
                  />
                ) : (
                  <img src={section2.image4} alt="Our purpose 8" />
                )}
              </div>
            </div>
            <div className="columns">
              <div className="column is-12 our-purpose">
                <h2>{section2.title}</h2>
                {section2.description}
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurTeam></OurTeam>
      <div className="through_years">
        <div className="container">
          <h4>{section4.title}</h4>
          <div className="columns">
            <div className="column is-2"></div>
            <div className="column is-10">
              <ul>
                {section4.description.map((singletext) => {
                  return <li key={singletext.text}>{singletext.text}</li>; // Add key for list
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="through_years pt-0">
        <div className="container">
          <h4>{section5.title}</h4>
          <div className="columns">
            <div className="column is-2"></div>
            <div className="column is-10">
              <ul>
                {section5.description.map((singletext) => {
                  return <li key={singletext.text}>{singletext.text}</li>; // Add key for list
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  section1: PropTypes.object,
  section2: PropTypes.object,
  section3: PropTypes.object,
  section4: PropTypes.object,
  section5: PropTypes.object,
  heroImage: PropTypes.object,
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <AboutBanner
        headerImage={getImage(frontmatter.headerImage.childImageSharp)}
      />
      <AboutPageTemplate
        title={frontmatter.title}
        heroImage={frontmatter.heroImage}
        section1={frontmatter.section1}
        section2={frontmatter.section2}
        section3={frontmatter.section3}
        section4={frontmatter.section4}
        section5={frontmatter.section5}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        headerImage {
          childImageSharp {
            gatsbyImageData(width: 2048, quality: 100, layout: CONSTRAINED)
          }
        }
        heroImage {
          childImageSharp {
            gatsbyImageData(width: 2048, quality: 100, layout: CONSTRAINED)
          }
        }
        title
        section1 {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(width: 2048, quality: 100, layout: CONSTRAINED)
            }
          }
        }
        section2 {
          title
          description
          image1 {
            childImageSharp {
              gatsbyImageData(width: 2048, quality: 100, layout: CONSTRAINED)
            }
          }
          image2 {
            childImageSharp {
              gatsbyImageData(width: 2048, quality: 100, layout: CONSTRAINED)
            }
          }
          image3 {
            childImageSharp {
              gatsbyImageData(width: 2048, quality: 100, layout: CONSTRAINED)
            }
          }
          image4 {
            childImageSharp {
              gatsbyImageData(width: 2048, quality: 100, layout: CONSTRAINED)
            }
          }
        }
        section3 {
          title
          description {
            text
          }
        }
        section4 {
          title
          description {
            text
          }
        }
        section5 {
          title
          description {
            text
          }
        }
      }
    }
  }
`;

export default AboutPageTemplate;
