import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const AboutPageTemplate = ({ title, image, contentComponent, section1, section2, section3, section4, section5 }) => {
  console.log(section3)
  console.log(section4)
  console.log(section5)
  return (
    <div className="about-slides">
      <div className="content">
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          }} />
        </div>
      <section className="section-one">
        <div className="columns">
          <div className="column is-4">
          <PreviewCompatibleImage
                className="gallery-img"
                imageInfo={{
                  image: !!section1.image.childImageSharp ? section1.image.childImageSharp.fluid.src : section1.image,
                  alt: `Gallery Test`,
                  style: {
                    borderRadius: '0px',
                  }
                }}
                />
          </div>

          <div className="column is-8">
            <div className="description"><span>{section1.title}</span> {section1.description}</div>
          </div>
        </div>
    </section>
    <section className="section-two">
      <div className="columns">

        <div className="column is-4">
            <div className="column full">
              <PreviewCompatibleImage
                  className="gallery-img"
                  imageInfo={{
                    image: !!section2.image1.childImageSharp ? section2.image1.childImageSharp.fluid.src : section2.image,
                    alt: `Gallery Test`,
                    style: {
                      borderRadius: '0px',
                    }
                  }}
                  />
            </div>
            <div className="column">
              <PreviewCompatibleImage
                  className="gallery-img"
                  imageInfo={{
                    image: !!section2.image4.childImageSharp ? section2.image4.childImageSharp.fluid.src : section2.image,
                    alt: `Gallery Test`,
                    style: {
                      borderRadius: '0px',
                    }
                  }}
                  />
            </div>
        </div>

        <div className="column is-8">
          <div className="columns">

            <div className="column is-6">
              <PreviewCompatibleImage
                  className="gallery-img"
                  imageInfo={{
                    image: !!section2.image2.childImageSharp ? section2.image2.childImageSharp.fluid.src : section2.image,
                    alt: `Gallery Test`,
                    style: {
                      borderRadius: '0px',
                    }
                  }}
                  />
            </div>

            <div className="column is-6">
              <PreviewCompatibleImage
                  className="gallery-img"
                  imageInfo={{
                    image: !!section2.image3.childImageSharp ? section2.image3.childImageSharp.fluid.src : section2.image,
                    alt: `Gallery Test`,
                    style: {
                      borderRadius: '0px',
                    }
                  }}
                  />
            </div>

          </div>
          <div className="column is-12">
            <div className="title">{section2.title}</div>
            <div className="description">{section2.description}</div>
          </div>
        </div>
        </div>
      </section>
      <section className="section-three">
      <h4 className="title right">{section3.title}</h4>
      <div className="columns">
          {section3.images.map((image, i) => {
            return (
              <div className="column is-3" key={i}>
                <PreviewCompatibleImage
                  className="gallery-img"
                  imageInfo={{
                    image: !!image.image.childImageSharp
                      ? image.image.childImageSharp.fluid.src
                      : image.image,
                    alt: `Gallery Test`,
                    style: {
                      borderRadius: "0px",
                      maxWidth: "100%"
                    }
                  }}
                />

            </div>
            );
          })}

         </div>
      </section>
      <section className="section-four">
      <h4 className="title">{section4.title}</h4>
      <div className="description">
          <ul>
          {section4.description.map((description, i) => {
            return (
              <li  key={i}>
              {description.text}
              </li>
            );
          })}
          </ul>
      </div>
      </section>
      <section className="section-five">
      <h4 className="title">{section5.title}</h4>
      <div className="description">
        <ul>
        {section5.description.map((description, i) => {
          return (
            <li  key={i}>
            {description.text}
            </li>
          );
        })}
        </ul>
      </div>
      </section>
    </div>
  )
}


AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  section1: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  section2: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  section3: PropTypes.shape({
    title: PropTypes.string,
    images: PropTypes.array
  }),
  section4: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.array
  }),
  section5: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.array
  }),
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        image={frontmatter.image}
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
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!)  {
    markdownRemark(id: { eq: $id })  {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        section1 {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
          images{
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        section4 {
          title
          description{
            text
          }
        }
        section5 {
          title
          description{
            text
          }
        }
      }
    }
  }
`
