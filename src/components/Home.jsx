import React from 'react'
import {HomeCard, Abt, Contact, Projects} from './HomeCard'
import AbtImg from "../assets/abt.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <div class="home">Home</div>
      <div class="content" id='home'></div>

        <section id="about" style={{backgroundColor:"rgb(0, 17, 48)"}}>
          <br />
          <br />
         
          <center><h1>About Us</h1></center>
          <br />
          <Abt></Abt>
        </section>

      <div class='break'>
          <div className='bc'></div>
          <div className='bc'></div>
          <div className='bc'></div>
          <div className='bc'></div>
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
    © 2026 AuraGene Technologies. All Rights Reserved.
  </div>

</div>
    </div>

  )
}

export default Home