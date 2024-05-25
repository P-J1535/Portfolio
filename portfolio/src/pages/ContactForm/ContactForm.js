import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formValues = new URLSearchParams();
    for (const key in formData) {
      formValues.append(key, formData[key]);
    }

    try {
      const res = await axios.post(
        `https://script.google.com/macros/s/AKfycbyB3KT7eBDEgU6150JK_48GzU2-K5Em1MXQrKhb84anIOJcIC7uOotJ1p5uDivE2sWEAg/exec`,
        formValues,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      if (res.status === 200) {
        alert("Thank You! We will get back to you");
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: ''
        });
      }
    } catch (error) {
      alert("Error submitting data");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <header>
        <form onSubmit={formSubmit}>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </header>
    </div>
  );
}

export default ContactForm;
