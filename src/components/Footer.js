import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Newsletter from "./Newsletter/Newsletter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/footer.scss";

class Footer extends React.Component {
  render() {
    const { data } = this.props;
    const { frontmatter } = data.markdownRemark;
    const image = getImage(frontmatter.image);

    return (
      <div className=" has-background-black has-text-white-ter">
        <Newsletter></Newsletter>
        <div className="footer-bottom content has-background-white ">
          <div className="container has-background-white ">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-6">
                <section className="menu">
                  <a title="FooterLogo" href="/">
                    {image && (
                      <GatsbyImage
                        image={image}
                        alt="FooterLogo"
                        style={{ display: "block" }}
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
  }
}

Footer.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

const FooterWrapper = () => (
  <StaticQuery
    query={graphql`
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
                gatsbyImageData(width: 200, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    `}
    render={(data) => <Footer data={data} />}
  />
);

export default FooterWrapper;
