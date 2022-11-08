import React from "react";
import { Link } from "react-router-dom";
import "../../styles/404.css";

function PageNotFound() {
  return (
    <main>
      <div className="PageNotFound-404">404</div>
      <span className="PageNotFound-Text">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link to="/" className="PageNotFound-Home">
        Retourner sur la page d'acceuil
      </Link>
    </main>
  );
}

export default PageNotFound;
