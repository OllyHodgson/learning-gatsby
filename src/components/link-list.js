import PropTypes from "prop-types"
import React from "react"

const LinkList = ({ children }) => (
  <ul
    className="olly-transition-group elsewhere"
    data-timeout="0"
    data-timeout-increment="200"
  >
    {children}
  </ul>
)

LinkList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LinkList
