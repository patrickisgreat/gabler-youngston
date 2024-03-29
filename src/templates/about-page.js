import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import AboutBanner from "../components/Aboutbanner/banner";
import OurTeam from "../components/Team/team";
import "./allpage.css";

// Updated RenderImage component to use GatsbyImage
const RenderImage = ({ image, alt, style }) => {
  // Assuming `image` is directly the object needed for GatsbyImage when it has childImageSharp
  // Otherwise, you might need to adjust how you retrieve the image object
  const imageObject = getImage(image);
  console.log("IMAGE", image);
  return image.childImageSharp ? (
    <GatsbyImage image={imageObject} alt={alt} style={style} />
  ) : (
    <img src={image} alt={alt} style={style} />
  );
};

// Functional component for rendering lists
const RenderList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item.text}</li>
    ))}
  </ul>
);

export const AboutPageTemplate = ({
  title,
  section1,
  section2,
  section3,
  section4,
  section5,
  heroImage,
}) => {
  return (
    <div>
      <div className="about-us">
        <RenderImage image={heroImage} alt="Hero Image" />
        <div className="about_text">
          <p>
            <span>{section1.title}</span> {section1.description}
          </p>
        </div>
      </div>
      <div className="Our_purpose">
        <div className="columns">
          <div className="column is-4">
            <RenderImage image={section2.image1} alt="Our purpose 1" />
            <RenderImage
              image={section2.image2}
              alt="Our purpose 2"
              style={{ padding: "25px 0 0 30px", width: "100%" }}
            />
          </div>
          <div className="column is-8">
            <div className="columns">
              <div className="column is-6 column.is-6-mobile">
                <RenderImage image={section2.image3} alt="Our purpose 3" />
              </div>
              <div className="column is-6 column.is-6-mobile">
                <RenderImage image={section2.image4} alt="Our purpose 4" />
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
      <OurTeam />
      <div className="through_years">
        <div className="container">
          <h4>{section4.title}</h4>
          <div className="columns">
            <div className="column is-2"></div>
            <div className="column is-10">
              <RenderList items={section4.description} />
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
              <RenderList items={section5.description} />
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
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log("stuff");
  console.log(frontmatter);
  return (
    <Layout>
      <AboutBanner headerImage={frontmatter.headerImage} />
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

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        headerImage {
          childImageSharp {
            gatsbyImageData(
              width: 2048
              quality: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        heroImage {
          childImageSharp {
            gatsbyImageData(
              width: 600
              quality: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        title
        section1 {
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 2048
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          title
        }
        section2 {
          title
          description
          image1 {
            childImageSharp {
              gatsbyImageData(
                width: 2048
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          image2 {
            childImageSharp {
              gatsbyImageData(
                width: 2048
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          image3 {
            childImageSharp {
              gatsbyImageData(
                width: 2048
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          image4 {
            childImageSharp {
              gatsbyImageData(
                width: 2048
                quality: 100
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        section3 {
          title
        }
        section4 {
          title
          description {
            text
          }
        }
        section5 {
          description {
            text
          }
          title
        }
      }
    }
  }
`;
