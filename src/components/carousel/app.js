import React, { useState, useEffect } from "react";

import "./styles.css";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import img1 from "../../assets/vmm.png";
import img2 from "../../assets/vmm1.png";
import img3 from "../../assets/mks.png";
import img4 from "../../assets/rc.png";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { url: img1, title: "Imagem 1" },
    { url: img2, title: "Imagem 2" },
    { url: img3, title: "Imagem 3" },
    { url: img4, title: "Imagem 4" },
  ];
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    setCurrentImageIndex(Math.floor(Math.random() * 4));
    console.log(currentImageIndex);
  }, []);

  return (
    <div className="carousel">
      <button onClick={prevImage} className="btn1">
        <FiArrowLeft size={16} />
      </button>
      <button onClick={nextImage} className="btn2">
        <FiArrowRight size={16} />
      </button>
      <div className="side-images">
        <img
          src={images[(currentImageIndex + 1) % images.length].url}
          alt={images[(currentImageIndex + 1) % images.length].title}
        />
        <img
          src={images[(currentImageIndex + 2) % images.length].url}
          alt={images[(currentImageIndex + 2) % images.length].title}
        />
      </div>
    </div>
  );
};

export default Carousel;
