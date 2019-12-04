import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import LatestWork from '../components/Latestwork/latestwork'
import NewsTypefilter from '../components/newstypesfilter'
import { Container, Row, Col } from 'react-bootstrap';
import Instfeed1 from '../img/insta-post1.jpg'
import Instfeed2 from '../img/insta-post2.jpg'
import Instfeed3 from '../img/insta-post3.jpg'
import Instfeed4 from '../img/insta-post4.jpg'

class NewscatRoute extends React.Component {
  render() {

    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <Link to={post.node.fields.slug} className="news">
        <strong className="news-date">{post.node.frontmatter.date}</strong>
        <h6>{post.node.frontmatter.title}</h6>
        <p>{post.node.frontmatter.description}</p>
      </Link>
    ))
    const category = this.props.pageContext.category
    const title = this.props.data.site.siteMetadata.title
    

    return (
      <Layout>
         <Helmet title={`${category} | ${title}`} />
           <div className="all_news">
            <NewsTypefilter />
              <div className="news_feed">
                <Row>
                    <Col md="8">
                      {postLinks}
                    </Col>
                    <Col md="4">
                       <div className="instagram_feed">
                          <img
                            src={Instfeed1}
                            alt="Psot"
                            style={{ display: 'block', width:'100%'}}
                          /> 
                          <img
                            src={Instfeed2}
                            alt="Psot"
                            style={{ display: 'block', width:'100%'}}
                          />
                          <img
                            src={Instfeed3}
                            alt="Psot"
                            style={{ display: 'block', width:'100%'}}
                          />
                          <img
                            src={Instfeed4}
                            alt="Psot"
                            style={{ display: 'block', width:'100%'}}
                          />                          
                       </div>
                    </Col>
                </Row>
              </div>
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
