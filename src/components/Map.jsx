import React from "react";

const Map = () => {
  return (
    <section className="bg-sage text-darkGreen">
      <div className="w-11/12 md:w-10/12 m-auto pt-10 pb-10 ">
        <div className="mb-10 ">
          <h1 className="font-bold text-2xl text-center">Map</h1>
        </div>
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.980670720896!2d77.7176650790206!3d11.262830960340377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba971007eba579f%3A0xa32441ef3bc931fd!2sKurinchi%20Garden!5e0!3m2!1sen!2sin!4v1732978092256!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3792.812617166793!2d77.72007230999019!3d11.262816824529427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDE1JzQ2LjIiTiA3N8KwNDMnMjEuMiJF!5e0!3m2!1sen!2sin!4v1725024159134!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>
    </section>
  );
};

export default Map;
