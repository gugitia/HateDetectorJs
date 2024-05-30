import React from "react";

import "./styles.css";

import Header from "../../components/header/app";
import Carousel from "../../components/carousel/app";

export default function Author() {
  return (
    <div className="app">
      <Header />
      <div className="main-author">
        <h2>Sobre mim</h2>
        <div className="text-author">
          <p>
            Meu nome é Gustavo Marquez Ribeiro, sou recem formado em analise e
            desenvolvimento de sistemas na faculdade paulista FIAP.
          </p>
          <p>
            Na minha carreira eu já trabalhei como suporte de atendimento ao
            cliente enquanto estáva ingressando no mundo de ti estudando html
            css e javascript, depois durante a faculdade comecei a estagiar em
            uma fabrica de softwares em curitiba estudando node dotnet e razor.
            Nos meus mais recentes projetos tenho estudado e me aprofundado mais
            em javascript utilizando as tecnologias node.js e React.
          </p>
          <p>
            Durante a faculdade descobri que tenho muito interesse na area de
            machine learning e da analise de dados.
          </p>
        </div>
        <div className="images">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
