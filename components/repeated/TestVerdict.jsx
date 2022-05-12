import Image from "next/image";
import React from "react";
import StarsRating from "./StarsRating";

const TestVerdict = () => {
  return (
    <div className="flex flex-col w-[230px]  xs:w-[270px] pt-4">
      <div className="text + stars + icon flex justify-between relative">
        <div className="text + stars">
          <p className="text-xl font-extrabold xs:text-2xl text-blue-darker">
            TESTURTEIL
          </p>
          <div className="xs:pl-3 xs:scale-[120%]">
            <StarsRating stars={3} />
          </div>
        </div>
        <div className="absolute right-0 xs:right-4 w-[115px] -top-6">
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
      <div className="flex flex-col pt-2">
        <p className="relative xs:text-xs text-xxs">
          ELEKTROTRANSPORTER-VERGLEICH.DE
          <span className="absolute -top-3 text-3xl text-[#3FA535]">✓</span>
        </p>
        <p className="text-sm text-grey-nav">Testbericht 435 von 05/2022</p>
      </div>
    </div>
  );
};

export default TestVerdict;
