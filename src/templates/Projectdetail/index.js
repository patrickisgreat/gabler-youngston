import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './project_detail.css'
// import facebook from '../../img/facebook.jpg'
// import twitter from '../../img/twitter.jpg'
// import linkdin from '../../img/linkdin.jpg'
// import googleplus from '../../img/google-plus.jpg'
// import email from '../../img/email.jpg'
import back_btn_up from '../../img/back-to-top-button.jpg'

export const WorkPageTemplate = ({ frontmatter }) => {
  return (
    <div className="project_min">
       {/* Banner Start */}
        <div className="project_banner">
          {frontmatter.projectimage.childImageSharp ?
            <GatsbyImage
              image={getImage(frontmatter.projectimage.childImageSharp)}
              alt="Banner"
              style={{ display: 'block', width: '100%' }}
            />
            :
            <img
              src={frontmatter.projectimage}
              alt="Banner"
              style={{ display: 'block', width: '100%' }}
            />
          }
                
             <div className="banner-text">
                <h2>{frontmatter.projectname}</h2>
                <span>{frontmatter.projecttagline}</span>
             </div>  
        </div>
       {/* Banner End */}
       {/* Project Destils Start */ }
        {frontmatter.descriptionblockone.map((items, i) => (
          <div className="project_details">
              <Container>
                 
                   {items.imagepos==="left"
                   ?
                      (
                      <Row className="d-flex flex-wrap align-items-center">
                        <Col md="6" className="mt-4">
                          {items.image.childImageSharp ? 
                            <GatsbyImage
                            image={getImage(items.image.childImageSharp)}
                            alt="Project Image"
                            style={{ display: 'block', width: '100%' }}
                          />
                          :
                          <img
                            src={items.image}
                            alt="Project Images"
                            style={{ display: 'block', width: '100%' }}
                          />
                          }
                          
                        </Col>
                        <Col md="6" className="mt-4">
                         <h5><span>{i+1}</span> {items.descriptiontitle}</h5>
                         {items.description}
                        </Col>
                      </Row>
                      )
                   :
                      (
                      <Row className="d-flex flex-wrap align-items-center">
                        <Col md="6" className="mt-4">
                         <h5><span>{i+1}</span> {items.descriptiontitle}</h5>
                         {items.description}
                        </Col>
                        <Col md="6" className="mt-4">
                          {items.image.childImageSharp ? 
                          <Img
                              fluid={items.image.childImageSharp.fluid}
                              alt="Project Image"
                              style={{ display: 'block', width:'100%'}}
                          /> 
                          :
                          <img
                              src={items.image}
                              alt="Projects"
                              style={{ display: 'block', width:'100%'}}
                          /> 
                          }
                          
                        </Col>
                      </Row>
                      )
                   }

              </Container>
          </div>
        ))} 
       {/* Project Destils End */ }

       <div className="project-info">
         <Container>
            <Row>
               <Col md="7">
                   <ul>
                      {frontmatter.extrafield && frontmatter.extrafield.map((items, i) => (
                        <li><b>{items.label}</b> <span>{items.value} </span></li> 
                      ))} 
                   </ul>
               </Col>
               <Col md="5" className="social_links">
                  {/* <h6>Like it? Share it!</h6>
                   <ul>
                      <li><a href=""> 
                       <img
                             src={facebook}
                             alt="facebook"
                          /> 
                      </a></li>
                      <li><a href=""> 
                       <img
                             src={twitter}
                             alt="twitter"
                          /> 
                      </a></li>
                      <li><a href=""> 
                       <img
                             src={linkdin}
                             alt="linkdin"
                          /> 
                      </a></li>
                      <li><a href=""> 
                       <img
                             src={googleplus}
                             alt="googleplus"
                          /> 
                      </a></li>
                      <li><a href=""> 
                       <img
                             src={email}
                             alt="email"
                          /> 
                      </a></li>
                   </ul> */}

                   <div class="back-btn-up">
                       <Link to="/works">
                            <img
                                  src={back_btn_up}
                                  alt="Back Button"
                                  style={{ display: 'block', }}
                            />
                       </Link>
                   </div>
               </Col>
            </Row>
         </Container>

      </div>
    </div>
  );
}

WorkPageTemplate.propTypes = {
  frontmatter: PropTypes.array,
}

const Workdetails = ({ data }) => {
const { frontmatter } = data.markdownRemark;
    return (
      <Layout>
         <WorkPageTemplate frontmatter={frontmatter} />
       </Layout>
    )

}
  
Workdetails.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default Workdetails

export const WorkdetailsQuery = graphql`
  query Workdetails($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
          projectcategory
          projectname
          projecttagline
          projectscope
          sortdescription
          projectimage {
            childImageSharp {
              gatsbyImageData(width: 2048, quality: 100, layout: CONSTRAINED)
            }
          }
          extrafield {
            label
            value
          }
          descriptionblockone {
            description
            descriptiontitle
            imagepos
            image {
              childImageSharp {
                gatsbyImageData(width: 2048, quality: 100, layout: CONSTRAINED)
              }
            }
          }
      }
    }
  }
`
