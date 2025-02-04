import React from "react";
import { Title, TitleSm } from "@/components/common/Title";
import Slider from "react-slick";
import { final, third, second, first } from "@/assets/data/dummydata"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

const Team = () => {
  const slideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Card = ({ data }) => {
    return (
      <div className="card">
        <div className="card-img">
          <img src={data.cover} alt={data.title} className="team-image" />
          <div className="overlay">
            {data.linkedin && (
              <a href={data.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin icon"></i>
              </a>
            )}
            {data.instagram && (
              <a href={data.instagram} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram icon"></i>
              </a>
            )}
          </div>
        </div>
        <div className="card-details">
          <h3>{data.title}</h3>
        </div>
      </div>
    );
  };

  return (
    <section className="club bg-top">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="MEET OUR TEAM" /> <br />
          <br />
          <Title title="Final Year Members" className="title-bg" />
        </div>

        <div className="slide-container">
          <Slider {...slideSettings}>
            {final.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </Slider>
        </div>

        <div className="heading-title">
          <Title title="Coordinators" className="title-bg" />
        </div>
        <div className="slide-container">
          <Slider {...slideSettings}>
            {third.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </Slider>
        </div>
        <div className="heading-title">
          <Title title="Executive Members" className="title-bg" />
        </div>
        <div className="slide-container">
          <Slider {...slideSettings}>
            {second.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </Slider>
        </div>
        <div className="heading-title">
          <Title title="Volunteer Members" className="title-bg" />
        </div>
        <div className="slide-container">
          <Slider {...slideSettings}>
            {first.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </Slider>
        </div>
      </div>
      <style jsx>{`
        .card {
          position: relative;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        .card-img {
          position: relative;
          width: 100%;
          height: 300px; 
        }

        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover; 
          object-position: center;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card:hover .overlay {
          opacity: 1;
        }
        .icon {
          color: #fff;
          font-size: 1.5rem;
          margin: 0 0.5rem;
        }
        .card-details {
          padding: 1rem;
        }
        .card-details h3 {
          margin: 0;
          font-size: 10px;
          color: red;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .card-img {
            height: 250px;
          }
        }
        @media (max-width: 480px) {
          .card-img {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;

