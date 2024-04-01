import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import NewsList from "../components/Newslist/newslist";
import NewsTypefilter from "../components/newstypesfilter";

const NewsPage = ({ data }) => {
  const newsTypeData = data.newsTypeMarkdownRemark;
  const newsListData = data.newsListMarkdownRemark;

  return (
    <Layout>
      <div className="all_news">
        <NewsTypefilter data={newsTypeData} />
        <NewsList data={newsListData} />
      </div>
    </Layout>
  );
};

NewsPage.propTypes = {
  data: PropTypes.shape({
    newsTypeMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
    newsListMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
};

export default NewsPage;

export const query = graphql`
  query NewsPageQuery {
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
    newsListMarkdownRemark: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMM, YYYY")
          title
          description
          featuredimage {
            childImageSharp {
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
`;
