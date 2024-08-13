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
import Contact from'./Contact';

ReactDOM.render(
  <Router basename="/<amynasecmaster>">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<Service />} />
      <Route path="/Blogs" element={<Blogs />} />
      <Route path="/events" element={<Event />} />
      <Route path="/conference-Talks" element={<Conferancetalks />} />
      <Route path="/Training" element={<Training />} />
      <Route path="/Community" element={<Community />} />
      <Route path="/About" element={<About />} />
      <Route path="/Single-servicepage" element={<Singleservicepage />} />
      <Route path="/IOT Security Assesment" element={<IOTsecurity />} />
      <Route path="/Information Security Assesment" element={<InformationSecurity />} />
      <Route path="/Wast" element={<Wast />} />
      <Route path="/Mast" element={<Mast />} />
      <Route path="/Redteaming" element={<Redteaming />} />
      <Route path="/Api" element={<Api />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
