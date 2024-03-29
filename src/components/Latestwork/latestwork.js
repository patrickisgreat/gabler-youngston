import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap';

class LatestWork extends React.Component {
  render() {
    const { data } = this.props
    const { nodes: works } = data.allMarkdownRemark
    return (
      <div>
        {works.map((work) => (
        <Row className="latest-work">
          <Col md="7" className="mt-3">
          <Link to={work.fields.slug}>
            <img
                src={work.frontmatter.projectimage.childImageSharp.original.src}
                alt="Recently Completed Project"
                style={{ display: 'block', width:'100%'}}
            />
            </Link>
          </Col>
          <Col md="5" className="mt-3">
            <div className="latest-project-info">
              <strong>Recently Completed</strong>
                <Link to={work.fields.slug}>
                <h2>{work.frontmatter.projectname}</h2>
                </Link>
                <span>Project Type <b>{work.frontmatter.projectscope}</b></span>
                <p>{work.frontmatter.sortdescription}</p>
            </div>
          </Col>
        </Row>
        ))}
      </div>
    )
  }
}

LatestWork.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query LatestWorkQuery {
        allMarkdownRemark(
          filter: {frontmatter: {templateKey: {eq: "Projectdetail/index"}}}, 
          sort: {order: DESC, fields: frontmatter___date}, limit: 1
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
              sortdescription
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={(data, count) => <LatestWork data={data} count={count} />}
  />
)
