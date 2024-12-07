import React from "react";
import { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email } = formData;

    const isNameValid = name.trim().length > 5;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = regex.test(email);

    return isNameValid && isEmailValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setError(false);
      setSuccessMessage(
        `Gracias ${formData.name}, te contactaremos cuando antes vía mail`
      );
    } else {
      setError(true);
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>Por favor verifique su información nuevamente</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Form;
