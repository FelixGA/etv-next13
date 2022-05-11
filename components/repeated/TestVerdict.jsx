import Image from "next/image";
import React from "react";
import StarsRating from "./StarsRating";

const TestVerdict = () => {
  return (
    <div className="flex flex-col w-[260px] ">
      <div className="text + stars + icon flex justify-between relative">
        <div className="text + stars">
          <p className="text-2xl font-extrabold text-blue-darker">TESTURTEIL</p>
          <div className="pl-3 scale-[120%]">
            <StarsRating stars={3} />
          </div>
        </div>
        <div className="absolute -right-0 w-[115px] -top-5">
          <Image
            src="/images/etv-logo-final.png"
            alt="test"
            width={170}
            height={170}
            objectFit="contain"
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-lg">
          elektrotransporter-vergleich.de{" "}
          <span className="text-3xl text-[#3FA535]">✓</span>
        </p>
        <p className="text-sm text-grey-nav">Testbericht 435 von 05/2022</p>
      </div>
    </div>
  );
};

export default TestVerdict;
