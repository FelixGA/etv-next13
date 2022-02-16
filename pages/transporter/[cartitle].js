import { useState } from "react";
import getContentBySlug from "/utils/getContentBySlug";
import getContent from "/utils/getContent";
import CarCardDetailsDesktop from "../../components/ResultList/CarCardDetailsDesktop";
import TopSlider from "../../components/Sliders/TopSlider";
import Image from "next/image";
import CarCardDetailsMobile from "../../components/ResultList/CarCardDetailsMobile";
import RatingBox from "../../components/ResultList/RatingBox";
import Articles from "../../components/DetailsPage/Articles";
import PrintPopUp from "../../components/DetailsPage/PrintPopUp";
import TechnicalDetails from "../../components/DetailsPage/TechnicalDetails";
import Link from "next/link";
import getSlugs from "/utils/getSlugs";

export default function Details(props) {
  /* getCars hook for the slider */
  const [getCars, SetGetCars] = useState(props.vehicles);

  /* carItem hook for the ONE car that it is displayed */
  const [carItem, SetCarItem] = useState(props.vehicle);
  /* for the view more hook */
  const [descriptionSize, SetDescriptionSize] = useState(true);
  return (
    <>
      {/* image and rating section */}
      <div className="w-full flex flex-col lg:flex-row lg:pt-12  p-4  lg:px-24">
        <div className=" w-full lg:w-1/2 ">
          <div className="lg:w-64  ">
            <button className="text-sm bg-white w-48 h-10 print:hidden  text-[bg-blue-darker] ">
              <Link href="/comparePage">
                <a className="visited:text-blue-darker">
                  « zurück zur Ergebnisliste
                </a>
              </Link>
            </button>
          </div>
          <Image
            src={carItem?.src}
            alt={carItem?.title}
            width={195}
            height={140}
            layout="responsive"
            objectFit="cover"
            className="rounded-l-lg"
          />
        </div>
        <div className="flex flex-col lg:w-1/2 ">
          {/* DESKTOP VERSION FOR DETAILS TABLE*/}
          <div className="hidden lg:flex justify-center flex-col w-4/5 px-8 pb-6 ">
            <h2 className="hidden lg:block text-4xl text-black-darkest pl-2 ">
              {carItem.title}
            </h2>

            <CarCardDetailsDesktop carItem={carItem} />
          </div>

          {/* MOBILE VERSION DETAILS TABLE */}
          <div className="flex flex-col w-full lg:hidden my-4">
            <div className="flex flex-row w-full 	lg:hidden flex-wrap">
              <div className="w-2/3 xs:w-3/4 flex flex-col">
                <h2 className="w-full text-black-darkest text-2xl font-bold ">
                  {carItem.title}
                </h2>
                <CarCardDetailsMobile carItem={carItem} />
              </div>
              <div className="w-1/3  xs:w-1/4  md:pl-4">
                <RatingBox carItem={carItem} />
              </div>
            </div>
          </div>
          {/* description */}
          <div className="w-full text-black-darkest flex flex-col lg:px-8">
            <h3 className="w-full text-black-darkest font-bold pb-4">
              Über das Fahrzeug
            </h3>
            <p
              className={
                !descriptionSize
                  ? "h-auto"
                  : `text-ellipsis overflow-hidden h-48`
              }
            >
              {carItem?.description}
            </p>
            <span
              className={descriptionSize ? "text-sm text-blue-dark" : "hidden"}
              onClick={() => {
                SetDescriptionSize(false);
              }}
            >
              {" "}
              Alle Daten anzeigen
            </span>
          </div>
        </div>
      </div>
      {/* technical details section */}

      <TechnicalDetails carItem={carItem} />
      {/* description section */}
      <div className="bg-grey-lighter flex lg:flex-row flex-col w-full p-4 lg:p-18">
        <div className=" lg:w-1/3 w-full m-auto relative  ">
          <Image
            src={carItem?.src}
            alt={carItem?.title}
            width={195}
            height={140}
            layout="responsive"
            objectFit="cover"
            className="rounded-l-lg"
          />
          <div className="ml-auto w-full flex flex-row-reverse absolute  bottom-0 p-2  md:p-4 ">
            <RatingBox carItem={carItem} />
          </div>
        </div>
        <div className=" lg:w-2/3 flex flex-col flex-wrap lg:px-6">
          <h3 className="w-full py-4 text-black-darkest text-2xl font-bold ">
            Testbericht{"\n"} {carItem.title}
          </h3>
          <p>{carItem?.description}</p>
          <button className="bg-blue-dark h-14 w-48 my-6 flex justify-center items-center text-white print:hidden">
            Testbericht lesen
          </button>
        </div>
      </div>
      {/* other articles section */}

      <Articles carItem={carItem} />
      {/* slider  */}

      <TopSlider getCars={getCars} />
      {/*sticky popup  */}
      <PrintPopUp carItem={carItem} />
    </>
  );
}

export async function getStaticProps(context) {
  let vehicle = await getContentBySlug(
    "vehicles",
    context.params.cartitle,
    context.locale
  );
  let vehicles = await getContent("vehicles", context.locale);
  /*  get thw first 4 from this category for the slider */
  vehicles = Object.entries(vehicles).map(([key, value]) => {
    return value;
  });
  vehicles = vehicles.filter(
    (item, index) => item.category === vehicle.category
  );
  // .filter(([key, value]) =>
  //  value.category === vehicle.category ? value : null
  // )

  // .slice(0, 4);
  // vehicles.shift();
  console.log("cars", vehicles);

  if (!vehicle || vehicles?.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vehicle,
      vehicles,
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("vehicles", "cartitle", context.locales);

  return { paths, fallback: false };
}
