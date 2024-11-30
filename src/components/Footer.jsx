import React from "react";

const Footer = () => {
  return (
    <section id="contact" className="bg-darkSage text-darkGreen">
      <div className="w-11/12 md:w-10/12 m-auto ">
        <div className="flex flex-col justify-center items-center">
          {/* <h3 className="mt-3 text-green">Contact Us</h3> */}
          <h1 className="font-bold text-2xl mt-5 mb-3 text-center ">
            Contact Us
          </h1>
        </div>
        {/* <p className="text-center">
          We always ready to help by providing the best services for you. We
          beleive a good place to live can make your life better
        </p> */}
        <div className="mb-3 ">
          <ul className="m-auto items-center flex flex-col md:flex-row justify-evenly font-semibold gap-3">
            <li className="rounded-full p-2 bg-sage text-darkGreen">
              <a className=" w-40 text-center block" href="tel:+919750268888">
                97502 68888
              </a>
            </li>
            <li className="rounded-full p-2 bg-sage text-darkGreen">
              <a className=" w-40 text-center block" href="tel:+919842951612">
                98429 51612
              </a>
            </li>
            {/* <li>
              <a href="tel:+919842951612">kurinchigarden@gmail.com</a>
            </li> */}
          </ul>
        </div>
        <div>
          <p className="text-center italic">Copyright © 2024 Kurinchi Garden</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
