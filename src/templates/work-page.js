import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import WorkLists from "../components/Worklists/worklists";
import LatestWork from "../components/Latestwork/latestwork";
import WorkTypefilter from "../components/worktypesfilter";
import "../pages/work/work.css";

const WorkPage = ({ data }) => {
  const projectCategories = data.projectCatMarkdownRemark;
  const latestWork = data.latestWorkMarkdownRemark;
  const workLists = data.workListsMarkdownRemark;
  return (
    <Layout>
      <div className="work_min">
        <Container>
          <h1>Work</h1>
        </Container>
        <WorkTypefilter data={projectCategories} />
        <LatestWork data={latestWork} />
        <WorkLists data={workLists} />
      </div>
    </Layout>
  );
};

WorkPage.propTypes = {
  data: PropTypes.shape({
    projectCatMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
    latestWorkMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
    workListsMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
};

export default WorkPage;

export const query = graphql`
  query WorkPageQuery {
    projectCatMarkdownRemark: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "projectcat" } } }
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
    latestWorkMarkdownRemark: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "Projectdetail/index" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 1
    ) {
      nodes {
        id
        frontmatter {
          projectname
          projectscope
          sortdescription
          projectimage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        fields {
          slug
        }
      }
    }
    workListsMarkdownRemark: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "Projectdetail/index" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
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
        fields {
          slug
        }
      }
    }
  }
`;
