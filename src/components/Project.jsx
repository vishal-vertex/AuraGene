import React, { useState } from 'react'
import {Projects}from "./HomeCard"
import "../styles/Home.css"
import "../styles/pages.css"

const ProjectFunc = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projectCategories = ['all', 'web', 'mobile', 'automation', 'ai'];

  const projectShowcase = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Full-featured online store with payment integration and inventory management",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: ["50K+ Users", "200% ROI Increase", "95% Uptime"]
    },
    {
      id: 2,
      title: "Business Management System",
      category: "web",
      description: "Enterprise solution for managing operations and analytics",
      technologies: ["React", "Express", "PostgreSQL", "AWS"],
      results: ["30+ Companies", "40% Time Saving", "Real-time Analytics"]
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      category: "mobile",
      description: "Cross-platform fitness tracking and workout management app",
      technologies: ["React Native", "Firebase", "Expo"],
      results: ["10K+ Downloads", "4.8★ Rating", "500+ Active Users"]
    },
    {
      id: 4,
      title: "Automation Workflow Tool",
      category: "automation",
      description: "Smart workflow automation to eliminate repetitive tasks",
      technologies: ["Python", "Node.js", "AWS Lambda", "MongoDB"],
      results: ["60% Automation", "100+ Workflows", "Unlimited Scalability"]
    },
    {
      id: 5,
      title: "AI Chatbot Solution",
      category: "ai",
      description: "Intelligent customer support chatbot with NLP",
      technologies: ["Python", "TensorFlow", "Node.js", "React"],
      results: ["80% Query Resolution", "24/7 Support", "Multi-language"]
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      category: "web",
      description: "Real-time data visualization and business intelligence",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      results: ["500+ Metrics", "Real-time Updates", "Custom Reports"]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projectShowcase 
    : projectShowcase.filter(p => p.category === selectedCategory);

  return (
    <>
    <div style={{
      backgroundColor:"white",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      width: "100%"
    }}>
      <div style={{
        marginTop:"8%",
        justifyContent:"center",
        display:"flex",
        width: "100%",
        flexDirection: "column",
        gap: "var(--section-spacing)"
      }}>
        <Projects></Projects>

        {/* Project Filter Section */}
        <div className="project-filter-section" style={{ margin: "0 auto" }}>
          <h2>Featured Projects</h2>
          <div className="filter-buttons">
            {projectCategories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase Grid */}
        <div className="projects-showcase" style={{ margin: "0 auto" }}>
          {filteredProjects.map(project => (
            <div key={project.id} className="project-showcase-card">
              <div className="project-card-header">
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-results">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="result-item">
                      <span className="result-icon">✓</span>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="project-view-btn">View Case Study</button>
            </div>
          ))}
        </div>

       
      </div>
      
    </div>
    </>
  )
}

export default ProjectFunc