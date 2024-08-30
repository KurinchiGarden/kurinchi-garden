import React from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import images from "../assets";

const Header = () => {
  return (
    <header className="bg-black text-slate-300 text-gray">
      <div className="w-11/12 md:w-10/12 m-auto">
        <nav className="flex justify-between pt-5 pb-5 md:p-10  ">
          <h2 className="md:w-2/4 font-semibold text-2xl ">
            <span className="text-yellow">Kurinchi</span>{" "}
            <span className="">Garden</span>
          </h2>
          <div className="flex justify-center items-center text-xl pr-5 md:hidden  ">
            <a href="tel:+919750268888">
              <FaPhoneFlip color="#FFD369" />
            </a>
          </div>
          <ul className="justify-evenly w-2/4 flex-col hidden md:visible md:flex md:flex-row ">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="md:h-96 flex flex-col md:flex-row ">
          <div className="md:w-2/4 flex justify-center items-center flex-col">
            <div className="w-full mt-3 md:w-3/4">
              <div className="mb-4 md:mb-8 ">
                <h3 className="text-2xl font-bold">Discover</h3>
                <h1 className="text-2xl font-bold">Most Suitable </h1>
                <h3 className="text-2xl font-bold">Property</h3>
              </div>
              <p className="text-sm">
                Find a variety of properties that suit you very easily <br />
                Forget all difficulties in finding a residence for you <br />
                We are in{" "}
                <span className="italic font-semibold text-yellow">
                  Kasbapettai Erode
                </span>{" "}
                via Poondurai Road
              </p>
              {/* <div className="flex mt-3 items-center">
                <p className="w-[2rem] text-2xl ">
                  <FaLocationDot size={20} />
                </p>
                <p className="">Poondurai Road, Kasbapettai Erode</p>
              </div> */}
              <div className="w-9/12 flex mt-3 justify-between items-center ">
                <div className="flex flex-col justify-center items-center">
                  <span>7</span>
                  <span>Acres</span>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <span>119</span>
                  <span>Plots</span>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <span>540/2023</span>
                  <span>DTCP No</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 md:w-2/4 flex justify-center items-center ">
            <div className="w-11/12 border-lightBlack border-8 overflow-hidden rounded-tl-[15rem] rounded-tr-[15rem] ">
              <img className="" src={images.logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
