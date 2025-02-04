import { Title, TitleSm } from "@/components/common/Title";

const About = () => {
  return (
    <>
      <section className="about bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT US" />
            <br />
            <br />
            <Title title="Team Medextrous" className="title-bg" />
          </div>

          <div className="content history-section">
            <div className="left">
              <TitleSm title="Our History" />
              <p className="text-justify">
                Team MEDextrous represents the Department of Mechanical
                Engineering, NIT Hamirpur in NIMBUS, the college's annual
                technical fest, since 2010. The team plays a pivotal role in
                NIMBUS, believing that excellence is an art won by training and
                habituation.
                <br />
                <br />
                MEDextrous has been organizing events that involve leveraging
                the basics of engineering to make efficient use of available
                resources. It provides a platform for brilliant minds to
                showcase their innovative ideas.
              </p>
            </div>
            <div className="right">
              <img
                src="../images/gallery/club1.jpg"
                alt="Our History"
                className="responsive-image"
              />
            </div>
          </div>

          <div className="content vision-section">
            <div className="left">
              <TitleSm title="Our Vision" />
              <p className="text-justify">
                The capacity to learn is a gift; the ability to learn is a
                skill; the willingness to learn is a choice. And when there is a
                will, there is a way. We strive to transform engineering
                concepts into real-world applications, shaping the future with
                innovation and excellence.
              </p>
            </div>
            <div className="right">
              <img
                src="/images/gallery/club2.jpg"
                alt="Our Vision"
                className="responsive-image"
              />
            </div>
          </div>
        </div>

        <div className="achievements-section">
          <TitleSm title="ACHIEVEMENTS" />
          <div className="timeline">
            {[
              { year: "2023", title: "BEST PROJECT EXECUTION" },
              { year: "2021", title: "BEST PROJECT EXECUTION" },
              { year: "2019", title: "BEST EVENT AWARD" },
              { year: "2018", title: "BEST DEPARTMENTAL TEAM" },
              { year: "2016", title: "BEST EVENT AWARD" },
              { year: "2015", title: "BEST EVENT AWARD" },
              { year: "2014", title: "BEST EVENT AWARD" },
              { year: "2012", title: "BEST DEPARTMENTAL TEAM" },
              { year: "2011", title: "BEST DEPARTMENTAL TEAM" },
              { year: "2010", title: "BEST DEPARTMENTAL TEAM" },
            ].map((achievement, index) => (
              <div
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                key={index}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{achievement.title}</h3>
                  <p>NIMBUS {achievement.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Styling */}
        <style jsx>{`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 3rem;
            gap: 2rem;
            width: 100%;
          }

          .content .left,
          .content .right {
            flex: 1;
            width: 100%;
          }

          .responsive-image {
            width: 100%;
            max-width: 568px;
            height: auto;
            border-radius: 15px;
            object-fit: cover;
            box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease-in-out;
          }

          .responsive-image:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
          }

          p {
            font-size: 1rem;
            line-height: 1.6;
            color: #ccc;
            text-align: justify;
            margin-top: 1rem;
          }

          /* Achievements Section */
          .achievements-section {
            margin-top: 3rem;
            padding: 2rem;
            color: #fff;
            text-align: center;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
          }

          .timeline {
            position: relative;
            margin: 2rem auto;
            padding: 0;
            width: 90%;
            max-width: 800px;
          }

          .timeline-item {
            display: flex;
            align-items: center;
            position: relative;
            margin-bottom: 2rem;
          }

          .timeline-item.left .timeline-content {
            margin-right: auto;
            text-align: right;
          }

          .timeline-item.right .timeline-content {
            margin-left: auto;
            text-align: left;
          }

          .timeline-dot {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: #4a90e2;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
          }

          .timeline-content {
            position: relative;
            padding: 1rem 1.5rem;
            background-color: #333;
            color: #fff;
            border-radius: 10px;
            width: 45%;
            box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease, background-color 0.3s ease;
          }

          .timeline-content:hover {
            transform: translateY(-5px);
            background-color: #444;
          }

          .timeline-content h3 {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
            color: #4a90e2;
          }

          .timeline-content p {
            font-size: 1rem;
          }

          .timeline:before {
            content: "";
            position: absolute;
            width: 4px;
            background-color: #4a90e2;
            height: 100%;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
          }

          @media (max-width: 768px) {
            .content {
              flex-direction: column;
              width: 100%;
            }

            .content .left,
            .content .right {
              width: 100%;
            }

            /* Timeline adjustments for mobile */
            .timeline-item {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }

            .timeline-item.left .timeline-content,
            .timeline-item.right .timeline-content {
              width: 80%;
              margin: 0 auto;
              text-align: center;
            }

            .timeline-dot {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
            }
          }

          @media (min-width: 769px) {
            .history-section {
              flex-direction: row;
            }

            .vision-section {
              flex-direction: row-reverse;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default About;