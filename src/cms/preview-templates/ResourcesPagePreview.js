import React from 'react'
import PropTypes from 'prop-types'
import { ResourcesPageTemplate } from '../../templates/resources'

const ResourcesPagePreview = ({ entry, widgetFor }) => {
	const data = entry.getIn(['data']).toJS();

	if (data) {
		console.log(data)
    	return (
      		<ResourcesPageTemplate frontmatter={data} />
    	)
  	} else {
    	return <div>Loading...</div>
  	}
}

ResourcesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ResourcesPagePreview;