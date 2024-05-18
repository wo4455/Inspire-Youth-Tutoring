import React from "react";
import { Link } from "react-router-dom";

const Desc = () => {
  return (
    <section className="md:w-2/3 m-auto flex flex-col items-start text-left">
      <h1 className="text-4xl md:text-6xl font-georgia my-10">About Us</h1>
      <p className="mb-10 text-md font-open_sans font-light italic leading-7">
        Welcome to Inspire Youth Tutoring, where our mission is to empower and
        support students in their academic journeys. We believe that every
        student has the potential to excel, and our goal is to unlock that
        potential through dedicated, personalized tutoring. Our team of high
        school tutors brings a unique and relatable approach to learning, making
        complex subjects understandable and enjoyable. We understand the
        challenges that students face today and are committed to providing the
        guidance, resources, and encouragement they need to succeed. At Inspire
        Youth Tutoring, we are passionate about making a positive impact on our
        students' academic achievements and overall confidence.
      </p>
      <Link to={"/contact"}>
        <button className="border border-black bg-black font-white px-12 py-3 text-lg font-merriweather font-extralight transition-colors duration-300 ease-in-out smooth-2">
          Contact Us
        </button>
      </Link>
    </section>
  );
};

export default Desc;
