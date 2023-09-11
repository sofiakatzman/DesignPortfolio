import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './EmailForm.css';

function EmailForm() {
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false); // State to track email sending status

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_fud4mps';
    const templateId = 'template_nljzs3b';
    const userId = '5ZRcT36aMkhsknnQP';

    emailjs
      .send(serviceId, templateId, {
        to_email: 'katzmansof@gmail.com',
        message: message,
        from_name: fromName,
        from_email: fromEmail,
      }, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setFromName('');
        setFromEmail('');
        setMessage('');
        setEmailSent(true); // Update the email sending status
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <>
      {emailSent ? ( // Render "Thank you" message if email is sent
        <div className="email-form-container">
          <div className="email-form">
            <p>Message Received! Talk to you soon!</p>
          </div>
        </div>
      ) : (
        <div className="email-form-container">
          <div className="email-form">
            Want to get in touch? <br/><br/>Fill this form, and I'll get back to you right away! <br/><br/>
            <form onSubmit={handleSubmit}>
              <label>
                Your Name:
                <input
                  type="text"
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  required
                />
              </label>
              <label>
                Your Email:
                <input
                  type="email"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                Message:
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Send Email</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default EmailForm;