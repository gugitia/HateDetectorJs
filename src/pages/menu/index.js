import React, { useState, useEffect } from "react";

import "./styles.css";
import "../../global.css";

import Header from "../../components/header/app";

import api from "../../services/api";

export default function Menu() {
  const [InputText, setInputText] = useState("");
  const [Prediction, setPrediction] = useState("0");
  const [option, setOption] = useState("A");

  async function handlePrediction(e) {
    e.preventDefault();

    try {
      const response = await api.post("predict", { comment: InputText });
      const newPrediction = response.data.prediction;
      setPrediction(newPrediction);

      if (newPrediction < 0.3) {
        setOption("A");
      } else if (newPrediction < 0.5) {
        setOption("B");
      } else if (newPrediction < 0.7) {
        setOption("C");
      } else if (newPrediction < 0.9) {
        setOption("D");
      } else {
        setOption("E");
      }
    } catch (err) {
      alert("falha na requisição");
    }
  }
  useEffect(() => {
    console.log(option);
  }, [option]);

  return (
    <div className="app">
      <header>
        <Header />
      </header>

      <div className="main-menu">
        <section className="form">
          <form onSubmit={handlePrediction}>
            <h1> Digite uma frase em ingles</h1>

            <input
              placeholder="here"
              value={InputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <br />
            <button type="submit">Predizer</button>
          </form>
          <div className={`predict-${option}`}>
            <p>Hostilidade: {Prediction}</p>
          </div>
        </section>
        <div className="summary">
          <ul>
            <li className={`predict-A`}>0 a 0.3 - Despresivel</li>
            <li className={`predict-B`}>0.3 a 0.5 - Fraca</li>
            <li className={`predict-C`}>0.5 a 0.7 - Moderada</li>
            <li className={`predict-D`}>0.7 a 0.9 - Forte</li>
            <li className={`predict-E`}>0.9 a 1 - Muito forte</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
