import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '/public/images/logo1.png'; 

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader">
          <div className="text-arc">
            <span>MEDextrous</span>
          </div>
          <div className="gear">
            <div className="inner-gear">
              <Image src={logo} alt="Logo" layout="fill" objectFit="contain" className="black-logo" />
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 9999;
        }

        .text-arc {
          position: absolute;
          top: 15%;
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          color: #fff;
          text-transform: uppercase;
          transform: translateY(-50%);
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .text-arc span {
          display: block;
          font-family: 'Arial', sans-serif;
          font-size: 36px;
          color: #fff;
          text-align: center;
          position: relative;
          z-index: 1;
          letter-spacing: 2px;
        }

        .gear {
          position: relative;
          width: 150px;
          height: 150px;
          border: 10px solid rgb(52, 110, 235);
          border-radius: 50%;
          border-top: 10px solid transparent;
          animation: spin 1.5s linear infinite;
        }

        .inner-gear {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          transform: translate(-50%, -50%);
        }

        .black-logo {
          filter: brightness(0) invert(0);
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Preloader;