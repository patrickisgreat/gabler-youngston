import React, { useState } from "react";
import "./newsletter.css";
import submittedButton from "../../../static/img/success_icon.png";

const Newsletter = () => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleValidation = () => {
    let formFields = fields;
    let formErrors = {};
    let formIsValid = true;

    // Name validation
    if (!formFields["name"]) {
      formIsValid = false;
      formErrors["name"] = "Name cannot be empty";
    }
    if (typeof formFields["name"] !== "undefined") {
      if (!formFields["name"].match(/^[a-zA-Z\s]*$/)) {
        formIsValid = false;
        formErrors["name"] = "Only letters allowed";
      }
    }

    // Email validation
    if (!formFields["email"]) {
      formIsValid = false;
      formErrors["email"] = "Email cannot be empty";
    }
    if (typeof formFields["email"] !== "undefined") {
      let lastAtPos = formFields["email"].lastIndexOf("@");
      let lastDotPos = formFields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          formFields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          formFields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        formErrors["email"] = "Email is not valid";
      }
    }

    setErrors(formErrors);
    return formIsValid;
  };

  const contactSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (handleValidation()) {
      setIsSubmitted(true);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...fields,
        }),
      }).catch((error) => alert(error));
      setFields({});
    }
  };

  const handleChange = (field, e) => {
    let formFields = fields;
    formFields[field] = e.target.value;
    setFields(formFields);
  };

  return (
    <div
      className={isSubmitted ? "newsletter-min submitted" : "newsletter-min"}
    >
      <div className="container">
        <div className="columns">
          <div className="column is-7">
            <span>Stay in the loop, subscribe to our </span>
            <h5>NEWSLETTER</h5>
          </div>
          <div className="column is-5">
            {isSubmitted ? (
              <form
                name="subscribe"
                action="/about"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={contactSubmit}
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="subscribe" />
                <div className="form-btm">
                  <em>You're all Set!</em>
                  <img src={submittedButton} alt="You're Set" />
                </div>
              </form>
            ) : (
              <form
                name="subscribe"
                action="/about"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={contactSubmit}
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="subscribe" />
                <div className="form-group">
                  <label htmlFor="name">Your name:</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={(e) => handleChange("name", e)}
                    value={fields["name"] || ""}
                    required
                  />
                  <span style={{ color: "#ffffff", fontSize: "14px" }}>
                    {errors["name"]}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your email address:</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => handleChange("email", e)}
                    value={fields["email"] || ""}
                    required
                  />
                  <span style={{ color: "#ffffff", fontSize: "14px" }}>
                    {errors["email"]}
                  </span>
                </div>
                <div className="form-btm">
                  <em>Subscribe Now</em>
                  <input type="submit" className="submit-btn" value="" />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
