import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <Header />
      <div className="py-24 not-found flex justify-center items-center flex-col gap-12">
        <h1 className="text-custom-red text-9xl font-extrabold">404</h1>
        <p className="text-custom-red text-xl px-10 text-center">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/">
          <p className="font-semibold underline">
            Retourner sur la page d'accueil
          </p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
