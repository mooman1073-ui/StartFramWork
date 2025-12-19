/** @format */

import { useEffect } from "react";
import StarDark from "../../components/StarDark/StarDark";

export default function Contact() {

  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <>
      <section className="contact">
        <div className="container py-4">
          <h1 className="fw-bold text-uppercase py-3 m-0 text-center">
            contact section
          </h1>
          <StarDark />
          <div className="py-5">
            <form className="w-50 m-auto">
              <div className="position-relative userName">
                <label for="userName" class="position-relative top-0 px-3">
                  userName :
                </label>
                <input
                  id="userName"
                  type="text"
                  placeholder="userName"
                  name="userName"
                  class="form-control border-0 border-bottom py-3 px-3"
                ></input>
              </div>
              <div className="position-relative userAge">
                <label for="userAge" class="position-relative top-0 px-3">
                  userAge :
                </label>
                <input
                  id="userAge"
                  type="text"
                  placeholder="userAge"
                  name="userAge"
                  class="form-control border-0 border-bottom py-3 px-3"
                ></input>
              </div>
              <div className="position-relative userEmail">
                <label for="userEmail" class="position-relative top-0 px-3">
                  userEmail :
                </label>
                <input
                  id="userEmail"
                  type="email"
                  placeholder="userEmail"
                  name="userEmail"
                  class="form-control border-0 border-bottom py-3 px-3"
                ></input>
              </div>
              <div className="position-relative userPassword">
                <label for="userPassword" class="position-relative top-0 px-3">
                  userPassword :
                </label>
                <input
                  id="userPassword"
                  type="email"
                  placeholder="userPassword"
                  name="userPassword"
                  class="form-control border-0 border-bottom py-3 px-3"
                ></input>
              </div>
              <button type="button" class="btn my-4">
                send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
