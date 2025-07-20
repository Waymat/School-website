import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
// import logo from '../assets/school-logo.png'; // <-- make sure your logo is here

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <a className="navbar-brand d-flex align-items-center" href="/">
        {/* <img src={logo} alt="School Logo" className="school-logo me-2" /> */}
        <span className="fw-bold fs-5">MySchool</span>
      </a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav text-end">
          <li className="nav-item">
            <a className="nav-link text-white" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/classes">Classes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/admission">Admission</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
