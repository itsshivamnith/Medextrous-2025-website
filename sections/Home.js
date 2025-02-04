import React, { useEffect } from "react";
import ThreeBackground from "@/components/common/background";
import MechanicalShowcase from '@/components/common/MechanicalShowcase';


const TitleLogo = ({ title, className }) => (
  <h1 className={className}>{title}</h1>
);

const TitleSm = ({ title }) => <h3 className="sub-heading-text">{title}</h3>;



const Home = () => {
  useEffect(() => {
   
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="main-wrapper">
        <ThreeBackground /> 

        {/* Hero Section */}
        <section className="home">
          <div className="container home-container">
            <div className="home-content fade-in">
            <div className="logos">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/logo1.png" alt="Logo 1" className="logo-img hover-effect" />
                </a>
                <a href="/nimbus2025" target="_blank" rel="noopener noreferrer">
                  <img src="/images/logo2.png" alt="Logo 2" className="logo-img hover-effect" />
                </a>
              </div>

              <TitleLogo title=" " className="logobg text" />

              <div className="sub-heading">
                <TitleSm title="Dextors of Mechanical Engineering Department" />
              </div>

             
            </div>
          </div>
        </section>
        <MechanicalShowcase />
        {/* Club Coordinators Section */}
        <section className="club-coordinators">
          <div className="container">
            <h2 className="section-title fade-in">Club Coordinators</h2>
            <div className="coordinator-flex">
              {/* Coordinator 1 */}
              <div className="coordinator hover-scale fade-in">
                <div className="coordinator-inner">
                  <div className="coordinator-content">
                    <img
                      src="/images/third/lakshya2.jpg"
                      alt="Lakshya Chauhan"
                      className="coordinator-img"
                    />
                    <p className="coordinator-name">Lakshya Chauhan</p>
                    <div className="social-links">
                      <a href="https://www.linkedin.com/in/lakshya-chauhan-b55a302ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" className="social-btn">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" aria-label="Twitter" className="social-btn">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

          

              {/* Coordinator 2 */}
              <div className="coordinator hover-scale fade-in">
                <div className="coordinator-inner">
                  <div className="coordinator-content">
                    <img
                      src="/images/third/saksham.jpg"
                      alt="Saksham Sood"
                      className="coordinator-img"
                    />
                    <p className="coordinator-name">Saksham Sood</p>
                    <div className="social-links">
                      <a href="https://www.linkedin.com/in/saksham-sood-b3031716b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" className="social-btn">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" aria-label="Twitter" className="social-btn">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .main-wrapper {
          position: relative;
          min-height: 100vh;
          background: transparent;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .home-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .home-content {
          opacity: 0;
          transform: translateY(30px);
          animation: heroFadeIn 1.5s ease forwards;
        }

        .logos {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          margin-bottom: 30px;
        }

        .logo-img {
          width: 120px;
          height: 120px;
          object-fit: contain;
          filter: drop-shadow(0 0 15px rgba(0, 255, 204, 0.4));
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo-img.hover-effect:hover {
          transform: scale(1.15) rotate(8deg);
          filter: drop-shadow(0 0 25px rgba(0, 255, 204, 0.6));
        }

        .logobg {
          font-size: 5rem;
          font-weight: 800;
          background: linear-gradient(45deg, #00ffcc, #0077ff, #00ffcc);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
          margin: 30px 0;
          animation: gradientFlow 3s linear infinite;
          letter-spacing: 2px;
        }

        .sub-heading-text {
          font-size: 2rem;
          color: #e0e7ff;
          text-shadow: 0 0 15px rgba(224, 231, 255, 0.4);
          font-weight: 300;
          letter-spacing: 1px;
          margin-top: 20px;
        }

       

        .club-coordinators {
          padding: 100px 20px;
          position: relative;
          z-index: 2;
          background: rgba(8, 14, 16, 0.8);
          backdrop-filter: blur(10px);
        }

        .section-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 60px;
          color: #fff;
          text-shadow: 0 0 20px rgba(0, 81, 255, 0.4);
          opacity: 0;
          transform: translateY(30px);
        }

        .coordinator-flex {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .coordinator {
          perspective: 1000px;
          opacity: 0;
          transform: translateY(30px);
        }

        .coordinator-inner {
          text-align: center;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          background: rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 30px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .coordinator.hover-scale:hover .coordinator-inner {
          transform: rotateY(12deg) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 255, 204, 0.3);
        }

        .coordinator-img {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 25px;
          border: 4px solid rgba(0, 255, 204, 0.4);
          box-shadow: 0 0 30px rgba(0, 255, 204, 0.3);
          transition: all 0.5s ease;
        }

        .coordinator:hover .coordinator-img {
          transform: scale(1.05);
          border-color: rgba(0, 255, 204, 0.8);
        }

        .coordinator-name {
          font-size: 1.8rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 15px;
          text-shadow: 0 0 15px rgba(0, 255, 204, 0.4);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .social-btn {
          color: #00ffcc;
          font-size: 1.4rem;
          transition: all 0.3s ease;
          padding: 10px;
          border-radius: 50%;
          background: rgba(0, 255, 204, 0.1);
        }

        .social-btn:hover {
          color: #fff;
          background: rgba(0, 255, 204, 0.3);
          transform: translateY(-5px);
        }

        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes heroFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes scroll {
          0% { opacity: 1; transform: translate(-50%, 0); }
          100% { opacity: 0; transform: translate(-50%, 15px); }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @media (max-width: 1024px) {
          .logobg {
            font-size: 4rem;
          }

          .sub-heading-text {
            font-size: 1.8rem;
          }

          .coordinator-img {
            width: 240px;
            height: 240px;
          }
        }

        @media (max-width: 768px) {
          .logobg {
            font-size: 3rem;
          }

          .sub-heading-text {
            font-size: 1.5rem;
          }

          .logo-img {
            width: 80px;
            height: 80px;
          }

          .logos {
            gap: 20px;
          }

          .coordinator-img {
            width: 200px;
            height: 200px;
          }

          .section-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .logobg {
            font-size: 2rem;
          }

          .sub-heading-text {
            font-size: 1.2rem;
          }

          .coordinator-img {
            width: 180px;
            height: 180px;
          }

          .coordinator-name {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Home;