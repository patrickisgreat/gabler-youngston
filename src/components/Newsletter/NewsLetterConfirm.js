import React from 'react'
import submittedButton from "../../../static/img/success_icon.png"

const NewsLetterConfirm = () => {
    return (
        <div className="newsletter-min submitted">
            <div className="container">
                <div className="columns">
                    <div className="column is-7">
                        <span>Stay in the loop, subscribe to our </span>
                        <h5>NEWSLETTER</h5>
                    </div>
                    <div className="column is-5">
                        <form name="subscribe" action="/about" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.contactSubmit.bind(this)}>
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="subscribe" />
                            <div className="form-btm">
                                <em>You're all Set!</em>
                                <img src={submittedButton} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterConfirm;