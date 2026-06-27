import React, { useState } from 'react'
import {Contact}from "./HomeCard"
import "../styles/Home.css"
import "../styles/pages.css"

const ContactFunc = () => {
  const [activeTab, setActiveTab] = useState('general');

  const faqs = [
    {
      id: 1,
      question: "What is your typical project timeline?",
      answer: "Most projects range from 4-12 weeks depending on scope and complexity. We provide detailed timelines after understanding requirements."
    },
    {
      id: 2,
      question: "Do you offer maintenance and support after delivery?",
      answer: "Yes! We provide ongoing support, bug fixes, and feature updates based on your maintenance plan."
    },
    {
      id: 3,
      question: "What technologies do you specialize in?",
      answer: "We work with modern stacks including React, Node.js, MongoDB, AWS, and more. We choose tech based on project needs."
    },
    {
      id: 4,
      question: "Can you work with our existing team?",
      answer: "Absolutely! We integrate seamlessly with existing teams and follow your development practices and workflows."
    }
  ];

  return (
    <>
    <div style={{
      backgroundColor:"white",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>
    <div style={{width:"100%", marginTop:"5%"}}>
      <div id="contact" style={{
        justifyContent:"center",
        display:"flex",
        flexWrap: "wrap"
      }}>
        <Contact></Contact>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-info-section">
        <h2>Multiple Ways to Reach Us</h2>
        <div className="contact-cards-grid">
          <div className="contact-info-card">
            <div className="info-icon">💬</div>
            <h3>Live Chat</h3>
            <p>Available Monday-Friday, 9 AM - 6 PM IST</p>
            <button className="info-btn">Start Chat</button>
          </div>
          <div className="contact-info-card">
            <div className="info-icon">📞</div>
            <h3>Phone Support</h3>
            <p>+91 9655760580</p>
            <button className="info-btn">Call Now</button>
          </div>
          <div className="contact-info-card">
            <div className="info-icon">📧</div>
            <h3>Email Support</h3>
            <p>auragene.tech@gmail.com</p>
            <button className="info-btn">Email Us</button>
          </div>
          <div className="contact-info-card">
            <div className="info-icon">🌐</div>
            <h3>Social Media</h3>
            <p>Follow us on LinkedIn, Twitter & GitHub</p>
            <button className="info-btn">Connect</button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* Service Response Time */}
      <div className="response-time-section">
        <h2>Our Commitment to You</h2>
        <div className="response-grid">
          <div className="response-card">
            <h3>⚡ Quick Response</h3>
            <p>We respond to inquiries within 2-4 hours during business hours</p>
          </div>
          <div className="response-card">
            <h3>🎯 Dedicated Support</h3>
            <p>Each client gets a dedicated project manager for smooth communication</p>
          </div>
          <div className="response-card">
            <h3>🔄 Transparent Updates</h3>
            <p>Regular updates and progress reports throughout your project</p>
          </div>
          <div className="response-card">
            <h3>🛠️ 24/7 Monitoring</h3>
            <p>Production systems monitored round-the-clock for optimal performance</p>
          </div>
        </div>
      </div>

    </div>

    </div>
    </>
  )
}

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div 
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default ContactFunc