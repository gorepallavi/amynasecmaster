import React, { useEffect } from 'react';
//import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import myimage from './assets/img/hero_right.png';
import logoimage from './asset/img/logo_black.png';
import aboutusimage from './asset/img/Amynasec_icon_logo.png';
import stateimage from './assets/img/stats-img.svg';
import team1 from './assets/img/team/arun.png';
import team2 from'./assets/img/team/team-1.jpg';
import Contact from './Contact';
// import footerimg from './assets/img/logo.png';


// import Service from './Service';

function App() {
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
        <li><a href="./Community">community</a></li>
        <li><a href="./About">About US</a></li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

  </div>

</div>

</header>


<main>
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2>
                <span>Advance Research & Security</span>
                <span className="accent">Solutions!</span>
              </h2>
              <p>
                We are a research-oriented security solutions provider offering a wide range of services and solutions to help secure businesses and infrastructure.
              </p>
              <div className="d-flex">
                <a href="#about" className="btn-get-started">Get Started</a>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2">
              <img src={myimage} className="img-fluid" alt="Illustration of research and security solutions" />
            </div>
          </div>
        </div>

        <div className="icon-boxes position-relative">
  <div className="container position-relative">
    <div className="row gy-4 mt-5">
      <div className="col-xl-4 col-md-6">
        <div className="icon-box">
          <div className="icon"><i className="bi bi-easel"></i></div>
          <h4 className="title"><a href="/" className="stretched-link">Uno Academy</a></h4>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="icon-box">
          <div className="icon"><i className="bi bi-geo-alt"></i></div>
          <h4 className="title"><a href="/" className="stretched-link">Locations</a></h4>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="icon-box">
          <div className="icon"><i className="bi bi-command"></i></div>
          <h4 className="title"><a href="/" className="stretched-link">Instagram</a></h4>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

      <section id="about" className="about section">
        <div className="container" data-aos="fade-up">
          <p>The name is derived from 'Amyna' the Greek word for “Defense” and Amina the Arabic word for “Trustworthy”. Our vision is to establish a trustworthy relationship with our clients whilst enabling them to secure their businesses through state-of-the-art solutions.</p>
        </div>
      </section>
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
                Network and various application security domains, AmynaSec is capable of delivering
                state-of-the-art solutions and services.
            </p>
            <div className="d-flex">
                <a href="#about" className="btn-get-started">Get Started</a>
              </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2">
            <img src={aboutusimage} className="img-fluid" alt=""/>
          </div>
        </div>
      </div>
    </section>
<section id="stats" className="stats section">

<div className="container" data-aos="fade-up" data-aos-delay="100">

  <div className="row gy-4 align-items-center">

    <div className="col-lg-5">
      <img src={stateimage} alt="" className="img-fluid"/>
    </div>

    <div className="col-lg-7">

      <div className="row gy-4">

        <div className="col-lg-6">
          <div className="stats-item d-flex">
            <i className="bi bi-emoji-smile flex-shrink-0"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="stats-item d-flex">
            <i className="bi bi-journal-richtext flex-shrink-0"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="stats-item d-flex">
            <i className="bi bi-headset flex-shrink-0"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="stats-item d-flex">
            <i className="bi bi-people flex-shrink-0"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>

</div>

</section>


<section id="services" className="services section">

      
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
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
              <a href="#Automotive Security Assessment" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-diagram-3"></i>
              </div>
              <h3>IoT Security Assessment</h3>
              <p>we meticulously analyze the vulnerabilities and fortify the integrity of your interconnected devices.</p>
              <a href="service-details.html" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-shield-lock"></i>
              </div>
              <h3>Information Security Assessment</h3>
              <p>In every industry, digital transformation is unique, revolutionizing operations through technology integration. Banks leveraging digital cores enjoy cost efficiencies and enhanced customer experiences. Yet, attackers exploit vulnerabilities, eroding trust through social engineering. Our tailored services offer VAPT and cybersecurity awareness programs, safeguarding banks against evolving threats.</p>
              <a href="service-details.html" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

        </div>

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
              <img src={team1} className="img-fluid" alt=""/>
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
              <img src={team2} className="img-fluid" alt=""/>
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


    <section id="faq" className="faq section">

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="content px-xl-5">
              <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
              <p>
              Navigate through common queries effortlessly.
              </p>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

            <div className="faq-container">
              <div className="faq-item faq-active">
                <h3><span className="num">1.</span> <span>What is security testing, and why is it important?</span></h3>
                <div className="faq-content">
                  <p>Security testing is the process of evaluating a system or application to identify vulnerabilities and weaknesses that could be exploited by malicious actors. It's crucial because it helps prevent data breaches, protects sensitive information, maintains customer trust, and ensures compliance with regulations.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item">
                <h3><span className="num">2.</span> <span> What types of security testing do you offer?</span></h3>
                <div className="faq-content">
                  <p>We offer a comprehensive range of security testing services, including penetration testing, vulnerability assessments, code reviews, security architecture reviews, security training, and compliance testing.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item">
                <h3><span className="num">3.</span> <span>How does security testing differ from regular testing?</span></h3>
                <div className="faq-content">
                  <p>While regular testing focuses on functionality and performance, security testing specifically targets identifying potential security risks and vulnerabilities within a system or application.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              <div className="faq-item">
                <h3><span className="num">4.</span> <span>What industries do you serve?</span></h3>
                <div className="faq-content">
                  <p>We serve a diverse range of industries, including finance, healthcare, e-commerce, government, technology, and more. Our tailored approach ensures that the unique security needs of each industry are addressed effectively.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item">
                <h3><span className="num">5.</span> <span>How often should security testing be conducted?</span></h3>
                <div className="faq-content">
                  <p>The frequency of security testing depends on various factors, such as industry regulations, changes to the system or application, and emerging threats. However, it's generally recommended to conduct security testing regularly, ideally as part of the development lifecycle and whenever significant changes are made to the system.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              <div className="faq-item">
                <h3><span className="num">6.</span> <span>Can you work with both small businesses and large enterprises?</span></h3>
                <div className="faq-content">
                  <p>Yes, we cater to businesses of all sizes. Whether you're a startup, small business, or large enterprise, our flexible security testing solutions can be tailored to meet your specific needs and budget.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
   <Contact/>
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

export default App;