import TechnicalDetails from "../../components/DetailsPage/TechnicalDetails";
import image from "/public/images/reichweite@2x.png";
import image2 from "/public/images/zuladung@2x.png";
import image3 from "/public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "/public/images/ladezeit@2x.png";
import CarCardProps from "../ResultList/CarCardProps";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../DetailsPage/Articles.module.css";
import { MDXRemote } from "next-mdx-remote";
import { FaArrowCircleLeft } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import StarsRating from "../repeated/StarsRating";
import TestVerdict from "../repeated/TestVerdict";
export default function PrintPreview({
  carItem,
  getBlogContext,
  getTestReview,
  getCarsReview,
}) {
  return (
    <div className="w-screen flex flex-col flex-wrap">
      <div className="h-screen">
        {/* main page */}
        <div className="w-screen flex h-screen flex-col flex-wrap">
          {/*header */}
          <div className="w-screen h-[5vh] text-lg text-white flex justify-between bg-blue-darker mb-1">
            <h2 className="text-white">Fahrzeugübersicht</h2>
            <div className=" w-[90px]">
              <img src="/images/etv-logo-final.png" />
            </div>
          </div>
          <div className="flex w-full flex-col flex-wrap  ">
            {/* details , price  etc */}
            {/* basics photo etc */}
            <div className="flex w-64 h-32">
              <img
                src={carItem?.src}
                alt={carItem?.title}
                className="mr-4 object-cover"
              />

              <div className="flex flex-col ">
                <div className="flex flex-col justify-between  ">
                  <h3 className="font-bold w-full">{carItem?.title}</h3>
                </div>
                <div className="flex ">
                  <div className="flex mx-2">
                    <img
                      src="/images/etv-logo-final.png"
                      alt={carItem?.title}
                      className="mr-8  w-full object-cover"
                    />
                    <p className="text-blue-dark">
                      {carItem?.rangeLithium.value}
                    </p>
                    Reichweite
                  </div>
                  <div className="flex flex-col mx-2">
                    <img
                      src={carItem?.src}
                      alt={carItem?.title}
                      className="mr-8 w-full object-cover"
                    />
                    <p className="text-blue-dark">
                      {carItem?.chargingTimeLithium.value}
                    </p>
                    Ladezeit
                  </div>
                  <div className="flex flex-col mx-2">
                    <img
                      src={carItem?.src}
                      alt={carItem?.title}
                      className="mr-8  w-full object-cover"
                    />
                    <p className="text-blue-dark">
                      {carItem?.loadingWeight.value}
                    </p>
                    Zuladung
                  </div>
                  <div className="flex flex-col mx-2">
                    <img
                      src={carItem?.src}
                      alt={carItem?.title}
                      className="mr-8  w-full object-cover"
                    />
                    <p className="text-blue-dark">{carItem?.maxSpeed.value}</p>
                    V-Max
                  </div>
                  <div className="flex flex-col mx-2">
                    <img
                      src={carItem?.src}
                      alt={carItem?.title}
                      className="mr-8  w-full object-cover"
                    />
                    <p className="text-blue-dark">{carItem?.category}</p>
                    Kategorie
                  </div>
                </div>
                <div className="flex flex-row  ">
                  preis <br />
                  (brutto)
                  <p className="text-yellow-600 font-bold pl-2 print:text-[16px]">
                    {carItem?.price} €
                  </p>
                </div>
              </div>
            </div>
            {/* texh details */}
            <div className="flex h-[50vh]">
              <div className="flex flex-wrap w-screen">
                <TechnicalDetails carItem={carItem} />
              </div>
            </div>
            {/* test fazit */}
            <div className="flex  h-[18vh] mt-[14vh]">
              <div className="flex w-2/3 items-center pl-1">
                {getTestReview && (
                  <div className={`${styles.flexbox}`}>
                    <div className="flex items-center justify-start ">
                      <h2 className=" print:text-[12px]">
                        {
                          getCarsReview?.content[
                            getCarsReview?.content.length - 1
                          ].title
                        }
                      </h2>

                      <div className="scale-50">
                        {getCarsReview?.content[
                          getCarsReview?.content.length - 1
                        ].stars ? (
                          <StarsRating
                            stars={
                              getCarsReview?.content[
                                getCarsReview?.content.length - 1
                              ].stars
                            }
                          />
                        ) : null}
                      </div>
                    </div>
                    <div className="h-auto print:text-[11px]">
                      <MDXRemote
                        {...getTestReview[getCarsReview?.content.length - 1]}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex w-1/3 items-center">
                <ul className="w-full p-2">
                  {getCarsReview.content.map((item, index) =>
                    item.stars ? (
                      <li
                        className={
                          index == getCarsReview.content.length - 1
                            ? "w-full flex justify-between text-blue-dark"
                            : "w-full flex justify-between "
                        }
                      >
                        <p> {item.title}</p> <p> {item.stars}/5</p>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* AB HEREEEEEEEEEEEEEEEEEEEEEEEE   test bericht */}
      <div className="flex w-full h-screen print:text-[10px] flex-col my-2 flex-wrap ">
        {/* header */}
        <div className="w-screen h-[50px] text-lg text-white flex justify-between bg-blue-darker mb-2">
          <h2 className="text-white">Testbericht</h2>
          <div className=" w-[90px]">
            <img src="/images/etv-logo-final.png" alt="test" />
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-around">
          {getTestReview && (
            <div className={`${styles.containerLeft}`}>
              {/* rg */}
              {getCarsReview?.content
                ?.map((infos, index) => (
                  <div key={index} className={`${styles.flexbox}`}>
                    <div className="flex items-center justify-start">
                      <h2 className=" print:text-[12px] leading-4">
                        {infos.title}
                      </h2>

                      <div className="scale-50">
                        {infos.stars ? (
                          <StarsRating stars={infos.stars} />
                        ) : null}
                      </div>
                    </div>
                    <div className="h-auto">
                      <MDXRemote {...getTestReview[index]} />
                    </div>
                  </div>
                ))
                .slice(0, 3)}
            </div>
          )}
          {getTestReview && (
            <div className={`${styles.containerRight}`}>
              {/* rg */}
              {getCarsReview?.content
                ?.map((infos, index) => (
                  <div key={index} className={`${styles.flexbox}`}>
                    <div className="flex items-center justify-start">
                      <h2 className=" print:text-[12px] leading-4">
                        {infos.title}
                      </h2>

                      <div className="scale-50">
                        {infos.stars ? (
                          <StarsRating stars={infos.stars} />
                        ) : null}
                      </div>
                    </div>
                    <div className="h-auto">
                      <MDXRemote {...getTestReview[index]} />
                    </div>
                  </div>
                ))
                .slice(4, getCarsReview?.content.length - 1)}
              <div className=" m-auto">
                <TestVerdict stars={carItem?.rating.value} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
