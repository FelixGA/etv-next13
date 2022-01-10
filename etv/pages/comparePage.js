import FilterBlock from "../components/ResultList/FilterBlock";
import ResultList from "../components/ResultList/ResultList";
import TruncateFilterDesktop from "../components/ResultList/TruncateFilterDesktop";
import { gql, useQuery } from "@apollo/client";
import { useStore } from "../components/store";
import { useState, useEffect } from "react";

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
  /* QUERY */
  const { data } = useQuery(getAllCarsData);
  const getCars = data?.vehicles?.data.map((item) => item.attributes);
  /* ɢᴇᴛ ʀᴇsᴜʟᴛs ᴜᴘᴏɴ ᴄᴀᴛᴇɢᴏʀʏ */
  const getPritsche = getCars?.filter((item) => item.categorie === "Pritsche");
  const getKipper = getCars?.filter((item) => item.categorie === "Kipper");
  const getKoffer = getCars?.filter((item) => item.categorie === "Koffer");
  const getKasten = getCars?.filter((item) => item.categorie === "Kasten");
  /* ɢᴇᴛ ᴀʟʟ ᴄᴀᴛᴇɢᴏʀɪᴇs ғʀᴏᴍ ᴛʜᴇ ᴅᴀᴛᴀ */
  const getCategories = [...new Set(getCars?.map((item) => item.categorie))];

  /* PRICE SORTING */
  const getCarslowestPrice = getCars
    ?.sort((a, b) => parseFloat(a.price) * 1 - parseFloat(b.price) * 1)
    .map((item) => item);

  // const convertPriceToNumber = (price) => {
  //   return parseFloat(price.replace(/[^0-9.-]+/g, ""));
  // };

  const getCarshighestPrice = getCars
    ?.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    .map((item) => item);

  // get the cheapest auto
  // const getCheapest = getCarslowestPrice?.slice(0, 1);
  // get the highest auto
  // const getHighest = getCarshighestPrice?.slice(0, 1);
  /* cᴀʀs ᴡᴇɪɢʜᴛ ғɪʟᴛᴇʀ */
  const getCarslightest = getCars
    ?.sort((a, b) => a.weight.value - b.weight.value)
    .map((item) => item);
  const getCarsheaviest = getCars
    ?.sort((a, b) => b.weight.value - a.weight.value)
    .map((item) => item);
  /* ᴄᴀʀs ʀᴀɴɢᴇ ғɪʟᴛᴇʀ */
  const getCarslongest = getCars
    ?.sort((a, b) => a.range.value - b.range.value)
    .map((item) => item);
  const getCarsshortest = getCars
    ?.sort((a, b) => b.range.value - a.range.value)
    .map((item) => item);
  /* ᴄᴀʀs ᴄʜᴀʀɢɪɴɢ ᴛɪᴍᴇ ғɪʟᴛᴇʀ */
  const getCarsfastest = getCars
    ?.sort((a, b) => a.chargingTime.value - b.chargingTime.value)
    .map((item) => item);

  const { state, dispatch } = useStore();
  // console.log(state.prices);
  // console.log(state.weights);
  // console.log(state.ranges);
  /* initial value */
  let sendCars = getCars;

  if (state.highests) {
    sendCars = getCarshighestPrice;
  }
  if (state.lowests) {
    sendCars = getCarslowestPrice;
  }

  // dispatch({ type: "cars", data: false });
  const [cars, setCars] = useState([]);

  // filter cars
  useEffect(() => {
    if (!state?.prices || sendCars?.length === 0) return;
    const filteredCars = sendCars?.filter((car) => {
      console.log("example", state);
      if (
        state?.prices?.length > 0 &&
        !state?.prices?.some((entry) => entry.value === car.prices)
      )
        return;
      // if (
      //   state.filter.weight?.length > 0 &&
      //   state.filter.weight.every(
      //     (entry) => entry.min > car.weight || entry.max < car.weight
      //   )
      // )
      //   return;
    });

    setCars(filteredCars);
  }, []);
  //state.filter, sendCars
  return (
    <div className=" xl:mx-32 bg-[#F2F9FF] md:bg-white ">
      <div className="flex flex-row ">
        <div className="  w-full flex flex-row">
          <div className="hidden md:block md:w-1/4 md:min-w-fit  md:mt-14 md:pr-4 ">
            <TruncateFilterDesktop />
          </div>
          <div className="flex flex-col md:w-3/4 w-full ">
            <FilterBlock />
            <ResultList sendCars={sendCars} />
          </div>
        </div>
      </div>
    </div>
  );
}
