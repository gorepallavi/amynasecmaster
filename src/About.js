import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// import myimage from './assets/img/hero_right.png';
import logoimage from './asset/img/logo_black.png';
import aboutusimage from './asset/img/Amynasec_icon_logo.png';
// import stateimage from './assets/img/stats-img.svg';
import team from './assets/img/team/arun.png';
import team1 from'./assets/img/team/team-1.jpg';
// import footerimg from './assets/img/logo.png';
// import blog1 from './assets/img/blog1.png';

function About() {
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
        <section className="section" style={{ padding: '50px' }}>
          {/* Add content here if needed */}
        </section>

        <div className="slider-area slider-bg-2">
          <div className="breadcumb-overlay"></div>
          <div className="single-slider d-flex align-items-center slider-height2 custom-height">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="slider-shape d-none d-lg-block">
            <img className="slider-shape1" src="./Products _ Amynasec_files/top-left-shape.png" alt="" />
            <img className="slider-shape2" src="./Products _ Amynasec_files/right-top-shape.png" alt="" />
            <img className="slider-shape3" src="./Products _ Amynasec_files/left-botom-shape.png" alt="" />
          </div>
        </div>

        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>About Us</h2>
            <p></p>
          </div>
          <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5 justify-content-between">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h4>Our Vision is to establish a trustworthy relationship with our clients whilst enabling them
                  to secure their businesses through state-of-the-art solutions.</h4>
                <p>AmynaSec is a research-oriented security solutions provider offering a wide range of services
                  and solutions to clients to help them secure their businesses and infrastructure. 
                </p>
                <p>Comprising of consultants with over 10+ years of experience in ICS/SCADA, Automotive, IoT, Telecom,
                  Network, and various application security domains, AmynaSec is capable of delivering
                  state-of-the-art solutions and services.
                </p>
                <div className="d-flex">
                  <a href="#about/" className="btn-get-started">Get Started</a>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2">
                <img src={aboutusimage} className="img-fluid" alt="About Us" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 section-title">
              <h2>Why Choose Us</h2>
              <p>
                Our highly qualified team of subject matter expertise has become the most preferred choice in top consulting companies. We believe in delivering not only desired results but also make sure to build a healthy business relationship with all our clients by giving them value addition. From POCs to security implementation AmynaSec Labs has been quick to answer questions, provide feedback, and extensive support Every day, the men and women of AmynaSec Labs bring their range of backgrounds and experiences to the mission of finding new threats and securing your organizations.
              </p>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </section>

        <section id="team" className="team section">


<div className="container section-title" data-aos="fade-up">
  <h2>Our Team</h2>
  <p></p>
</div>
<div className="container">

  <div className="row gy-4">

  <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
      
      </div>

    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
      <div className="member">
        <img src={team} className="img-fluid" alt=""/>
        <h4>Arun Mane</h4>
        <span>CEO &amp; Founder </span>
        <div className="social">
          <a href="/"><i className="bi bi-twitter-x"></i></a>
          <a href="/"><i className="bi bi-facebook"></i></a>
          <a href="/"><i className="bi bi-instagram"></i></a>
          <a href="/"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
      <div className="member">
        <img src={team1} className="img-fluid" alt=""/>
        <h4>Ashish </h4>
        <span>Head of All Department</span>
        <div className="social">
          <a href="/"><i className="bi bi-twitter-x"></i></a>
          <a href="/"><i className="bi bi-facebook"></i></a>
          <a href="/"><i className="bi bi-instagram"></i></a>
          <a href="/"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
     
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

export default About;

