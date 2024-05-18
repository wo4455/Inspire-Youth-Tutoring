import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const ListItem = ({ data, c }) => {
  return (
    <li
      className={`${
        c && "border-b border-gray-400 my-8 text-lg uppercase font-light"
      }`}
    >
      <Link
        to={`/${data === "Home" ? "" : data.toLowerCase()}`}
        onClick={() => setIsNavOpen(false)}
      >
        {data}
      </Link>
    </li>
  );
};

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isNavOpen]);

  return (
    <header className="w-full bg-black text-white flex items-center justify-between border-b border-gray-400 pb-5">
      <div className="text-xl font-bold font-georgia">
        <Link to={"/"}>INSPIRE YOUTH TUTORING</Link>
      </div>

      <nav>
        <section className="flex md:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <AiOutlineMenu size={20} />
          </div>

          <div
            className={`${
              isNavOpen ? "showMenuNav" : "hideMenuNav"
            } fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center`}
          >
            <div
              className="absolute top-0 right-0 px-8 py-9"
              onClick={() => setIsNavOpen(false)}
            >
              <AiOutlineClose size={20} />
            </div>
            <ul className="flex flex-col text-white items-center justify-between min-h-[250px]">
              <ListItem data={"Home"} c />
              <ListItem data={"About"} c />
              <ListItem data={"Contact"} c />
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-8 md:flex font-open_sans font-light">
          <ListItem data={"Home"} />
          <ListItem data={"About"} />
          <ListItem data={"Contact"} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
