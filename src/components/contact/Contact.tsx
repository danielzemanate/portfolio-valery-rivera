import React, { useMemo, useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    reason: "",
    availability: "",
  });

  const whatsappNumber = "573113078792"; // formato internacional sin "+"
  const instagramUser = "valeryrivera_";
  const email = "valeryju1020@gmail.com";
  const location = "Popayán, Cauca, Colombia";

  const whatsappText = useMemo(() => {
    const name = formData.name?.trim();
    const reason = formData.reason?.trim();
    const availability = formData.availability?.trim();

    const lines = [
      "Hola Dra. Valery, quiero agendar una consulta médica.",
      name ? `Nombre: ${name}` : "",
      reason ? `Motivo: ${reason}` : "",
      availability ? `Disponibilidad: ${availability}` : "",
    ].filter(Boolean);

    return encodeURIComponent(lines.join("\n"));
  }, [formData]);

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${whatsappNumber}?text=${whatsappText}`;
  }, [whatsappNumber, whatsappText]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contáctanos</h2>
      <span className="section__subtitle">
        Agenda tu cita de forma rápida por WhatsApp
      </span>

      <div className="contact__container container grid">
        {/* INFO */}
        <div>
          <div className="contact__information">
            <i className="fab fa-whatsapp contact__icon"></i>
            <div>
              <h3 className="contact__title">WhatsApp</h3>
              <a
                className="contact__subtitle"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                311 307 8792
              </a>
            </div>
          </div>

          <div className="contact__information">
            <i className="fab fa-instagram fa-lg contact__icon"></i>
            <div>
              <h3 className="contact__title">Instagram</h3>
              <a
                className="contact__subtitle"
                href={`https://www.instagram.com/${instagramUser}/`}
                target="_blank"
                rel="noreferrer"
              >
                @{instagramUser}
              </a>
            </div>
          </div>

          <div className="contact__information">
            <i className="far fa-envelope contact__icon"></i>
            <div>
              <h3 className="contact__title">Correo</h3>
              <a className="contact__subtitle" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          </div>

          <div className="contact__information">
            <i className="fas fa-map-marker-alt contact__icon"></i>
            <div>
              <h3 className="contact__title">Ubicación</h3>
              <span className="contact__subtitle">{location}</span>
            </div>
          </div>

          {/* CTA rápido */}
          <a
            href={whatsappUrl}
            className="button button--flex"
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: 14 }}
          >
            Agendar por WhatsApp{" "}
            <i className="fab fa-whatsapp button__icon" aria-hidden="true"></i>
          </a>

          <div style={{ marginTop: 10, color: "var(--text-color-light)" }}>
            Horario sugerido: Lun–Sáb · 8:00 a.m. – 6:00 p.m.
          </div>
        </div>

        {/* FORM (solo arma mensaje para WhatsApp) */}
        <form
          className="contact__form grid"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name" className="contact__label">
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                className="contact__input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej: Juan Pérez"
              />
            </div>

            <div className="contact__content">
              <label htmlFor="availability" className="contact__label">
                Disponibilidad
              </label>
              <input
                id="availability"
                type="text"
                className="contact__input"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                placeholder="Ej: Hoy en la tarde / Mañana 9 a.m."
              />
            </div>
          </div>

          <div className="contact__content">
            <label htmlFor="reason" className="contact__label">
              Motivo de consulta
            </label>
            <textarea
              id="reason"
              name="reason"
              className="contact__input contact__textarea"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Cuéntame brevemente qué necesitas para prepararme mejor."
            />
          </div>

          <div>
            <a
              href={whatsappUrl}
              className="button contact__submit button--flex"
              target="_blank"
              rel="noreferrer"
              style={{ cursor: "pointer" }}
            >
              Enviar por WhatsApp
              <i
                className="fas fa-paper-plane button__icon"
                aria-hidden="true"
              ></i>
            </a>
          </div>

          <div style={{ marginTop: 10, color: "var(--text-color-light)" }}>
            Al enviar, se abrirá WhatsApp con el mensaje listo para agendar.
          </div>
        </form>
      </div>
    </section>
  );
};
