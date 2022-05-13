import TechnicalDetails from "../../components/DetailsPage/TechnicalDetails";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/ladezeit@2x.png";
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
  return (
    <div className="w-screen flex print:text-[8px]  ">
      <div className="flex w-1/2 flex-col flex-wrap ">
        {/* basics photo etc */}{" "}
        <div className="flex">
          <img src={carItem?.src} alt={carItem?.title} className="w-1/4" />

          <div className="flex flex-col w-3/4">
            <div className="flex flex-col justify-center ">
              <h3>{carItem?.title}</h3>
            </div>
            <div className="flex flex-row ">space for chareacteristics</div>
          </div>
        </div>
        {/* texh details */}
        <div className="flex w-full">
          <div className="flex flex-wrap print:text-[8px] ">
            <TechnicalDetails carItem={carItem} />
          </div>
        </div>
      </div>

      {/* test fazit */}
      <div className="flex w-1/2">place for the fazit</div>
      {/* test bericht */}
      <div className="flex w-1/2">
        <div className="flex flex-col flex-wrap">
          <h3 className="print:text-[12px]  ">
            Testbericht von {carItem.title}
          </h3>
          <div className="bg-red-600 w-96">
            {getTestReview ? (
              <div className="">
                {/* rg */}
                {getCarsReview?.content?.map((infos, index) => (
                  <div key={index} className={`${styles.articles} " "`}>
                    <div className="flex">
                      <h2 className=" print:text-[10px] ">{infos.title}</h2>

                      <div className="">
                        {infos.stars ? (
                          <StarsRating stars={infos.stars} />
                        ) : null}
                      </div>
                    </div>

                    <MDXRemote {...getTestReview[index]} />
                  </div>
                ))}
              </div>
            ) : (
              "kommt bald"
            )}
          </div>
          {/* {getCarsReview && (
            <Link href={`/magazin/reviews/${getCarsReview?.slug}`}>
              <a target="_blank" className="text-blue-500">
                <button
                  // disabled={getTestReview ? true : false}
                  className="flex items-center justify-center w-48 my-6 text-white rounded-md bg-blue-dark h-14 print:hidden"
                >
                  Testbericht lesen
                </button>
              </a>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
}
