import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Church</h1>
          <p>A place of worship, love, and spiritual growth</p>

          <div className="hero-buttons">
            <Link to="/watch" className="btn primary">
              Watch Live
            </Link>
            <Link to="/about" className="btn secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="welcome">
        <h2>You Belong Here</h2>
        <p>
          We are a Christ-centered church dedicated to spreading the Gospel,
          serving our community, and growing together in faith.
        </p>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Service Times</h2>

        <div className="service-cards">
          <div className="card">
            <h3>Sunday Service</h3>
            <p>9:00 AM – 12:00 PM</p>
          </div>

          <div className="card">
            <h3>Midweek Fellowship</h3>
            <p>Wednesday – 6:00 PM</p>
          </div>

          <div className="card">
            <h3>Prayer Night</h3>
            <p>Friday – 7:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
