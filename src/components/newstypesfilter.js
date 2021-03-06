import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link, graphql, StaticQuery } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'

class NewsTypefilter extends React.Component {
  render() {
    const { data } = this.props
    const { nodes: newscats } = data.allMarkdownRemark
    
    return (
      <Container>
                <Row>
                   <Col md="7" xs="6">
                     <h1>News</h1>
                   </Col>
                   <Col md="5" xs="6">
                     <div className="filter_div">
                        <Dropdown className="mobile-filter">
                           <Dropdown.Toggle id="dropdown-basic">
                              <strong>Filter by category</strong>
                           </Dropdown.Toggle>
                           <Dropdown.Menu>
                             <Link to="/news" className="dropdown-item" role="button"> All</Link>

                            {newscats.map((newscat) => (
                             <Link className="dropdown-item" role="button" to={`/newscat/${kebabCase(newscat.frontmatter.categoryname)}/`}> {newscat.frontmatter.categoryname}</Link>
                            ))}
                           </Dropdown.Menu>
                        </Dropdown>
                        <div className="d-filter">
                           <strong>Filter by category</strong>
                           <ul>
                           <li><Link activeClassName="active-cat" to="/news">All</Link></li>
                           {newscats.map((newscat) => (
                              <li>
                                <Link activeClassName="active-cat" to={`/newscat/${kebabCase(newscat.frontmatter.categoryname)}/`}>
                                    {newscat.frontmatter.categoryname}
                                </Link>
                               </li>
                            ))}
                           </ul>
                        </div>
                     </div>
                   </Col>
                </Row>
             </Container>
    )
  }
}

NewsTypefilter.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsTypefilterQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "newscat"}}}) {
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
    render={(data, count) => <NewsTypefilter data={data} count={count} />}
  />
)
