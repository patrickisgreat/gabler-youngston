import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import LatestWork from '../components/Latestwork/latestwork'
import NewsTypefilter from '../components/newstypesfilter'
import { Container, Row, Col } from 'react-bootstrap';

class NewscatRoute extends React.Component {
  render() {

    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <Col md="4" sm="6" xs="6">
          <Link to={post.node.fields.slug} className="hvrbox-layer_top">
            <div class="hvrbox-text">
              <h5>{post.node.frontmatter.title}</h5>
            </div>
          </Link>
      </Col>
    ))
    const category = this.props.pageContext.category
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount

    return (
      <Layout>
         <Helmet title={`${category} | ${title}`} />
         <div className="work_min">
         <Container>
            <h1>News</h1>
        </Container>
        <NewsTypefilter />
            <Row>{postLinks}</Row>
          </div>
     </Layout>
    )
  }
}

export default NewscatRoute

export const newscatsPageQuery = graphql`
  query NewsCatPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { newscategory: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
              date(formatString: "DD MMM, YYYY")
              title
              description
            }
        }
      }
    }
  }
`
