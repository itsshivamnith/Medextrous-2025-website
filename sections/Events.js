import { events } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";

const Events = () => {
  return (
    <>
      <section className="club bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="" /> <br />
            <br />
            <Title title="EVENTS" className="title-bg" />
          </div>
          <div className="grid-3 py">
            {events.map((item) => (
              <div className="event-card" key={item.id}>
                <Card data={item} caption={item.post} show={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* Default: 3 items per row */
          gap: 30px; /* Space between items */
        }

        @media (max-width: 1024px) {
          .grid-3 {
            grid-template-columns: repeat(2, 1fr); /* 2 items per row on tablets */
          }
        }

        @media (max-width: 768px) {
          .grid-3 {
            grid-template-columns: 1fr; /* 1 item per row on phones */
          }
        }

        .event-card {
          position: relative;
          overflow: hidden;
          border-radius: 15px; /* Increased border radius */
          width: 100%; /* Ensure the card takes the full grid cell width */
          background-color: rgba(26, 18, 182, 0.2) ; /* Background color for the card */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Initial soft shadow */
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease;
        }

        .event-card img {
        
          width: 100%; /* Image fills the card */
          height: 100%; /* Image fills the card's height */
          object-fit: cover; /* Ensure the image scales properly without distortion */
          border-radius: 15px; /* Round corners of the image */
          transition: transform 0.3s ease; /* Smooth image transition */
        }

        .event-card:hover {
          transform: translateY(-5px); /* Slight lift on hover */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
          border-radius: 20px; /* Increased border radius on hover */
        }

        .event-card:hover img {
          transform: scale(1.05); /* Zoom effect on image */
        }

        .card-content {
          padding: 20px; /* Inner padding for the card content */
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
          color: #fff; /* White text */
          padding: 20px;
          border-radius: 0 0 15px 15px; /* Rounded bottom corners */
          transition: background-color 0.3s ease;
        }

        .card-content h3 {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .card-content p {
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .container {
          max-width: 1200px; /* Limit container width */
          margin: auto; /* Center the container */
          padding: 0 20px; /* Add padding for smaller screens */
        }
      `}</style>
    </>
  );
};

export default Events;
