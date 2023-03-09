import Image from "next/image";
import { useStore } from "../../components/store";

import CarBrandsLogos from "../repeated/CarBrandsLogos";

import FunnelTest from "../Caradvisor/FunnelTest";

//import filtersData from "../filtersData.json";
//
const HeroSectionB = ({ getBrands }) => {
  const { state, dispatch } = useStore();
  // console.log(getContent, "from HeroSection");
  const details = [
    {
      category: "Price",
      options: [
        {
          id: "1",
          name: "1-10000 €",
          value: "0-10000 ",
        },
        {
          id: "2",
          name: "10001-20000 €",
          value: "10001-20000",
        },
        {
          id: "3",
          name: "20001-40000 €",
          value: "20001",
        },
        {
          id: "4",
          name: "40001-80000 €",
          value: "40001-80000",
        },
      ],
    },

    {
      category: "Reichweite",
      options: [
        {
          id: "1",
          name: "ab 50 km ",
          value: "50",
        },
        {
          id: "2",
          name: "ab 100km",
          value: "100",
        },
        {
          id: "3",
          name: "ab 150km",
          value: "150",
        },
        {
          id: "4",
          name: "ab 200km",
          value: "200",
        },
      ],
    },

    {
      category: "Nutzlast",
      options: [
        {
          id: "1",
          name: "ab 100kg",
          value: "100",
        },
        {
          id: "2",
          name: "ab 250kg",
          value: "250",
        },
        {
          id: "3",
          name: "ab 450kg",
          value: "450",
        },
        {
          id: "4",
          name: "ab 500kg",
          value: "500",
        },
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute max-md:hidden w-full lg:flex h-[400px] forz border-black-darkest justify-end">
      {/* <div className="absolute hidden w-full lg:block h-[400px] forz border-black-darkest "> */}
        <div className="w-[1000px]  opacity-20 ">
          <Image
            src="/images/main.jpeg"
            width={1000}
            height={400}
            alt="Kleintransporter"
            objectFit="contain"
            layout="responsive"
          />
        </div>
      </div>
      <div className="ml-4 mr-4 mt-2 mb-2 hero-section-container lg:w-3/4 lg:m-auto">
        <div className="relative flex justify-center flex-1 main-heading-container lg:text-xl ">
          <div className="">
            <FunnelTest test="test" />
          </div>
        </div>
        <div className="2xl:scale-[115%]">
          <CarBrandsLogos getBrands={getBrands} />
        </div>
      </div>
    </div>
  );
};
export default HeroSectionB;
