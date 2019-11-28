import PropTypes from "prop-types"
import React from "react"

const LinkListItem = ({ url, subTitle, title }) => (
  <li className="elsewhere-item olly-transition olly-transition-hidden">
    <a href={url} rel="external me">
      {title}
    </a>
    <span>{subTitle}</span>
  </li>
)

LinkListItem.propTypes = {
  url: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default LinkListItem
