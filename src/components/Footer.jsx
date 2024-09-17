import React from "react";
import logo from "../assets/logo-white.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className={`footer flex justify-between items-center flex-col bg-black gap-6 py-6`}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="w-24" />
      </Link>
      <p className="text-white">
        &copy; {new Date().getFullYear()} Kasa. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
