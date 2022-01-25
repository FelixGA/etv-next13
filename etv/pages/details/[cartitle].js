import { useRouter } from "next/router";
import CarCardDetailsDesktop from "../../components/ResultList/CarCardDetailsDesktop";
import TopSlider from "../../components/Sliders/TopSlider";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import CarCardDetailsMobile from "../../components/ResultList/CarCardDetailsMobile";
import RatingBox from "../../components/ResultList/RatingBox";
import ButtonAnfragen from "../../components/ResultList/ButtonAnfragen";
import ButtonCompare from "../../components/ResultList/ButtonCompare";
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
              value
            }
            categorie
            range {
              key
              value
            }
            weight {
              key
              value
            }
            maxSpeed {
              key
              value
            }
            chargingTime {
              key
              value
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
  return (
    <>
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
      <div className="w-full flex flex-col justify-center items-start pt-12  p-4  px-24">
        <h3>Technische Daten</h3>
        <section>
          <div>
            <h4>Grundlagen</h4>
            <div>
              <p></p> <p></p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <h4>Ausstattung</h4>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </div>
      <div className="bg-grey-lighter flex lg:flex-row flex-col w-full p-4 lg:p-18">
        <div className=" lg:w-1/3 w-full m-auto">
          <Image
            loader={myLoader}
            src={`http://localhost:1337${carItem?.photo.data[1].attributes.url}`}
            alt={carItem?.photo.data[0].attributes.alternativeText}
            width={195}
            height={140}
            layout="responsive"
            objectFit="cover"
            className="rounded-l-lg"
          />
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
          />
        </div>
        <div className="w-full p-2 lg:w-1/2 flex flex-col flex-wrap">
          <h3>Text-Bild-Element mit Text links</h3>
          <p>{carItem?.description}</p>
        </div>
      </div>

      <TopSlider getCars={getCars} />
      <div className="sticky w-full h-12 lg:h-24 bg-grey-light flex justify-between items-center">
        <div
          className="hidden lg:block lg:w-2/4 lg:ml-16
"
        >
          .
        </div>{" "}
        <div className="px-2 w-1/5 lg:w-1/4 justify-center items-center">
          <button className="bg-blue-dark disabled:bg-grey-light hover:bg-blue-light text-white px-4 text-xs xl:tracking-wider rounded flex justify-center items-center h-7 ">
            Drucken
          </button>
        </div>
        <div className="px-2 w-1/5 lg:w-1/4 justify-center items-center mt-2 ">
          <ButtonCompare carItem={carItem} />
        </div>
        <div className=" w-3/5 lg:w-1/4  flex flex-row-reverse lg:flex-col items-center justify-center">
          <p className="text-green-700 w-1/2 text-sm xl:text-xl font-bold ">
            ab {carItem?.price} €
          </p>{" "}
          <div className=" w-2/3">
            <ButtonAnfragen />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
