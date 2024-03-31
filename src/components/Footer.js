import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Newsletter from "./Newsletter/Newsletter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/footer.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "footer-page" } }) {
        frontmatter {
          copyrightcontent
          contactnumber
          contactnumberone
          address1
          address2
          image {
            childImageSharp {
              gatsbyImageData(
                width: 323
                layout: FIXED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  const { frontmatter } = data.markdownRemark;
  const image = getImage(frontmatter.image);

  return (
    <div className="has-background-black has-text-white-ter">
      <Newsletter />
      <div className="footer-bottom content has-background-white">
        <div className="container has-background-white">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-6">
              <section className="menu">
                <a title="FooterLogo" href="/">
                  {image && (
                    <GatsbyImage
                      image={image}
                      objectFit="contain"
                      alt="Footer Logo"
                    />
                  )}
                </a>
                <span>{frontmatter.copyrightcontent}</span>
              </section>
            </div>
            <div className="col-md-8 col-sm-6 col-xs-6">
              <div className="row">
                <div className="col-md-6">
                  <section>
                    <h6>Contact</h6>
                    <span>
                      T:{" "}
                      <a href={`tel:${frontmatter.contactnumber}`}>
                        {frontmatter.contactnumber}
                      </a>
                    </span>
                    <a href={`mailto:${frontmatter.contactnumberone}`}>
                      {frontmatter.contactnumberone}
                    </a>{" "}
                    <br />
                  </section>
                </div>
                <div className="col-md-6">
                  <h6>Addresses</h6>
                  <address>{frontmatter.address1}</address>
                  <address>{frontmatter.address2}</address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
