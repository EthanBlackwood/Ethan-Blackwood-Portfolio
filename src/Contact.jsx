import React, { useState } from 'react';
import contactBg from './assets/ContactBackground.png'; 

const Contact = () => {
  window.scrollTo(0, 0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {//handle/stop default form redirect
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mojkwral", {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Oops! Network error. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <main className="contact-page" style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="contact-container">
        
        <div className="contact-header">
          <h2>Let's Get In Touch</h2>
          <p>Have a question or want to work together? Drop me a message below!</p>
          
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input type="text" id="name" name="name" required placeholder="Your Name" disabled={isSubmitting} />
          </div>

          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" name="email" required placeholder="you@email.com" disabled={isSubmitting} />
          </div>

          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea id="message" name="message" rows="6" required placeholder="How can I help you?" disabled={isSubmitting}></textarea>
          </div>

          
          {isSuccess ? (
            <div className="success-message" style={{ color: '#18005c', fontWeight: 'bold', textAlign: 'center', padding: '1rem' }}>
              Message sent successfully! I'll be in touch soon.
            </div>
          ) : (
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          )}

        </form>

          <div className="contact-header">
            <p>Or reach out at: ethanblackwood45@gmail.com</p>
          </div>
          
      </div>
    </main>
  );
};

export default Contact;