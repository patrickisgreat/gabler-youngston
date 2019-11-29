import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import './newslist.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap';
import Instfeed1 from '../../img/insta-post1.jpg'
import Instfeed2 from '../../img/insta-post2.jpg'
import Instfeed3 from '../../img/insta-post3.jpg'
import Instfeed4 from '../../img/insta-post4.jpg'

class NewsList extends React.Component {
  render() {
    const { data } = this.props
    const { nodes: newses } = data.allMarkdownRemark
    
    return (
      <div className="news_feed">
        <Row>
            <Col md="8">
              {newses.map((news) => (
                <Link to={news.fields.slug} className="news">
                    <strong className="news-date">{news.frontmatter.date}</strong>
                    <h6>{news.frontmatter.title}</h6>
                    <p>{news.frontmatter.description}</p>
                </Link>
              ))}
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
    )
  }
}

NewsList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsListQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
          nodes {
            frontmatter {
              date(formatString: "DD MMM, YYYY")
              title
              description
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={(data, count) => <NewsList data={data} count={count} />}
  />
)
