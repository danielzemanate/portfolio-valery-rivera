import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name__principal: "",
    email__principal: "",
    // project__principal: "",
    message__textarea: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isFormFilled =
      formData.name__principal &&
      formData.email__principal &&
      formData.message__textarea;

    setIsSubmitDisabled(!isFormFilled);
  }, [formData]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isSubmitDisabled) {
      Swal.fire({
        icon: "error",
        title: "Required Fields",
        text: "Complete the form fields to continue!",
        confirmButtonColor: "#e05757",
        confirmButtonText: "Ok!",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Mail sent successfully!",
        text: "Thank you for contacting me!",
        showConfirmButton: false,
        timer: 3000,
      });
      // You can perform form submission logic here
      // For example, you can use the formData state to send data to the server

      // Reset the form fields after submission
      setFormData({
        name__principal: "",
        email__principal: "",
        //   project__principal: "",
        message__textarea: "",
      });
    }
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="fab fa-instagram fa-lg contact__icon"></i>

            <div>
              <h3 className="contact__title">Chat me</h3>
              <span className="contact__subtitle">@danielzemanate</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="far fa-envelope contact__icon"></i>

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">
                danielzemanate@gmail.com
              </span>
            </div>
          </div>

          <div className="contact__information">
            <i className="fas fa-map-marker-alt contact__icon"></i>

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">
                Colombia - Popayán, Cauca
              </span>
            </div>
          </div>
        </div>
        {/* FORM */}
        <form
          action="/assets/return/greeting"
          className="contact__form grid"
          method="post"
          name="form__validation"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="form__validation" />
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name__principal" className="contact__label">
                Name
              </label>
              <input
                type="text"
                className="contact__input"
                name="name__principal"
                value={formData.name__principal}
                onChange={handleChange}
              />
            </div>
            <div className="contact__content">
              <label htmlFor="email__principal" className="contact__label">
                Email
              </label>
              <input
                type="email"
                className="contact__input"
                name="email__principal"
                value={formData.email__principal}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="message__textarea" className="contact__label">
              Message
            </label>
            <textarea
              name="message__textarea"
              className="contact__input contact__textarea"
              value={formData.message__textarea}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="submit"
              className="button contact__submit button--flex "
              value="Send message"
              style={{ cursor: "pointer" }}
              //   disabled={isSubmitDisabled}
            />
          </div>
        </form>
      </div>
      {/* ALERT SUCCESS SEND EMAIL */}
      {/* {showAlert && (
        <div className="centered-alert">
          <div className="alert alert-2-success">
            <h3 className="alert-title">Email</h3>
            <p className="alert-content">Mail sent successfully!</p>
          </div>
        </div>
      )} */}
    </section>
  );
};
