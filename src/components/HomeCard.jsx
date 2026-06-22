import React from 'react'
import '../styles/HomeCard.css';


const HomeCard = () => {
  return (
    <div className='container'>

      <div className='shelf-1'>
        <div className='book-1'></div>
        <div className='dust-1'>
          <div className='info'>
            <h3>Web Development</h3>
            <p>Custom responsive websites, business portals and web solutions.</p>
          </div>
        </div>
      </div>

      <div className='shelf-2'>
        <div className='book-2'></div>
        <div className='dust-2'>
          <div className='info'>
            <h3>Software Development</h3>
            <p>Scalable desktop and enterprise software applications.</p>
          </div>
        </div>
      </div>

      <div className='shelf-3'>
        <div className='book-3'></div>
        <div className='dust-3'>
          <div className='info'>
            <h3>Mobile Apps</h3>
            <p>Android and cross-platform application development.</p>
          </div>
        </div>
      </div>

      <div className='shelf-4'>
        <div className='book-4'></div>
        <div className='dust-4'>
          <div className='info'>
            <h3>UI / UX Design</h3>
            <p>Modern interfaces focused on user experience and engagement.</p>
          </div>
        </div>
      </div>

      <div className='shelf-5'>
        <div className='book-5'></div>
        <div className='dust-5'>
          <div className='info'>
            <h3>Cloud Solutions</h3>
            <p>Secure cloud deployment, hosting and infrastructure services.</p>
          </div>
        </div>
      </div>

      <div className='shelf-6'>
        <div className='book-6'></div>
        <div className='dust-6'>
          <div className='info'>
            <h3>E-Commerce</h3>
            <p>Online stores with payment, inventory and order systems.</p>
          </div>
        </div>
      </div>

      <div className='shelf-7'>
        <div className='book-7'></div>
        <div className='dust-7'>
          <div className='info'>
            <h3>AI & Automation</h3>
            <p>Smart workflows and business process automation solutions.</p>
          </div>
        </div>
      </div>

      <div className='shelf-8'>
        <div className='book-8'></div>
        <div className='dust-8'>
          <div className='info'>
            <h3>Support & Maintenance</h3>
            <p>Continuous updates, monitoring and technical support.</p>
          </div>
        </div>
      </div>

    </div>
  )
}


const Abt = () => {
  return (
    <div className="about-wrapper">

      <div className="about-content">

        <div className="about-text">

          <div className="about-tag">
            WHO WE ARE
          </div>

          <h1>
            Building <span>Digital Solutions</span> For Modern Businesses
          </h1>

          <p>
            At AuraGene Technologies, we specialize in building innovative
            digital solutions that help businesses grow in an increasingly
            connected world. Our team is passionate about transforming ideas
            into powerful web applications, software systems, and modern
            digital experiences.
          </p>

          <p>
            From custom website development and enterprise software solutions
            to cloud-based applications and business automation tools, we
            deliver technology that is scalable, secure, and designed for
            long-term success.
          </p>

          <p>
            We combine creativity, technical expertise, and industry best
            practices to create products that not only look exceptional but
            also perform efficiently.
          </p>

          <div className="about-stats">

            <div className="stat-card">
              <h2>20+</h2>
              <span>Projects</span>
            </div>

            <div className="stat-card">
              <h2>15+</h2>
              <span>Clients</span>
            </div>

            <div className="stat-card">
              <h2>100%</h2>
              <span>Support</span>
            </div>

          </div>

        </div>

        <div className="about-image">

          

        </div>

      </div>

    </div>
  )
}

const Contact = () => {
  return (
    <div className="contact-wrapper">

      <div className="contact-left">

        <h4>Contact Us</h4>
        <h1>Let's Build Something Amazing</h1>

        <div className="contact-detail">
          <div className="contact-icon">📞</div>
          <div>
            <h3>Call Us</h3>
            <p>+91 9655760580</p>
          </div>
        </div>

        <div className="contact-detail">
          <div className="contact-icon">📧</div>
          <div>
            <h3>Email Us</h3>
            <p>auragene.tech@gmail.com</p>
          </div>
        </div>

        <div className="contact-detail">
          <div className="contact-icon">📍</div>
          <div>
            <h3>Location</h3>
            <p>
              AuraGene Technology<br />
              Tamil Nadu, India
            </p>
          </div>
        </div>

      </div>

      <div className="contact-right">

        <h4>Get In Touch</h4>
        <h1>Feel Free To Write Us</h1>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();

            const left = document.querySelector(".contact-left");
            const right = document.querySelector(".contact-right");

            left.classList.add("move-right");
            right.classList.add("move-left");

            e.target.reset();
          }}
        >
          <input type="text" placeholder="Enter your name" required />

          <input type="email" placeholder="Enter your email" required />

          <input type="number" placeholder="Mobile Number" required />

          <textarea
            rows="6"
            placeholder="Write your message"
            required
          ></textarea>

          <button type="submit">
            Submit
          </button>

        </form>

      </div>

    </div>
  )
}

const Projects = () => {
  return (
    <div className="project-wrapper">

      <div className="project-content">

        <div className="project-left">

          <div className="project-tag">
            OUR PROJECTS
          </div>

          <h1>
            Transforming Ideas Into
            <span> Digital Success</span>
          </h1>

          <p>
            Every successful business begins with a strong digital foundation.
            At AuraGene Technologies, we design and develop modern solutions
            that help organizations improve efficiency, automate operations,
            and accelerate growth.
          </p>

          <p>
            Our portfolio includes custom software applications, business
            management systems, web platforms, mobile applications, cloud
            solutions, and intelligent automation tools tailored to unique
            client requirements.
          </p>

          <p>
            Project screenshots, case studies, and live demonstrations will
            be showcased here as our portfolio continues to expand.
          </p>

          <div className="project-highlight">

            <div>
              <h2>20+</h2>
              <span>Completed Projects</span>
            </div>

            <div>
              <h2>15+</h2>
              <span>Happy Clients</span>
            </div>

            <div>
              <h2>100%</h2>
              <span>Client Satisfaction</span>
            </div>

          </div>

        </div>

        <div className="project-right">

          <div className="project-image-placeholder">

            PROJECT IMAGE

            <br />

            PLACEHOLDER

          </div>

        </div>

      </div>

    </div>
  )
}

export { HomeCard, Abt, Contact, Projects }