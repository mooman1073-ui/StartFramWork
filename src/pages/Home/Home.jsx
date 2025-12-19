/** @format */

import { useEffect } from "react";
import avatar from "../../assets/images/avataaars.svg";
import Star from "../../components/Star/Star";

export default function Home() {

  useEffect(() => {
    document.title = "Home";
  }, []);
  
  return (
    <>
      <section className="home py-5">
        <div className="container py-4">
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <img src={avatar} title="image" className="home-img" />
            <h1 className="text-white fw-bold text-uppercase py-3 m-0">
              Start Framework
            </h1>
            <Star />
            <p className="text-white pt-2">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
