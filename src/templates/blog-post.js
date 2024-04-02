import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import back_btn_up from "../img/back-to-top-button.jpg";
import NewsTypefilter from "../components/newstypesfilter";

const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  featuredimage,
  title,
  helmet,
  newsTypeData,
}) => {
  const PostContent = contentComponent || Content;
  const image = getImage(featuredimage);

  return (
    <div className="all_news">
      {helmet || ""}
      <NewsTypefilter data={newsTypeData} />
      <div className="news_feed">
        <Row>
          <Col md="8">
            <div className="news_details">
              <strong className="news-date">{date}</strong>
              <h6>{title}</h6>
              {image && <GatsbyImage image={image} alt="" />}
              <PostContent content={content} />
            </div>
            <div className="col-md-12">
              <div className="back-btn-up">
                <Link to="/news">
                  <img
                    src={back_btn_up}
                    alt="Back Button"
                    style={{ display: "block" }}
                  />
                </Link>
              </div>
            </div>
          </Col>
          <Col md="4"></Col>
        </Row>
      </div>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  newsTypeData: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const newsTypeData = data.allMarkdownRemark;

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
        newsTypeData={newsTypeData}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allMarkdownRemark: PropTypes.object,
  }),
};

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
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
        tags
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "newscat" } } }
    ) {
      nodes {
        frontmatter {
          categoryname
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default BlogPost;
