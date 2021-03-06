import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown/with-html'

export const HTMLContent = ({ content, className }) => (
  <Markdown source={content} escapeHtml={false} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
