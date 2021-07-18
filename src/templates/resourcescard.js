import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import '../pages/resources/resources.css'

export const ResourcesCardTemplate = ({frontmatter}) => {
  return (
    <section className="resources-card">
        <Container>
          <Row>
            <Col md={8}>
               <h1>{frontmatter.title}</h1>
			   <img
					src={frontmatter.image.childImageSharp.fluid.src}
					alt="Download Card Image"
					style={{ display: 'block', width:'100%'}}
            	/>
				<h4>{frontmatter.title}</h4>
                <a class="res-link" href={frontmatter.file} download>Download</a>
            </Col>
          </Row>
        </Container>          
    </section>
  );
}

ResourcesCardTemplate.propTypes = {
  frontmatter: PropTypes.array,
}


ResourcesCardTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  }),
}

export default ResourcesCardTemplate;

export const ResourcesCardQuery = graphql
`query ResourcesCardQuery($id: String!) {
	markdownRemark(id: {eq: $id}) {
		frontmatter {
			image {
				childImageSharp {
					fluid(maxWidth: 2048, quality: 100) {
						...GatsbyImageSharpFluid
					}
				} 
			}
			title
			file
		}
	}
}
`