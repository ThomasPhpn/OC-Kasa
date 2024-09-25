import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header({
  navLinks = [
    { label: "Accueil", path: "/" },
    { label: "À propos", path: "/a-propos" },
  ],
}) {
  return (
    <header className="px-10 md:px-20 lg:px-36 py-8 flex justify-between items-center bg-white">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Kasa logo" className="h-10" />
        </Link>
      </div>

      <nav>
        <ul className="flex space-x-6 font-semibold">
          {navLinks.map((link, index) => (
            <li key={index} className="uppercase lg:normal-case">
              <Link to={link.path} className="text-black">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
