import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useStore } from "../store";

function FilterItemDesktop(props) {
  /*  const { id, image, title, firstRange, secondRange, thirdRange, forthRange } =
    item; */

  const [trunc, setTrunc] = useState(false);

  const [isCheckedforRange, setIsCheckedforRange] = useState(false);
  const [isCheckedforWeight, setIsCheckedforWeight] = useState("");
  const [isCheckedforVmax, setIsCheckedforVmax] = useState("");
  const { state, dispatch } = useStore();
  useEffect(() => {
    if (state?.weights.length === 0) setIsCheckedforWeight("");
    if (state?.ranges.length === 0) setIsCheckedforRange("");
    if (state?.maxSpeeds.length === 0) setIsCheckedforVmax("");
  }, [state?.weights, state?.ranges, state?.maxSpeeds]);
  return (
    <div className="" key={props.item.id}>
      <div className=" cursor-pointer" onClick={() => setTrunc(!trunc)}>
        <div className="flex flex-row justify-between border-b py-4  w-full  ">
          <div className="flex flex-row pl-4 ">
            <div className="w-6 h-6 ml-4 ">
              <Image
                src={props.item.image}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="pl-4 my-auto ">
              <h4 className=" font-bold text-[#1F1E80]">{props.item.title}</h4>
            </div>
          </div>
          <div className="w-4  mr-7 ">
            <MdKeyboardArrowDown size={25} />
          </div>
        </div>
      </div>
      <div className={trunc ? "flex flex-col ml-8 " : "hidden"}>
        <div className="mt-4 flex  py-2 ">
          <input
            className=" appearance-none   w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            onClick={() => {
              if (props.item.title === "Reichweite") {
                setIsCheckedforRange("1");
                dispatch({
                  type: "range",
                  data: [
                    { min: props.item.firstRange.valueforRanges, max: 99999 },
                  ],
                });
              }
              if (props.item.title === "Zuladung") {
                setIsCheckedforWeight("1");
                dispatch({
                  type: "weight",
                  data: [
                    {
                      min: props.item.firstRange.valueforWeights,
                      max: 9000,
                    },
                  ],
                });
              }
              if (props.item.title === "Höchstgeschwindigkeit") {
                setIsCheckedforVmax("1");
                dispatch({
                  type: "maxSpeed",
                  data: [
                    {
                      min: 0,
                      max: props.item.firstRange.valueforVmax,
                    },
                  ],
                });
              }
            }}
            checked={
              isCheckedforRange == props.item.firstRange.id ||
              isCheckedforWeight == props.item.firstRange.id ||
              isCheckedforVmax == props.item.firstRange.id
                ? true
                : false
            }
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg text-[#2C3F53] "
          >
            {props.item.firstRange.name}
          </label>
        </div>
        <div className="mt-1 flex  py-2 ">
          <input
            className=" appearance-none   w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
            onClick={() => {
              if (props.item.title === "Reichweite") {
                setIsCheckedforRange("2");
                dispatch({
                  type: "range",
                  data: [
                    { min: props.item.secondRange.valueforRanges, max: 99999 },
                  ],
                });
              }
              if (props.item.title === "Zuladung") {
                setIsCheckedforWeight("2");
                dispatch({
                  type: "weight",
                  data: [
                    {
                      min: props.item.secondRange.valueforWeights,
                      max: 9000,
                    },
                  ],
                });
              }
              if (props.item.title === "Höchstgeschwindigkeit") {
                setIsCheckedforVmax("2");
                dispatch({
                  type: "maxSpeed",
                  data: [{ min: 0, max: props.item.secondRange.valueforVmax }],
                });
              }
            }}
            checked={
              isCheckedforRange == props.item.secondRange.id ||
              isCheckedforWeight == props.item.secondRange.id ||
              isCheckedforVmax == props.item.secondRange.id
                ? true
                : false
            }
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg text-[#2C3F53]"
          >
            {props.item.secondRange.name}
          </label>
        </div>
        <div className="mt-1 flex  py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
            onClick={() => {
              if (props.item.title === "Reichweite") {
                setIsCheckedforRange("3");
                dispatch({
                  type: "range",
                  data: [
                    { min: props.item.thirdRange.valueforRanges, max: 99999 },
                  ],
                });
              }
              if (props.item.title === "Zuladung") setIsCheckedforWeight("3");
              {
                dispatch({
                  type: "weight",
                  data: [
                    {
                      min: props.item.thirdRange.valueforWeights,
                      max: 9000,
                    },
                  ],
                });
              }
              if (props.item.title === "Höchstgeschwindigkeit") {
                setIsCheckedforVmax("3");
                dispatch({
                  type: "maxSpeed",
                  data: [{ min: 0, max: props.item.thirdRange.valueforVmax }],
                });
              }
            }}
            checked={
              isCheckedforRange == props.item.thirdRange.id ||
              isCheckedforWeight == props.item.thirdRange.id ||
              isCheckedforVmax == props.item.thirdRange.id
                ? true
                : false
            }
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg text-[#2C3F53]"
          >
            {props.item.thirdRange.name}
          </label>
        </div>
        <div className="mt-1 flex  py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
            onClick={() => {
              if (props.item.title === "Reichweite") {
                setIsCheckedforRange("4");
                dispatch({
                  type: "range",
                  data: [
                    { min: props.item.forthRange.valueforRanges, max: 99999 },
                  ],
                });
              }
              if (props.item.title === "Zuladung") {
                setIsCheckedforWeight("4");
                dispatch({
                  type: "weight",
                  data: [
                    {
                      min: props.item.forthRange.valueforWeights,
                      max: 9000,
                    },
                  ],
                });
              }
              if (props.item.title === "Höchstgeschwindigkeit") {
                setIsCheckedforVmax("4");
                dispatch({
                  type: "maxSpeed",
                  data: [
                    {
                      min: 0,
                      max: props.item.forthRange.valueforVmax,
                    },
                  ],
                });
              }
            }}
            checked={
              isCheckedforRange == props.item.forthRange.id ||
              isCheckedforWeight == props.item.forthRange.id ||
              isCheckedforVmax == props.item.forthRange.id
                ? true
                : false
            }
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg text-[#2C3F53]"
          >
            {props.item.forthRange.name}
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterItemDesktop;
