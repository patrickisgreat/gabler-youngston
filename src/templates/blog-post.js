import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col,  Dropdown } from 'react-bootstrap'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import '../pages/new-details/news-details.css'
import Instfeed1 from '../img/insta-post1.jpg'
import Instfeed2 from '../img/insta-post2.jpg'
import Instfeed3 from '../img/insta-post3.jpg'
import Instfeed4 from '../img/insta-post4.jpg'
import back_btn_up from '../img/back-to-top-button.jpg'
import NewsTypefilter from '../components/newstypesfilter'


export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  description,
  tags,
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
                          <p>{description}</p>
                       </div>
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
        tags
      }
    }
  }
`
