import React from "react";
// import video_high from "../assets/h_video_high.mp4";
// import video_med from "../assets/h_video_med.mp4";
import video_low from "../assets/h_video_low.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container mx-auto pt-8">
      <section className="text-left">
        <h1 className="text-4xl md:text-8xl font-georgia mb-4">
          EMPOWERING STUDENTS
        </h1>
        <div className="w-full mb-4 md:mb-8">
          <video className="w-full" autoPlay loop muted>
            <source src={video_low} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center ">
          <div className="text-xl mb-4 md:mb-8">
            <p className="italic font-open_sans font-light">
              Tutoring Services
            </p>
          </div>
          <Link to={"/about"}>
            <button className="border border-black px-12 py-3 text-lg font-merriweather font-extralight transition-colors duration-300 ease-in-out smooth">
              Learn More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
