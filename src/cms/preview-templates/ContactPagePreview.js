import React from "react";
import PropTypes from "prop-types";
import { ContactPageTemplate } from "../../templates/contact-page";

const ContactPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(["data"]).toJS();
    return <ContactPageTemplate frontmatter={data} />;
};

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ContactPagePreview;
