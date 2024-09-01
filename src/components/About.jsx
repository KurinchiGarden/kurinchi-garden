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
    {
      image: images.bank,
      label: "Bank",
    },
  ];

  return (
    <section id="about" className="bg-darkSage text-darkGreen">
      <div className=" w-11/12 md:w-10/12 m-auto pt-10 pb-10  ">
        <div className="flex flex-col justify-center items-center">
          <h3 className="">Three steps. Three minutes.</h3>
          <h1 className="font-bold text-2xl m-5 text-center ">
            Everything should be this easy
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          {amenity.map((x) => {
            return (
              <div className=" md:w-1/3 flex flex-col  overflow-hidden justify-center items-center m-2 rounded-2xl shadow-xl">
                <img
                  className="h-[85%] md:h-full w-full rounded object-contain"
                  src={x.image}
                  alt={x.label}
                />
                <h3 className="text-center font-semibold p-2  w-full">
                  {x.label}
                </h3>
              </div>
              // <div className=" md:w-1/3 h-72 flex flex-col  overflow-hidden justify-center items-center m-2 rounded-2xl  ">
              //   <img
              //     className="h-[85%] md:h-[90%] w-full rounded object-fit"
              //     src={x.image}
              //     alt={x.label}
              //   />
              //   <h3 className="text-center font-semibold p-2 border rounded-2xl border-green w-full">
              //     {x.label}
              //   </h3>
              // </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
