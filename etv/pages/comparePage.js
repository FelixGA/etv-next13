import FilterBlock from "../components/ResultList/FilterBlock";
import ResultList from "../components/ResultList/ResultList";
import TruncateFilterDesktop from "../components/ResultList/TruncateFilterDesktop";
import { gql, useQuery } from "@apollo/client";
import { useStore } from "../components/store";
import { useEffect } from "react";

export default function comparePage() {
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
                  previewUrl
                }
              }
            }
          }
        }
      }
    }
  `;
  const { data } = useQuery(getAllCarsData);
  const getCars = data?.vehicles?.data.map((item) => item.attributes);
  //get results upon category
  const getPritsche = getCars?.filter((item) => item.categorie === "Pritsche");
  const getKipper = getCars?.filter((item) => item.categorie === "Kipper");
  const getKoffer = getCars?.filter((item) => item.categorie === "Koffer");
  const getKasten = getCars?.filter((item) => item.categorie === "Kasten");

  // cars price filter
  const getCarslowest = getCars?.sort((a, b) => a.price - b.price);
  // const getCarshighest = getCars?.sort((a, b) => b.price - a.price);

  // // cars weight filter
  // const getCarslightest = getCars?.sort(
  //   (a, b) => a.weight.value - b.weight.value
  // );
  // const getCarsheaviest = getCars?.sort(
  //   (a, b) => b.weight.value - a.weight.value
  // );
  // // cars range filter
  // const getCarslongest = getCars?.sort((a, b) => a.range.value - b.range.value);
  // const getCarsshortest = getCars?.sort(
  //   (a, b) => b.range.value - a.range.value
  // );
  // // cars charging time filter
  // const getCarsfastest = getCars?.sort(
  //   (a, b) => a.chargingTime.value - b.chargingTime.value
  // );
  // const getCarsslowest = getCars?.sort(
  //   (a, b) => b.chargingTime.value - a.chargingTime.value
  // );

  // console.log(state);

  // dispatch({ type: "cars", data: false });

  const { state, dispatch } = useStore();

  useEffect(() => {
    dispatch({ type: "setCars", data: "test" });
  }, []);

  return (
    <div className=" lg:mx-32 bg-[#F2F9FF] md:bg-white ">
      <div className="flex flex-row ">
        <div className="  w-full flex flex-row">
          <div className="hidden md:block md:w-1/4 md:min-w-fit  md:mt-14 md:pr-4 ">
            <TruncateFilterDesktop />
          </div>
          <div className="flex flex-col md:w-3/4 w-full ">
            <FilterBlock />
            <ResultList />
          </div>
        </div>
      </div>
    </div>
  );
}
