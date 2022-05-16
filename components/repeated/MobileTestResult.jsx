import React from "react";

export default function MobileTestResult(props) {
  return (
    <div className="border border-black-dark flex flex-col flex-1 h-10 sm:h-11 w-28 md:w-36">
      <p className=" flex flex-row justify-center items-center">
        <span className="flex flex-1 justify-center bg-orange-dark text-white font-bold text-xs border-black-dark border-b ">
          TEST
        </span>
        <span className="flex flex-1 justify-center text-grey-dark text-xxs font-bold bg-grey-lighter border-black-dark border-b border-l">
          ERGEBNIS
        </span>
      </p>
      <p className="text-xs font-bold text-grey-darkest flex items-center justify-center pt-0.5 sm:pt-1 ">
        {props.carItem.rating.value}
        <span className="pl-1 font-thin"> {props.carItem.rating.key}</span>
      </p>
    </div>
  );
}
