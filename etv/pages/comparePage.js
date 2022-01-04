import FilterBlock from "../components/ResultList/FilterBlock";
import ResultList from "../components/ResultList/ResultList";
import TruncateFilterDesktop from "../components/ResultList/TruncateFilterDesktop";
import { gql, useQuery } from "@apollo/client";

export default function comparePage() {
  const getAllCarsData = gql`
    query {
      vehicles {
        data {
          attributes {
            title
            price
            description
            rating
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
  const getCarsFiltered = getCars?.filter(
    (item) => item.categorie === "compare"
  );
  console.log("gql heree", getCars);
  return (
    <div className="mx-2 md:mx-32">
      <FilterBlock />
      <div className="flex flex-row ">
        <div className="hidden md:flex w-1/4">
          <TruncateFilterDesktop />
        </div>

        <ResultList />
      </div>
    </div>
  );
}
