import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h2>Electus Gospel<br></br> Ministries<br></br> International</h2>
          <p>Building faith, hope, and love in Christ.</p>
        </div>

        <div>
          <h2>Weekly Church Programs</h2>
          <p><h3> Sunday</h3> Service / healing & Delivery: 10:00 AM - 12:30 PM</p>
          <p><h3>Wednesday</h3> Midweek Service: 5:00 PM - 6:00 PM</p>
          <p><h3>Saturday</h3> Counselling: 9:00AM - 4:00 PM </p>
        </div>

        <div>
          <h2>Contact</h2>
          <p>Email: internationalelectusgospelmini@gmail.com</p>
          <p><b>Phone;</b><br></br> Airtel: +256 705311604<br></br>
                                     MTN: +256 764126353</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Electus Gospel Ministries International. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
