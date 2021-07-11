import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import '../pages/resources/resources.css'

export const ResourcesPageTemplate = ({frontmatter}) => {
  return (
    <section className="resources-page">
        <Container>
          <Row>
            <Col md={8}>
               <h1 style={{ padding: '100px', fontSize: '2.5em'}}>{frontmatter.title}</h1>
               {/* <span>T: <a href={`tel: ${frontmatter.contactnumber}`}>{frontmatter.contactnumber}</a></span>
               <a href={`mailto: ${frontmatter.contactnumberone}`}>{frontmatter.contactnumberone}</a> <br/> */}
            </Col>
            <Col md={4}>
              {/* {frontmatter.sidebarcontent.map((sidebar, i) => (
                  <div className="contact-f">
                   <strong>{sidebar.title}</strong>
                   <p>{sidebar.description}</p>
               </div>
              ))}  */}
            </Col>
          </Row>
        </Container>          
    </section>
  );
}

ResourcesPageTemplate.propTypes = {
  frontmatter: PropTypes.array,
}

class ResourcesPage extends React.Component {
  render() {
    const { data } = this.props
    const { frontmatter } = data.markdownRemark
    
    return (
      <Layout>
         <ResourcesPageTemplate frontmatter={frontmatter} />
      </Layout>
    )
	}
}
ResourcesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  }),
}

export default ResourcesPage;

export const ResourcesQuery = graphql
`query ResourcesPageQuery($id: String!) {
	markdownRemark(id: {eq: $id}) {
		frontmatter {
			title
			topLeftDownloadImage {
				childImageSharp {
					fluid(maxWidth: 2048, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}    
			}
			topLeftDownloadText
			topLeftDownloadFile
			topRightDownloadImage {
				childImageSharp {
					fluid(maxWidth: 2048, quality: 100) {
						...GatsbyImageSharpFluid
					}
				} 
			}
			topRightDownloadText
			topRightDownloadFile
			bodyText
			btmRow1LeftDownloadImage {
				childImageSharp {
					fluid(maxWidth: 2048, quality: 100) {
						...GatsbyImageSharpFluid
					}
				} 
			}
			btmRow1LeftDownloadText
			btmRow1LeftDownloadFile
			btmRow1LeftDownloadImage {
				childImageSharp {
					fluid(maxWidth: 2048, quality: 100) {
						...GatsbyImageSharpFluid
					}
				} 
			}
			btmRow1RightDownloadText
			btmRow1RightDownloadFile 
			btmRow1RightDownloadImage {
				childImageSharp {
					fluid(maxWidth: 2048, quality: 100) {
						...GatsbyImageSharpFluid
					}
				} 
			}
			btmRow2LeftDownloadText
			btmRow2LeftDownloadFile
			btmRow2RightDownloadImage {
				childImageSharp {
					fluid(maxWidth: 2048, quality: 100) {
						...GatsbyImageSharpFluid
					}
				} 
			}
			btmRow2RightDownloadText
			btmRow2RightDownloadFile
			btmRow3LeftDownloadImage {
				childImageSharp {
					fluid(maxWidth: 2048, quality: 100) {
						...GatsbyImageSharpFluid
					}
				} 
			}
			btmRow3LeftDownloadText
			btmRow3LeftDownloadFile
			btmRow3RightDownloadImage {
				childImageSharp {
					fluid(maxWidth: 2048, quality: 100) {
						...GatsbyImageSharpFluid
					}
				} 
			}
			btmRow3RightDownloadText
			btmRow3RightDownloadFile
		}
	}
}
`