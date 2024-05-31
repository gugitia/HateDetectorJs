import React from "react";

import "./styles.css";

import Header from "../../components/header/app";

export default function About() {
  return (
    <div className="app">
      <Header />
      <div className="main-about">
        <h2>Sobre o projeto</h2>
        <div className="text">
          <h4>A Inteligencia artificial</h4>
          <p>
            Nesse projeto eu desenvolvi e treinei um algoritmo de machine
            learing capaz de analisar o nivel de hostilidade de uma frase em
            ingles.
          </p>
          <p>
            O algoritmo é constituido por um modelo de floresta aleatoria com
            100 arvores e treinado diversas vezes em cima de um dataset com
            mensagens de entradas e numeros reais entre 0 e 1 como saidas.
            Quando ele recebe uma mensagem de entrada,o texto é vetorizado para
            um padrão de linguagem que a ia desenvolveu para reconhecer as
            frases e então ela faz a analise e retorna um numero real entre 0 e
            1.
          </p>
          <h4>O dataset</h4>
          <p>
            O dataset foi utilizado para ensinar para a ia os padrões de frases
            hostis, ela recebeu essas informações em forma de vetores e criou um
            padrão de linguagem unico para interpretar futuras sentenças.
          </p>
          <p>
            É um dataset publico disponivel na keggle pelo{" "}
            <a
              href="https://www.kaggle.com/datasets/konradb/ethos-hate-speech-dataset/data"
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>
            , algumas coisas que são hostis podem passar despercebidas por
            limitação do dataset perante a capacidade do ser humano encontrar
            formas de ofender alguem.
          </p>
          <h4>A api</h4>
          <p>
            A api armazena um modelo treinado do algoritmo e uma copia do padrão
            de linguagem que a IA desenvolveu, de forma que sempre que recebe
            uma requisição, o texto é vetorizado e interpretado pela a ia que
            retorna um valor real.
          </p>
          <p>
            A api foi inicialmente feita em python durante meus anos de
            faculdade, mas para essa versão do projeto decidi recria-la
            utilizando node.
          </p>
          <h4>O Front-end</h4>
          <p>
            O frontEnd foi feito no primeiro projeto utilizando a tecnologia
            Razor, dessa vez decidi desenvolver mais e trabalhar com o React.
          </p>
          <h4>
            Link do repositorio{" "}
            <a href="https://github.com/gugitia/HateDetectorJs">aqui</a>
          </h4>
        </div>
      </div>
    </div>
  );
}
