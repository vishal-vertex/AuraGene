import React, { useState } from "react";
import { Contact } from "./HomeCard";
import SEO from "./SEO";

import "../styles/Home.css";
import "../styles/pages.css";

const ContactFunc = () => {
  const [activeTab, setActiveTab] = useState("general");

  const faqs = [
    {
      id: 1,
      question: "What is your typical project timeline?",
      answer:
        "Most projects range from 4-12 weeks depending on scope and complexity. We provide detailed timelines after understanding requirements.",
    },
    {
      id: 2,
      question: "Do you offer maintenance and support after delivery?",
      answer:
        "Yes! We provide ongoing support, bug fixes, and feature updates based on your maintenance plan.",
    },
    {
      id: 3,
      question: "What technologies do you specialize in?",
      answer:
        "We work with modern stacks including React, Node.js, MongoDB, AWS, and more. We choose tech based on project needs.",
    },
    {
      id: 4,
      question: "Can you work with our existing team?",
      answer:
        "Absolutely! We integrate seamlessly with existing teams and follow your development practices and workflows.",
    },
  ];

  return (
    <>
      <SEO
        title="Contact Auragene Technologies | Get in Touch"
        description="Contact Auragene Technologies for professional web development, SaaS platforms, AI automation, ERP software, UI/UX design, mobile applications, and custom software solutions."
        canonical="https://auragene.vercel.app/contact"
      />

      
        <div
          style={{
            width: "100%",
            marginTop: "8%",
            display: "flex",
            flexDirection: "column",
            gap: "var(--section-spacing)",
          }}
        >
          <center>
            <Contact />
          </center>

          {/* Service Response Time */}
          <div
            className="response-time-section"
            style={{
              margin: "0 auto",
            }}
          >
            <h2>Our Commitment to You</h2>

            <div className="response-grid">
              <div className="response-card">
                <h3>⚡ Quick Response</h3>
                <p>
                  We respond to inquiries within 2-4 hours during business
                  hours.
                </p>
              </div>

              <div className="response-card">
                <h3>🎯 Dedicated Support</h3>
                <p>
                  Each client gets a dedicated project manager for smooth
                  communication.
                </p>
              </div>

              <div className="response-card">
                <h3>🔄 Transparent Updates</h3>
                <p>
                  Regular updates and progress reports throughout your project.
                </p>
              </div>

              <div className="response-card">
                <h3>🛠️ 24/7 Monitoring</h3>
                <p>
                  Production systems monitored round-the-clock for optimal
                  performance.
                </p>
              </div>
            </div>
<br />
            <div
              className="faq-section"
              style={{
                margin: "0 auto",
              }}
            >
              <h2>Frequently Asked Questions</h2>

              <div className="faq-container">
                {faqs.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </div>

      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default ContactFunc;