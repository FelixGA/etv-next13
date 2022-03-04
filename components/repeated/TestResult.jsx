import React from "react";

export default function TestResult(props) {
  // console.log(props.itemKey);
  return (
    <div className="flex w-48 h-12 border border-blue-lighter">
      <div className="text-xs w-16 h-full bg-orange-dark text-white flex items-center justify-center">
        <span className="font-bold"> TEST</span>
      </div>
      <div className=" flex flex-col justify-center w-full">
        <div className="pt-10 ">
          <span className="text-xxs tracking-widest pl-2.5">ERGEBNIS</span>
        </div>
        <div className="flex flex-row pb-8">
          <div className="">
            <span className="relative bottom-1 pl-2.5 font-black text-m ">
              {props.itemKey}
            </span>
          </div>
          <div className="pb-2">
            <span className="relative bottom-1 text-xxs font-black pl-3 tracking-widest ">
              {props.itemValue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
