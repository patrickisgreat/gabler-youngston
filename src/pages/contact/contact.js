import React from 'react'
import Layout from '../../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './contact-style.css'
export default class Index extends React.Component {

  render() {
    return (
      <Layout>
        <section className="Contact-min">
            <Container>
              <Row>
                <Col md={8}>
                   <h1>Start the <br/>conversation</h1>
                   <span>T: <a href="telto:(404) 521-3166">(404) 521-3166</a></span>
                   <a href="mailto:mgabler@gableryoungston.com">mgabler@gableryoungston.com</a> <br/>
                   <a href="mailto:jyoungston@gableryoungston.com">jyoungston@gableryoungston.com</a>
                </Col>
                <Col md={4}>
                   <div className="contact-f">
                       <strong>Gabler Youngston, LLC.</strong>
                       <address>
                          692 Kirkwood Avenue, SE, Suite B2,<br/> Atlanta, Georgia 30316, US<br/>Get Directions
                       </address>
                   </div>
                   <div className="contact-f">
                       <strong>Follow us</strong>
                       <a href="http://instagram.com">Instagram</a>
                   </div>
                   <div className="contact-f">
                       <strong>Press inquiries</strong>
                       <span>Email:</span>
                       <a href="mailto:mgabler@gableryoungston.com">mgabler@gableryoungston.com</a> <br/>
                       <a href="mailto:jyoungston@gableryoungston.com">jyoungston@gableryoungston.com</a>
                   </div>
                   <div className="contact-f">
                       <strong>Careers</strong>
                       <p>Gabler Youngston is always on the lookout for dedicated and enthusiastic designers and intern architects to join our team. Please send your CV and portfolio to mgabler@gableryoungston.com.</p>
                   </div>
                </Col>
              </Row>
            </Container>          
        </section>
      </Layout>
    )
  }
}
