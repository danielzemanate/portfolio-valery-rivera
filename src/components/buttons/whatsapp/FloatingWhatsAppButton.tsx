import React from "react";
import whatsapp from "../../../assets/img/whatsapp.png";

export const FloatingWhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/573113078792?text=Hola,%20quiero%20agendar%20una%20consulta%20médica",
      "_blank",
    );
  };

  return (
    <div className="floating-whatsapp-button" onClick={handleWhatsAppClick}>
      <img
        src={whatsapp}
        alt="WhatsApp"
        className="whatsapp-icon"
        title="Whatsapp"
      />
    </div>
  );
};
