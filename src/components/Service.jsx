import React from "react";
import images from "../assets";

const Service = () => {
  return (
    <section>
      <div className="w-10/12 m-auto  p-10 ">
        <h2 className="text-center">Our Value</h2>
        <h1 className="text-center font-bold text-2xl m-5">
          Value We Give to You
        </h1>
        <p className="text-center">
          We always ready to help by providijng the best services for you. We
          beleive a good place to live can make your life better
        </p>
        <div className="flex flex-col  md:flex-row">
          <div className="p-5 md:w-1/2 flex justify-center items-center ">
            <img
              className="w-5/6 h-5/6 object-cover rounded-full"
              src={images.sampleHome}
              alt="sampleHome"
            />
          </div>
          <div className="p-5 md:w-1/2 ">
            <ul className="list-disc">
              <li>Located near Kasbapettai bustand(Erode to Poondurai road)</li>
              <li>All plots are designed as per astrological facts</li>
              <li>Facilitated with gated security</li>
              <li>33 feet road facility available</li>
              <li>LED street light is powered with solar panel</li>
              <li>Seperate water connection is available for each plot</li>
              <li>Drinage system is available</li>
              <li>
                EC, FMB, RSR and Legal Opinion Book will be provided for each
                plot
              </li>
              <li>Separate Patta will be provided</li>
              <li>
                Trees are planted near road to maintain eco friendly environment
              </li>
              <li>1 lakh liter water storage tank is provided</li>
              <li>
                70% bank loan facility is available(Axis, HDFC, Punjab National,
                bank of Baroda)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
