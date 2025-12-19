/** @format */

import { useEffect } from "react";
import StarDark from "../../components/StarDark/StarDark";
import photo1 from "../../assets/images/port1.png";
import photo2 from "../../assets/images/port2.png";
import photo3 from "../../assets/images/port3.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

export default function Portfolio() {
  const [fullscreen, setFullscreen] = useState(null);

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <>
      <section className="portfolio">
        <div className="container py-4">
          <h1 className="fw-bold text-uppercase py-3 m-0 text-center">
            portfolio component
          </h1>
          <StarDark />
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 py-5">
            <div className="col card-photo">
              <div className="position-relative rounded-3 overflow-hidden">
                <img src={photo1} alt="portfolio" className="w-100" />
                <div
                  className="layer w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center"
                  onClick={() => setFullscreen(photo1)}
                >
                  <i className="fa-solid fa-plus display-2"></i>
                </div>
              </div>
            </div>

            <div className="col card-photo">
              <div className="position-relative rounded-3 overflow-hidden">
                <img src={photo2} alt="portfolio" className="w-100" />
                <div
                  className="layer w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center"
                  onClick={() => setFullscreen(photo2)}
                >
                  <i className="fa-solid fa-plus display-2"></i>
                </div>
              </div>
            </div>

            <div className="col card-photo">
              <div className="position-relative rounded-3 overflow-hidden">
                <img src={photo3} alt="portfolio" className="w-100" />
                <div
                  className="layer w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center pointer-events"
                  onClick={() => setFullscreen(photo3)}
                >
                  <i className="fa-solid fa-plus display-2"></i>
                </div>
              </div>
            </div>

            <div className="col card-photo mt-4">
              <div className="position-relative rounded-3 overflow-hidden">
                <img src={photo1} alt="portfolio" className="w-100" />
                <div
                  className="layer w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center"
                  onClick={() => setFullscreen(photo1)}
                >
                  <i className="fa-solid fa-plus display-2"></i>
                </div>
              </div>
            </div>

            <div className="col card-photo mt-4">
              <div className="position-relative rounded-3 overflow-hidden">
                <img src={photo2} alt="portfolio" className="w-100" />
                <div
                  className="layer w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center"
                  onClick={() => setFullscreen(photo2)}
                >
                  <i className="fa-solid fa-plus display-2"></i>
                </div>
              </div>
            </div>

            <div className="col card-photo mt-4">
              <div className="position-relative rounded-3 overflow-hidden">
                <img src={photo3} alt="portfolio" className="w-100" />
                <div
                  className="layer w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center"
                  onClick={() => setFullscreen(photo3)}
                >
                  <i className="fa-solid fa-plus display-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {fullscreen ? (
          <div
            className="fullscreen-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            onClick={() => setFullscreen(null)}
          >
            <img src={fullscreen} alt="fullscreen" />
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
