import TechnicalDetails from "../../components/DetailsPage/TechnicalDetails";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/ladezeit@2x.png";
import CarCardProps from "../ResultList/CarCardProps";
import { useEffect, useState } from "react";

export default function PrintPreview({
  carItem,
  getBlogContext,
  getTestReview,
  getCarsReview,
}) {
  return (
    <div className="w-screen flex flex-col print:text-[10px] ">
      <div className="flex w-1/2 ">
        {/* basics photo etc */}
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
        <div className="flex flex-wrap print:text-[10px]">
          <TechnicalDetails carItem={carItem} />
        </div>
      </div>
      {/* test fazit */}
      <div className="flex w-1/2 ">place for the fazit</div>
    </div>
  );
}
