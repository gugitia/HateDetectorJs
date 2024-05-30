import React from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./pages/menu";
import Contact from "./pages/contact";
import Author from "./pages/author";
import About from "./pages/about";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/author" element={<Author />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Rotas;
