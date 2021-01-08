import React, { useState } from "react";
import { contact } from "./actions/Contact";

const ContactForm = () => {
  const [values, setValues] = useState({
    message: "",
    name: "",
    email: "",
    buttonText: "Send Message",
    success: false,
    error: false,
  });

  const { message, name, email, buttonText, success, error } = values;

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      buttonText: "Sending...",
    });
    contact({ name, email, message }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          message: "",
          buttonText: "Sent",
          success: data,
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
      error: false,
      success: false,
      buttonText: "Send Message",
    });
  };

  const showSuccessMessage = () =>
    success && (
      <div className="alert alert-info">
        Thanks {success.name} for contacting us.
        <br />
        We will contact you through you email which is {success.email}
      </div>
    );

  const showErrorMessage = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const contactForm = () => (
    <form onSubmit={clickSubmit} className="pb-5">
      <div className="form-group">
        <label className="lead">Message</label>
        <textarea
          onChange={handleChange("message")}
          type="text"
          className="form-control"
          value={message}
          style={{ resize: "none" }}
          rows="10"
        ></textarea>
      </div>

      <div className="form-group">
        <label className="lead">Name</label>
        <input
          type="text"
          onChange={handleChange("name")}
          className="form-control"
          value={name}
        />
      </div>

      <div className="form-group">
        <label className="lead">Email</label>
        <input
          type="email"
          onChange={handleChange("email")}
          className="form-control"
          value={email}
        />
      </div>
      <div>
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <>
      {showSuccessMessage()}
      {showErrorMessage()}
      <div className="pt-5 mr-5">
        <div className="col-md-4">{contactForm()}</div>
      </div>
    </>
  );
};

export default ContactForm;
