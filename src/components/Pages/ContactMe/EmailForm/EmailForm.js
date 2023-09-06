import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './EmailForm.css'

function EmailForm() {
  const [fromName, setFromName] = useState('')
  const [fromEmail, setFromEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceId = 'service_fud4mps'
    const templateId = 'template_nljzs3b'
    const userId = '5ZRcT36aMkhsknnQP'

    emailjs
      .send(serviceId, templateId, {
        to_email: 'katzmansof@gmail.com',
        message: message,
        from_name: fromName,
        from_email: fromEmail,
      }, userId)
      .then((response) => {
        console.log('Email sent successfully!', response)
        setFromName('')
        setFromEmail('')
        setMessage('')
      })
      .catch((error) => {
        console.error('Error sending email:', error)
      })
  }

  return (
    <>
    <div className="email-form-container">
      <div className="email-form">
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
    </>
  )
}

export default EmailForm
