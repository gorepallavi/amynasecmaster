import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// import myimage from './assets/img/hero_right.png';
import logoimage from './asset/img/logo_black.png';
// import aboutusimage from './asset/img/Amynasec_icon_logo.png';
// import stateimage from './assets/img/stats-img.svg';
// import team1 from './assets/img/team/arun.png';
// import team2 from'./assets/img/team/team-1.jpg';
// import footerimg from './assets/img/logo.png';

function Service() {
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


<body className="index-page">

<section id="hero" className="text-white text-center">
    <div className="container">
      <h1 className="display-4">Our Professional Services</h1>
      <p className="lead"></p>
    </div>
  </section>
  <section id="services" className="services section">


<div className="container section-title" data-aos="fade-up">
  <h2>Our Services </h2>
  <p></p>
</div>

<div className="container">

  <div className="row gy-4">

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div className="service-item  position-relative">
        <div className="icon">
          <i className="bi bi-car-front-fill"></i>
        </div>
        <h3>Automotive Security Assessment</h3>
        <p>Every day in our life transportation have become most indeed to travel from one place to another whether it long or short distance, have we ever thought of security risk behind those vehicles.</p>
        <a href="/Single-servicepage" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
       
        {/*  <button type="button" className="btn btn-light" data-toggle="modal" data-target="#fullScreenModal">
            Read More<i className="bi bi-arrow-right"></i>
          </button> */}
      </div>
    </div>
      

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
      <div className="service-item position-relative">
        <div className="icon">
          <i className="bi bi-diagram-3"></i>
        </div>
        <h3>IoT Security Assessment</h3>
        <p>we meticulously analyze the vulnerabilities and fortify the integrity of your interconnected devices.</p>
        <a href="/IOT Security Assesment" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
      </div>
    </div>

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
      <div className="service-item position-relative">
        <div className="icon">
          <i className="bi bi-shield-lock"></i>
        </div>
        <h3>Information Security Assessment</h3>
        <p>In every industry, digital transformation is unique, revolutionizing operations through technology integration. Banks leveraging digital cores enjoy cost efficiencies and enhanced customer experiences. Yet, attackers exploit vulnerabilities, eroding trust through social engineering. Our tailored services offer VAPT and cybersecurity awareness programs, safeguarding banks against evolving threats.</p>
        <a href="/Information Security Assesment" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
      </div>
    </div>
    
    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="service-item  position-relative">
          <div className="icon">
            <i className="bi bi-window-stack"></i>
          </div>
          <h3>Web Application Security Testing</h3>
          <p>Web application security testing is essential to identify vulnerabilities in web applications. As web technologies become increasingly integrated into various domains, the potential for attacks on web applications grows if security measures are not adequately addressed. This testing helps developers fix vulnerabilities and enhance the overall security of their web applications</p>
          <a href="/Wast" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-phone-vibrate"></i>
          </div>
          <h3>Mobile Application Security Testing</h3>
          <p>Mobile application security testing identifies vulnerabilities in mobile applications. The surge in mobile technology usage has led to increased incidents of mobile security breaches. Cybercriminals exploit these vulnerabilities if security measures are not properly implemented.</p>
          <a href="/Mast" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-shield-lock"></i>
          </div>
          <h3>Red Teaming Assessment</h3>
          <p>QRC offers a specialized Red Teaming assessment to evaluate an organization's security posture and identify vulnerabilities exploitable by real-world attackers. This assessment simulates various attack scenarios to uncover weak points in the current defense mechanisms.</p>
          <a href="/Redteaming" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-app-indicator"></i>
          </div>
          <h3>API Security Testing</h3>
          <p>API security testing identifies, classNameifies, and exploits potential vulnerabilities in Application Programming Interfaces (APIs) and web services. This testing helps developers remediate vulnerabilities and enhance overall security, protecting software from unauthorized access.</p>
          <a href="/Api" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
  </div>

</div>

</section>

      
      



</body>
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

export default Service;
