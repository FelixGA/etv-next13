import { useRouter } from "next/router";
import CarCardDetailsDesktop from "../../components/ResultList/CarCardDetailsDesktop";
import TopSlider from "../../components/Sliders/TopSlider";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import CarCardDetailsMobile from "../../components/ResultList/CarCardDetailsMobile";
import RatingBox from "../../components/ResultList/RatingBox";
import ButtonAnfragen from "../../components/ResultList/ButtonAnfragen";
import ButtonCompare from "../../components/ResultList/ButtonCompare";
import ActiveCompareItem from "../../components/ActiveCompare/ActiveCompareItem";
import ActiveCompareCard from "../../components/ActiveCompare/ActiveCompareCard";
const Details = () => {
  const router = useRouter();
  console.log("query from details", router.query);
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
  console.log(carItem);
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

  console.log(grundlagen);

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
            <h2 className="hidden lg:block text-4xl text-black-darkest pl-2 ">
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
          <div className="w-full text-black-darkest flex flex-col lg:px-8">
            <h3 className="w-full text-black-darkest font-bold pb-4">
              Über das Fahrzeug
            </h3>
            <p>{carItem?.description}</p>
          </div>
        </div>
      </div>
      {/* technical details section */}
      <div className="w-full flex flex-col justify-center items-start lg:pt-12  p-4 lg:px-24">
        <h3 className="text-black-darkest font-bold py-2">Technische Daten</h3>
        <div className="flex flex-col w-full lg:flex-row">
          <section className="w-full lg:w-1/2 lg:px-2">
            <h3 className="text-black-darkest font-bold py-2">Grundlagen</h3>
            <div className="flex flex-col w-full text-[#2C3F53] font-bold ">
              {grundlagen?.map((item, index) => (
                <div
                  className={
                    index % 2 == 0
                      ? "flex flex-row w-full bg-[#F2F5F8] "
                      : "flex flex-row w-full "
                  }
                >
                  <p className="w-1/2 py-1">{item.key}</p>
                  <p className="w-1/2 py-1">
                    {item.value} {item.baseUnit}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="w-full lg:w-1/2 lg:px-2">
            <h3 className="text-black-darkest font-bold py-2">Ausstattung</h3>
            <div className="flex flex-col w-full text-[#2C3F53] font-bold">
              {ausstattung?.map((item, index) => (
                <div
                  className={
                    index % 2 == 0
                      ? "flex flex-row w-full bg-[#F2F5F8] "
                      : "flex flex-row w-full "
                  }
                >
                  <p className="w-1/2 py-1">{item.key}</p>
                  <p className="w-1/2 py-1">{item.value}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
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
      <div className=" flex lg:flex-row-reverse flex-col w-full lg:p-18 justify-center items-center  p-4 ">
        <div className="w-full p-4 lg:w-1/2 lg:p-12">
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
        </div>
        <div className="w-full p-2 lg:w-1/2 flex flex-col flex-wrap">
          <h3>Text-Bild-Element mit Text links</h3>
          <p>{carItem?.description}</p>
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col w-full lg:p-18 justify-center items-center  p-4 ">
        <div className="w-full p-4 lg:w-1/2 lg:p-12">
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
        </div>
        <div className="w-full p-2 lg:w-1/2 flex flex-col flex-wrap">
          <h3>Text-Bild-Element mit Text links</h3>
          <p>{carItem?.description}</p>
        </div>
      </div>
      {/* slider  */}
      <TopSlider getCars={getCars} />
      {/*sticky popup  */}
      <div className="sticky w-full h-18 lg:h-32 bg-grey-light flex justify-between items-center">
        <div
          className="hidden lg:block md:w-3/6 
"
        >
          .
        </div>{" "}
        <span
          id="BLUE-BUTTONS-SECTION"
          className=" xs:flex-row flex-wrap w-1/2 md:w-3/12 flex flex-col justify-center items-start"
        >
          <div className=" xs:mx-2 justify-center items-center">
            <button className="bg-blue-dark disabled:bg-grey-light hover:bg-blue-light text-white px-4 text-xs xl:tracking-wider rounded flex justify-center items-center h-7 my-1 xs:my-0 md:mr-4 w-18">
              Drucken
            </button>
          </div>
          <div className=" h-7 justify-center items-center  ">
            <ButtonCompare carItem={carItem} />
          </div>
        </span>
        <span
          id="PRICE-ANFRAGEN-BUTTONS-SECTION"
          className="md:mt-4 xs:px-1 h-7 flex-row-reverse w-2/3 md:w-3/12 flex lg:flex-col justify-end items-center"
        >
          <p className="text-green-700  text-sm xl:text-xl font-bold ">
            ab {carItem?.price} €
          </p>{" "}
          <div className="w-28 xs:w-40 ">
            <ButtonAnfragen />
          </div>
        </span>
      </div>
    </>
  );
};

export default Details;
