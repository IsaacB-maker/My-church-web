import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",    // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",   // Replace with your EmailJS Template ID
        formRef.current,
        "YOUR_PUBLIC_KEY"     // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully! 🙏");
          formRef.current.reset(); // clear the form after sending
        },
        (error) => {
          alert("Failed to send message. Please try again ❌");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-container">
        {/* CONTACT FORM */}
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/256XXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
          Chat on WhatsApp
        </a>

        {/* GOOGLE MAP EMBED */}
        <div className="contact-map">
          <iframe
            title="Church Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.123456789!2d32.5823456789!3d0.3471234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db123456789%3A0xabcdef1234567890!2sYour%20Church%20Name!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "12px", marginTop: "20px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
