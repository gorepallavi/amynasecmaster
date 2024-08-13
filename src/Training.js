import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import logoimage from './asset/img/logo_black.png';
// import footerimg from './assets/img/logo.png';

function Training() {
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
        <section className="section">
          <div className="concontainer" data-aos="fade-up">
            {/* <h1>Training</h1> */}
          </div>
        </section>

        <section className="section">
          <div className="container section-title"> 
            <h2>Our Training</h2>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-12 "></div>
            <div className="col-lg-8 col-md-12">
              <div className="amypadding2">
                <h3>Delivered Workshop on “GnuRadio101” at x33fcon 2019 Poland</h3>
                <div className="conferancesty">
                  <p></p>
                  <div className="row">
                    <div className="col-xl-2 col-md-6"><a className="btn btn-light" href="https://www.x33fcon.com/#!w/arunm.md" target="_blank" rel="noopener noreferrer">Read More <i className="bi bi-chevron-right"></i></a></div>
                    <div className="col-xl-8 "></div>
                    <div className="col-xl-2 col-md-6"><b>Arun Mane</b></div>
                  </div>
                </div>
              </div>
              <br/>

              <div className="amypadding2">
                <h3>Delivered workshop on “Guided Tour to IEEE 802.15.4 and BLE Exploitation” at Defcon USA 2018</h3>
                <div className="conferancesty">
                  <p></p>
                  <div className="row">
                    <div className="col-xl-2 col-md-6"><a className="btn btn-light" href="https://www.x33fcon.com/#!archive/2019/w/arunm.md" target="_blank" rel="noopener noreferrer">Read More <i className="bi bi-chevron-right"></i></a></div>
                    <div className="col-xl-8 "></div>
                    <div className="col-xl-2 col-md-6"><b>Arun Mane</b></div>
                  </div>
                </div>
              </div>
              <br/>

              <div className="amypadding2">
                <h3>Main Trainer for “Practical Industrial Control System hacking” Delivering – HIP 2018, X33fcon 2018,2019</h3>
                <div className="conferancesty">
                  <p></p>
                  <div className="row">
                    <div className="col-xl-2 col-md-6"><a className="btn btn-light" href="https://hackinparis.com/trainings/#training-2018-practical-industrial-control-system-icshacking" target="_blank" rel="noopener noreferrer">Read More <i className="bi bi-chevron-right"></i></a></div>
                    <div className="col-xl-2 col-md-6"><a className="btn btn-light" href="https://www.x33fcon.com/#!t/rushi.md" target="_blank" rel="noopener noreferrer">Read More <i className="bi bi-chevron-right"></i></a></div>
                    <div className="col-xl-2 col-md-6"><a className="btn btn-light" href="https://www.x33fcon.com/#!t/arunm.md" target="_blank" rel="noopener noreferrer">Read More <i className="bi bi-chevron-right"></i></a></div>
                    <div className="col-xl-10 "></div>
                    <div className="col-xl-2 col-md-6"><b>Arun Mane</b></div>
                  </div>
                </div>
              </div>
              <br/>

              <div className="amypadding2">
                <h3>Co-Trainer for “Practical IOT hacking” with Aseem Jakhar – HITB 2017, HIP 2017, BlackHat Asia 2018, Nullcon 2017</h3>
                <div className="conferancesty">
                  <p>Private clients - Australia, Netherland, London, Sweden, etc</p>
                  <div className="row">
                    <div className="col-xl-10 "></div>
                    <div className="col-xl-2 col-md-6"><b>Arun Mane</b></div>
                  </div>
                </div>
              </div>
              <br/>

              <div className="amypadding2">
                <h3>ICS village speaker – Nullcon 2017, c0c0n X 2017, BsidesDelhi 2017, Defcamp 2017</h3>
                <div className="conferancesty">
                  <p>New generation malware and attacks have been targeting ICS and systems causing huge monetary and human life losses. Penetration testing on ICS systems is a very niche field which requires in-depth knowledge and has a huge dependency in terms of the Hardware availability. This contest/Context will concentrate on methodologies to conduct penetration testing of commercial Hardware devices such as PLCs as well as simulators.</p>
                  <div className="row">
                    <div className="col-xl-2 col-md-6"><a className="btn btn-light" href="https://nullcon.net/website/goa2017/speakers/arun_mane.php" target="_blank" rel="noopener noreferrer">Read More <i className="bi bi-chevron-right"></i></a></div>
                    <div className="col-xl-2 col-md-6"><a className="btn btn-light" href="http://is-ra.org/c0c0n/ics_and_iot_village" target="_blank" rel="noopener noreferrer">Read More <i className="bi bi-chevron-right"></i></a></div>
                    <div className="col-xl-2 col-md-6"><a className="btn btn-light" href="https://bsidesdelhi.in/arun-mane/" target="_blank" rel="noopener noreferrer">Read More <i className="bi bi-chevron-right"></i></a></div>
                    <div className="col-xl-2 col-md-6"><a className="btn btn-light" href="https://def.camp/speaker/arun-mane/" target="_blank" rel="noopener noreferrer">Read More <i className="bi bi-chevron-right"></i></a></div>
                    <div className="col-xl-2 "></div>
                    <div className="col-xl-2 col-md-6"><b>Arun Mane</b></div>
                  </div>
                </div>
              </div>
              <br/>

              <div className="amypadding2">
                <h3>Speaker at Nullcon 2016 – “Hitchhiker's guide to hacking Industrial Control systems (ICS)”</h3>
                <div className="conferancesty">
                  <p>Todays new gen attacks and malwares have been targeting ICS systems causing huge monetary and human life losses. The White Security Community lacks knowledge and resources to cope with these modern-day attacks. This talk will concentrate on bridging this gap and enabling the White Hat security Community to mitigate some of these common attacks. Hacking Industrial Control systems (ICS) is a very niche field which not only requires in-depth knowledge but also has huge dependencies in terms of hardware. Due to this, there is a significant gap between security enthusiasts and accessibility to this technology. In this talk, I will be releasing a TEST BED which is an emulation of an ICS system. I will also be guiding people on how to begin/approach pen-testing of an ICS system.</p>
                  <div className="row">
                    <div className="col-xl-2 col-md-6"><a className="btn btn-light" href="https://nullcon.net/website/nullcon-2016/speakers/arun-mane.php" target="_blank" rel="noopener noreferrer">Read More <i className="bi bi-chevron-right"></i></a></div>
                    <div className="col-xl-8 "></div>
                    <div className="col-xl-2 col-md-6"><b>Arun Mane</b></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 "></div>
          </div>
        </section>
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

export default Training;
