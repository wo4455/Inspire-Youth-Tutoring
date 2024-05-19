import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col m-auto md:flex-row md:justify-between w-full text-left pt-7 md:pb-28 border-t border-gray-400">
      <h1 className="text-2xl md:text-2xl mb-6 font-bold font-georgia">
        INSPIRE YOUTH TUTORING
      </h1>
      <div className="md:flex md:flex-row">
        <div className="text-sm mb-6 md:mr-20 font-open_sans font-light">
          <p className="mb-1">(312)-758-0552</p>
          <p>hstutoring001@gmail.com</p>
        </div>
        <p className="md:mr-20 text-sm font-open_sans font-light">
          Chicago, IL, USA
        </p>
      </div>
    </div>
  );
};

export default Footer;
