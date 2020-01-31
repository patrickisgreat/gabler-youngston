import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import './newslist.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap';

class NewsList extends React.Component {
  render() {
	const { data } = this.props;
	const { edges: allInstaNode } = data.allInstaNode;
	const { nodes: newses } = data.allMarkdownRemark;

    
    return (
      <div className="news_feed">
        <Row>
            <Col md="8">
              {newses.map((news) => (
                <Link to={news.fields.slug} className="news">
                  <img src={news.frontmatter.featuredimage.childImageSharp.fixed.src} />
                    <br />
                    <br />
                    <strong className="news-date">{news.frontmatter.date}</strong>
                    <h6>{news.frontmatter.title}</h6>
                </Link>
              ))}
            </Col>
            <Col md="4">
               <div className="instagram_feed">
						{/* {allInstaNode.map((post) => (
						<Link to={post.node.preview}>
							<img
								src={post.node.preview}
								alt={post.node.caption}
								style={{ display: 'block', width: '100%', marginTop: '20px'}}
							/>
						</Link>
						))}*/}
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
			  allInstaNode {
					edges {
						node {
							id
							likes
							comments
							mediaType
							preview
							original
							timestamp
							caption
							localFile {
								childImageSharp {
									fixed(width: 150, height: 150) {
									...GatsbyImageSharpFixed
									}
								}
							}
						}
					}
				}
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
          nodes {
            frontmatter {
              date(formatString: "DD MMM, YYYY")
              title
              description
              featuredimage {
                childImageSharp {
                  # Specify the image processing specifications right in the query.
                  # Makes it trivial to update as your page's design changes.
                  fixed(width: 300, height: 200) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
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
