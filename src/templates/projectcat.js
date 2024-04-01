import React, { useState, useEffect, useRef } from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import LatestWork from "../components/Latestwork/latestwork";
import WorkTypefilter from "../components/worktypesfilter";
import { Container, Row, Col } from "react-bootstrap";
import "../pages/work/work.css";

const CatRoute = ({ data, pageContext }) => {
  const [fromFilter, setFromFilter] = useState(false);
  const hvrboxIdRef = useRef(null);
  const filterData = data.projectCatMarkdownRemark;
  const latestWork = data.latestWorkMarkdownRemark;

  useEffect(() => {
    const scrollDown = () => {
      hvrboxIdRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    };

    const timer = setTimeout(scrollDown, 200);
    return () => clearTimeout(timer);
  }, []);

  const posts = data.allMarkdownRemark.edges;
  const postLinks = posts.map((post) => (
    <Col md="4" sm="6" xs="6" key={post.node.fields.slug}>
      <div className="hvrbox">
        <img
          src={
            post.node.frontmatter.projectimage !== null
              ? post.node.frontmatter.projectimage.childImageSharp.original.src
              : null
          }
          alt="Our Team"
          style={{ display: "block", width: "100%" }}
          className="hvrbox-layer_bottom"
          ref={hvrboxIdRef}
        />
        <Link to={post.node.fields.slug} className="hvrbox-layer_top">
          <div className="hvrbox-text">
            <h5>{post.node.frontmatter.projectname}</h5>
            <span>
              Project Type: <b>{post.node.frontmatter.projectscope}</b>
            </span>
          </div>
        </Link>
      </div>
    </Col>
  ));

  const { category } = pageContext;
  const title = data.site.siteMetadata.title;

  return (
    <Layout>
      <Helmet title={`${category} | ${title}`} />
      <div className="work_min">
        <Container>
          <h1>Work</h1>
        </Container>
        <WorkTypefilter data={filterData} />
        <LatestWork data={latestWork} />
        <Row>{postLinks}</Row>
      </div>
    </Layout>
  );
};

export default CatRoute;

export const catsPageQuery = graphql`
  query CatPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { projectcategory: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
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
        }
      }
    }
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
  }
`;
