import { useState, useEffect } from "react";
import { useStore } from "../store";

function FilterCheckbox(props) {
  const { state, dispatch } = useStore();
  const [isChecked, setIsChecked] = useState("");
  /* CHECKING WHICH CHECKBOX IS ACTIVE UPON THE RANGE */
  useEffect(() => {
    let minPrice = state?.prices.map((el) => el.min).join(" ");
    if (props.checkbox.categoryName == "price" && state?.prices.length) {
      
      minPrice >= 0 ? setIsChecked("0-20000€") : null;
      minPrice >= 20001 ? setIsChecked("20001-40000€") : null;
      minPrice >= 40001 ? setIsChecked("40001-60000€") : null;
      minPrice >= 60001 ? setIsChecked("60001-90000€") : null;
      

    } else {
      /* unchecking the box */
      setIsChecked(props.checkbox.categoryName);
     
    }
    
    let minRange = state?.ranges.map((el) => el.min).join(" ");
    if (props.checkbox.categoryName == "range" && state?.ranges.length) {
      minRange >= 150 ? setIsChecked("ab 150 km") : null;
      minRange >= 200 ? setIsChecked("ab 200 km") : null;
      minRange >= 250 ? setIsChecked("ab 250 km") : null;
      minRange >= 500 ? setIsChecked("ab 500 km") : null;
          } else {
      /* unchecking the box */
      setIsChecked(props.checkbox.categoryName);
    }

    let minWeight = state?.weights.map((el) => el.min).join(" ");
    if (props.checkbox.categoryName == "weight") {
      minWeight >= 500 ? setIsChecked("ab 500 kg") : null;
      minWeight >= 1000 ? setIsChecked("ab 1000 kg") : null;
      minWeight >= 1500 ? setIsChecked("ab 1500 kg") : null;
      minWeight >= 2500 ? setIsChecked("ab 2500 kg") : null;
    }
    let minvmax = state?.maxSpeeds.map((el) => el.min).join(" ");
    if (props.checkbox.categoryName == "maxSpeed") {
      minvmax >= 10 ? setIsChecked("ab 10km/h") : null;
      minvmax >= 200 ? setIsChecked("ab 200km/h") : null;
      minvmax >= 400 ? setIsChecked("ab 400km/h") : null;
      minvmax >= 600 ? setIsChecked("ab 600km/h") : null;
    }

    let minChargingTime = state?.chargingTimes.map((el) => el.min).join(" ");
    if (props.checkbox.categoryName == "chargingTime") {
      minChargingTime >= 1 ? setIsChecked("ab 1 Stunde") : null;
      minChargingTime >= 10 ? setIsChecked("ab 10 Stunde") : null;
      minChargingTime >= 20 ? setIsChecked("ab 20 Stunde") : null;
      minChargingTime >= 40 ? setIsChecked("ab 40 Stunde") : null;
    }
    let categories = state?.categorys.map((el) => el.min).join(" ");
    if (props.checkbox.categoryName == "category") {
      categories == "Pritsche" ? setIsChecked("Pritsche") : null;
      categories == "Kipper" ? setIsChecked("Kipper") : null;
      categories == "Koffer" ? setIsChecked("Koffer") : null;
      categories == "Kasten" ? setIsChecked("Kasten") : null;
    }
  }, [
    state?.prices,
    state?.ranges,
    state?.weights,
    state?.maxSpeeds,
    state?.chargingTimes,
    state?.categorys,
  ]);

  return (
    <>
      <input
        className=" appearance-none   w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 border-solid "
        type="checkbox"
        id={props.checkbox.id}
        name={props.checkbox.categoryName}
        value={props.checkbox.value}
        // defaultChecked={false}
        checked={isChecked == props.checkbox.name ? true : false}
        onChange={() => {
          return null;
        }}
      ></input>
    </>
  );
}

export default FilterCheckbox;