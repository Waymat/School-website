import React from 'react';
import './HeroSection.css'; // We'll write custom CSS for video overlay

const HeroSection = () => {
  return (
    <div className="hero-container position-relative">
      {/* Background Video */}
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/assets/school-banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="overlay-content text-white text-center">
        <h1 className="display-4 fw-bold">Welcome to MySchool</h1>
        <p className="lead">Empowering young minds for a brighter tomorrow</p>
        <a href="/admission" className="btn btn-light btn-lg mt-3">Enroll Now</a>
      </div>
    </div>
  );
};

export default HeroSection;
