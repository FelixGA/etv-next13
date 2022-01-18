import { useState } from "react";
import { useStore } from "../store";
function FilterOptionPrice() {
  const filterOptionPriceData = [
    {
      id: "1",
      value: "0-20000€",
      name: "preis",
      checked: false,
    },
    {
      id: "2",
      value: "20001-40000€",
      name: "preis",
      checked: false,
    },
    {
      id: "3",
      value: "40001-60000€",
      name: "preis",
      checked: false,
    },
    {
      id: "4",
      value: "60001-90000€",
      name: "preis",
      checked: false,
    },
  ];
  const [isChecked, setIsChecked] = useState("");
  const { state, dispatch } = useStore();
  return filterOptionPriceData?.map((item) => {
    return (
      <div className="mt-1 flex flex-row py-2 " key={item.id}>
        <input
          className=" appearance-none  w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark  checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
          type="checkbox"
          name={item.name}
          onClick={() => {
            setIsChecked(item.id);
            isChecked;
            if (item.id === "1") {
              dispatch({ type: "price", data: [{ min: 0, max: 20000 }] });
            }
            if (item.id === "2") {
              dispatch({ type: "price", data: [{ min: 20001, max: 40000 }] });
            }
            if (item.id === "3") {
              dispatch({ type: "price", data: [{ min: 40001, max: 60000 }] });
            }
            if (item.id === "4") {
              dispatch({ type: "price", data: [{ min: 60001, max: 90000 }] });
            }
          }}
          checked={isChecked == item.id ? true : false}
        ></input>

        <label
          forhtml="preis"
          className="inline-flex items-center cursor-pointer pl-5 font-thin text-lg text-[#2C3F53]"
        >
          {item.value}
        </label>
      </div>
    );
  });
}

export default FilterOptionPrice;
