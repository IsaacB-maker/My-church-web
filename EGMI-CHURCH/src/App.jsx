import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PAGES */
import Home from "./pages/Home";
import About from "./pages/About";
import Pastor from "./pages/Pastor";
import MinistryProfile from "./pages/MinistryProfile";
import StatementOfFaith from "./pages/StatementOfFaith";
import Watch from "./pages/Watch";
import Give from "./pages/Give";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Sermons from "./pages/Sermons";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* MAIN */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />
        <Route path="/pastor" element={<Pastor />} />
        <Route path="/ministry-profile" element={<MinistryProfile />} />
        <Route path="/statement-of-faith" element={<StatementOfFaith />} />

        {/* MEDIA */}
        <Route path="/watch" element={<Watch />} />
        <Route path="/sermons" element={<Sermons />} />

        {/* OTHER */}
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/give" element={<Give />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
