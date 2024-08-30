import React from "react";
import images from "../assets";
import Brochure from "../assets/docs/KurinchiGardenBrochure.pdf";

const PartnerShip = () => {
  const banks = [
    {
      label: "hdfc",
      link: images.hdfc,
    },
    {
      label: "axis",
      link: images.axis,
    },
    {
      label: "pnb",
      link: images.pnb,
    },
    {
      label: "bob",
      link: images.bob1,
    },
  ];

  return (
    <section className="bg-black text-gray">
      <div className="w-11/12 md:w-10/12 m-auto pt-10 pb-10 ">
        <div className="mb-10 ">
          <h1 className="font-bold text-2xl text-center ">
            Brochure & Bank Partners
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="border p-4 rounded-lg mb-3 bg-yellow text-black "
            onClick={() => window.open(Brochure)}
          >
            Get Brochure
          </button>
          <div>
            <ul className="flex flex-col md:flex-row justify-center items-center  ">
              {banks.map((x) => (
                <li className=" p-2 m-2 w-full h-20" key={x.label}>
                  <img
                    className="w-full h-full object-fill "
                    src={x.link}
                    alt={x.label}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerShip;
