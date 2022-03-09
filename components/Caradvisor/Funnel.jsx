import Link from "next/link";
import { useStore } from "../store";
import FunnelBox from "./FunnelBox";
import { useState, useEffect } from "react";
import weight250 from "../../public/images/weight250.png";
import weight100 from "../../public/images/weight100.jpg";
import weight450 from "../../public/images/weight450.png";
import weight500 from "../../public/images/weight500.png";
import range50 from "../../public/images/range50.png";
import range100 from "../../public/images/range100.png";
import range150 from "../../public/images/range150.png";
import range200 from "../../public/images/range200.png";
import price from "../../public/images/price.png";
import koffericon from "../../public/images/koffer.png";
import pritscheicon from "../../public/images/pritsche.png";
import kastenicon from "../../public/images/kasten.png";
import kippericon from "../../public/images/kipper.png";
import ButtonForAlleTransporter from "../Sliders/ButtonForAlleTransporter";
import Router from "next/router";
import { useRouter } from "next/router";

export default function Funnel({ getContent }) {
  const router = useRouter();
  const filtersData = [
    {
      title: `Welchen Aufbautyp wählen Sie für Ihren Elektrotransporter? `,
      category: "categorys",
      options: [
        {
          name: "Pritsche",
          value: "Pritsche",
          categoryName: "category",
          image: pritscheicon,
        },
        {
          name: "Kipper",
          value: "Kipper",
          categoryName: "category",
          image: kippericon,
        },
        {
          name: "Koffer",
          value: "Koffer",
          categoryName: "category",
          image: koffericon,
        },
        {
          name: "Kasten",
          value: "Kasten",
          categoryName: "category",
          image: kastenicon,
        },
      ],
    },
    {
      category: "rangeLithiums",
      title: `Wie viel Reichweite benötigen Sie pro Tag?`,
      options: [
        {
          value: 0,
          max: 50,
          name: `bis 50 km`,
          categoryName: "rangeLithium",
          image: range50,
        },
        {
          name: `bis 100 km`,
          value: 0,
          max: 100,
          categoryName: "rangeLithium",
          image: range100,
        },
        {
          name: `bis 150 km`,
          value: 0,
          max: 150,
          categoryName: "rangeLithium",
          image: range150,
        },
        {
          name: `ab 200 km`,
          value: 200,
          max: 100000,
          categoryName: "rangeLithium",
          image: range200,
        },
      ],
    },
    {
      category: "loadingWeights",
      title: `
Über wie viel Zuladung soll Ihr Elektrotransporter verfügen?`,

      options: [
        {
          name: `bis 100 kg`,
          value: 0,
          max: 100,
          categoryName: "loadingWeight",
          image: weight100,
        },
        {
          name: `bis 250 kg`,
          value: 0,
          max: 250,

          categoryName: "loadingWeight",
          image: weight250,
        },
        {
          name: `bis 450 kg`,
          value: 0,
          max: 400,
          categoryName: "loadingWeight",
          image: weight450,
        },
        {
          name: `ab 500 kg`,
          value: 500,
          max: 100000,
          categoryName: "loadingWeight",
          image: weight500,
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
          image: price,
        },
        {
          name: "20001-40000€",
          value: 20001,
          max: 40000,
          categoryName: "price",
          image: price,
        },
        {
          name: "40001-60000€",
          value: 40001,
          max: 60000,
          categoryName: "price",
          image: price,
        },
        {
          name: "60001-90000€",
          value: 60001,
          max: 90000,
          categoryName: "price",
          image: price,
        },
      ],
    },
  ];
  const { state, dispatch } = useStore();
  const [currentFilter, setCurrentFilter] = useState(filtersData[0]);
  const [redirecter, setRedDirecter] = useState(false);
  useEffect(() => {
    if (redirecter && router.pathname == "/caradvisor") {
      /*  here is the solution! */
      Router.push("/comparePage");
      setRedDirecter(false);
    }
    state.categorys.length > 0 ? setCurrentFilter(filtersData[1]) : null;
    state.rangeLithiums.length > 0 ? setCurrentFilter(filtersData[2]) : null;
    state.loadingWeights.length > 0 ? setCurrentFilter(filtersData[3]) : null;
    state.prices.length > 0 ? setRedDirecter(true) : null;
  }, [
    state?.prices,
    state?.loadingWeights,
    state?.rangeLithiums,
    state?.maxSpeeds,
    state?.chargingTimeLithiums,
    state?.categorys,

    redirecter,
  ]);

  return (
    <></>
    // <div className="flex flex-col flex-1 ">
    //   <p></p>
    //   <div className="flex flex-1 flex-col my-4 items-center ">
    //     {!redirecter ? (
    //       <h2 className="text-center text-3xl text-black-dark font-bold my-8 px-4">
    //         {currentFilter.title}
    //       </h2>
    //     ) : (
    //       <h3>Wir suchen das passende Fahrzeug für Sie.</h3>
    //       // <Link href="/comparePage" passHref>
    //       //   <div className="w-full my-8 flex items-center justify-center">
    //       //     <a className="flex items-center h-12 px-6 border rounded-md border-blue-darker text-blue-darker font-bold">
    //       //       Transporter anzeigen
    //       //     </a>
    //       //   </div>
    //       // </Link>
    //     )}

    //     <FunnelBox currentFilter={currentFilter} redirecter={redirecter} />
    //   </div>
    //   <div className={!redirecter ? "hidden" : "visible"}>
    //     <ButtonForAlleTransporter />
    //   </div>
    // </div>
  );
}
