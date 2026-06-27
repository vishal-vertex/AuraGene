import React, { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import "../styles/Hero.css";
import videoBg from "../assets/auragene.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const navigate = useNavigate();
  const location = useLocation(); // ✅ track current route

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

  const handleNav = (path) => {
    document.getElementById("nav-toggle").checked = false;
    navigate(path);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="hero-section">
        <div className="hero-title">
          <div className="hero-icon"></div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="hero-name" style={{ color: "cyan" }}>AURA</div>
            <div className="hero-name" style={{ color: "white" }}>GENE</div>
          </div>
        </div>

        {/* Hamburger toggle */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="headline">
          <button onClick={() => handleNav("/")}>Home</button>
          <button onClick={() => handleNav("/about")}>About</button>
          <button onClick={() => handleNav("/services")}>Services</button>
          <button onClick={() => handleNav("/projects")}>Projects</button>
          <button onClick={() => handleNav("/contact")}>Contact</button>
        </div>
      </div>

      {/* ✅ Landing Page only shows on Home */}
      {location.pathname === "/" && (
        <div className="landing-page">
          <video ref={videoRef} autoPlay loop muted={isMuted} playsInline>
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
      )}
    </div>
  );
};

export default Hero;
