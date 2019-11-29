import React from 'react'
import './newsletter.css'

const Newsletter = class extends React.Component {
  render() {
    return (
      <div className="newsletter-min">
         <div className="container">
           <div className="columns">
                <div className="column is-7">
                     <span>Stay in the loop, subscribe to our </span>
                     <h5>NEWSLETTER</h5>
                </div>
                <div className="column is-5">
                <form name="subscribe" action="/about" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="subscribe" />
                  <div className="form-group">
                     <label>Your name:</label>
                     <input name="name" type="text" className="" required/>
                  </div>
                  <div className="form-group">
                     <label>Your email address:</label>
                     <input name="email" type="email" className="" required/>
                  </div>
                  <div className="form-btm">
                     <em>Subscribe Now</em>
                     <input type="submit" className="submit-btn" value=" " />
                  </div>
                 </form>
                </div>
             </div>
         </div>
      </div>
    )
  }
}

export default Newsletter
