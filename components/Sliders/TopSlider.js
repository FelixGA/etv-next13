import TopSliderCard from "../Sliders/TopSliderCard";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import SwipeImage from "/public/images/swipe.gif"

const sellingRanking = {
  "ari-458-pritsche": 13,
  /* "Piaggo Porter": 12, */
  "alke-atx-340-e-pritsche": 11,
  "evum-a-car-pritsche": 10,
  "Addax MT": 9,
  "Citroen eJumpy": 8,
  "Aixam Pro e-Truck": 7,
  "opel-vivaro-e-cargo": 6,
  "ari-458-koffer": 5,
  "vw-abt-e-caddy": 4,
  "efa-s-e35": 3,
  "garia-utility-park-ec-pritsche": 2,
  /* "Renault Kangoo Z.E": 1, */
};

const TopSlider = (props) => {
  const container = useRef();


  return (
    <div className="relative pb-8">
      <div className="flex justify-center overflow-hidden ">
        <div
          onClick={(e) => {
            container.current.scrollLeft -= 293;
          }}
          className={
            props.vehicles?.length >= 4
              ? " hidden xl:flex items-center hover:scale-110 bg-white transition relative"
              : "hidden"
          }
        >
          <div className="absolute top-64 right-10">
            <FaArrowCircleLeft size={40} color="#243280" />
          </div>
        </div>

        <div className="relative print:hidden flex flex-col w-full xl:w-[1220px] ">
          <h2 className="relative px-6 pb-4 text-3xl font-black tracking-wide text-left no-select text-black-dark">
            Jetzt vergleichen!
          </h2>
          <div className="absolute p-1 bg-white rounded-full left-[310px] 2xl:hidden ">
            <Image
              src={SwipeImage}
              width={50}
              height={50}
              alt="swipe"
              objectFit="contain"
            ></Image>
          </div>

          <div
            className="grid grid-flow-col gap-4 auto-cols-[minmax(293px,_1fr)] overflow-x-scroll scrollbar-hide pt-2 snap-x "
            ref={container}
          >
            {props.vehicles?.sort(
                    (a, b) =>
                     (sellingRanking[a.name] - sellingRanking[b.name])
                  ).map(vehicle  => (
                <TopSliderCard
                vehicle={vehicle}
              />
            ))}
          
          </div>
        </div>

        <div
          onClick={() => (container.current.scrollLeft += 293)}
          className={
            props.vehicles?.length >= 4
              ? "xl:flex items-center hidden pr-1 hover:scale-110 transition relative"
              : "hidden"
          }
        >
          <div className="absolute top-64 left-10">
            <FaArrowCircleRight size={40} color="#243280" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopSlider;
