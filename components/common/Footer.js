import { TitleLogo } from "./Title";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Title with Hover and Link */}
        <div className="logo-text">
          <a href="/" className="title-link">
            <TitleLogo title="MEDEXTROUS" />
          </a>
        </div>

        {/* Logo */}
        <div className="logo-container">
          <a href="/" className="logo-link">
            <img
              src="..\images\logo1.png"
              alt="Medextrous Logo"
              className="logo-image"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/projects" className="nav-link">
            Projects
          </a>
          <a href="/events" className="nav-link">
            Events
          </a>
          <a href="/team" className="nav-link">
            Team
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </nav>

        {/* Social Media Links */}
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/company/medextrous/"
            target="_blank"
            rel="noreferrer"
            className="icon linkedin"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.instagram.com/medextrous/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="icon instagram"
            aria-label="Instagram"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="icon facebook"
            aria-label="Facebook"
          >
            <AiFillFacebook />
          </a>
        </div>
      </div>

      <style jsx>{`
        .footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          z-index: 2;
          position: relative;
          background: rgba(8, 14, 16, 0.8);
          backdrop-filter: blur(10px);
          color: #fff;
          width: 100%;
          
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          

        }

        /* Title Styles */
        .logo-text {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          color: #fff;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, #007bff, #00b3e6); /* Gradient effect */
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Shadow effect for the text */
          letter-spacing: 2px; /* Increase letter-spacing */
          padding: 5px 0; /* Adding some padding to make the text pop */
        }

        .title-link {
          text-decoration: none;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .title-link:hover {
          transform: scale(1.1);
        }

        /* Logo Styles */
        .logo-container {
          text-align: center;
          margin-bottom: 2rem;
        }

        .logo-link {
          display: inline-block;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .logo-link:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }

        .logo-image {
          width: 80px;
          height: auto;
        }

        /* Navigation Links */
        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem; /* Reduced gap */
          margin-bottom: 1.5rem;
        }

        .nav-link {
          font-size: 1rem;
          color: #fff;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 5px; /* Rounded corners */
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .nav-link:hover {
          background-color: rgb(132, 184, 239); /* Blue background */
          color: #fff; /* Keep text color white */
        }

        /* Social Icons */
        .footer-icons {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .icon {
          font-size: 2rem;
          color: #fff;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .icon:hover {
          transform: scale(1.2);
        }

        .icon.linkedin:hover {
          color: #0077b5;
        }

        .icon.instagram:hover {
          color: #e4405f;
        }

        .icon.facebook:hover {
          color: #1877f2;
        }

        /* Media Queries */
        @media (max-width: 700px) {
          .footer-nav {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
