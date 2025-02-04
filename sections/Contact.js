import { Title, TitleSm } from "@/components/common/Title";

const Contact = () => {
  return (
    <>
      <section className="contact-section bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="GET IN TOUCH" /><br/>
            <Title title="Contact Us" className="title-bg" />
          </div>

          <div className="content">
            
            <div className="form-container">
              <form className="contact-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit" className="submit-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        <style jsx>{`
          .contact-section {
            padding: 2rem;
            color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
         
          }

          .container {
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
          }

          .heading-title .title-bg {
            font-size: 2rem;
            font-weight: bold;
            color: #66aaff; /* Light blue title */
            margin-bottom: 1.5rem;
          }

          .content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .form-container {
            background: linear-gradient(145deg, #1d2a47, #2b3e67); /* Dark bluish gradient */
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 8px 8px 15px #0c1121, -8px -8px 15px #3e4b6f; /* Darker bluish shadow */
          }

          .contact-form input,
          .contact-form textarea {
            width: 100%;
            margin-bottom: 1rem;
            padding: 0.75rem;
            font-size: 1rem;
            color: #fff;
            background-color: #2c3e54; 
            border: none;
            border-radius: 5px;
            box-shadow: inset 2px 2px 5px #1b2537, inset -2px -2px 5px #3a4b6c;
          }

          .contact-form input::placeholder,
          .contact-form textarea::placeholder {
            color: #aad0f4; 
          }

          .submit-btn {
            width: 100%;
            padding: 0.75rem;
            font-size: 1rem;
            color: #fff;
            background: linear-gradient(145deg, #4c6f94, #5a80a5); 
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.3s;
            box-shadow: 4px 4px 6px #1a2d47, -4px -4px 6px #5b6f8b; 
          }

          .submit-btn:hover {
            transform: translateY(-2px);
            background: linear-gradient(145deg, #5a80a5, #4c6f94);
          }

          @media (max-width: 768px) {
            .contact-section {
              padding: 1rem;
            }

            .container {
              width: 90%;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Contact;
