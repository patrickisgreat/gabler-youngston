import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'
import { clearConfigCache } from 'prettier';

const AboutPagePreview = ({ entry, widgetFor }) => {
	const data = entry.getIn(['data']).toJS();
	if (data) {
		console.log(data);
    	return (
      		<AboutPageTemplate
			  	heroImage={data.heroImage}
		        title={data.title}
		        section1={data.section1}
		        section2={data.section2}
		        section3={data.section3}
		        section4={data.section4}
		        section5={data.section5}
		    />
    	)
  	} else {
    	return <div>Loading...</div>
  	}
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview