import React from 'react';

const MechanicalShowcase = () => {
  return (
    <section className="mechanical-showcase">
      <div className="content-wrapper">
        <div className="robot-container">
          <img src="../images/gear3-unscreen.gif" alt="Robot Animation" className="robot-image" />
        </div>
        <div className="text-container">
          <h1 className="heading">Innovating the Future</h1>
          <p className="description">Explore the mechanics of tomorrow with cutting-edge designs and groundbreaking technology.</p>
        </div>
      </div>
      <style jsx>{`
        .mechanical-showcase {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 90vh;
           z-index: 2;
          position: relative;
          background: rgba(8, 14, 16, 0.8);
          padding: 40px 20px;
          overflow: hidden;
        }

        .content-wrapper {
          display: flex;
          flex-direction: row;
          width: 95%;
          max-width: 1400px;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .robot-container {
          width: 45%;
          max-width: 600px;
          min-width: 300px;
          position: relative;
          aspect-ratio: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .robot-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 20px rgba(64, 169, 255, 0.3));
          animation: floatAnimation 4s ease-in-out infinite;
        }

        @keyframes floatAnimation {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .text-container {
          color: white;
          flex: 1;
          max-width: 600px;
          padding: 20px;
        }

        .heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: bold;
          background: linear-gradient(90deg, #40A9FF, #69C0FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          position: relative;
        }

        .heading::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #40A9FF, #69C0FF);
          border-radius: 2px;
        }

        .description {
          font-size: clamp(1rem, 2vw, 1.4rem);
          line-height: 1.6;
          text-align: justify;
          opacity: 0.9;
          max-width: 80%;
        }

        /* Large screens */
        @media (min-width: 1400px) {
          .robot-container {
            width: 50%;
            max-width: 700px;
          }

          .heading {
            font-size: 4.5rem;
          }

          .description {
            font-size: 1.5rem;
          }
        }

        /* Medium screens */
        @media (max-width: 1200px) {
          .content-wrapper {
            gap: 30px;
          }

          .robot-container {
            width: 40%;
          }
        }

        /* Tablet screens */
        @media (max-width: 992px) {
          .mechanical-showcase {
            min-height: 80vh;
          }

          .content-wrapper {
            flex-direction: column;
            text-align: center;
          }

          .robot-container {
            width: 60%;
            min-width: 250px;
            order: -1;
          }

          .text-container {
            padding: 0;
          }

          .heading::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .description {
            margin: 0 auto;
          }
        }

        /* Mobile screens */
        @media (max-width: 576px) {
          .mechanical-showcase {
            padding: 20px 10px;
            min-height: 70vh;
          }

          .robot-container {
            width: 80%;
          }

          .content-wrapper {
            gap: 20px;
          }
        }

        /* Animation for content appearance */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .text-container {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .robot-container {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default MechanicalShowcase;