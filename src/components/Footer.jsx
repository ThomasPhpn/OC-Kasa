import React from "react";
import logo from "../assets/logo-white.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = ({ bgColor }) => {
  return (
    <footer
      className={`footer flex justify-between items-center flex-col ${bgColor} gap-6 py-6`}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="w-24" />
      </Link>
      <p className="text-white">
        &copy; {new Date().getFullYear()} Kasa. Tous droits réservés.
      </p>
    </footer>
  );
};
Footer.displayName = "Footer";

Footer.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  bgColor: "bg-black",
};

export default Footer;
