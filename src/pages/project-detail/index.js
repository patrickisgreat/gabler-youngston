import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/Layout'
//import { Link } from 'gatsby'
import './project.css'
import HeroBanner from '../../img/hero-image.png'
import prjectimg1 from '../../img/photo-1.png'
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
         <div className="project_min">
           {/* Banner Start */}
            <div className="project_banner">
                 <img
                    src={HeroBanner}
                    alt="Banner"
                    style={{ display: 'block', width:'100%'}}
                 />   
                 <div className="banner-text">
                    <h2>Himitsu Lounge</h2>
                    <span>Design Studio Group, Atlanta, Ga.</span>
                 </div>  
            </div>
           {/* Banner End */}
           {/* Project Destils Start */ }
              <div className="project_details">
                  <Container>
                     <Row className="d-flex flex-wrap align-items-center">
                        <Col md="6" className="mt-4">
                           <p><b>Himitsu Lounge</b> consectetur adipiscing elit. Pellentesque euismod malesuada iaculis. Nam id sapien accumsan, lacinia diam nec, laoreet tortor. Proin mauris tellus, ultrices sed consectetur ac, mattis nec arcu. Duis scelerisque pretium ex, in bibendum tortor viverra id. Mauris fermentum, nulla et elementum mattis, sem quam suscipit enim, quis sollicitudin enim augue eu nulla. Proin finibus odio augue, ut posuere sem vulputate a. Donec a dictum ex. Donec lacinia, velit at luctus sagittis, ipsum magna consectetur odio, vitae accumsan est mauris iaculis est. </p>
                        </Col>
                        <Col md="6" className="mt-4">
                            <img
                                src={prjectimg1}
                                alt="Project Image"
                                style={{ display: 'block', width:'100%'}}
                            /> 
                        </Col>
                     </Row>
                  </Container>
              </div>
           {/* Project Destils End */ }
         </div>
     </Layout>
    )
  }
}
