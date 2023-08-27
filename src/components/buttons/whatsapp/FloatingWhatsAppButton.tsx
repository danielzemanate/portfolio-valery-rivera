import React from "react";
import whatsapp from "../../../assets/img/whatsapp.png";

export const FloatingWhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+573233625283", "_blank");
  };

  return (
    <div className="floating-whatsapp-button" onClick={handleWhatsAppClick}>
      <img src={whatsapp} alt="WhatsApp" className="whatsapp-icon" title="Whatsapp" />
    </div>
  );
};
