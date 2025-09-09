import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name) {
      setError("Imię jest wymagane");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Email jest niepoprawny");
      return;
    }
    setError("");
    console.log("Formularz wysłany:", formData);
    alert(`Wysłano: ${formData.name}, ${formData.email}`);
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h2>Formularz testowy</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Imię" value={formData.name} onChange={handleChange} />
        <br />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}

