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
      label: "Bus Stop",
    },
    {
      image: images.superMarket,
      label: "Super Market",
    },
    {
      image: images.bank,
      label: "Bank",
    },
  ];

  return (
    <section id="about" className="bg-darkSage text-darkGreen">
      <div className=" w-11/12 md:w-10/12 m-auto pt-5 pb-10  ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl mt-5 mb-7 text-center ">
            Everything should be this easy
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row gap-3 w-10/12 md:w-full">
            {amenity.map((x) => {
              return (
                <div className="md:w-1/3 flex flex-col  overflow-hidden justify-center items-center m-2 rounded-2xl shadow-xl">
                  <img
                    className="h-[85%] md:h-full w-full rounded object-cover"
                    src={x.image}
                    alt={x.label}
                  />
                  <h3 className="text-center font-semibold p-2 bg-sage  w-full">
                    {x.label}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
