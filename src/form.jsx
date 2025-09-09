import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name) {
      setError("Imie jest wymagane");
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setError("Email jest niepoprawny");
      return;
    }
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      setError("Numer telefonu moze zawierac tylko cyfry");
      return;
    }
    if (!formData.message || formData.message.trim().length < 10) {
      setError("Wiadomosc musi miec co najmniej 10 znakow");
      return;
    }
    setError("");
    alert(`Imie: ${formData.name}\nEmail: ${formData.email}\nWiadomosc: ${formData.message}`);
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "480px" }}>
      <h2>Formularz kontaktowy</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Imie"
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <br />
        <label htmlFor="phone" style={{ display: "block", marginBottom: 4 }}>Numer telefonu</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="np. 123456789"
          value={formData.phone}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <br />
        <textarea
          name="message"
          placeholder="Wiadomosc"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Wyslij</button>
      </form>
    </div>
  );
}
