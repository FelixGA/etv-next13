import image from "../../public/images/reichweite.png";
import image2 from "../../public/images/zuladung.png";
import image3 from "../../public/images/hoechstgeschwindigkeit.png";
import image4 from "../../public/images/preis.png";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

function FilterOption() {
  /*  const filtersData = [
    {
      id: 1,
      title: "Reichweite",
      firstRange: "bis 100km",
      secondRange: "bis 250km",
      thirdRange: "bis 500km",
      forthRange: "mind. 12400km",
      image: image,
    },
    {
      id: 2,
      title: "Zuladung",
      firstRange: "bis 100kg",
      secondRange: "bis 250kg",
      thirdRange: "bis 500kg",
      forthRange: "mind. 12400kg",
      image: image2,
    },
    {
      id: 3,
      title: "Höchstgeschwindigkeit",
      firstRange: "bis 80km/h",
      secondRange: "bis 120km/h",
      thirdRange: "bis 300km/h",
      forthRange: "mind. Mach 5",
      image: image3,
    },
    {
      id: 4,
      title: "Weitere Filter",
      firstRange: "Anschluss Typ2",
      secondRange: "Anschluss Schuko",
      thirdRange: "Anschluss Typ2",
      forthRange: "Anschluss Schuko",
      image: image3,
    },
  ]; */
  const filterOptionPriceData = [
    {
      id: 1,
      value: "0-20000€",
      name: "preis",
    },
    {
      id: 2,
      value: "20001-40000€",
      name: "preis",
    },
    {
      id: 3,
      value: "40001-60000€",
      name: "preis",
    },
    {
      id: 4,
      value: "60001-80000€",
      name: "preis",
    },
  ];

  return filterOptionPriceData.map((item) => {
    return (
      <div className="mt-1 flex flex-row py-2 " key={item.id}>
        <input
          className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark  checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
          type="checkbox"
          name={item.name}
        ></input>
        <label
          forhtml="preis"
          className="inline-flex items-center cursor-pointer pl-5 text-lg"
        >
          {item.value}
        </label>
      </div>
    );
  });
}

export default FilterOption;
