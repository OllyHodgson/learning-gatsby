import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteSubTitle }) => (
  <div className="header-container">
    <header className="header olly-transition-group">
      <img
        className="profile-shot olly-transition olly-transition-hidden"
        src="media/images/profile_250.jpg"
        alt=""
      />
      <h1 className="fn olly-transition olly-transition-hidden">
        <span> {siteTitle}</span>
      </h1>
      <h2 className="olly-transition olly-transition-hidden">
        <span>{siteSubTitle}</span>
      </h2>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteSubTitle: ``,
}

export default Header
