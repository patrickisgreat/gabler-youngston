import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import back_btn_up from '../img/back-to-top-button.jpg'
import NewsTypefilter from '../components/newstypesfilter'


export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  featuredimage,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  return (
  
      <div className="all_news">
      {helmet || ''}
             <NewsTypefilter />
             <div className="news_feed">
                <Row>
                    <Col md="8">
                       <div className="news_details">
                          <strong className="news-date">{date}</strong>
                          <h6>{title}</h6>
						  			<img src={featuredimage.childImageSharp.fluid.src} alt="" />
                          <PostContent content={content} />			
                       </div>
                      {/* {tags && tags.length ? (
                        <div style={{ marginTop: `4rem` }}>
                          <h4>Tags</h4>
                          <ul className="taglist">
                            {tags.map(tag => (
                              <li key={tag + `tag`}>
                                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null} */}
                    <div className="col-md-12">
                      <div className="back-btn-up">
                        <Link to="/news">
                          <img
                            src={back_btn_up}
                            alt="Back Button"
                            style={{ display: 'block', }}
                          />
                        </Link>
                      </div>
                    </div>
                    </Col>
                    <Col md="4">
                       
                    </Col>
                </Row>
             </div>
         </div>
   
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
		  date={post.frontmatter.date}
		  featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMM, YYYY")
        title
		  description
		  featuredimage {
			  childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
		  }
        tags
      }
    }
  }
`
