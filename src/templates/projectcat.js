import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import LatestWork from '../components/Latestwork/latestwork'
import WorkTypefilter from '../components/worktypesfilter'
import { Container, Row, Col } from 'react-bootstrap';
import '../pages/work/work.css'

class CatRoute extends React.Component {
  render() {

    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
       <Col md="4" sm="6" xs="6">
            <div class="hvrbox">
              <img
                src={post.node.frontmatter.projectimage.childImageSharp.original.src}
                alt="Our Team"
                style={{ display: 'block', width:'100%'}}
                class="hvrbox-layer_bottom"
              />
              <Link to={post.node.fields.slug} className="hvrbox-layer_top">
                <div class="hvrbox-text">
                  <h5>{post.node.frontmatter.projectname}</h5>
                  <span>Scope  <b>{post.node.frontmatter.projectscope}</b></span>
                </div>
              </Link>
            </div>
        </Col>
    ))
    const category = this.props.pageContext.category
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${category}”`

    return (
      <Layout>
         <Helmet title={`${category} | ${title}`} />
         <div className="work_min">
         <Container>
            <h1>Work</h1>
        </Container>
        <WorkTypefilter />
            <LatestWork />
            <Row>{postLinks}</Row>
          </div>
     </Layout>
    )
  }
}

export default CatRoute

export const catsPageQuery = graphql`
  query CatPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { projectcategory: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
              projectname
              projectimage {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
              projectscope
            }
        }
      }
    }
  }
`
