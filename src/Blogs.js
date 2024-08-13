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
import blog1 from './assets/img/blog1.png';

function Blogs() {
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

    
   
{/* <!-- Blog 1 - Bootstrap Brain Component --> */}
<section id="blogs" className="blogs py-3 py-md-5">
    <div className="container position-relative ">

      <div className="container section-title" data-aos="fade-up">
      

        <p>   </p>
      </div>
      <div className="row gy-5">
        <div className="col-12">
          <div className="row align-items-center gy-3 gy-md-0 gx-xl-5">
            <div className="col-xs-12 col-md-6">
              <div className="img-wrapper position-relative bsb-hover-push">
                <a href="#!">
                  <span className="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">UART</span>
                  <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src={blog1} alt="Sports"/>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div>
                <p className="text-secondary mb-1">Jun 11, 2024</p>
                <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Understanding UART</a></h2>
                <p className="mb-4">In the world of electronics and microcontrollers, communication between devices is crucial. One popular method for serial communication is UART, which stands for Universal Asynchronous Receiver/Transmitter. This blog will walk you through the basics of UART, its working principle, and its applications.</p>
                <a className="btn btn-primary" href="Blogs.php?id=1" target="_self">Read More</a>
              </div>
            </div>
          </div>
        </div>
  
        <div className="col-12">
          <div className="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
            <div className="col-xs-12 col-md-6">
              <div className="img-wrapper position-relative bsb-hover-push">
                <a href="#!">
                  <span className="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">Travel</span>
                  <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src="https://via.placeholder.com/800x400" alt="Travel"/>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div>
                <p className="text-secondary mb-1">Oct 9, 2022</p>
                <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Strange Facts About Hot Air Balloons</a></h2>
                <p className="mb-4">You think the Wright Brothers were impressive? Hot air balloons were carrying people through the air almost a century before the Wright Brothers were even born.</p>
                <a className="btn btn-primary" href="#!" target="_self">Read More</a>
              </div>
            </div>
          </div>
        </div>
  
        <div className="col-12">
          <div className="row align-items-center gy-3 gy-md-0 gx-xl-5">
            <div className="col-xs-12 col-md-6">
              <div className="img-wrapper position-relative bsb-hover-push">
                <a href="#!">
                  <span className="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">Photography</span>
                  <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src="https://via.placeholder.com/800x400" alt="Photography"/>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div>
                <p className="text-secondary mb-1">Sep 17, 2022</p>
                <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Reasons Why Photography Is an Art Form</a></h2>
                <p className="mb-4">Before the first photo was captured in the 18th century, lifelike images of what the eyes can see could only be made by talented artists.</p>
                <a className="btn btn-primary" href="#!" target="_self">Read More</a>
              </div>
            </div>
          </div>
        </div>
  
        <div className="col-12">
          <div className="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
            <div className="col-xs-12 col-md-6">
              <div className="img-wrapper position-relative bsb-hover-push">
                <a href="#!">
                  <span className="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">Food</span>
                  <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src="https://via.placeholder.com/800x400" alt="Food"/>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div>
                <p className="text-secondary mb-1">Aug 23, 2022</p>
                <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Benefits of Having a Heavy Breakfast Every Morning</a></h2>
                <p className="mb-4">Running late for work or school? "Let’s skip the breakfast!" Well, this might sound like the most ideal idea to save time when you are on the run.</p>
                <a className="btn btn-primary" href="#!" target="_self">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Blogs --> */}
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

export default Blogs;