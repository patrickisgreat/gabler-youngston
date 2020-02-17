import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import LatestWork from '../components/Latestwork/latestwork'
import WorkTypefilter from '../components/worktypesfilter'
import { Container, Row, Col } from 'react-bootstrap';
import '../pages/work/work.css'

class CatRoute extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      fromFilter: false
    }
    
  }
  
  componentDidMount() {
    console.log('this is running');
    setTimeout(() => {
      this.scrollDown();
    }, 200)
  }

  scrollDown() {
    console.log("working")
    let workView = document.getElementById('hvrbox-id');
    workView.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  render() {
    let fromFilter  = this.props.location.state.fromFilter;
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
       <Col md="4" sm="6" xs="6">
            <div className="hvrbox">
              <img
                src={
                  post.node.frontmatter.projectimage !== null ? 
                  post.node.frontmatter.projectimage.childImageSharp.original.src : null
                }
                alt="Our Team"
                style={{ display: 'block', width:'100%'}}
                className="hvrbox-layer_bottom"
                id="hvrbox-id"
              />
              <Link to={post.node.fields.slug} className="hvrbox-layer_top">
                <div className="hvrbox-text">
                  <h5>{post.node.frontmatter.projectname}</h5>
                  <span>Project Type:  <b>{post.node.frontmatter.projectscope}</b></span>
                </div>
              </Link>
            </div>
        </Col>
    ))

    const category = this.props.pageContext.category
    const title = this.props.data.site.siteMetadata.title
    console.log(this.props.location.state.fromFilter);

    return (
      <Layout>
         <Helmet title={`${category} | ${title}`} />
         <div className="work_min">
         <Container>
            <h1>Work </h1>
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
