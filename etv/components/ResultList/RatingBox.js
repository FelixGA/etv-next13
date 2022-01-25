import { useState, useEffect } from "react";
import { useStore } from "../store";
function RatingBox(props) {
  return (
    <div className="border-2 border-black-darkest flex flex-col w-15 text-sm xl:w-20">
      <p className=" flex flex-col justify-center ">
        <span className="px-1 bg-orange-dark text-white font-bold text-xs flex justify-center ">
          TEST
        </span>
        <span className="flex justify-center text-grey-dark text-xs font-bold pt-2">
          ERGEBNIS
        </span>
      </p>
      <p className="px-1 text-s font-bold text-grey-darkest custom-text">
        <b className="text-2xl">{props.carItem?.rating.value}</b>
        <br />
        {props.carItem?.rating.key}
      </p>
    </div>
  );
}
export default RatingBox;
