import React from "react";

import "./styles.css";

import Header from "../../components/header/app";
import FileDownloader from "../../components/link/app";

export default function Contact() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <h2>Gustavo Marquez Ribeiro</h2>
        <div className="info">
          <ul>
            <li>Telefone: 11 98159-3801</li>
            <li>Email: gugitia@gmail.com</li>
            <li>
              <a href="https://github.com/gugitia">
                GitHub: https://github.com/gugitia
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gustavo-marquez-817781222/">
                Linkedin: https://www.linkedin.com/in/gustavo-marquez-817781222/
              </a>
            </li>
            <FileDownloader className="download" />
          </ul>
        </div>
      </div>
    </div>
  );
}
