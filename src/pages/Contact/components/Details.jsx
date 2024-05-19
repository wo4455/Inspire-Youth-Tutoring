import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ListItem = ({ title, desc, otherStyles }) => {
  return (
    <div className="flex flex-col items-start text-left md:flex-row md:justify-between md:w-full">
      <h3 className="text-xl font-open_sans font-light italic mb-5">{title}</h3>
      <p
        className={`${otherStyles} leading-7 text-lg font-open_sans font-light mb-5 md:w-8/12`}
      >
        {desc}
      </p>
    </div>
  );
};

const Details = () => {
  return (
    <section className="md:w-2/3 m-auto flex flex-col items-start text-left">
      <h2 className="text-3xl md:text-5xl font-georgia my-10">Details</h2>
      <ListItem
        title={"Email"}
        desc={"hstutoring001@gmail.com"}
        otherStyles={"underline"}
      />
      <ListItem
        title={"Phone"}
        desc={"(312)-758-0552"}
        otherStyles={"underline"}
      />
      <ListItem title={"Location"} desc={"Chicago, IL, USA"} />
      <div className="flex flex-col items-start text-left md:flex-row md:justify-between md:w-full">
        <h3 className="text-xl font-open_sans font-light italic mb-5">
          Social Media
        </h3>
        <div className="flex mb-10 md:w-8/12">
          <a href="http://facebook.com" target="_blank">
            <FaFacebook
              size={25}
              className="mr-3 opacity-fade cursor-pointer"
            />
          </a>
          <a href="http://instagram.com" target="_blank">
            <FaInstagram
              size={25}
              className="mr-3 opacity-fade cursor-pointer"
            />
          </a>
          <a href="http://x.com" target="_blank">
            <FaXTwitter
              size={25}
              className="mr-3 opacity-fade cursor-pointer"
            />
          </a>
          <a href="http://linkedin.com" target="_blank">
            <FaLinkedin
              size={25}
              className="mr-3 opacity-fade cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Details;
