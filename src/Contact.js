import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
//import logoimage from './asset/img/logo_black.png';

export const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('service_tw4wx3p', 'template_9iu618e', form.current, '3z3aHjmvgtRhr54qf')
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          setIsSending(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSending(false);
        },
      );
  };

  return (
    <>
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contact us for personalized assistance.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gx-lg-0 gy-4">
          <div className="col-lg-4">
            <div className="info-container d-flex flex-column align-items-center justify-content-center">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Amynasec Labs, Park Plaza, 6th floor, 17th Dhanori Road, Dhanori, Pune, Maharashtra 411015, India.</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-clock flex-shrink-0"></i>
                <div>
                  <h3>Open Hours:</h3>
                  <p>Mon-Sat: 11AM - 11PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            {!isSubmitted ? (
              <form
                className="php-email-form"
                data-aos="fade"
                data-aos-delay="100"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="from_name"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="from_email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="8"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    {isSending ? (
                      <div className="loading">Sending...</div>
                    ) : (
                      <button type="submit" disabled={isSending}>
                        Send Message
                      </button>
                    )}
                    {isSubmitted && <div className="sent-message">Your message has been sent. Thank you!</div>}
                  </div>
                </div>
              </form>
            ) : (
              <div className="sent-message">Your message has been sent. Thank you!</div>
            )}
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};


export default Contact;