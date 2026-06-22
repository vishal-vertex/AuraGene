import React, { useRef, useState } from "react";
import "../styles/Hero.css";
import videoBg from "../assets/auragene.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="hero-section">
        <div className="hero-title">
          <div className="hero-icon"></div>
          <div style={{display: "flex",flexDirection: "row"}}>
          <div className="hero-name" style={{color:"cyan"}}>AURA</div>
          <div className="hero-name" style={{color:"white"}}>GENE</div>
          </div>
        </div>

        {/* CSS-only hamburger toggle (no JS) */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="headline">
          <a href="#home" onClick={() => document.getElementById('nav-toggle').checked = false}>Home</a>
          <a href="#about" onClick={() => document.getElementById('nav-toggle').checked = false}>About</a>
          <a href="#services" onClick={() => document.getElementById('nav-toggle').checked = false}>Services</a>
          <a href="#projects" onClick={() => document.getElementById('nav-toggle').checked = false}>Projects</a>
          <a href="#contact" onClick={() => document.getElementById('nav-toggle').checked = false}>Contact</a>
        </div>
      </div>

      {/* Video Section */}
      <div className="landing-page">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Controls */}
        <div className="controls">
          <button onClick={togglePlayPause}>
            {isPlaying ? "⏸ Pause" : "▶ Play"}
          </button>

          <button onClick={toggleMute}>
            {isMuted ? "🔊 Enable Sound" : "🔇 Mute"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;