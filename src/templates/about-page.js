import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Content, {   } from '../components/Content'
import AboutBanner from '../components/Aboutbanner/banner'
import OurTeam from '../components/Team/team'
import Aboutusimage from '../img/leadership_photo.png'
import './allpage.css'

export const AboutPageTemplate = ({ title, section1, section2, section3, section4, section5 }) => {
  return (
    <div>
       <div className="about-us">
          <img
              src={Aboutusimage}
              alt="About us image"
            />
          <div className="about_text">
              <p><span>{section1.title}</span> {section1.description}</p>
          </div>
        </div>
       <div className="Our_purpose">
           <div className="columns">
               <div className="column is-4">
                  {section2.image1.childImageSharp ?
                    <Img
                    fluid={section2.image1.childImageSharp.fluid}
                    alt="Our purpose"
                   />
                   :
                   <img
                    src={section2.image1}
                    alt="Our purpose"
                   />
                  }
                  {section2.image2.childImageSharp ?
                    <Img
                    fluid={section2.image2.childImageSharp.fluid}
                    alt="Our purpose"
                    style={{ padding: '25px 0 0 30px', width:'100%'}}
                   />
                   :
                   <img
                    src={section2.image2}
                    alt="Our purpose"
                    style={{ padding: '25px 0 0 30px', width:'100%'}}
                   />
                  }
               </div>
               <div className="column is-8">
                  <div className="columns">
                      <div className="column is-6 column.is-6-mobile">
                        {section2.image3.childImageSharp ?
                          <Img
                          fluid={section2.image3.childImageSharp.fluid}
                          alt="Our purpose"
                        />
                         :
                         <img
                          src={section2.image3}
                          alt="Our purpose"
                        />
                        }
                        
                      </div>
                      <div className="column is-6 column.is-6-mobile">
                        {section2.image4.childImageSharp ?
                          <Img
                          fluid={section2.image4.childImageSharp.fluid}
                          alt="Our purpose"
                        />
                         :
                         <img
                          src={section2.image4}
                          alt="Our purpose"
                        />
                        }
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
                        return <li>{singletext.text}</li>
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
                        return <li>{singletext.text}</li>
                      })}
                    </ul>
                 </div>
              </div>
           </div>
        </div>
     </div>
  );
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  section1: PropTypes.array,
  section2: PropTypes.array,
  section3: PropTypes.array,
  section4: PropTypes.array,
  section5: PropTypes.array,
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);
  return (
    <Layout>
      <AboutBanner></AboutBanner>
      <AboutPageTemplate
        title={frontmatter.title}
        section1={frontmatter.section1}
        section2={frontmatter.section2}
        section3={frontmatter.section3}
        section4={frontmatter.section4}
        section5={frontmatter.section5}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        section1 {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
        }
        section2 {
          title
          description
          image1 {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image2 {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image3 {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image4 {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
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
`
