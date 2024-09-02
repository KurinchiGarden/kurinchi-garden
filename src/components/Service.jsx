import React from "react";

const Service = () => {
  const values = [
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
    {
      value: 6,
      label: "Road facility ",
      description: "- 33 and 30 Feet elevated blacktop roads",
    },
    {
      value: 7,
      label: "Street light ",
      description: "- Solar Street lights",
    },
    {
      value: 8,
      label: "Water ",
      description: "- Separate pipeline for all the plots",
    },
    {
      value: 9,
      label: "Tank ",
      description:
        "- 1 Lakh Capacity water tank is available with Cauvery water facility",
    },
    {
      value: 10,
      label: "Eco friendly  ",
      description: "- Trees are planted on both sides of the roads",
    },
    {
      value: 11,
      label: "Wastage ",
      description: "- Proper drainage facility is available",
    },
  ];

  return (
    <section id="service" className="bg-sage text-darkGreen">
      <div className="w-11/12 md:w-10/12 m-auto pt-8 pb-10 md:p-10">
        <h1 className="text-center font-bold text-2xl mb-5">
          Value We Give to You
        </h1>
        <p className="text-center mb-5">
          We always ready to help by providing the best services for you. We
          beleive a good place to live can make your life better
        </p>

        <div className="flex justify-center">
          <div className="flex flex-col w-full md:w-3/5 items-center justify-center">
            <div className="">
              <ul>
                {values.map((x) => {
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
      </div>
    </section>
  );
};

export default Service;
