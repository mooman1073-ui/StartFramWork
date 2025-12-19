/** @format */

import { useEffect } from "react";
import Star from "../../components/Star/Star";

export default function About() {

  useEffect(() => {
    document.title = "About";
  }, []);
  
  return (
    <>
      <section className="about py-5">
        <div className="container py-5">
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <h1 className="text-white fw-bold text-uppercase py-3 m-0">
              about component
            </h1>
            <Star />
            <div class="row px-5 pt-3">
              <div class="col-md-6 col-sm-12 text-white">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div class="col-md-6 col-sm-12 text-white">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
