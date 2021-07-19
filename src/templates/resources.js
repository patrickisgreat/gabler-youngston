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
               <h1>{frontmatter.topHeaderText}</h1>
            </Col>
            <Col md={4}>

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
			topHeaderText
		}
	}
}
`