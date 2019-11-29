import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import '../pages/contact/contact-style.css'

class ContactPage extends React.Component {
  render() {

    const { data } = this.props
    const { frontmatter } = data.markdownRemark
    
    return (
        <Layout>
        <section className="Contact-min">
            <Container>
              <Row>
                <Col md={8}>
                   <h1>{frontmatter.title}</h1>
                   <span>T: <a href={`tel: ${frontmatter.contactnumber}`}>{frontmatter.contactnumber}</a></span>
                   <a href={`mailto: ${frontmatter.contactnumberone}`}>{frontmatter.contactnumberone}</a> <br/>
                   <a href={`mailto: ${frontmatter.contactnumbertwo}`}>{frontmatter.contactnumbertwo}</a>
                </Col>
                <Col md={4}>
                  {frontmatter.sidebarcontent.map((sidebar, i) => (
                      <div className="contact-f">
                       <strong>{sidebar.title}</strong>
                       <p>{sidebar.description}</p>
                   </div>
                  ))} 
                </Col>
              </Row>
            </Container>          
        </section>
      </Layout>
    )
}
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ContactPageQuery {
        markdownRemark(frontmatter: {templateKey: {eq: "contact-page"}}) {
          frontmatter {
            title
            contactnumber
            contactnumberone
            contactnumbertwo
            sidebarcontent {
              description
              title
            }
          }
        }
      }
    `}

    render={(data) => <ContactPage data={data} />}
  />
)


