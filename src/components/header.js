import { Link } from "gatsby";
import instagram from "../images/insta.png"
import PropTypes from "prop-types";
import React from "react";

const lineStyle = { lineHeight: '21px'};

const Header = ({ siteTitle }) => (
  <header
    style={{
      alignSelf: "center"
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
        <a rel="noreferrer" target="_blank" style={lineStyle} href="http://eepurl.com/hCp2FT">Newsletter</a>
        <a href="https://www.instagram.com/CrossingTones/" rel="noreferrer" target="_blank" style={lineStyle}>
          <img src={instagram} width={17} alt="Instagram" className="insta"/>
        </a>
        {/*<Link className="button" to="/">Support</Link> */}
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
