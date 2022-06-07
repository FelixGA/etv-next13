import TechnicalDetails from "../../components/DetailsPage/TechnicalDetails";

import styles from "../DetailsPage/Articles.module.css";
import { MDXRemote } from "next-mdx-remote";

import StarsRating from "../repeated/StarsRating";
// import TestVerdict from "../repeated/TestVerdict";
export default function PrintPreview({
  carItem,

  getTestReview,
  getCarsReview,
}) {
  return (
    <div className="w-screen flex flex-col flex-wrap printpreview">
      <div className="h-screen">
        {/* main page */}
        <div className="w-screen flex h-screen flex-col flex-wrap">
          {/*header */}
          <div className="w-screen h-[5vh] text-lg text-white flex justify-evenly items-center bg-blue-darker mb-1">
            <h2 className="text-white">Fahrzeugübersicht</h2>
            <div className="flex">
              <img
                src="/images/etv-logo-final-white.png"
                alt="logo"
                className=" w-[90px]"
              />
              <div className="flex items-center pl-2 ">
                <p className="pt-1 text-xs text-white md:text-sm xl:text-lg ">
                  ELEKTROTRANSPORTER
                  <br />
                  VERGLEICH
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-screen flex-col flex-wrap ">
            {/* details , price  etc */}
            {/* basics photo etc */}
            <div className="flex h-32">
              <img
                src={carItem?.src}
                alt={carItem?.title}
                className="mr-4 object-cover w-1/3"
              />

              <div className="flex flex-col w-2/3">
                <div className="flex flex-col justify-between  ">
                  <h3 className="font-bold w-full">{carItem?.title}</h3>

                  <div className="flex">
                    <div className="flex flex-col mx-2 w-1/6">
                      <img
                        src="/images/reichweite.png"
                        alt={carItem?.rangeLithium.key}
                        className="mr-8 w-14 h-12 object-cover"
                      />
                      <p className="text-blue-dark font-bold">
                        {carItem?.rangeLithium.value
                          ? carItem?.rangeLithium.value
                          : carItem?.range230V.value}{" "}
                        km{" "}
                      </p>
                      {carItem?.rangeLithium.key.split(" ")[0]}
                    </div>
                    <div className="flex flex-col mx-2 w-1/6">
                      <img
                        src="/images/ladezeit.png"
                        alt={carItem?.title}
                        className="mr-8 w-14 h-12 object-cover"
                      />
                      <p className="text-blue-dark font-bold">
                        {carItem?.chargingTimeLithium.value
                          ? carItem?.chargingTimeLithium.value
                          : carItem?.chargingTime230V.value}{" "}
                        {carItem?.chargingTimeLithium.baseUnit}
                      </p>
                      {carItem?.chargingTimeLithium.key.split(" ")[0]}
                    </div>
                    <div className="flex flex-col mx-2 w-1/6">
                      <img
                        src="/images/zuladung.png"
                        alt={carItem?.loadingWeight.key}
                        className="mr-8 w-14 h-12 object-fit-contain"
                      />
                      <p className="text-blue-dark font-bold">
                        {carItem?.loadingWeight.value}{" "}
                        {carItem?.loadingWeight.baseUnit}
                      </p>
                      {carItem?.loadingWeight.key}
                    </div>
                    <div className="flex flex-col mx-2 w-1/6">
                      <img
                        src="/images/hoechstgeschwindigkeit.png"
                        alt={carItem?.maxSpeed.keye}
                        className="mr-8 w-14 h-12 object-cover"
                      />
                      <p className="text-blue-dark font-bold">
                        {carItem?.maxSpeed.value} {carItem?.maxSpeed.baseUnit}
                      </p>
                      {carItem?.maxSpeed.key}
                    </div>
                    <div className="flex flex-col mx-2 w-1/6">
                      <img
                        src="/images/aufbautype.png"
                        alt={carItem?.title}
                        className="mr-8 w-14 h-12 object-cover"
                      />
                      <p className="text-blue-dark font-bold">
                        {carItem?.category}
                      </p>
                      Kategorie
                    </div>
                  </div>
                  <div className="flex w-full justify-start items-center ">
                    preis <br />
                    (brutto)
                    <p className="text-yellow-600 font-bold pl-8 print:text-2xl">
                      {carItem?.price} €
                    </p>
                  </div>
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
            <div className="flex  h-[16vh] mt-[15vh] justify-end items-end">
              <div className="flex w-2/3 items-center pl-1">
                {getTestReview && (
                  <div className={`${styles.flexbox}`}>
                    <div className="flex items-center justify-start ">
                      <h2 className=" print:text-[10px]">
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
                    {getTestReview && (
                      <div className="h-auto print:text-[10px]">
                        <MDXRemote
                          {...getTestReview[getCarsReview?.content.length - 1]}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex w-1/3 items-center print:text-[12px]">
                {getTestReview && (
                  <ul className="w-full p-2">
                    {getCarsReview.content.map((item, index) =>
                      item.stars ? (
                        <li
                          key={index}
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* AB HEREEEEEEEEEEEEEEEEEEEEEEEE   test bericht */}
      <div className="flex w-full h-screen print:text-[10px] flex-col my-2 flex-wrap ">
        {/* header */}
        <div className="w-screen h-[5vh] text-lg text-white flex justify-evenly items-center bg-blue-darker mb-1">
          <h2 className="text-white">Testbericht</h2>
          <div className="flex">
            <img
              src="/images/etv-logo-final-white.png"
              alt="logo"
              className=" w-[90px]"
            />
            <div className="flex items-center pl-2 ">
              <p className="pt-1 text-xs text-white md:text-sm xl:text-lg ">
                ELEKTROTRANSPORTER
                <br />
                VERGLEICH
              </p>
            </div>
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
                    {getTestReview && (
                      <div className="h-auto">
                        <MDXRemote {...getTestReview[index]} />
                      </div>
                    )}
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
                {/* <TestVerdict stars={carItem?.rating.value} /> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
