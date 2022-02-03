import BlogArticles from "../components/BlogArticles";
import HeroSection from "../components/HeroSection/HeroSection";
import TopSlider from "../components/Sliders/TopSlider";
import BottomSlider from "../components/Sliders/BottomSlider";
import NewsLetter from "../components/NewsLetter";
import { gql, useQuery } from "@apollo/client";

function homepage() {
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
            availability {
              key
              value
            }
            batteryCapacity {
              key
              value
              baseUnit
            }
            seats {
              key
              value
            }
            height {
              key
              value
              baseUnit
            }
            width {
              key
              value
              baseUnit
            }
            length {
              key
              value
              baseUnit
            }
            wheelbase {
              key
              value
              baseUnit
            }
            loadArea {
              key
              value
              baseUnit
            }
            curbWeight {
              key
              value
              baseUnit
            }
            loadingHeight {
              key
              value
              baseUnit
            }
            loadingVolume {
              key
              value
              baseUnit
            }

            fastChargingTime {
              key
              value
              baseUnit
            }
            guarantee {
              key
              value
              baseUnit
            }
            typeClass
            batteryGarantie {
              key
              baseUnit
              value
              type
            }
            subsidies {
              key
              value
              baseUnit
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
  return (
    <>
      <HeroSection />
      <TopSlider getCars={getCars} />
      <BlogArticles />
      <BottomSlider />
      <NewsLetter />
    </>
  );
}

/* export async function getStaticProps(context) {
  const path = "/agb";
  const pageData = await fetch(queries(path).pageQuery);
  let page = pageData.pages?.length > 0 ? pageData.pages[0] : null;

  if (!page) {
    return {
      notFound: true,
    };
  }

  page = await parseMarkdown(page);

  return {
    props: {
      page,
    },
  };
} */

export default homepage;
