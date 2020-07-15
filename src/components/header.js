import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header-container">
      <h2 style={{ margin: 0 }}>
        <Link className="header-link" to="/">
          {siteTitle}
        </Link>
      </h2>
      <div className="header-link-group">
        <Link to="/who-we-are">Who We Are</Link>
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
