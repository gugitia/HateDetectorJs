import React from "react";

import "./styles.css";
import "../../global.css";

import Header from "../../components/header/app";
import FileDownloader from "../../components/link/app";

export default function Contact() {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <div className="main">
        <div classname="main-contact">
          <h2>Gustavo Marquez Ribeiro</h2>
          <div className="info">
            <ul>
              <li>Telefone: 11 98159-3801</li>
              <li>Email: gugitia@gmail.com</li>
              <li>
                <a
                  href="https://github.com/gugitia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub: https://github.com/gugitia
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gustavo-marquez-817781222/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin:
                  https://www.linkedin.com/in/gustavo-marquez-817781222/
                </a>
              </li>
              <FileDownloader className="download" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
