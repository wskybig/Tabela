import React, { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const [error, setError] = useState("");

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!form.firstName.trim()) return setError("Imię jest wymagane");
    if (!form.lastName.trim()) return setError("Nazwisko jest wymagane");
    if (!form.email.includes("@")) return setError("Email jest niepoprawny");
    setError("");
    // Tu można dodać wysyłkę do API
    console.log("Wysłano:", form);
    alert(`Wysłano: ${form.firstName} ${form.lastName}, ${form.email}`);
  }

  return (
    <div style={{ padding: 24, maxWidth: 420 }}>
      <h2>Formularz logowania</h2>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: 8 }}>
          <input
            name="firstName"
            type="text"
            placeholder="Imię"
            value={form.firstName}
            onChange={onChange}
            style={{ width: "100%", padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 8 }}>
          <input
            name="lastName"
            type="text"
            placeholder="Nazwisko"
            value={form.lastName}
            onChange={onChange}
            style={{ width: "100%", padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 8 }}>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={onChange}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        {error && (
          <p style={{ color: "red", marginTop: 0, marginBottom: 8 }}>{error}</p>
        )}

        <button type="submit" style={{ padding: "8px 16px" }}>Wyślij</button>
      </form>
    </div>
  );
}

