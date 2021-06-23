import { Link } from "gatsby";
import instagram from "../images/insta.png"
import PropTypes from "prop-types";
import React from "react";

const imageStyle= { marginBottom: 0};

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `.1rem`,
    }}
  >
    <div className="header-container">
      <h2 style={{ margin: 0 }}>
        <Link className="header-link" to="/">
          {siteTitle}
        </Link>
      </h2>
      <div className="header-link-group">
        <Link to="/events">Events</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/about">About</Link>
        <a href="https://www.instagram.com/CrossingTones/" rel="noreferrer" target="_blank"><img src={instagram} style={imageStyle} width={20} alt="Instagram"/></a>
        {/* <Link className="button" to="/">Newsletter</Link>
        <Link className="button" to="/">Support</Link> */}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
