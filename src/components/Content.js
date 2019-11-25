import React from 'react'
import PropTypes from 'prop-types'
import Markdown from '@danestves/react-markdown';

export const HTMLContent = ({ content, className }) => (
  <Markdown className={className} content={content} />
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
