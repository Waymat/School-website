import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3 py-2 shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-5" href="/">MySchool</a>

        {/* Mobile Toggle Button */}
        <button
          className="btn btn-outline-light d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileDrawer"
          aria-controls="mobileDrawer"
        >
          <i className="fas fa-bars fs-5"></i>
        </button>

        {/* Desktop Navbar */}
        <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex" id="navbarNav">
          <ul className="navbar-nav text-center text-lg-end">
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="/classes">Classes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="/admission">Admission</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Drawer Only Visible on Small Screens */}
      <div
        className="offcanvas offcanvas-end d-lg-none"
        tabIndex="-1"
        id="mobileDrawer"
        aria-labelledby="mobileDrawerLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileDrawerLabel">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="list-group">
            <a href="/" className="list-group-item list-group-item-action">
              <i className="fas fa-home me-2"></i> Home
            </a>
            <a href="/about" className="list-group-item list-group-item-action">
              <i className="fas fa-info-circle me-2"></i> About
            </a>
            <a href="/classes" className="list-group-item list-group-item-action">
              <i className="fas fa-book-open me-2"></i> Classes
            </a>
            <a href="/admission" className="list-group-item list-group-item-action">
              <i className="fas fa-user-plus me-2"></i> Admission
            </a>
            <a href="/contact" className="list-group-item list-group-item-action">
              <i className="fas fa-envelope me-2"></i> Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
