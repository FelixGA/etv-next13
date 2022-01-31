import { useRouter } from "next/router";
import CarCardDetailsDesktop from "../../components/ResultList/CarCardDetailsDesktop";
import TopSlider from "../../components/Sliders/TopSlider";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import CarCardDetailsMobile from "../../components/ResultList/CarCardDetailsMobile";
import RatingBox from "../../components/ResultList/RatingBox";
import { useState } from "react";
import Articles from "../../components/DetailsPage/Articles";
import PrintPopUp from "../../components/DetailsPage/PrintPopUp";
import TechnicalDetails from "../../components/DetailsPage/TechnicalDetails";

const Details = () => {
  const router = useRouter();
  const [descriptionSize, SetDescriptionSize] = useState(true);

  const { cartitle } = router.query;

  const getAllCarsData = gql`
    query {
      vehicles {
        data {
          attributes {
            title
            price
            description
            rating {
              key
              baseUnit
              value
            }
            categorie
            range {
              key
              value
              baseUnit
            }
            weight {
              key
              value
              baseUnit
            }
            maxSpeed {
              key
              value
              baseUnit
            }
            chargingTime {
              key
              value
              baseUnit
            }
            electricWindows {
              key
              value
            }
            ABS {
              key
              value
            }
            airBags {
              key
              value
            }
            airConditioning {
              key
              value
            }
            extras {
              key
              value
            }
            photo {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
          }
        }
      }
    }
  `;
  /* QUERY */
  const { data } = useQuery(getAllCarsData);
  const carItem = data?.vehicles?.data
    .map((item) => item.attributes)
    .find((el) => el.title === cartitle);

  /* for the slider  */
  let getCars = data?.vehicles?.data.map((item) => item.attributes).slice(0, 4);

  const myLoader = ({ src }) => {
    return src;
  };
  /* get two subsets of the car properties to map them */
  const grundlagen = (({ range, weight, maxSpeed, chargingTime }) => [
    range,
    weight,
    chargingTime,
    maxSpeed,
  ])(carItem);
  const ausstattung = (({
    electricWindows,
    ABS,
    airBags,
    airConditioning,
    extras,
  }) => [electricWindows, ABS, airBags, airConditioning, extras])(carItem);

  return (
    <>
      {/* image and rating section */}
      <div className="w-full flex flex-col lg:flex-row lg:pt-12  p-4  lg:px-24">
        <div className=" w-full lg:w-1/2 ">
          <Image
            loader={myLoader}
            src={`http://localhost:1337${carItem?.photo.data[0].attributes.url}`}
            alt={carItem?.photo.data[0].attributes.alternativeText}
            width={195}
            height={140}
            layout="responsive"
            objectFit="cover"
            className="rounded-l-lg"
            unoptimized={true}
          />
        </div>
        <div className="flex flex-col lg:w-1/2 ">
          {/* DESKTOP VERSION FOR DETAILS TABLE*/}
          <div className="hidden lg:flex justify-center flex-col w-4/5 px-8 pb-6 ">
            <h2 className="hidden lg:block text-5xl text-black-darkest pl-2 ">
              {cartitle}
            </h2>
            <CarCardDetailsDesktop carItem={carItem} />
          </div>
          {/* MOBILE VERSION DETAILS TABLE */}
          <div className="flex flex-col w-full lg:hidden my-4">
            <div className="flex flex-row w-full 	lg:hidden flex-wrap">
              <div className="w-2/3 xs:w-3/4 flex flex-col">
                <h2 className="w-full text-black-darkest text-2xl font-bold ">
                  {cartitle}
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
            loader={myLoader}
            src={`http://localhost:1337${carItem?.photo.data[1].attributes.url}`}
            alt={carItem?.photo.data[0].attributes.alternativeText}
            width={195}
            height={140}
            layout="responsive"
            objectFit="cover"
            className="rounded-l-lg"
            unoptimized={true}
          />
          <div className="ml-auto w-full flex flex-row-reverse absolute  bottom-0 p-2  md:p-4 ">
            <RatingBox carItem={carItem} />
          </div>
        </div>
        <div className=" lg:w-2/3 flex flex-col flex-wrap lg:px-6">
          <h3 className="w-full py-4 text-black-darkest text-2xl font-bold ">
            Testbericht{"\n"} {cartitle}
          </h3>
          <p>{carItem?.description}</p>
          <button className="bg-blue-dark h-14 w-48 my-6 flex justify-center items-center text-white">
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
};

export default Details;
