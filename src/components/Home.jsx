import React from "react";
import HeroImage from "../Assets/HeroImg.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll"
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Welcome to my Portfolio!
            My name is Khang, 
            I'm a Web Front End and Game 2D Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
           I love to work on web application using
            technologies like HTML, CSS, Creact and on game 2D using C#,C, C++, Python.
          </p>

          <div>
          <Link to="projects" smooth duration={500}>
          <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-yellow-500 hover:scale-110 duration-300">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </button>
        </Link>
            
          </div>
        </div>
        <div className=" pr-0">
          <img
            className="rounded-2xl mx-auto w-1/3 md:w-2/3 border-4 border-cyan-500"
            src={HeroImage}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
