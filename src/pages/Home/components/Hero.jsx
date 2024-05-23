import React from "react";
import { Link } from "react-router-dom";
import heroPhoto from "../assets/h_photo_1.jpg";

const Hero = () => {
  return (
    <div className="container mx-auto pt-8">
      <section className="text-left">
        <h1 className="w-3/4 m-auto text-4xl md:text-6xl lg:text-8xl font-georgia mb-4">
          EMPOWERING STUDENTS
        </h1>
        <div className="w-3/4 mb-4 md:mb-8 mx-auto">
          <img
            className="w-full m-auto"
            src={heroPhoto}
            alt="Photo of a Girl Doing Homework."
          />
        </div>
        <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center w-3/4 m-auto">
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
