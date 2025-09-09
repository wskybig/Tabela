import React, { useEffect, useState } from 'react';
import './styles.css';

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: 'example@email.com',
    phone: '123-456-7890',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const samples = [
    { name: 'Alice Smith', email: 'alice@example.com', phone: '+48 600 111 222', message: 'Hello there!' },
    { name: 'Bob Johnson', email: 'bob@example.com', phone: '+48 601 222 333', message: 'Nice to meet you!' },
    { name: 'Charlie Davis', email: 'charlie@example.com', phone: '+48 602 333 444', message: 'Just a quick hello!' },
    { name: 'Diana Moore', email: 'diana@example.com', phone: '+48 603 444 555', message: 'Checking the form UI.' }
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % samples.length), 3000);
    return () => clearInterval(t);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 400));
      alert('Submitted: ' + JSON.stringify(formData, null, 2));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="layout">
      <div className="card">
        <h1 className="form-title">Contact form</h1>
        <p className="form-sub">Fill the fields below and hit Send.</p>
        <form onSubmit={handleSubmit} className="form-grid" noValidate>
          <div>
            <label className="label" htmlFor="name">Name</label>
            <input id="name" className="input" type="text" name="name" placeholder="John Doe"
              value={formData.name} onChange={handleChange} disabled={submitting} />
          </div>
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input id="email" className="input" type="email" name="email" placeholder="you@example.com"
              value={formData.email} onChange={handleChange} disabled={submitting} />
          </div>
          <div>
            <label className="label" htmlFor="phone">Phone</label>
            <input id="phone" className="input" type="tel" name="phone" placeholder="+48 600 000 000"
              value={formData.phone} onChange={handleChange} disabled={submitting} />
          </div>
          <div>
            <label className="label" htmlFor="message">Message</label>
            <textarea id="message" className="textarea" name="message" placeholder="Type your message..."
              value={formData.message} onChange={handleChange} disabled={submitting} />
          </div>
          <button className="btn" type="submit" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>

      <div className="card">
        <div className="sample-header">
          <h2 className="form-title" style={{margin:0}}>Example data</h2>
          <div className="sample-pager">
            {samples.map((_, i) => (
              <span key={i} className={'dot' + (i === idx ? ' active' : '')} />
            ))}
          </div>
        </div>
        <div className="sample-box">
          <div className="sample-item"><strong>Name:</strong> {samples[idx].name}</div>
          <div className="sample-item"><strong>Email:</strong> {samples[idx].email}</div>
          <div className="sample-item"><strong>Phone:</strong> {samples[idx].phone}</div>
          <div className="sample-item"><strong>Message:</strong> {samples[idx].message}</div>
          <p className="helper">Entries rotate every 3 seconds.</p>
        </div>
      </div>
    </div>
  );
}
