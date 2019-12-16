import React from 'react'
import PropTypes from 'prop-types'
import { TeamPageTemplate } from '../../templates/Teamdetail/index'

const TeamPagePreview = ({ entry, widgetFor }) => {
	const data = entry.getIn(['data']).toJS();

	if (data) {
		console.log(data)
    	return (
      		<TeamPageTemplate frontmatter={data} />
    	)
  	} else {
    	return <div>Loading...</div>
  	}
}

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TeamPagePreview