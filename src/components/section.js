import PropTypes from "prop-types"
import React from "react"
import SectionTitle from "./section-title"

const Section = ({ children, className, icon, id, title }) => {
  let contentClassname = "content"
  if (icon) {
    contentClassname = "content content-three"
  }
  const sectionClassname = `${contentClassname} olly-transition olly-transition-hidden content-${id} ${className}`
  return (
    <div id={id} className={sectionClassname}>
      {title && <SectionTitle title={title} />}
      <div className="part2">{children}</div>
      {icon && <div className="part3">{icon}</div>}
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
