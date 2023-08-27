import React, { useEffect, useState } from "react"; // Asumiendo que estás utilizando react-icons

export const ScrollUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Cambia este valor según cuánto quieras que el usuario haya desplazado hacia abajo antes de mostrar el botón
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`floating-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-angle-double-up scrollup__icon"></i>
    </div>
  );
};
