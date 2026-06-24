import React, { useEffect, useRef, useState } from 'react'
import '../styles/HomeCard.css';
import p1 from '../assets/projectGallery/p1.jpeg';
import p2 from '../assets/projectGallery/p2.jpg';
import p3 from '../assets/projectGallery/p3.jpg';
import p4 from '../assets/projectGallery/p4.jpg';
import p5 from '../assets/projectGallery/p5.jpg';
import p6 from '../assets/projectGallery/p6.jpg';
import p7 from '../assets/projectGallery/p7.jpg';
import p8 from '../assets/projectGallery/p8.jpg';


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
  onSubmit={async (e) => {
    e.preventDefault(); // stop browser redirect

    const left = document.querySelector(".contact-left");
    const right = document.querySelector(".contact-right");

    left.classList.add("move-right");
    right.classList.add("move-left");

    const formData = new FormData(e.target);

    // ✅ Send to Formspree via fetch
    await fetch("https://formspree.io/f/mojoqlbe", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    // Reset after animation
    setTimeout(() => {
      e.target.reset();
      alert("Message sent successfully!");
    }, 500);
  }}
>
  <input type="text" name="name" placeholder="Enter your name" required />
  <input type="email" name="email" placeholder="Enter your email" required />
  <input type="number" name="phone" placeholder="Mobile Number" required />
  <textarea name="message" rows="6" placeholder="Write your message" required></textarea>

  <button type="submit">Submit</button>
</form>


      </div>

    </div>
  )
}

const Projects = () => {
  const images = [p1, p2, p3, p4, p5, p6, p7, p8];
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const inViewRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!inViewRef.current) {
              inViewRef.current = true;
              // start slideshow
              intervalRef.current = setInterval(() => {
                setIndex((i) => (i + 1) % images.length);
              }, 3000);
            }
          } else {
            // stop slideshow when leaving view
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            inViewRef.current = false;
          }
        });
      },
      { threshold: 0.3 }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

  // trigger flip animation on index change
  useEffect(() => {
    setFlip(true);
    const t = setTimeout(() => setFlip(false), 700);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div className="project-wrapper">

      <div className="project-content">

        <div className="project-left">

          <div className="project-tag">OUR PROJECTS</div>

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

          <div
            ref={containerRef}
            className={`project-image-placeholder ${flip ? 'flip' : ''}`}
            style={{ backgroundImage: `url(${images[index]})` }}
          ></div>

        </div>

      </div>

    </div>
  );
};

export { HomeCard, Abt, Contact, Projects }