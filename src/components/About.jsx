import React from "react";
import images from "../assets";

const About = () => {
  const amenity = [
    {
      image: images.school,
      label: "School",
    },
    {
      image: images.busStand,
      label: "Bus Stand",
    },
    {
      image: images.superMarket,
      label: "Super Market",
    },
  ];

  return (
    <section>
      <div className="w-10/12 m-auto  p-10 ">
        <div className="flex flex-col justify-center items-center">
          <h3 className="">Three steps. Three minutes.</h3>
          <h1 className="font-bold text-2xl m-5">
            Everything should be this easy
          </h1>
        </div>
        <div className=" md:flex ">
          {amenity.map((x) => {
            return (
              <div className=" md:w-1/3 h-72 flex flex-col justify-center items-center m-2 ">
                <img
                  className="w-5/6 h-5/6 object-cover rounded-full"
                  src={x.image}
                  alt="school"
                />
                <h3 className="text-center font-semibold">{x.label}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
