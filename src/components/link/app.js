import React from "react";
import "./styles.css";

const FileDownloader = () => {
  const handleDownload = () => {
    // URL do arquivo na pasta public/assets
    const fileUrl = `${process.env.PUBLIC_URL}/Curriculo2024_.pdf`;
    const link = document.createElement("a");
    link.href = fileUrl;

    // Defina o nome do arquivo a ser baixado
    link.setAttribute("download", "curriculo_GustavoMarquez.pdf");

    // Adicione o link ao documento e clique nele
    document.body.appendChild(link);
    link.click();

    // Limpe o link depois de fazer o download
    document.body.removeChild(link);
  };

  return (
    <div className="download">
      <button onClick={handleDownload}>Curriculo</button>
    </div>
  );
};

export default FileDownloader;
