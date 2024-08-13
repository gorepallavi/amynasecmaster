import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Service from './Service';
import Blogs from './Blogs';
import Event from './Event';
import Conferancetalks from './Conferancetalks';
import Training from './Training';
import Community from './Community';
import About from './About';
import Singleservicepage from './Single-servicepage';
import IOTsecurity from './IOT Security Assesment';
import InformationSecurity from './Information Security Assesment';
import Wast from './Wast';
import Mast from './Mast';
import Redteaming from './Redteaming';
import Api from './Api';
import Contact from './Contact';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<Service />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/events" element={<Event />} />
      <Route path="/conference-talks" element={<Conferancetalks />} />
      <Route path="/training" element={<Training />} />
      <Route path="/community" element={<Community />} />
      <Route path="/about" element={<About />} />
      <Route path="/single-servicepage" element={<Singleservicepage />} />
      <Route path="/iot-security-assessment" element={<IOTsecurity />} />
      <Route path="/information-security-assessment" element={<InformationSecurity />} />
      <Route path="/wast" element={<Wast />} />
      <Route path="/mast" element={<Mast />} />
      <Route path="/redteaming" element={<Redteaming />} />
      <Route path="/api" element={<Api />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
