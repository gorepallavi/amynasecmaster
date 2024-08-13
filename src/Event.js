import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// import myimage from './assets/img/hero_right.png';
import logoimage from './asset/img/logo_black.png';
// import aboutusimage from './assets/img/Amynasec_icon_logo.png';
// import stateimage from './assets/img/stats-img.svg';
// import team1 from './assets/img/team/arun.png';
// import team2 from'./assets/img/team/team-1.jpg';
// import footerimg from './assets/img/logo.png';
// import blog1 from './assets/img/blog1.png';

function Event() {
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
        <section className="section" style={{ height: '1200px' }}>
          <div className="container-fluid text-center">    
            <div className="row content">
              <div className="col-sm-2 sidenav"></div>
              <div className="col-sm-8 text-left">
                <div className="section events" id="events">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <div className="section-heading">
                          <h6>Schedule</h6>
                          <h2>Upcoming Events</h2>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="item">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="image">
                                <img src="assets/images/event-01.jpg" alt="" />
                              </div>
                            </div>
                            <div className="col-lg-9">
                              <ul>
                                <li>
                                  <span className="category">Web Design</span>
                                  <h4>UI Best Practices</h4>
                                </li>
                                <li>
                                  <span>Date:</span>
                                  <h6>16 Feb 2036</h6>
                                </li>
                                <li>
                                  <span>Duration:</span>
                                  <h6>22 Hours</h6>
                                </li>
                                <li>
                                  <span>Price:</span>
                                  <h6>$120</h6>
                                </li>
                              </ul>
                              <a href="#/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-3">
                <div className="image">
                  <img src="assets/images/event-02.jpg" alt=""/>
                </div>
              </div>
              <div className="col-lg-9">
                <ul>
                  <li>
                    <span className="category">Front End</span>
                    <h4>New Design Trend</h4>
                  </li>
                  <li>
                    <span>Date:</span>
                    <h6>24 Feb 2036</h6>
                  </li>
                  <li>
                    <span>Duration:</span>
                    <h6>30 Hours</h6>
                  </li>
                  <li>
                    <span>Price:</span>
                    <h6>$320</h6>
                  </li>
                </ul>
                <a href="#/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                  </svg></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-3">
                <div className="image">
                  <img src="assets/images/event-03.jpg" alt=""/>
                </div>
              </div>
              <div className="col-lg-9">
                <ul>
                  <li>
                    <span className="category">Full Stack</span>
                    <h4>Web Programming</h4>
                  </li>
                  <li>
                    <span>Date:</span>
                    <h6>12 Mar 2036</h6>
                  </li>
                  <li>
                    <span>Duration:</span>
                    <h6>48 Hours</h6>
                  </li>
                  <li>
                    <span>Price:</span>
                    <h6>$440</h6>
                  </li>
                </ul>
                <a href="#/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg></a>
              </div>
            </div>
          </div>
        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 sidenav"></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h1 className="text-center my-5">Past Events Gallery</h1>
            <div className="row">
              <div className="col-md-4">
                <a href="#/" className="gallery-item">
                  <img src="https://via.placeholder.com/800x400" className="img-fluid" alt="Event 1" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="#/" className="gallery-item">
                  <img src="https://via.placeholder.com/800x400" className="img-fluid" alt="Event 2" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="#/" className="gallery-item">
                  <img src="https://via.placeholder.com/800x400" className="img-fluid" alt="Event 3" />
                </a>
              </div>
            </div>
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

export default Event;
