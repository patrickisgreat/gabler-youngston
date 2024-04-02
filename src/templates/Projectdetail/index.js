import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import "./project_detail.css";
import { WorkPageTemplate } from "./WorkPageTemplate";

const Workdetails = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <WorkPageTemplate frontmatter={frontmatter} />
    </Layout>
  );
};

Workdetails.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default Workdetails;

export const WorkdetailsQuery = graphql`
  query Workdetails($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        projectcategory
        projectname
        projecttagline
        projectscope
        sortdescription
        projectimage {
          childImageSharp {
            gatsbyImageData(
              width: 500
              layout: CONSTRAINED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        extrafield {
          label
          value
        }
        descriptionblockone {
          description
          descriptiontitle
          imagepos
          image {
            childImageSharp {
              gatsbyImageData(
                width: 500
                layout: CONSTRAINED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
