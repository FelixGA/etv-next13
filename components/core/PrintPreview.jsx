import TechnicalDetails from "../../components/DetailsPage/TechnicalDetails";
import image from "/public/images/reichweite@2x.png";
import image2 from "/public/images/zuladung@2x.png";
import image3 from "/public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "/public/images/ladezeit@2x.png";
import CarCardProps from "../ResultList/CarCardProps";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RatingBox from "../../components/repeated/RatingBox";
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
  // console.log(carItem);
  return (
    <div className="w-screen print:text-[8px] flex flex-col ">
      {/* header */}
      <div className="w-screen h-[50px] text-lg text-white flex justify-between bg-blue-darker mb-2">
        <h2 className="text-white">Fahrzeugübersicht</h2>
        <div className=" w-[90px]">
          <img src="/images/etv-logo-final.png" />
        </div>
        <h2 className="text-white">Testbericht</h2>
        <div className=" w-[90px]">
          <img src="/images/etv-logo-final.png" alt="test" />
        </div>
      </div>
      <div className="w-screen flex flex-col">
        {/* details , price  etc */}

        <div className="flex w-full flex-col h-screen flex-wrap">
          {/* basics photo etc */}
          <div className="flex w-1/4 ">
            <img
              src={carItem?.src}
              alt={carItem?.title}
              className="mr-8  w-full object-cover"
            />

            <div className="flex flex-col w-3/4">
              <div className="flex flex-col justify-between  ">
                <h3 className="font-bold w-full">{carItem?.title}</h3>
              </div>
              <div className="flex flex-row print:text-[14px] ">
                <div className="flex flex-col mx-2">
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
                    className="mr-8  w-full object-cover"
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
          <div className="flex w-full">
            <div className="flex  w-full flex-wrap scale-125 mx-auto my-4 ">
              <TechnicalDetails carItem={carItem} />
            </div>
          </div>
          {/* test fazit */}
          <div className="flex w-1/2 print:text-[8px] justify-between ">
            {getTestReview && (
              <div className="flex w-3/4">
                {/* rg */}
                {getCarsReview?.content
                  ?.map((infos, index) => (
                    <div key={index} className={`${styles.fazit} " "`}>
                      <div className="flex">
                        <h2 className=" print:text-[10px]">{infos.title}</h2>

                        <div className="scale-50">
                          {infos.stars ? (
                            <StarsRating stars={infos.stars} />
                          ) : null}
                        </div>
                      </div>

                      <MDXRemote {...getTestReview[index]} />
                    </div>
                  ))
                  .splice(getCarsReview?.content.length - 1)}
              </div>
            )}
          </div>
        </div>

        {/* test bericht */}
        <div className="flex w-full h-screen print:text-[10px] flex-col my-2 flex-wrap ">
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
                  <TestVerdict />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
