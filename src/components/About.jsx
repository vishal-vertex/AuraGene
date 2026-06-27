import React from 'react'
import {Abt}from "./HomeCard"
import "../styles/Home.css"
import "../styles/pages.css"

const AboutFunc = () => {
  return (
    <>
    <div style={{
      marginTop:"4%",
      backgroundColor:'rgb(0, 0, 32, 1)',
      
    }}>
      <div id="about" style={{backgroundColor:'rgb(0,0,32)',
      backgroundPosition: "500px",
        padding:"30px"
      }}>
        <Abt></Abt>
      </div>
</div>
      {/* Expertise Section */}
      <div className="about-section alternate" >
        <h2>Our Core Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <span className="expertise-icon">⚛️</span>
            <h4>Frontend Technologies</h4>
            <p>React, Vue.js, JavaScript, HTML5, CSS3, Responsive Design</p>
          </div>
          <div className="expertise-card">
            <span className="expertise-icon">🖥️</span>
            <h4>Backend Development</h4>
            <p>Node.js, Express, Python, REST APIs, Microservices</p>
          </div>
          <div className="expertise-card">
            <span className="expertise-icon">🗄️</span>
            <h4>Database Solutions</h4>
            <p>MongoDB, MySQL, PostgreSQL, Firebase, Cloud Storage</p>
          </div>
          <div className="expertise-card">
            <span className="expertise-icon">☁️</span>
            <h4>Cloud & DevOps</h4>
            <p>AWS, Azure, Docker, CI/CD, Cloud Deployment</p>
          </div>
          <div className="expertise-card">
            <span className="expertise-icon">📱</span>
            <h4>Mobile Apps</h4>
            <p>React Native, Flutter, Cross-platform Development</p>
          </div>
          <div className="expertise-card">
            <span className="expertise-icon">🤖</span>
            <h4>AI & Automation</h4>
            <p>Machine Learning, Workflow Automation, Smart Solutions</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="about-section" >
        <h2>Why Choose AuraGene?</h2>
        <div className="values-container" >
          <div className="value-item" >
            <div className="value-number">01</div>
            <h3>Innovation First</h3>
            <p>We embrace cutting-edge technologies and stay ahead of industry trends to deliver modern solutions.</p>
          </div>
          <div className="value-item">
            <div className="value-number">02</div>
            <h3>Quality Assured</h3>
            <p>Every project undergoes rigorous testing and quality checks to ensure excellence and reliability.</p>
          </div>
          <div className="value-item">
            <div className="value-number">03</div>
            <h3>Client Focused</h3>
            <p>Your success is our success. We prioritize communication and transparency throughout the project.</p>
          </div>
          <div className="value-item">
            <div className="value-number">04</div>
            <h3>Scalable Solutions</h3>
            <p>Our solutions grow with your business, built for scalability and long-term sustainability.</p>
          </div>
        </div>
      </div>
     
    
    </>
  )
}

export default AboutFunc