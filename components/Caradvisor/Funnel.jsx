import Link from "next/link";
import { useStore } from "../store";
import FunnelBox from "./FunnelBox";
import { useState, useEffect } from "react";
import image4 from "../../public/images/preis.png";
import image5 from "../../public/images/aufbautype.png";
import image from "../../public/images/reichweite.png";
import image2 from "../../public/images/zuladung.png";
import ButtonForAlleTransporter from "../Sliders/ButtonForAlleTransporter";

export default function Funnel({ getCars }) {
  const filtersData = [
    {
      title: `Welchen Aufbautyp wählen Sie für Ihren Elektrotransporter? `,
      category: "categorys",
      options: [
        {
          name: "Pritsche",
          value: "Pritsche",
          categoryName: "category",
          image: image5,
        },
        {
          name: "Kipper",
          value: "Kipper",
          categoryName: "category",
          image: image5,
        },
        {
          name: "Koffer",
          value: "Koffer",
          categoryName: "category",
          image: image5,
        },
        {
          name: "Kasten",
          value: "Kasten",
          categoryName: "category",
          image: image5,
        },
      ],
    },
    {
      category: "rangeLithiums",
      title: `Wie viel Reichweite benötigen Sie pro Tag?`,
      options: [
        {
          value: 150,
          name: `ab 150 km`,
          categoryName: "rangeLithium",
          image: image,
        },
        {
          name: `ab 200 km`,
          value: 200,
          categoryName: "rangeLithium",
          image: image,
        },
        {
          name: `ab 250 km`,
          value: 250,
          categoryName: "rangeLithium",
          image: image,
        },
        {
          name: `ab 500 km`,
          value: 500,
          categoryName: "rangeLithium",
          image: image,
        },
      ],
    },
    {
      category: "loadingWeights",
      title: `
Über wieviel Zuladung soll Ihr Elektrotransporter verfügen?`,

      options: [
        {
          name: `ab 500 kg`,
          value: 500,
          categoryName: "loadingWeight",
          image: image2,
        },
        {
          name: `ab 1000 kg`,
          value: 1000,
          categoryName: "loadingWeight",
          image: image2,
        },
        {
          name: `ab 1500 kg`,
          value: 1500,
          categoryName: "loadingWeight",
          image: image2,
        },
        {
          name: `ab 2500 kg`,
          value: 2500,
          categoryName: "loadingWeight",
          image: image2,
        },
      ],
    },
    {
      category: "prices",
      title: `Wie viel darf Ihr Elektrotransporter kosten?
`,

      options: [
        {
          value: 1,
          max: 20000,
          name: "0-20000€",
          categoryName: "price",
          image: image4,
        },
        {
          name: "20001-40000€",
          value: 20001,
          max: 40000,
          categoryName: "price",
          image: image4,
        },
        {
          name: "40001-60000€",
          value: 40001,
          max: 60000,
          categoryName: "price",
          image: image4,
        },
        {
          name: "60001-90000€",
          value: 60001,
          max: 90000,
          categoryName: "price",
          image: image4,
        },
      ],
    },
  ];
  const { state, dispatch } = useStore();
  const [currentFilter, setCurrentFilter] = useState(filtersData[0]);
  useEffect(() => {
    state.categorys.length > 0 ? setCurrentFilter(filtersData[1]) : null;
    state.rangeLithiums.length > 0 ? setCurrentFilter(filtersData[2]) : null;
    state.loadingWeights.length > 0 ? setCurrentFilter(filtersData[3]) : null;
    state.prices.length > 0 ? setCurrentFilter("move to next") : null;
  }, [state]);

  return (
    <div className="flex flex-col flex-1 ">
      <div className="flex flex-1 flex-col my-4 items-center ">
        {currentFilter !== "move to next" ? (
          <h2 className="text-center text-2xl md:text-3xl text-black-dark font-bold my-8 md:px-2">
            {currentFilter.title}
          </h2>
        ) : (
          <Link href="/comparePage" passHref>
            <div className="w-full my-8 flex items-center justify-center">
              <a className="flex items-center h-12 px-6 border rounded-md border-blue-darker text-blue-darker font-bold">
                Transporter anzeigen
              </a>
            </div>
          </Link>
        )}

        <FunnelBox currentFilter={currentFilter} />
      </div>
      <div className={currentFilter == "move to next" ? "hidden" : "visible"}>
        <ButtonForAlleTransporter />
      </div>
    </div>
  );
}
