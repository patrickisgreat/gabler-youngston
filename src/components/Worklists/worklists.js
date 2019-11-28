import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import './worklists.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap';

class WorkLists extends React.Component {
  render() {
    const { data } = this.props
    const { nodes: works } = data.allMarkdownRemark
    
    return (
      <Row>
        {works.map((work) => (
          <Col md="4" sm="6" xs="6">
            <div class="hvrbox">
              <img
                src={work.frontmatter.projectimage.childImageSharp.original.src}
                alt="Our Team"
                style={{ display: 'block', width:'100%'}}
                class="hvrbox-layer_bottom"
              />
              <Link to={work.fields.slug} className="hvrbox-layer_top">
                <div class="hvrbox-text">
                  <h5>{work.frontmatter.projectname}</h5>
                  <span>Scope  <b>{work.frontmatter.projectscope}</b></span>
                </div>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    )
  }
}

WorkLists.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query WorkListsQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "Projectdetail/index"}}}) {
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
    `}
    render={(data, count) => <WorkLists data={data} count={count} />}
  />
)
