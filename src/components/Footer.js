import React from 'react'
import Newsletter from './Newsletter/Newsletter'
import FooterLogo from '../img/gy_logo_footer.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/footer.scss'
const Footer = class extends React.Component {
  render() {
    return (
      <footer className=" has-background-black has-text-white-ter">
        <Newsletter></Newsletter>
        <div className="footer-bottom content has-background-white ">
          <div className="container has-background-white ">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-6">
                <section className="menu">
                    <a title="FooterLogo" href="/">
                      <img
                        src={FooterLogo}
                        alt="FooterLogo"
                        style={{ display: 'block'}}
                      />
                    </a>
                    <span>&copy; 2019 Gabler Youngston <br/>All Rights Reserved.</span>
                </section>
              </div>
              <div className="col-md-8 col-sm-6 col-xs-6">
                  <div className="row">
                    <div className="col-md-6">
                      <section>
                        <h6>Contact</h6>
                        <span>T: <a href="telto(404) 521-3166">(404) 521-3166</a></span>
                        <a href="mailto:mgabler@gableryoungston.com">mgabler@gableryoungston.com</a> <br/>
                        <a href="mailto:jyoungston@gableryoungston.com">jyoungston@gableryoungston.com</a>
                      </section>
                    </div>
                    <div className="col-md-6">
                        <h6>Address</h6>
                        <address>692 Kirkwood Avenue, SE, Suite B2,Atlanta, Georgia 30316, US</address>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
