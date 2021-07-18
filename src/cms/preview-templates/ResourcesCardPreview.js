import React from 'react'
import PropTypes from 'prop-types'
import { ResourcesCardTemplate } from '../../templates/resourcescard'

const ResourcesCardPreview = ({ entry, widgetFor }) => {
	const data = entry.getIn(['data']).toJS();

	if (data) {
    	return (
      		<ResourcesCardTemplate frontmatter={data} />
    	)
  	} else {
    	return <div>Loading...</div>
  	}
}

ResourcesCardTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ResourcesPagePreview;