import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';


const Footer = () => {
  return (
    <footer className="footer bg-primary text-white mt-auto py-4">
      <div className="container text-center text-md-start">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">MySchool</h5>
            <p>Empowering education for a better future. Our goal is to shape students' lives with values and knowledge.</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/classes" className="footer-link">Classes</a></li>
              <li><a href="/admission" className="footer-link">Admission</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: info@myschool.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: 123 School Street, Bengaluru</p>

             <div className="social-icons mt-3">
              <a href="https://facebook.com" className="me-3" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-lg text-white"></i></a>
              <a href="https://instagram.com" className="me-3" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg text-white"></i></a>
              <a href="https://twitter.com" className="me-3" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-lg text-white"></i></a>
            </div>
          </div>
        </div>
        <hr className="border-light" />
        <p className="text-center mb-0">© {new Date().getFullYear()} MySchool. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
