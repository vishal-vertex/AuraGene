import React from 'react'
import {Abt}from "./HomeCard"
import "../styles/Home.css"
import "../styles/pages.css"

const AboutFunc = () => {
  return (
    <>
    <div id='about' style={{
      marginTop:"8%",
      backgroundPosition: "500px"
    }}>
      <div>
        <Abt></Abt>
      </div>

      {/* Team Section */}
      <div className="about-section">
        <h2>Our Expert Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👨‍💼</div>
            <h3>Vishal</h3>
            <p className="role">Founder & Lead Developer</p>
            <p>Full-stack developer with expertise in React, Node.js, and cloud solutions. Passionate about creating innovative digital products.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">👨‍💻</div>
            <h3>Development Team</h3>
            <p className="role">Backend & Frontend Specialists</p>
            <p>Experienced developers specializing in enterprise software, API development, and scalable architecture.</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">🎨</div>
            <h3>Design Team</h3>
            <p className="role">UI/UX Designers</p>
            <p>Creative designers focused on user experience, modern interfaces, and responsive design principles.</p>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="about-section alternate">
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
      <div className="about-section">
        <h2>Why Choose AuraGene?</h2>
        <div className="values-container">
          <div className="value-item">
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

      {/* Testimonials */}
      <div className="about-section alternate">
        <h2>Client Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"AuraGene delivered our project on time and exceeded expectations. Their team is professional and innovative."</p>
            <div className="testimonial-author">
              <strong>- Business Owner</strong>
              <span>Tech Startup</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Outstanding work! They transformed our vision into a robust web platform that drives growth."</p>
            <div className="testimonial-author">
              <strong>- Project Manager</strong>
              <span>E-Commerce Company</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Excellent support and continuous improvements. AuraGene is our go-to partner for tech solutions."</p>
            <div className="testimonial-author">
              <strong>- CEO</strong>
              <span>Financial Services</span>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    </>
  )
}

export default AboutFunc