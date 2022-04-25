import Image from "next/image";
import { useState } from "react";
import { useStore } from "../../components/store";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import CarBrandsLogos from "../repeated/CarBrandsLogos";
import OptionItem from "./OptionItem";

//import filtersData from "../filtersData.json";
//
const HeroSection = ({ getContent, getMarkdownContext }) => {
  const { state, dispatch } = useStore();

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
          name: "ab:100kg",
          value: "100",
        },
        {
          id: "2",
          name: "ab:250kg",
          value: "250",
        },
        {
          id: "3",
          name: "ab:450kg",
          value: "450",
        },
        {
          id: "4",
          name: "ab:500kg",
          value: "500",
        },
      ],
    },
  ];
  const [choosePrice, setChoosePrice] = useState(details[0].options[0].value);
  const [chooseRange, setChooseRange] = useState(details[1].options[0].value);
  const [chooseWeight, setChooseWeight] = useState(details[2].options[0].value);

  return (
    <div className="relative">
      <div className="absolute justify-end hidden w-full lg:flex h-[400px] forz border-black-darkest">
        <div className="relative w-1/2 2xl:bottom-8 2xl:right-0 xl:top-24 2xl:top-2 xl:left-8 lg:scale-150 lg:top-36 opacity-30 2xl:scale-100">
          <Image
            src="/images/main.jpeg"
            width={1200}
            height={490}
            alt="Kleintransporter"
            objectFit="cover"
            layout="responsive"
            className=""
          />
        </div>
      </div>
      <div className="m-4 mt-0 hero-section-container lg:w-3/4 lg:m-auto">
        <div className="relative flex justify-center flex-1 main-heading-container lg:text-xl">
          {/* IMAGE */}
          <div className="hidden w-3/5 m-auto sm:block sm:p-8 sm:w-80 xs:m-0 ">
            <Image
              className="scale-75 sm:scale-90"
              src="/images/siegel2.png"
              width={166}
              height={166}
              objectFit="contain"
              layout="responsive"
            />
          </div>
          {/* TITLE AND DESC */}
          <div className="py-2 pb-2 main-heading-text lg:flex lg:flex-col lg:justify-evenly sm:py-10 ">
            <h1 className="pt-4 pb-4 text-3xl text-center xl:text-4xl">
              {getContent.title}
            </h1>
            <div className="pb-4 text-xl text-center text-grey-darker sm:text-2xl lg:text-3xl">
              <MDXRemote {...getMarkdownContext.header} />
            </div>

            <p className="px-3 text-sm font-bold text-center text-blue-extra xl:text-2xl">
              {getContent.content[0].details}
            </p>
          </div>
        </div>
        {/* COMPARE TOOL */}
        <div className="relative bottom-0 pt-5 pb-4 border rounded-md lg:flex lg:justify-between lg:items-center bg-yellow-light lg:h-28 border-blue-dark top-2 md:top-10 lg:top-6 xl:bottom-6">
          {/* comaprison-input-container */}
          <div className="mx-2 comaprison-input-container lg:items-center lg:flex lg:flex-row lg:justify-evenly lg:flex-1 ">
            {/* PRICE AND RANGE */}

            <div className="h-14 lg:w-68  w-full pt-2 shadow-angelos1 text-base rounded-sm bg-white lg:w-[14vw]">
              <label className="flex flex-row justify-between px-2 text-left ">
                {getContent.content[1].markdown.split(", ")[0]}
                <div className="relative top-6">▼</div>
              </label>
              <div className="m-1 ">
                <select
                  className="relative w-full p-4 pl-1 m-0 text-base font-bold tracking-wider bg-transparent border-none appearance-none bottom-6 text-blue-dark "
                  id="rangeLithium"
                  onChange={(e) => {
                    setChooseRange(e.target.value);
                  }}
                >
                  <OptionItem details={details[1].options} />
                </select>
              </div>
            </div>
            <div className="h-14 lg:w-68 w-full my-4 pt-2 shadow-angelos1 text-base rounded-sm bg-white lg:w-[14vw]	tracking-wide">
              <label className="flex flex-row justify-between px-2 text-left">
                {getContent.content[1].markdown.split(", ")[1]}
                <div className="relative top-6">▼</div>
              </label>
              <div className="m-1 ">
                <select
                  className="relative w-full p-4 pl-1 m-0 text-base font-bold tracking-wider bg-transparent border-none appearance-none bottom-6 text-blue-dark "
                  id="price"
                  onChange={(e) => {
                    setChoosePrice(e.target.value);
                  }}
                >
                  <OptionItem details={details[0].options} />
                </select>
              </div>
            </div>

            {/* Weight and button */}

            {/* weight */}
            <div className="h-14 lg:w-[14vw] w-full my-4 pt-2 shadow-angelos1 text-base rounded-sm bg-white ">
              <label className="flex flex-row justify-between px-2 text-left">
                {getContent.content[1].markdown.split(", ")[2]}
                <div className="relative top-6">▼</div>
              </label>

              <div className="m-1 ">
                <select
                  className="relative w-full p-4 pl-1 m-0 text-base font-bold tracking-wider bg-transparent border-none appearance-none bottom-6 text-blue-dark"
                  id="rangeLithium"
                  onChange={(e) => {
                    setChooseWeight(e.target.value);
                  }}
                >
                  <OptionItem details={details[2].options} />
                </select>
              </div>
            </div>
            {/* BUTTON */}
            <div className="flex lg:justify-around justify-between items-start lg:items-center flex-wrap w-full lg:w-[14vw]">
              <button
                className="w-full px-2 text-sm font-bold text-white rounded-lg bg-blue-dark hover:bg-blue-light h-14 "
                onClick={() => {
                  dispatch({
                    type: "price",
                    data: [
                      {
                        min: Number(choosePrice.split("-")[0]),
                        max: Number(choosePrice.split("-")[1]),
                      },
                    ],
                  });
                  dispatch({
                    type: "rangeLithium",
                    data: [
                      {
                        min: Number(chooseRange),
                        max: 100000,
                      },
                    ],
                  });
                  dispatch({
                    type: "loadingWeight",
                    data: [
                      {
                        min: Number(chooseWeight),
                        max: 100000,
                      },
                    ],
                  });
                }}
              >
                <Link href="/comparePage">
                  <a className="py-10 text-lg">Jetzt vergleichen</a>
                </Link>
              </button>
            </div>
          </div>
        </div>

        <CarBrandsLogos />
      </div>
    </div>
  );
};
export default HeroSection;
