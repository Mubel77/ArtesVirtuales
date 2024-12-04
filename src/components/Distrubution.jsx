import React from "react";

const Card = ({ logo, link, altText }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center my-4">
      <img src={logo} alt={altText} className="w-full h-20 object-contain mx-auto mb-4" />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Click aquí para dirigir a la página
      </a>
    </div>
  );
};

const Distributor = ({dataDistributor}) => {
  return (
    <div className="flex flex-col items-center pt-24 pb-12">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6" >
        Somos distribuidor autorizado <span className="text-blue-600">LATAM</span>
      </h2>
      {dataDistributor.distribuidoras.map((distribuidor) => (
        <Card 
            logo={distribuidor.imagen}
            link={distribuidor.url} 
            altText={distribuidor.alt}
        />
      ))}
    </div>
  );
};

export default Distributor;