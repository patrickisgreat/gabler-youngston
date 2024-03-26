import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./team_detail.css";
import { HTMLContent } from '../../components/Content'
import Purpose2 from '../../img/Bitmap2.png'
import Purpose3 from '../../img/Bitmap3.png'
import Purpose4 from '../../img/Bitmap4.png'
import backbutton from '../../img/back-btn.jpg'
import OurTeam from '../../components/Team/team'

export const TeamPageTemplate = ({ frontmatter }) => {
  const memberImage = getImage(frontmatter.memberimage.childImageSharp)

  return (
      <div>
        <div className="team_detail_min">
         <h3>Team</h3>
          <div className="columns">
              <div className="column is-4">
                  {memberImage ?
                  <GatsbyImage
                    image={memberImage}
                    alt="Team"
                    style={{width:'100%'}}
                  />
                  :
                  <img
                    src={frontmatter.memberimage}
                    alt="Team"
                    style={{width:'100%'}}
                  />
                  }
                  
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
                      />
                      <span>Back</span>
                  </Link>
              </div>
              <div className="column is-8">
                  {/* Other content remains unchanged */}
                  <OurTeam></OurTeam>
                  <Link to="/about" className="back-btn only-phone">
                      <img
                        src={backbutton}
                        alt="back Button"
                      />
                      <span>Back</span>
                  </Link>
              </div>
          </div>
        </div>
      </div>
  );
}

// PropTypes and Teamdetails component remains unchanged

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
            gatsbyImageData(width: 2048, quality: 100, layout: CONSTRAINED)
          }
        }
        resume
      }
    }
  }
`
