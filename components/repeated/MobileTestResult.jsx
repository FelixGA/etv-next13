import React from "react";

export default function MobileTestResult() {
  return (
    <div className="border border-black-dark flex flex-col flex-1 h-10 sm:h-11">
      <p className=" flex flex-row justify-center items-center">
        <span className="flex flex-1 justify-center bg-orange-dark text-white font-bold text-xs border-black-dark border-b ">
          TEST
        </span>
        <span className="flex flex-1 justify-center text-grey-dark text-xxs font-bold bg-grey-lighter border-black-dark border-b border-l">
          ERGEBNIS
        </span>
      </p>
      <p className="text-sm font-bold text-grey-darkest flex items-center justify-center pt-0.5 sm:pt-1 ">
        <b className="text-sm pr-1">{/* {carItem.rating.value} */} 1</b>{" "}
        {/* {carItem.rating.key} */} gut
      </p>
    </div>
  );
}
