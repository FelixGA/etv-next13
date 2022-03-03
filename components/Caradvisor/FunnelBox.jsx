import Link from "next/link";
import React from "react";
import { useStore } from "../store";

export default function FunnelBox({ currentFilter }) {
  const { state, dispatch } = useStore();

  return currentFilter !== "move to next" ? (
    <div className="flex justify-around items-center   ">
      {currentFilter.options.map((item, index) => {
        return (
          <div
            onClick={() => {
              dispatch({
                type: item.categoryName,
                data: [{ min: item.value, max: 99999 }],
              });
            }}
            key={index}
            className="w-48 h-48 
            flex justify-center items-center bg-grey-lighter rounded-lg shadow-lg"
          >
            {item.name}
          </div>
        );
      })}
    </div>
  ) : (
    <div></div>
  );
}
