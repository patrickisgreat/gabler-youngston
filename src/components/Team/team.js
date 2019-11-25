import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import './team.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image'

class OurTeam extends React.Component {
  render() {
    const { data } = this.props
    const { nodes: teams } = data.allMarkdownRemark

    return (
      <div className="Our_team">
        <h3>Team</h3>
        <Row>
          {teams.map((team) => (
            <Col md="3" sm="6" xs="6">
              <div className="our_team">
                <Img
                  fluid={team.frontmatter.memberimage.childImageSharp.fluid}
                  alt="Our Team"
                />
                <Link to={team.fields.slug}> 
                  <div className="team_info">
                    <h5>{team.frontmatter.title}</h5>
                    <span>{team.frontmatter.designation}</span>
                  </div> 
                </Link>              
              </div>
           </Col>
          ))}
        </Row>
      </div>
    )
  }
}

OurTeam.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query OurTeamQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "Teamdetail/index"}}}) {
          nodes {
            frontmatter {
              title
              memberimage {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              designation
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={(data, count) => <OurTeam data={data} count={count} />}
  />
)
