import { projects } from "@/assets/data/dummydata";
import { Title, TitleSm } from "@/components/common/Title";
import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="projects bg-top">
        <div className="container">
          <div className="heading-title fade-in">
            <Title title="PROJECTS" className="title-bg" />
            <br />
            <TitleSm title="Explore our innovative projects" />
          </div>

          <div className="hero-content">
            {projects.map((item, index) => (
              <div className="card-wrapper fade-in" key={item.id} style={{ animationDelay: `${index * 150}ms` }}>
                <div className="card-inner">
                  <div className="image-container">
                    <img src={item.cover} alt={item.title} className="project-image" />
                    <div className="overlay">
                      
                    </div>
                  </div>
                  <div className="card-heading">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .projects {
          padding: 4rem 1rem;
          color: #fff;
          
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .heading-title {
          margin-bottom: 3rem;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .heading-title.show {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          width: 100%;
        }

        .card-wrapper {
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          perspective: 1000px;
        }

        .card-wrapper.show {
          opacity: 1;
          transform: translateY(0);
        }

        .card-inner {
          position: relative;
          padding: 1.5rem;
          background: rgba(13, 21, 34, 0.7);
          border: 1px solid rgba(46, 129, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(10px);
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glow {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: radial-gradient(circle at 50% 50%, rgba(46, 129, 255, 0), rgba(46, 129, 255, 0.15));
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .card-wrapper:hover .card-inner {
          transform: translateY(-15px) rotateX(10deg);
          border-color: rgba(46, 129, 255, 0.4);
          box-shadow: 
            0 15px 35px rgba(46, 129, 255, 0.2),
            0 5px 15px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(46, 129, 255, 0.2);
        }

        .card-wrapper:hover .glow {
          opacity: 1;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 240px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-wrapper:hover .project-image {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(13, 21, 34, 0.95),
            rgba(46, 129, 255, 0.4)
          );
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card-wrapper:hover .overlay {
          opacity: 1;
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
          transform: translateY(20px);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-wrapper:hover .action-buttons {
          transform: translateY(0);
        }

      
        .card-heading {
          z-index: 1;
          width: 100%;
        }

        .card-heading h3 {
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0.5rem 0;
          transition: color 0.3s ease;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .card-heading p {
          font-size: 1rem;
          line-height: 1.6;
          color: #a8b3cf;
          margin-top: 0.5rem;
          transition: color 0.3s ease;
        }

        .card-wrapper:hover .card-heading h3 {
          color: #2e81ff;
        }

        .card-wrapper:hover .card-heading p {
          color: #cbd5e1;
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }

          .image-container {
            height: 220px;
          }
        }

        @media (max-width: 768px) {
          .projects {
            padding: 3rem 1rem;
          }

          .hero-content {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }

          .card-inner {
            padding: 1rem;
          }

          .image-container {
            height: 200px;
          }

          .card-heading h3 {
            font-size: 1.25rem;
          }

          .card-heading p {
            font-size: 0.9rem;
          }

          .action-buttons {
            flex-direction: column;
            gap: 0.5rem;
          }

          .btn-view, .btn-demo {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default Projects;