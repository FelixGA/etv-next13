import logos from "./logos.json";
import Image from "next/image";
import { useState } from "react";
import { useStore } from "../../components/store";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

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
          name: "1-10000 ",
          value: "0-10000 ",
        },
        {
          id: "2",
          name: "10001-20000",
          value: "10001-20000",
        },
        {
          id: "3",
          name: "20001-40000",
          value: "20001",
        },
        {
          id: "4",
          name: "40001-80000",
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
  //dispatch({ type: "price", data: choosePrice });

  return (
    <div className="relative ">
      <div className="hidden lg:flex w-full h-96 absolute justify-end forz border-black-darkest">
        <div className="w-[520px] relative bottom-0 opacity-30 	">
          <Image
            src="/images/kleintransporter-hintergrund.png"
            width={400}
            height={320}
            alt="Kleintransporter"
            objectFit="cover"
            layout="responsive"
          />
        </div>
      </div>
      <div className="hero-section-container m-4 lg:w-3/4 lg:m-auto">
        <div className="main-heading-container flex flex-col xs:flex-row justify-evenly lg:text-xl flex-1 relative">
          <div className=" sm:p-8 w-3/4 xs:w-96 m-auto xs:m-0">
            <Image
              className="scale-75 sm:scale-90"
              src="/images/siegel2.png"
              width={166}
              height={166}
              objectFit="contain"
              layout="responsive"
            />
          </div>
          <div className="main-heading-text lg:flex lg:flex-col lg:justify-evenly pb-8">
            <h1 className="text-2xl lg:text-3xl pl-4 md:pt-8">
              {getContent.title}
            </h1>
            <div className="text-grey-darker text-2xl lg:text-3xl pl-4">
              <MDXRemote {...getMarkdownContext.header} />
            </div>

            <p className="hidden lg:flex justify-between">
              <span className="text-blue-extra font-bold pl-3 text-xl xl:text-2xl">
                {getContent.content[0].details}
              </span>
            </p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:items-center bg-yellow-light lg:h-28 border border-blue-dark relative bottom-0 xl:bottom-6">
          <h2 className="text-blue-dark font-bold pt-2 pl-2 lg:hidden ">
            {getContent.content[1].name}
          </h2>

          <div className="comaprison-input-container m-2 lg:items-center lg:flex lg:flex-row lg:justify-between lg:flex-1">
            <div className="flex lg:flex-row flex-col lg:w-1/2 justify-around items-start lg:items-center flex-wrap">
              <div className="h-14 lg:w-68  w-full pt-2 shadow-angelos1 text-base rounded-sm bg-white lg:w-[14vw]">
                <label className=" flex flex-row justify-between px-2 text-left">
                  {getContent.content[1].markdown.split(", ")[0]}
                  <div className=" relative top-6">▼</div>
                </label>
                <div className=" m-1">
                  <select
                    className="tracking-wider p-4 relative bottom-6 w-full
               text-base font-bold text-blue-dark appearance-none bg-transparent border-none pl-1 m-0 "
                    id="rangeLithium"
                    onChange={(e) => {
                      setChooseRange(e.target.value);
                    }}
                  >
                    {details[1].options.map((option) => (
                      <option key={option.id} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="h-14 lg:w-68 w-full my-4 pt-2 shadow-angelos1 text-base rounded-sm bg-white lg:w-[14vw]	tracking-wide">
                <label className="px-2 flex flex-row justify-between text-left">
                  {getContent.content[1].markdown.split(", ")[1]}
                  <div className=" relative top-6">▼</div>
                </label>
                <div className=" m-1">
                  <select
                    className="tracking-wider p-4 relative bottom-6 w-full text-base font-bold text-blue-dark appearance-none bg-transparent border-none pl-1 m-0 "
                    id="price"
                    onChange={(e) => {
                      setChoosePrice(e.target.value);
                    }}
                  >
                    {details[0].options.map((option) => (
                      <option key={option.id} value={option.value}>
                        {option.name} €
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <span className="flex flex-1 lg:w-1/2 lg:justify-around justify-between items-start lg:items-center flex-wrap ">
              <div className="w-2/5 h-14 pt-2 shadow-angelos1 mb-6 lg:mb-0 lg:w-[14vw] text-base rounded-sm bg-white tracking-wide">
                <label className="px-2 flex flex-row justify-between text-left">
                  {getContent.content[1].markdown.split(", ")[2]}
                  <div className=" relative right-0 top-6">▼</div>
                </label>
                <div className=" mt-1 px-1">
                  <select
                    className="tracking-wider p-4 relative bottom-6 w-full text-base font-bold appearance-none bg-transparent border-none pl-1 m-0  text-blue-dark"
                    id="loadingWeight"
                    onChange={(e) => {
                      setChooseWeight(e.target.value);
                    }}
                  >
                    {details[2].options.map((option) => (
                      <option key={option.id} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                className="bg-blue-dark w-2/5 hover:bg-blue-light text-white font-bold px-2 text-sm rounded-sm lg:w-[14vw] h-14 "
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
                  <a className="py-14">Jetzt vergleichen</a>
                </Link>
              </button>
            </span>
          </div>
        </div>
        <div className="icons-container flex justify-around flex-wrap pt-2">
          {logos.map((logo, index) => (
            <i className="m-2 lg:my-20 lg:scale-125" key={index}>
              <Image src={logo.src} alt={logo.alt} width={48} height={48} />
            </i>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
