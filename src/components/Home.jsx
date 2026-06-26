import React, { useState, useEffect } from 'react'
import {HomeCard, Abt, Contact, Projects} from './HomeCard'
import AbtImg from "../assets/abt.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers, faTrophy, faFlask, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import img1 from '../assets/homeGallery/home.png';
import img2 from '../assets/homeGallery/services.png';
import img3 from '../assets/homeGallery/system.png';
import img4 from '../assets/homeGallery/technologies.png';

import port1 from '../assets/homeGalleryPortrait/h1.jpeg';
import port2 from '../assets/homeGalleryPortrait/h2.jpeg';
import port3 from '../assets/homeGalleryPortrait/h3.jpeg';
import port4 from '../assets/homeGalleryPortrait/h4.jpeg';

import '../styles/Home.css';

const Home = () => {
  const landscapeImages = [img1, img2, img3, img4];
  const portraitImages = [port1, port2, port3, port4];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = isMobile ? portraitImages : landscapeImages;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div>
      <div className="home">Home</div>
      <div className="content" id='home'>
        <div className='divider'></div>
        <div className="carousel">
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="carousel-frame">
                  <img src={image} alt={`Slide ${index + 1}`} className="carousel-img" />
                </div>
              </div>
            ))}
          </div>
          
          {!isMobile && (
            <>
              <button className="carousel-control prev" onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="carousel-control next" onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </>
          )}
        </div>
      </div>

        <section id="about">
          <br />
          <br />
         
          <center><h1>About Us</h1></center>
          <br />
          <Abt></Abt>
        </section>

      <div className="break">
        <div className="break-card">
          <div className="break-card-icon">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <div className="break-card-value">2+</div>
          <div className="break-card-label">Experience</div>
        </div>

        <div className="break-card">
          <div className="break-card-icon">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className="break-card-value">20+</div>
          <div className="break-card-label">Clients</div>
        </div>

        <div className="break-card">
          <div className="break-card-icon">
            <FontAwesomeIcon icon={faTrophy} />
          </div>
          <div className="break-card-value">10+</div>
          <div className="break-card-label">Brands</div>
        </div>

        <div className="break-card">
          <div className="break-card-icon">
            <FontAwesomeIcon icon={faFlask} />
          </div>
          <div className="break-card-value">10+</div>
          <div className="break-card-label">Products</div>
        </div>
      </div>


        <section id="services" style={{backgroundColor:"rgb(255, 255, 255)", color:"black" }}>
          <br />
          <br />
          
          <h1 style={{fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}}>OUR SERVICES</h1>
          <br />
          <p style={{fontSize:"large"}}>We are offering a variety of services for your needs and convenient</p>
          <br />
          <br />
         
          <HomeCard></HomeCard>
        </section>

              <section
          id="projects"
          style={{
            backgroundColor:"rgb(255, 255, 255)"
          }}
      >
        <br /><br />
        <h1 style={{fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}}>PROJECTS</h1>
        <Projects />
      </section>

       <section id="contact">
          <br />
          <br />

          <center><h1 style={{fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", color:"rgb(123, 128, 137);)"}}>CONTACT US</h1></center>

          <Contact />

        </section>
        <div className="final">

  <div className="footer-container">

    <div className="footer-col footer-brand">

      <div style={{display:"flex"}}>
        <div className="footer-logo">
        AURA
      </div><div className="footer-logo" style={{color:"white"}}>
        GENE</div>
      </div>

      <p>
        Empowering businesses through innovative web development,
        software solutions, cloud technologies and digital transformation.
      </p>

      <div className="social-icons">
      <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} size="2x" />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>

    </div>

    <div className="footer-col">

      <h2>Company</h2>

      <a href="#about">About Us</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

    </div>

    <div className="footer-col">

      <h2>Services</h2>

      <a href="#">Web Development</a>
      <a href="#">Software Development</a>
      <a href="#">Mobile Applications</a>
      <a href="#">Cloud Solutions</a>
      <a href="#">UI / UX Design</a>
      <a href="#">AI Automation</a>

    </div>

    <div className="footer-col">

      <h2>Contact</h2>

      <p>📧 auragene.tech@gmail.com</p>
      <p>📞 +91 9655760580</p>
      <p>📍 Tamil Nadu, India</p>
      <a href='/'>🌐 auragene.vercel.app</a>

    </div>

  </div>

  <div className="footer-bottom">
    © 2026 AuraGene Technology. All Rights Reserved.
  </div>

</div>
    </div>

  )
}

export default Home