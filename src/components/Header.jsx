import React from "react";
import images from "../assets";

const Header = () => {
  return (
    <header>
      <nav className="w-10/12 m-auto flex p-10 ">
        <h2 className="w-2/4">Kurinchi Garden</h2>
        <ul className="justify-evenly w-2/4 flex-col hidden md:visible md:flex md:flex-row ">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#flatMap">Flat Map</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="w-10/12 md:h-96 m-auto flex flex-col md:flex-row ">
        <div className=" p-5 md:w-2/4 flex justify-center items-center flex-col  ">
          <div className="w-3/4">
            <div className="mb-8 ">
              <h3 className="text-xl font-semibold">Discover</h3>
              <h1 className="text-xl font-semibold">Most Suitable </h1>
              <h3 className="text-xl font-semibold">Property</h3>
            </div>
            <p className=" ">
              Find a variety of properties that suit you very easilty. Forget
              all difficulties in finding a residence for you, we are in{" "}
              <span className="italic font-semibold">
                Poondurai Road, Kasbapettai Erode...
              </span>
            </p>
          </div>
        </div>
        <div className=" p-5 md:w-2/4 flex justify-center items-center ">
          <img
            className=" w-5/6 h-5/6 object-cover rounded-full"
            src={images.logo}
            alt="logo"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
