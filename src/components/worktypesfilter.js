import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap';

class WorkTypefilter extends React.Component {
  
  render() {
    const { data } = this.props
    const { nodes: cats } = data.allMarkdownRemark
    
    return (
      <Row>
         <Col lg="7"></Col>
         <Col lg="5" className="">
            <div className="filter_div">
                <strong>Filter by category</strong>
                <ul>
                  <li><Link activeClassName="active-cat" to="/works">All</Link></li>
                  {cats.map((cat) => (
                    <li>
                      <Link activeClassName="active-cat" to={`/projectcat/${kebabCase(cat.frontmatter.categoryname)}/`} state={{ fromFilter: true }}>
                       {cat.frontmatter.categoryname}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
         </Col>
     </Row>
    )
  }
}

WorkTypefilter.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query WorkTypefilterQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "projectcat"}}}) {
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
    `}
    render={(data, count) => <WorkTypefilter data={data} count={count} />}
  />
)
