import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery } from 'gatsby'
import Newsletter from './Newsletter/Newsletter'
import FooterLogo from '../img/gy_logo_footer.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/footer.scss'

class Footer extends React.Component {
  render() {

    const { data } = this.props
    const { frontmatter } = data.markdownRemark

    return (
      <div className=" has-background-black has-text-white-ter">
        <Newsletter></Newsletter>
        <div className="footer-bottom content has-background-white ">
          <div className="container has-background-white ">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-6">
                <section className="menu">
                    <a title="FooterLogo" href="/">
                      <img
                        src={frontmatter.image.publicURL}
                        alt="FooterLogo"
                        style={{ display: 'block'}}
                      />
                    </a>
                    <span>{frontmatter.copyrightcontent}</span>
                </section>
              </div>
              <div className="col-md-8 col-sm-6 col-xs-6">
                  <div className="row">
                    <div className="col-md-6">
                      <section>
                        <h6>Contact</h6>
                        <span>T :<a href={`tel:${frontmatter.contactnumber}`}>{frontmatter.contactnumber}</a></span>
                        <a href={`mailto:${frontmatter.contactnumberone}`}>{frontmatter.contactnumberone}</a> <br/>
                        <a href={`mailto:${frontmatter.contactnumbertwo}`}>{frontmatter.contactnumbertwo}</a>
                      </section>
                    </div>
                    <div className="col-md-6">
                        <h6>Address</h6>
                        <address>{frontmatter.address}</address>
                    </div>

                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        markdownRemark(id: {eq: "d0f621b7-b588-5259-b6f6-8d639f512d7f"}) {
          frontmatter {
            copyrightcontent
            contactnumber
            contactnumberone
            contactnumbertwo
            address
            image {
              publicURL
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => <Footer data={data} />}
  />
)
