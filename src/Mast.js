import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import logoimage from './asset/img/logo_black.png';
// import footerimg from './assets/img/logo.png';

function Mast() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Initialize PureCounter after the component mounts
    if (window.PureCounter) {
      new window.PureCounter();
    }
  }, []);
  
  return (
    <>
     <header id="header" className="header fixed-top">

<div className="topbar d-flex align-items-center">
  <div className="container d-flex justify-content-center justify-content-md-between">
    <div className="contact-info d-flex align-items-center">
      <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:info@amynasec.io">info@amynasec.io</a></i>
      <i className="bi bi-phone d-flex align-items-center ms-4"><span>+91</span></i>
    </div>
    <div className="social-links d-none d-md-flex align-items-center">
      <a href="https://twitter.com/AmynaSec" className="twitter"><i className="bi bi-twitter-x"></i></a>
      <a href="https://www.facebook.com/people/AmynaSec/100057171982099/" className="facebook"><i className="bi bi-facebook"></i></a>
      <a href="https://www.instagram.com/amynasec.labs?igsh=MWd3dHVnMHp4M21xbA==" className="instagram"><i className="bi bi-instagram"></i></a>
      <a href="https://www.linkedin.com/company/amynasec-labs/mycompany/" className="linkedin"><i className="bi bi-linkedin"></i></a>
    </div>
  </div>
</div>
 {/* End Top Bar */}

<div className="branding d-flex align-items-cente">

  <div className="container position-relative d-flex align-items-center justify-content-between">
    <a href="index.html" className="logo d-flex align-items-center">
      {/* Uncomment the line below if you also wish to use an image logo  */}
       {/* <img src="assets/img/logo.png" alt="">  */}
      <a className="navbar-brand" href="#/">
        <img src={logoimage} width="180" height="80" alt=""/>
      </a>
      <span>.</span>
    </a>

    
    <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="/" className="">Home</a></li>
        <li ><a href="./services"><span>Services</span></a> </li>
        <li ><a href="./Blogs"><span>Blogs</span></a></li>
         {/* <li><a href="#team">Careers</a></li> */}
        <li className="dropdown"><a href="#/"><span>Media</span><i className="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="./Events">Events</a></li>
            <li><a href="./conference-Talks">Conferance Talks</a></li>
          </ul>
        </li>

        <li><a href="./Training">Training</a></li>
        <li><a href="./Community">Community</a></li>
        <li><a href="./About">About US</a></li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

  </div>

</div>

</header>

<main className="main">

    
   
 {/* Page Title  */}
<div className="page-title" data-aos="fade">
  <div className="heading">
    <div className="container">
      <div className="row d-flex justify-content-center text-center">
        <div className="col-lg-8">
          <h1>Services Details</h1>
        </div>
      </div>
    </div>
  </div>
  <nav className="breadcrumbs">
    <div className="container">
      <ol>
        <li><a href="index.html">Home</a></li>
        <li className="current">Mobile Application Security Testing </li>
      </ol>
    </div>
  </nav>
</div> 
{/* End Page Title  */}

 {/* Service Details Section  */}
<section id="service-details" className="service-details section">

  <div className="container">

    <div className="row gy-5">

      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">

       
        <div className="service-box">
          <h4>Serices List</h4>
          <div className="services-list">
            <a href="#/"><i className="bi bi-arrow-right-circle"></i><span>Automotive Security Assessment</span></a>
            <a href="#/"><i className="bi bi-arrow-right-circle"></i><span>IOT Security Assessment</span></a>
            <a href="#/"><i className="bi bi-arrow-right-circle"></i><span>Information Security Assessment</span></a>
            <a href="#/" ><i className="bi bi-arrow-right-circle"></i><span>Web Application Security Testing</span></a>
            <a href="#/"className="active" ><i className="bi bi-arrow-right-circle"></i><span>Mobile Application Security Testing </span></a>
            <a href="#/" ><i className="bi bi-arrow-right-circle"></i><span>Red Teaming Assessment </span></a>
            <a href="#/" ><i className="bi bi-arrow-right-circle"></i><span>API Security</span></a>
          </div>
        </div>
         {/* End Services List */}


        <div className="service-box">
          <h4>Download Catalog</h4>
          <div className="download-catalog">
            <a href="#/"><i className="bi bi-filetype-pdf"></i><span>Catalog PDF</span></a>
            
          </div>
        </div>
         {/* End Services List */}
      </div>

      <div className="col-lg-8 ps-lg-5" data-aos="fade-up" data-aos-delay="200">
      <h1>Mobile Application Security Testing

      </h1>
        <img src="https://via.placeholder.com/800x400" alt="" className="img-fluid services-img"/>

        <p>
        
          Mobile application security testing is performed to identify the vulnerabilities in a mobile application. In recent years, a surge in the usage of mobile technology has been observed and is only considered to be growing. With these scales of adaptation, we have seen rising incidents of mobile security. Cyber criminals are developing more precise and accurate programs that make use of the very viable mobile attack surface if left with an untailored security outlook.

        </p>
        <p>
          Hence, assessments like mobile application security help the developers remediate vulnerabilities on both Android and iOS platforms, found during the process thereby and enhance the overall security of the web application.

        </p>
        <p>
          Mobile application security performed as per OWASP Mobile TOP 10, helps to identify many unattended issues related to the client-side, server-side, file system, mobile hardware and network etc which may turn out to be vulnerabilities, causing a potential impact on the organization. Regular assessments as such help safeguard the application from any unauthorized access which can cause an impact on the organization both in reputation and resources.

        </p>
        <h4>
            Key Steps in Web Application Security Testing
        </h4>
        <p></p>
        <ul>
          <li> <span><h5><i className="bi bi-check-circle"></i> Information Gathering</h5> &emsp;&emsp; Post scope definition, gather information about the scoped systems to identify potential vulnerabilities</span></li>
          <li><span><h5><i className="bi bi-check-circle"></i>Vulnerability Analysis and Exploitation</h5>&emsp;&emsp;Identify and attempt to exploit security risks to gain access to additional assets.</span></li>
          <li><span><h5><i className="bi bi-check-circle"></i>Post-Exploitation Assessment</h5>&emsp;&emsp;Assess the value of the compromised entry point to determine further exploitation potential.</span></li>
          <li><span><h5><i className="bi bi-check-circle"></i>Initial Reporting</h5>&emsp;&emsp;Provide detailed descriptions of each reported vulnerability, including proof of concept (POC) and risk criticality.</span></li>
          <li><span><h5><i className="bi bi-check-circle"></i>Confirmatory Assessment</h5>&emsp;&emsp;Re-test the application and services to validate fixes applied after remediation.</span></li>
          <li><span><h5><i className="bi bi-check-circle"></i>Final Reporting</h5>&emsp;&emsp;Issue a Pass/Fail report based on the results of the confirmatory assessment. </span></li>
        </ul>
       
      </div>

    </div>

  </div>

</section>
 {/* Service Details Section  */}
  </main>

  <footer id="footer" className="footer fixed-bottom">

<div className="container footer-top">
  <div className="row gy-4">
    <div className="col-lg-3 col-md-12 footer-about">
      <a className="navbar-brand" href="#/">
        <img src={logoimage} width="180" height="80" alt=""/>
      </a>
      
      
      <div className="social-links d-flex mt-4">
        <a href="https://twitter.com/AmynaSec"><i className="bi bi-twitter-x"></i></a>
        <a href="https://www.facebook.com/people/AmynaSec/100057171982099/"><i className="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/amynasec.labs?igsh=MWd3dHVnMHp4M21xbA==" className="instagram"><i className="bi bi-instagram"></i></a>
      <a href="https://www.linkedin.com/company/amynasec-labs/mycompany/" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>

    <div className="col-lg-4 col-6 footer-links">
          <h4>Service</h4>
          <ul>
            <li><a href="/Single-servicepage">Automotive Security Assessment</a></li>
            <li><a href="/IOT Security Assesment">IOT Security Assessment</a></li>
            <li><a href="/Information Security Assesment">Information Security Assessment</a></li>
            <li><a href="/Wast"> Web Application Security Testing  </a></li>
            <li><a href="/Mast">Mobile Application Security Testing  </a></li>
            <li><a href="/Redteaming"> Red Teaming Assessment  </a></li>
            <li><a href="/Api"> API Security Testing  </a></li>
            
          </ul>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4>Quick link</h4>
          <ul>
            <li><a href="./services">Services</a></li>
            <li><a href="./conference-Talks">Conferance Talks</a></li>
            <li><a href="./Training">Training</a></li>
            <li><a href="./Blogs">Blogs</a></li>
            <li><a href="./Community">Community</a></li>
          </ul>
        </div>


        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
      <h4>Contact Us</h4>
      <p>Amynasec Labs, Park Plaza, 6th
    floor,17th Dhanori Road, Dhanori,
    Pune,Maharashtra 411015,India.</p>
      
      <p className="mt-4"><strong>Phone:</strong> <span>+91</span></p>
      <p><strong>Email:</strong> <span>info@amynasec.io</span></p>
    </div>

  </div>
</div>

<div className="container copyright text-center mt-4">
  <p> <span></span> <strong className="px-1 sitename"></strong> <span></span></p>
  <div className="credits">
    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    <a href="#/" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  </div>
</div>
{/* Scroll Top  */}


</footer>
    </>
  );
}

export default Mast;