import React from "react";

const Service = () => {
  const primaryFeatures = [
    {
      value: 1,
      label: "Legal documents ",
      description:
        "- Mother bond, EC, FMB, RSR with Legal Opinion Book and Individual Patta will be provided for each plots",
    },
    {
      value: 2,
      label: "Bank Loan ",
      description: "- 70% Bank Loan will be provided",
    },
    {
      value: 3,
      label: "Bus Stop ",
      description:
        "- Erode to Poondurai Road, Kasbapettai Bus Stop is located nearby",
    },
    {
      value: 4,
      label: "Plot design ",
      description: "- Vastu Shastra based homes and plots",
    },
    {
      value: 5,
      label: "Security ",
      description: "- Compound wall protected for entire 7 Acre",
    },
  ];

  const secondaryFeatures = [
    {
      value: 1,
      label: "Road facility ",
      description: "- 33 and 30 Feet elevated blacktop roads",
    },
    {
      value: 2,
      label: "Street light ",
      description: "- Solar Street lights",
    },
    {
      value: 3,
      label: "Water ",
      description: "- Separate pipeline for all the plots",
    },
    {
      value: 4,
      label: "Tank ",
      description:
        "- 1 Lakh Capacity water tank is available with Cauvery water facility",
    },
    {
      value: 5,
      label: "Eco friendly  ",
      description: "- Trees are planted on both sides of the roads",
    },
    {
      value: 6,
      label: "Wastage ",
      description: "- Proper drainage facility is available",
    },
  ];

  return (
    <section id="service" className="bg-sage text-darkGreen">
      <div className="w-11/12 md:w-10/12 m-auto pt-5 md:p-10">
        <h2 className="text-center text-green">Our Value</h2>
        <h1 className="text-center font-bold text-2xl m-5">
          Value We Give to You
        </h1>
        <p className="text-center mb-5">
          We always ready to help by providijng the best services for you. We
          beleive a good place to live can make your life better
        </p>

        <div className="flex flex-col md:flex-row w-full">
          <div className="p-5 md:w-1/2">
            <ul>
              {primaryFeatures.map((x) => {
                return (
                  <li className="border border-green bg-sage rounded-md p-1 m-1">
                    <span className="text-green">{x.label}</span>{" "}
                    {x?.description}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="p-5 md:w-1/2">
            <ul>
              {secondaryFeatures.map((x) => {
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
