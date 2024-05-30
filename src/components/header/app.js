import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Header() {
  return (
    <div className="app">
      <div className="header">
        <Link className="link" to="/">
          <h2>Hate Detector</h2>
        </Link>
        <ul>
          <Link className="link" to="/author">
            <li>Autor |</li>
          </Link>
          <Link className="link" to="/about">
            <li>Sobre o projeto |</li>
          </Link>
          <Link className="link" to="/contact">
            <li>Contato |</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
