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
