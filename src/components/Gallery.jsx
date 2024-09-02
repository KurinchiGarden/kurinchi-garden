import React from "react";
import SampleVideo from "../assets/video/SampleVideo.mp4";

const Gallery = () => {
  return (
    <section id="gallery" className="bg-darkSage text-darkGreen">
      <div className=" w-11/12 md:w-10/12 m-auto pt-10 pb-12">
        <div className="mb-10 ">
          <h1 className="font-bold text-2xl text-center">Gallery</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-3 border">
          <video controls>
            <source src={SampleVideo}></source>
          </video>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
