import React from "react";

const Footer = () => {
  return (
    <section id="contact" className="bg-sage text-darkGreen">
      <div className="w-11/12 md:w-10/12 m-auto ">
        <div className="flex flex-col justify-center items-center">
          <h3 className="mt-3 text-green">Contact Us</h3>
          <h1 className="font-bold text-2xl m-3 text-center ">
            Easy to connect with us
          </h1>
        </div>
        <p className="text-center">
          We always ready to help by providing the best services for you. We
          beleive a good place to live can make your life better
        </p>
        <div className="m-2 ">
          <ul className="w-11/12 m-auto items-center flex justify-evenly text-green">
            <li className="">
              <a href="tel:+919750268888">97502 68888</a>
            </li>
            <li>
              <a href="tel:+919842951612">98429 51612</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-center">Copyright © 2024 Kurinchi Garden</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
