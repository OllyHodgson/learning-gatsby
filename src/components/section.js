import PropTypes from "prop-types"
import React from "react"
import SectionTitle from "./section-title"

const Section = ({ children, className, icon, id, title }) => {
  const sectionClassName = `content olly-transition olly-transition-hidden content-${id} ${className}`
  return (
    <div id={id} className={sectionClassName}>
      {title && <SectionTitle title={title} />}
      <div className="part2">{children}</div>
      <div className="part3">{icon && icon}</div>
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
}

Section.defaultProps = {}

export default Section
