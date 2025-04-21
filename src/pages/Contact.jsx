import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('Please fill out all fields');
      return;
    }

    alert('Thanks for the info loser!');
    setName('');
    setEmail('');
    setMessage('');
    setError('');
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Send</button>
      </form>

      <div>
        <h3>Contact Information</h3>
        <p>Email: opherphilms@gmail.com</p>
        <p>Socials: <a href="https://tiktok.com/@opherphilms">TikTok</a></p>
      </div>
    </div>
  );
}

export default Contact;