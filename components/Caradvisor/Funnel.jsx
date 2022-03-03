import Link from "next/link";
import BottomSliderCard from "../Sliders/BottomSliderCard";
import { useStore } from "../store";
import FunnelBox from "./FunnelBox";
import { useState, useEffect } from "react";
const filtersData = [
  {
    title: `Welchen Aufbautyp wählen Sie für Ihren Elektrotransporter? `,
    category: "categorys",
    options: [
      {
        name: "Pritsche",
        value: "Pritsche",
        categoryName: "category",
      },
      {
        name: "Kipper",
        value: "Kipper",
        categoryName: "category",
      },
      {
        name: "Koffer",
        value: "Koffer",
        categoryName: "category",
      },
      {
        name: "Kasten",
        value: "Kasten",
        categoryName: "category",
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
      },
      {
        name: `ab 200 km`,
        value: 200,
        categoryName: "rangeLithium",
      },
      {
        name: `ab 250 km`,
        value: 250,
        categoryName: "rangeLithium",
      },
      {
        name: `ab 500 km`,
        value: 500,
        categoryName: "rangeLithium",
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
      },
      {
        name: `ab 1000 kg`,
        value: 1000,
        categoryName: "loadingWeight",
      },
      {
        name: `ab 1500 kg`,
        value: 1500,
        categoryName: "loadingWeight",
      },
      {
        name: `ab 2500 kg`,
        value: 2500,
        categoryName: "loadingWeight",
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
      },
      {
        name: "20001-40000€",
        value: 20001,
        max: 40000,
        categoryName: "price",
      },
      {
        name: "40001-60000€",
        value: 40001,
        max: 60000,
        categoryName: "price",
      },
      {
        name: "60001-90000€",
        value: 60001,
        max: 90000,
        categoryName: "price",
      },
    ],
  },
];
export default function Funnel({ getCars }) {
  const { state, dispatch } = useStore();
  const [currentFilter, setCurrentFilter] = useState(filtersData[0]);
  useEffect(() => {
    state.categorys.length > 0 ? setCurrentFilter(filtersData[1]) : null;
    state.rangeLithiums.length > 0 ? setCurrentFilter(filtersData[2]) : null;
    state.loadingWeights.length > 0 ? setCurrentFilter(filtersData[3]) : null;
    state.prices.length > 0 ? setCurrentFilter("move to next") : null;
  }, [state]);

  return (
    <div className="flex flex-col  ">
      <div>
        {currentFilter !== "move to next" ? (
          <h2 className="text-center text-3xl text-black-dark font-bold my-8">
            frage nach {currentFilter.title}
          </h2>
        ) : (
          <Link href="/comparePage">
            <a className="text-center text-3xl text-black-dark font-bold my-8">
              shows cars
            </a>
          </Link>
        )}

        <FunnelBox currentFilter={currentFilter} />
      </div>
    </div>
  );
}
