import logos from "./logos.json";
import Image from "next/image";
import { useState } from "react";
import { useStore } from "../../components/store";
import Link from "next/link";
//import filtersData from "../filtersData.json";

const HeroSection = () => {
  const { state, dispatch } = useStore();

  const details = [
    {
      category: "Price",
      options: [
        {
          id: "1",
          name: "0-20000 ",
          value: "0-20000 ",
        },
        {
          id: "2",
          name: "20001-40000",
          value: "20001-40000",
        },
        {
          id: "3",
          name: "40001-60000",
          value: "40001-60000",
        },
        {
          id: "4",
          name: "60001-90000",
          value: "60001-90000",
        },
      ],
    },

    {
      category: "Reichweite",
      options: [
        {
          id: "1",
          name: "ab 150km ",
          value: "150 ",
        },
        {
          id: "2",
          name: "ab 200km",
          value: "200",
        },
        {
          id: "3",
          name: "ab 250km",
          value: "250",
        },
        {
          id: "4",
          name: "ab 500km",
          value: "500",
        },
      ],
    },

    {
      category: "Nutzlast",
      options: [
        {
          id: "1",
          name: "ab:500kg",
          value: "500",
        },
        {
          id: "2",
          name: "ab:1000kg",
          value: "1000",
        },
        {
          id: "3",
          name: "ab:1500kg",
          value: "1500",
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
      <div className="hidden lg:flex w-full h-80 absolute justify-end forz bottom-[264px]  border-black-darkest">
        <div className="w-[460px] relative bottom-10 opacity-40 object-left-top	">
          <Image
            src="/images/kleintransporter-hintergrund.png"
            width={400}
            height={320}
            alt="Kleintransporter"
            objectFit="cover"
            layout="responsive"
            unoptimized={true}
          />
        </div>
      </div>
      <div className="hero-section-container m-4 lg:w-3/4 lg:m-auto ">
        <div className="main-heading-container flex flex-row justify-start lg:text-xl lg:w-full lg:mt-20">
          <div className="m-[10px] lg:mr-14">
            <Image
              src="/images/siegel2.png"
              width={166}
              height={166}
              // layout="responsive"
              unoptimized={true}
            />
          </div>
          <div className="main-heading-text lg:flex lg:flex-col lg:justify-between ">
            <h1 className="text-2xl lg:text-4xl pl-3 ">
              Elektrotransporter-Vergleich
            </h1>
            <p className="text-grey-darker text-base lg:text-2xl pl-3">
              Hier finden Sie den{" "}
              <b className="text-grey-darkest font-bold">
                passenden Elektrotransporter,
              </b>
              <br></br>
              genau für Ihre Ansprüche
            </p>

            <p className="pb-4 hidden lg:flex lg:flex-row lg:justify-between ">
              <span>
                <b className="text-blue-light">&#10004;</b> unabhängig
              </span>
              <span>
                <b className="text-blue-light">&#10004;</b> schnell
              </span>
              <span>
                <b className="text-blue-light">&#10004;</b> immer aktuell
              </span>
            </p>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:items-center  bg-yellow-light lg:h-24">
          <h2 className="text-blue-dark font-bold m-4 lg:hidden ">
            Jetzt vergleichen
          </h2>

          <div className="comaprison-input-container m-2 lg:items-center lg:flex lg:flex-row lg:justify-between lg:flex-1">
            <div className="flex lg:flex-row flex-col lg:w-1/2 justify-around items-start lg:items-center flex-wrap">
              <div className="h-14 lg:w-68  w-full pt-2 gmsou text-base rounded-lg bg-white lg:w-[14vw]">
                <label className=" flex flex-row justify-between px-2 text-left">
                  Reichweite <div className=" relative top-6">▼</div>
                </label>
                <div className=" m-1">
                  <select
                    className=" p-4 relative bottom-6 w-full
               text-base font-bold text-blue-dark appearance-none bg-transparent border-none pl-1 m-0 "
                    id="range"
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
              <div className="h-14 lg:w-68  w-full  my-4 pt-2 gmsou text-base rounded-lg bg-white lg:w-[14vw]	">
                <label className="px-2 flex flex-row justify-between text-left">
                  Preis <div className=" relative top-6">▼</div>
                </label>
                <div className=" m-1">
                  <select
                    className=" p-4 relative bottom-6 w-full
               text-base font-bold text-blue-dark appearance-none bg-transparent border-none pl-1 m-0 "
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
            <span className="flex w-full lg:w-1/2  flex-row lg:justify-around justify-between items-start lg:items-center flex-wrap">
              <div className="w-1/3 h-14  pt-2 gmsou mb-6 lg:mb-0 lg:w-[14vw] text-base rounded-lg bg-white">
                <label className="px-2 flex flex-row justify-between text-left">
                  Nutzlast <div className=" relative right-0 top-6">▼</div>
                </label>
                <div className=" mt-1 px-1">
                  <select
                    className=" p-4 relative bottom-6 w-full text-base font-bold appearance-none bg-transparent border-none pl-1 m-0  text-blue-dark"
                    id="weight"
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
                className="bg-blue-dark w-1/3 hover:bg-blue-light text-white font-bold px-2 text-sm rounded-lg lg:w-[14vw] h-14 "
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
                    type: "range",
                    data: [
                      {
                        min: Number(chooseRange),
                        max: Number(chooseRange) + 9999,
                      },
                    ],
                  });
                  dispatch({
                    type: "weight",
                    data: [
                      {
                        min: Number(chooseWeight),
                        max: 999999,
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
        <div className="icons-container flex flex-row justify-around flex-wrap">
          {logos.map((logo, index) => (
            <i className="m-2 lg:my-20 lg:scale-125" key={index}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={48}
                height={48}
                unoptimized={true}
              />
            </i>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
