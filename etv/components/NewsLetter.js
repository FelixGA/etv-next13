import React from "react";
const NewsLetter = () => {
  return (
    <div className="newsletter-container flex flex-col justify-center items-center mx-2 py-10 bg-grey-lightest">
      <h2 className="text-grey-darkest text-2xl font-bold py-2">
        {" "}
        Zum Newsletter anmelden
      </h2>
      <p className="flex justify-center custom-text px-4 py-8  text-grey-darker">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisi vel consectetur euismod, nisi nisl euismod nisi, vel consectetur
        nisi nisl euismod.
      </p>{" "}
      <span>
        <p className="w-full align-left text-grey-dark">Email</p>
        <div className="flex flex-col xs:flex-row">
          <input type="email" placeholder="" className="h-14 text-lg" />
          <button className="bg-blue-dark  hover:bg-blue-light text-white font-bold px-6 text-sm rounded-r-lg h-14">
            anmelden
          </button>
        </div>
      </span>
    </div>
  );
};
export default NewsLetter;
