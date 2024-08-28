import React from "react";
import images from "../assets";

const SiteMap = () => {
  return (
    <section>
      <div className="w-10/12 m-auto flex p-10 ">
        <div>
          <img src={images.plotMap} />
        </div>
      </div>
    </section>
  );
};

export default SiteMap;
