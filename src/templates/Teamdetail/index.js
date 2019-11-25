import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./team_detail.css";
import Content, { HTMLContent } from '../../components/Content'
import morgan from '../../img/teamimg1.jpg'
import Purpose2 from '../../img/Bitmap2.png'
import Purpose3 from '../../img/Bitmap3.png'
import Purpose4 from '../../img/Bitmap4.png'
import backbutton from '../../img/back-btn.jpg'
const Teamdetails = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <div>
        <div className="team_detail_min">
         <h3>Team</h3>
          <div className="columns">
              <div className="column is-4">
                  <Img
                    fluid={frontmatter.memberimage.childImageSharp.fluid}
                    alt="Team"
                    style={{width:'100%'}}
                  />
                  <img
                    className="hide-phone"
                    src={Purpose2}
                    alt="Our purpose"
                    style={{ padding: '25px 0 0 30px', width:'100%'}}
                  />
                  <Link to="/about" className="back-btn hide-phone">
                      <img
                        className="hide-phone"
                        src={backbutton}
                        alt="back Button"
                        style={{ }}
                      />
                      <span>Back</span>
                  </Link>
              </div>
              <div className="column is-8">
                  <div className="columns hide-phone">
                      <div className="column is-6 column.is-6-mobile">
                        <img

                          src={Purpose3}
                          alt="Our purpose"
                        />
                      </div>
                      <div className="column is-6 column.is-6-mobile">
                        <img
                          src={Purpose4}
                          alt="Our purpose"
                        />
                      </div>
                  </div>
                  <div className="columns">
                      <div className="column is-12 team_detail_text">
                        <h2>{frontmatter.title}</h2>
                        <span>{frontmatter.designation}</span><br />
                        <HTMLContent content={frontmatter.description} className="description" />
                      </div>
                  </div>
                  <Link to="/about" className="back-btn only-phone">
                      <img
                        src={backbutton}
                        alt="back Button"
                        style={{ }}
                      />
                      <span>Back</span>
                  </Link>
              </div>
          </div>
        </div>
      </div>
  </Layout>
  )
      
}

Teamdetails.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default Teamdetails

export const TeamdetailsQuery = graphql`
  query Teamdetails($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        templateKey
        description
        designation
        memberimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
