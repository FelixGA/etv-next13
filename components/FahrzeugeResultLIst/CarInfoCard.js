import { useStore } from "../store";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
const CarInfoCard = ({ carItem, getCarsReview }) => {
  return (
    <div className="">
      <div className="">
        {" "}
        <Link href={`/transporter/${carItem.name}`}>
          <a>
            <h3 className="title text-xl font-bold text-black-darkest py-1 flex leading-7">
              {carItem.title}
            </h3>
          </a>
        </Link>
      </div>
      <p>
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
              {" "}
              Lesen Sie hier den gesamten Beitrag zum Fahrzeug!
            </a>
          </Link>
        )}
      </p>
      <div className="w-1/4 ">
        <Link href={`/transporter/${carItem.name}`} passHref>
          <a className="w-full relative">
            {carItem?.src && (
              <Image
                // className="rounded-md"
                src={carItem.src}
                alt={carItem.title}
                width={550}
                height={394}
                objectFit="cover"
                layout="responsive"
              />
            )}
          </a>
        </Link>
      </div>
    </div>
  );
};
export default CarInfoCard;
