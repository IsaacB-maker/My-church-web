import "./Events.css";

function Events() {
  const events = [
    { title: "Sunday Service", date: "Every Sunday", time: "9:00 AM", location: "Main Hall" },
    { title: "Youth Fellowship", date: "Every Friday", time: "5:00 PM", location: "Youth Room" },
    { title: "Prayer Meeting", date: "Every Wednesday", time: "6:00 PM", location: "Prayer Hall" },
    { title: "Community Outreach", date: "2nd Saturday of the Month", time: "10:00 AM", location: "Community Center" },
  ];

  return (
    <div className="events-page">
      {/* HERO */}
      <section className="events-hero">
        <h1>Upcoming Events</h1>
        <p>Join us and be part of our church activities</p>
      </section>

      {/* EVENTS LIST */}
      <section className="events-section">
        <div className="events-container">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Events;
