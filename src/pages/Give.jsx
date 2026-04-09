import "./Give.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Give() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_trur4a1",
        "template_rdgnd3j",
        {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  },
        "kcWCUwb7lKz1aWvex"
      )
      .then(
        () => {
          alert("🙏 Thank you! Your prayer request has been sent.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          alert("❌ Message failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="give-page">
      {/* HERO */}
      <section className="give-hero">
        <h1>Give Online</h1>
        <p>Your generosity helps us reach more lives</p>
      </section>

      {/* VERSE */}
      <section className="give-verse">
        <p>
          “Each one must give as he has decided in his heart, not reluctantly or
          under compulsion, for God loves a cheerful giver.” —{" "}
          <strong>2 Corinthians 9:7</strong>
        </p>
      </section>

      {/* GIVE OPTIONS */}
      <section className="give-options-section">
        <h2>Select Giving Type</h2>
        <div className="give-options">
          <div className="give-card">
            <h3>Tithe</h3>
            <p>Honor God with your tithe</p>
          </div>
          <div className="give-card">
            <h3>Offering</h3>
            <p>Support the work of the ministry</p>
          </div>
          <div className="give-card">
            <h3>Donation</h3>
            <p>Give towards special causes</p>
          </div>
        </div>
      </section>

      {/* AMOUNT */}
      <section className="amount-section">
        <h2>Choose Amount</h2>
        <div className="amount-boxes">
          <button type="button">10,000 UGX</button>
          <button type="button">20,000 UGX</button>
          <button type="button">50,000 UGX</button>
          <button type="button">Other</button>
        </div>

        <button className="give-now" type="button">Give Now</button>
        <p className="secure-text">🔒 Secure & confidential giving</p>
      </section>

      {/* PRAYER REQUEST */}
      <section className="prayer-request">
        <h2>Submit a Prayer Request</h2>
        <p>We would love to pray with you</p>

        <form
          ref={formRef}
          className="prayer-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Prayer Request"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="give-now">
            Submit Prayer
          </button>
        </form>
      </section>
    </div>
  );
}

export default Give;
