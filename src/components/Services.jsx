import React from "react";
import { HomeCard } from "./HomeCard";
import SEO from "./SEO";

import "../styles/Home.css";
import "../styles/pages.css";

const ServiesFunc = () => {
  const servicesDetails = [
    {
      id: 1,
      icon: "🌐",
      title: "Web Development",
      shortDesc: "Custom responsive websites",
      fullDesc:
        "Custom responsive websites, business portals and web solutions.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Performance",
        "Mobile-First",
        "CMS Integration",
        "E-Commerce Ready",
      ],
      price: "Starting from $2,000",
    },
    {
      id: 2,
      icon: "💻",
      title: "Software Development",
      shortDesc: "Scalable desktop applications",
      fullDesc:
        "Scalable desktop and enterprise software applications.",
      features: [
        "Custom Solutions",
        "Enterprise Architecture",
        "Database Design",
        "API Development",
        "System Integration",
        "Maintenance Support",
      ],
      price: "Custom Pricing",
    },
    {
      id: 3,
      icon: "📱",
      title: "Mobile Apps",
      shortDesc: "Android & cross-platform apps",
      fullDesc:
        "Android and cross-platform application development.",
      features: [
        "iOS Development",
        "Android Development",
        "React Native",
        "Flutter Apps",
        "App Publishing",
        "Push Notifications",
      ],
      price: "Starting from $3,500",
    },
    {
      id: 4,
      icon: "🎨",
      title: "UI/UX Design",
      shortDesc: "Modern user-focused design",
      fullDesc:
        "Modern interfaces focused on user experience and engagement.",
      features: [
        "UI Design",
        "UX Research",
        "Prototyping",
        "User Testing",
        "Design Systems",
        "Animation Design",
      ],
      price: "Starting from $1,500",
    },
    {
      id: 5,
      icon: "☁️",
      title: "Cloud Solutions",
      shortDesc: "Secure cloud deployment",
      fullDesc:
        "Secure cloud deployment, hosting and infrastructure services.",
      features: [
        "AWS Services",
        "Cloud Migration",
        "Auto Scaling",
        "CDN Setup",
        "Security Audit",
        "Performance Optimization",
      ],
      price: "Starting from $500/month",
    },
    {
      id: 6,
      icon: "🛍️",
      title: "E-Commerce",
      shortDesc: "Complete online store solution",
      fullDesc:
        "Online stores with payment, inventory and order systems.",
      features: [
        "Store Setup",
        "Payment Gateway",
        "Inventory Management",
        "Order Tracking",
        "Customer Portal",
        "Analytics Dashboard",
      ],
      price: "Starting from $3,000",
    },
    {
      id: 7,
      icon: "🤖",
      title: "AI & Automation",
      shortDesc: "Smart workflow automation",
      fullDesc:
        "Smart workflows and business process automation solutions.",
      features: [
        "Process Automation",
        "ML Models",
        "Chatbots",
        "Data Analysis",
        "Predictive Analytics",
        "Custom Integrations",
      ],
      price: "Starting from $2,500",
    },
    {
      id: 8,
      icon: "🔧",
      title: "Support & Maintenance",
      shortDesc: "Continuous technical support",
      fullDesc:
        "Continuous updates, monitoring and technical support.",
      features: [
        "24/7 Monitoring",
        "Bug Fixes",
        "Performance Tuning",
        "Security Updates",
        "Feature Enhancements",
        "Documentation",
      ],
      price: "Starting from $300/month",
    },
  ];

  return (
    <>
      <SEO
        title="Services | Auragene Technologies"
        description="Explore Auragene Technologies' professional services including web development, software development, SaaS solutions, AI automation, cloud services, UI/UX design, mobile app development, and technical support."
        canonical="https://auragene.vercel.app/services"
      />

      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            marginTop: "7%",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <HomeCard />
          </div>

          <br />
          <br />

          {/* Extended Services Section */}
          <div className="extended-services">
            <h2>Our Complete Service Portfolio</h2>

            <p className="services-subtitle">
              Comprehensive solutions tailored to your business needs
            </p>

            <div className="services-grid-extended">
              {servicesDetails.map((service) => (
                <div
                  key={service.id}
                  className="service-card-extended"
                >
                  <div className="service-card-header">
                    <div className="service-icon">{service.icon}</div>

                    <h3>{service.title}</h3>
                  </div>

                  <p className="service-short-desc">
                    {service.shortDesc}
                  </p>

                  <div className="service-features">
                    <ul>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Process */}
          <div className="service-process">
            <h2>Our Service Process</h2>

            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <h3>Consultation</h3>
                <p>We understand your needs, goals, and challenges.</p>
              </div>

              <div className="process-arrow">→</div>

              <div className="process-step">
                <div className="step-number">02</div>
                <h3>Planning</h3>
                <p>Create a detailed roadmap and strategy.</p>
              </div>

              <div className="process-arrow">→</div>

              <div className="process-step">
                <div className="step-number">03</div>
                <h3>Execution</h3>
                <p>Develop and build your solution with our team.</p>
              </div>

              <div className="process-arrow">→</div>

              <div className="process-step">
                <div className="step-number">04</div>
                <h3>Support</h3>
                <p>Ongoing maintenance and improvements.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="why-choose-section">
            <h2>Why Choose Our Services?</h2>

            <div className="why-choose-grid">
              <div className="why-card">
                <div className="why-icon">✨</div>
                <h3>Expert Team</h3>
                <p>
                  Times of technical experience and cutting-edge expertise.
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon">⚡</div>
                <h3>Fast Delivery</h3>
                <p>
                  Quick turnaround times without compromising quality.
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon">💰</div>
                <h3>Cost Effective</h3>
                <p>
                  Competitive pricing with maximum value delivery.
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon">🎯</div>
                <h3>Results Focused</h3>
                <p>
                  Every project aligned with your business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiesFunc;