import { useRouter } from "next/router";
import CarCardDetailsDesktop from "../../components/ResultList/CarCardDetailsDesktop";
import TopSlider from "../../components/Sliders/TopSlider";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import CarCardDetailsMobile from "../../components/ResultList/CarCardDetailsMobile";
import RatingBox from "../../components/ResultList/RatingBox";
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
    <div className="  p-4 ">
      <div className="w-full flex flex-col lg:flex-row lg:pt-12 lg:px-24">
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
          <h2 className="hidden lg:block text-4xl text-black-darkest p-2">
            {cartitle}
          </h2>
          <div className="hidden lg:flex w-4/5 pl-12 scale-125">
            <CarCardDetailsDesktop carItem={carItem} />
          </div>
          <div className="flex flex-col w-full lg:hidden ">
            <h2 className="w-full text-black-darkest text-2xl font-bold ">
              {cartitle}
            </h2>{" "}
            <div className="flex flex-row w-full lg:hidden ">
              <CarCardDetailsMobile carItem={carItem} />
              <RatingBox carItem={carItem} />
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
      <div className="w-full flex flex-col justify-center items-start pt-12 px-24">
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
      <div className="bg-grey-lighter flex flex-row w-full p-18">
        <div className=" w-1/3 ">
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
        <div className=" w-2/3 flex flex-col flex-wrap">
          <h3>
            Testbericht{"\n"} {cartitle}{" "}
          </h3>
          <p>{carItem?.description}</p>
        </div>
      </div>
      <div className=" flex flex-row-reverse w-full p-18 justify-center items-center">
        <div className=" w-1/2 p-12">
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
        <div className=" w-1/2 flex flex-col flex-wrap ">
          <h3>Text-Bild-Element mit Text links</h3>
          <p>{carItem?.description}</p>
        </div>
      </div>
      <div className=" flex flex-row w-full p-18 justify-center items-center">
        <div className=" w-1/2 p-12">
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
        <div className=" w-1/2 flex flex-col flex-wrap">
          <h3>Text-Bild-Element mit Text links</h3>
          <p>{carItem?.description}</p>
        </div>
      </div>

      <TopSlider getCars={getCars} />
      <div className="sticky w-full h-24 bg-grey-light flex justify-around">
        {" "}
        <button>jerfdbvdf</button>
        <button>jerfdbvdf</button>{" "}
        <div className="flex flex-col items-center justify-center">
          {" "}
          ab {carItem?.price}
          <button>jertzt anfragen</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
