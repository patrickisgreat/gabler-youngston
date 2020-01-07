import React from 'react'
import './banner.css'

const AboutBanner = class extends React.Component {

  render() {
    return (
      <div>
        <div className="Banner-min" style={{backgroundImage: `url(${this.props.headerImage})`}}>
          <div className="container">
              <h1>Our <span>Studio</span></h1>
          </div>
        </div>
       
      </div>
    )
  }
}

export default AboutBanner
