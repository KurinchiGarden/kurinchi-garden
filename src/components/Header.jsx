import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import images from "../assets";
import ImageSlider from "./ImageSlider";

const homeImages = [images.home1, images.home2, images.home3, images.home4];

const Header = () => {
  return (
    <header className="bg-sage text-slate-300 text-darkGreen">
      <div className="w-11/12 md:w-10/12 m-auto">
        <nav className="flex justify-between pt-5 pb-5 md:pt-10 md:pb-10">
          <h2 className="md:w-2/4 font-semibold text-2xl static">
            <span className="text-green">Kurinchi</span>{" "}
            <span className="">Garden</span>
            <br />
            <span className="text-sm absolute">Dream into Reality</span>
          </h2>
          <div className="flex justify-center items-center text-xl pr-5 md:hidden  ">
            <a href="tel:+919750268888">
              <FaPhoneVolume color="#609966" />
            </a>
          </div>
          <ul className="w-2/4 hidden md:visible md:flex md:flex-row justify-between items-center">
            <li className="hover:text-green">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-green">
              <a href="#service">Service</a>
            </li>
            <li className="hover:text-green">
              <a href="#gallery">Gallery</a>
            </li>
            <li className="hover:text-green">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="h-full flex flex-col md:flex-row pb-12">
          <div className="md:w-2/4 flex justify-center items-center flex-col">
            <div className="w-full m-5">
              <div className="mb-4">
                <h3 className="text-2xl font-bold">
                  Unlock <br />A Life of Happiness{" "}
                </h3>
              </div>
              <p className="text-sm mb-4">
                Kurinchi Garden is located in{" "}
                <span className="text-green">
                  Poondurai Road-Kasbapettai-Erode,{" "}
                </span>
                presenting a harmonious blend of nature and wellness living with
                all the basic amenities nearby
              </p>
              <div className="md:w-9/12 flex flex-col gap-2 font-semibold">
                <p className="shadow-sm">
                  <span className="text-green">7</span> Acre Development
                </p>
                <p className="shadow-sm">
                  <span className="text-green">119</span> Premium Plots
                </p>
                <p className="shadow-sm">
                  <span className="text-green">600 - 3400</span> Sq feet plot
                  sizes
                </p>
                <p className="shadow-sm">
                  <span className="text-green">DTCP</span> Approved 540/2023 and{" "}
                  {""}
                  <span className="text-green">RERA</span> Approved
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-2/4 flex justify-center items-center">
            <ImageSlider images={homeImages} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
