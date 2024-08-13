import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// import myimage from './assets/img/hero_right.png';
import logoimage from './asset/img/logo_black.png';
import icon from './asset/img/Amynasec_icon_logo.png';
import Communityimg from './assets/img/communityhome2.jpg';
// import stateimage from './assets/img/stats-img.svg';
// import team1 from './assets/img/team/arun.png';
// import team2 from'./assets/img/team/team-1.jpg';
// import footerimg from './assets/img/logo.png';

// import blog1 from './assets/img/blog1.png';

  

function Community() {
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

<div className="container position-relative secCommunity text-white" >
  <div className="row  justify-content-between">
    <div className="col-lg-8  d-flex flex-column justify-content-center ">
      <h2><span className="text-white">Welcome to our </span><span className="accent text-white">Community</span></h2>
      <p>where enthusiasts gather to share their passions and interests. Our Community is a vibrant hub for technology enthusiasts, hobbyists, professionals in a specific field. Whether you're looking to connect with like-minded individuals, learn new skills, or engage in lively discussions, you'll find a welcoming environment here.</p>
      
    </div>
    <div className="col-lg-4 order-1 order-lg-2">
      <img src={Communityimg} className="img-fluid" alt="" height="" width="450"/>
    </div>
  </div>
</div>  

</section>

<div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img src="https://via.placeholder.com/800x400" className="card-img-top" alt="Event 1"/>
                    <div className="card-body">
                        <h5 className="card-title">Community Event 1</h5>
                        <p className="card-text">Join us for an exciting event happening soon!</p>
                        <a href="#/" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card text-center">
                    <img src={icon} className="card-img-top" alt="Event 2" height="400" width="400" />
                    <div className="card-body">
                        <h5 className="card-title">Amynasec</h5>
                        <p className="card-text">Don't miss out on this amazing opportunity!</p>
                        <a href="https://www.linkedin.com/company/amynasec-labs/mycompany/" className="btn btn-primary">Join Us</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="https://via.placeholder.com/800x400" className="card-img-top" alt="Event 3"/>
                    <div className="card-body">
                        <h5 className="card-title">Community Event 3</h5>
                        <p className="card-text">Get involved and make a difference!</p>
                        <a href="#/" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    
   

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

export default Community;