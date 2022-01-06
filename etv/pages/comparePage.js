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
                  url
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
  // get all categories from the data
  const getCategories = [...new Set(getCars?.map((item) => item.categorie))];

  // cars price filter
  const getCarslowestPrice = getCars?.sort((a, b) => b.price - a.price);

  const getCarshighestPrice = getCars?.sort((a, b) => a.price - b.price);
  // get the cheapest auto
  // const getCheapest = getCarslowestPrice?.slice(0, 1);
  // get the highest auto
  // const getHighest = getCarshighestPrice?.slice(0, 1);
  // // cars weight filter
  const getCarslightest = getCars?.sort(
    (a, b) => b.weight.value - a.weight.value
  );
  const getCarsheaviest = getCars?.sort(
    (a, b) => b.weight.value - a.weight.value
  );
  // cars range filter
  const getCarslongest = getCars?.sort((a, b) => a.range.value - b.range.value);
  const getCarsshortest = getCars?.sort(
    (a, b) => b.range.value - a.range.value
  );
  const { state, dispatch } = useStore();
  console.log(state.prices);
  console.log(state.weights);
  console.log(state.ranges);
  //initial value
  let sendCars = getCarshighestPrice;

  // // cars charging time filter
  // const getCarsfastest = getCars?.sort(
  //   (a, b) => a.chargingTime.value - b.chargingTime.value
  // );

  // console.log(state);

  // dispatch({ type: "cars", data: false });

  return (
    <div className=" md:mx-32 bg-[#F2F9FF] md:bg-white ">
      <div className="flex flex-row ">
        <div className="  w-full flex flex-row">
          <div className="hidden md:block md:w-1/4 md:min-w-fit  md:mt-14 md:pr-4 ">
            <TruncateFilterDesktop />
          </div>
          <div className="flex flex-col md:w-3/4 w-full ">
            <FilterBlock />
            <ResultList getCars={getCars} />
          </div>
        </div>
      </div>
    </div>
  );
}
