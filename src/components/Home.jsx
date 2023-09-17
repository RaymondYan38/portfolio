import React from "react";
import HeroImage from "../assets/hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home"
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl sm:mt-48 font-bold text-white">
            I'm a Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a Computer Science student at UC Irvine and am interested in
            software engineering and social impact. Through my work, I hope to
            be able to make others' lives better. Currently, I love working on
            web applications using the React and just starting to delve into the
            world of AI/ML.
          </p>
          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Contact
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="hero"
            className="rounded-2xl mx-auto w-2/5 md:w-2/3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
