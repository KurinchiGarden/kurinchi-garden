import React from "react";

const Map = () => {
  return (
    <div className="flex justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3912.988572410127!2d77.71526798128237!3d11.262249960342366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDE1JzQ0LjEiTiA3N8KwNDMnMTIuNSJF!5e0!3m2!1sen!2sin!4v1724847724457!5m2!1sen!2sin"
        width="1200"
        height="400"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
