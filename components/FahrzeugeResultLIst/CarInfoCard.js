import { useStore } from "../store";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
const CarInfoCard = ({ carItem, getCarsReview }) => {
  return (
    <div>
      {/* TITLE */}
      <div className="">
        <Link href={`/transporter/${carItem.name}`}>
          <a>
            <h3 className="title sm:text-2xl font-bold text-black-darkest  py-4 flex leading-7">
              {carItem.title}
            </h3>
          </a>
        </Link>
      </div>
      {/* IMAGE + TEXT + LINK */}
      <div className="flex flex-col-reverse lg:flex-row-reverse">
        <p className="pl-4">
          {carItem.description}
          {getCarsReview && (
            <Link
              href={`/magazin/reviews/${
                getCarsReview?.find(
                  (item) =>
                    item.slug == carItem?.relatedReviews ||
                    carItem?.relatedReviews?.includes(item.slug)
                )?.slug
              }`}
            >
              <a className="text-blue-dark">
                Lesen Sie hier den gesamten Beitrag zum Fahrzeug!
              </a>
            </Link>
          )}
        </p>
        <div className="pb-4">
          <Link href={`/transporter/${carItem.name}`} passHref>
            <a className="w-full relative">
              {carItem?.src && (
                <Image
                  className="rounded-l-md"
                  src={carItem.src}
                  alt={carItem.title}
                  width={250}
                  height={180}
                  objectFit="cover"
                  layout="fixed"
                />
              )}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CarInfoCard;
