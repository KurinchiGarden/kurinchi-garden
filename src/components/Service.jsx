import React from "react";

const Service = () => {
  const features = [
    {
      value: 1,
      label: "Location ",
      description: "- Kasbapettai (Erode to Poondurai road)",
    },
    {
      value: 2,
      label: "Plot design ",
      description: "- Based astrological facts",
    },
    {
      value: 3,
      label: "Security ",
      description: "- Compound wall protected",
    },
    {
      value: 4,
      label: "Road ",
      description: "- 33 feet",
    },
    {
      value: 5,
      label: "Water ",
      description: "- 1 lakh liter water storage tank is provided",
    },
    {
      value: 6,
      label: "Eco friendly ",
      description:
        "- Trees are planted near road to maintain eco friendly environment",
    },
    {
      value: 7,
      label: "Legal documents ",
      description:
        "- EC, FMB, RSR, Patta and Legal Opinion Book will be provided for each plot",
    },
    {
      value: 8,
      label: "Wastage ",
      description: "- Drinage system is available",
    },
  ];

  return (
    <section id="service" className="bg-sage text-darkGreen">
      <div className="w-11/12 md:w-10/12 m-auto pt-5 md:p-10  ">
        <h2 className="text-center text-green">Our Value</h2>
        <h1 className="text-center font-bold text-2xl m-5">
          Value We Give to You
        </h1>
        <p className="text-center mb-5">
          We always ready to help by providijng the best services for you. We
          beleive a good place to live can make your life better
        </p>
        <div className="flex flex-col  md:flex-row">
          <div className="p-5 md:w-1/2 flex justify-center items-center ">
            <div className="w-full h-2/4 flex flex-col justify-center items-center">
              <div className="p-6 rounded-lg shadow-lg overflow-hidden max-w-4xl w-full mx-4 ">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-green">
                      <th className="py-3 pr-4 text-green">DTCP NO</th>
                      <th className="py-3 pr-4">540/2023</th>
                    </tr>
                    <tr className="border-b border-green">
                      <th className="py-3 pr-4 text-green">RERA</th>
                      <th className="py-3 pr-4">Approved</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
          <div className="p-5 md:w-1/2">
            <ul>
              {features.map((x) => {
                return (
                  <li className="border border-green bg-sage rounded-md p-1 m-1">
                    <span className="text-green">{x.label}</span>{" "}
                    {x?.description}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
