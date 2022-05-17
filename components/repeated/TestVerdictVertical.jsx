import Image from "next/image";
import React from "react";
import StarsRating from "./StarsRating";

const TestVerdictVertical = ({ stars }) => {
  return (
    <div className="relative w-full h-full bg-white border-2 rounded-sm">
      <div className="relative text + stars + icon ">
        <div className="text + stars flex flex-col ">
          <div className="flex justify-center">
            <p className="text-[20px] font-extrabold  text-blue-darker">
              TESTURTEIL
            </p>
          </div>
          <div className="flex justify-center">
            <StarsRating stars={stars} />
          </div>
        </div>
        <div className="relative flex justify-center right-2 bottom-4 w-28 ">
          <Image
            src="/images/etv-logo-final.png"
            alt="test"
            width={120}
            height={120}
            objectFit="contain"
          />
          <span className="absolute bottom-2 left-[92px] text-[70px] text-[#3FA535]">
            ✓
          </span>
        </div>
      </div>
      <div className="absolute flex justify-center w-full px-8 bottom-1">
        <p className=" xs:text-[10px] text-xxs">
          ELEKTROTRANSPORTER-VERGLEICH.DE
        </p>
        {/* <p className="text-sm text-grey-nav">Testbericht 435 von 05/2022</p> */}
      </div>
    </div>
  );
};

export default TestVerdictVertical;
