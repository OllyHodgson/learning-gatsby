import PropTypes from "prop-types"
import React from "react"

const SectionTitle = ({ title }) => (
  <div className="part1">
    <h4>{title}</h4>
  </div>
)

SectionTitle.propTypes = {
  title: PropTypes.string,
}

SectionTitle.defaultProps = {
  title: ``,
}

export default SectionTitle
