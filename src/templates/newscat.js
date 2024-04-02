import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import NewsTypefilter from "../components/newstypesfilter";
import { Row, Col } from "react-bootstrap";
import Instfeed1 from "../img/insta-post1.jpg";
import Instfeed2 from "../img/insta-post2.jpg";
import Instfeed3 from "../img/insta-post3.jpg";
import Instfeed4 from "../img/insta-post4.jpg";

const NewscatRoute = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const postLinks = posts.map((post) => (
    <Link
      to={post.node.fields.slug}
      className="news"
      key={post.node.fields.slug}
    >
      <strong className="news-date">{post.node.frontmatter.date}</strong>
      <h6>{post.node.frontmatter.title}</h6>
      <p>{post.node.frontmatter.description}</p>
    </Link>
  ));

  const category = pageContext.category;
  const title = data.site.siteMetadata.title;
  const newsTypeData = data.newsTypeMarkdownRemark.nodes;

  return (
    <Layout>
      <Helmet title={`${category} | ${title}`} />
      <div className="all_news">
        <NewsTypefilter data={newsTypeData} />
        <div className="news_feed">
          <Row>
            <Col md="8">{postLinks}</Col>
            <Col md="4">
              <div className="instagram_feed">
                <img
                  src={Instfeed1}
                  alt="Post"
                  style={{ display: "block", width: "100%" }}
                />
                <img
                  src={Instfeed2}
                  alt="Post"
                  style={{ display: "block", width: "100%" }}
                />
                <img
                  src={Instfeed3}
                  alt="Post"
                  style={{ display: "block", width: "100%" }}
                />
                <img
                  src={Instfeed4}
                  alt="Post"
                  style={{ display: "block", width: "100%" }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default NewscatRoute;

export const newscatsPageQuery = graphql`
  query NewsCatPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
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
    newsTypeMarkdownRemark: allMarkdownRemark(
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
