import Link from "next/link";
import {useState} from 'react';
import Image from "next/image";
import { useStore } from "../store";
import { useRouter } from "next/router";
import Form from "../../components/repeated/Form";
import Router from "next/router";

/* - Komponente rendert <div>Boxen mit Kategorien 
   - wenn auf Box geklickt, wird Eventlistener ausgeführt
   und state von store aktualisiert mit value von category 
   - danach Weiterleitung auf /caradvisorFunnel mittels Router */
export default function FunnelBoxTest({ currentFilter, redirecter }) {
  // currentFilter: Array mit 4 Objects. Value der Objects entspricht den Optionen die zur Auswahl angeclickt werden können
  // console.log(currentFilter); 
  const { state, dispatch } = useStore();
  // console.log("state von funnelboxtest: ", state.categorys[0].min)

  const [clickedValue, setClickedValue] = useState(null);
  // console.log(clickedValue);

  const router = useRouter();

  /* wenn keine Weiterleitung und man auf /home ist, baue das erste grid, sonst das zweite */
  return !redirecter ? (
    <div
      className={
        router.pathname == "/home"
          ? "grid grid-cols-2 sm:grid-cols-4  gap-4 w-full md:scale-[85%]"
          : "grid grid-cols-2 sm:grid-cols-4  gap-4 w-full scale-[85%]"
      }
    >
      {currentFilter.options.map((item, index) => {
        return (
          <div
            onClick={() => {
              // console.log(item.value);
              if (clickedValue === null) {
                setClickedValue(item.value);
                // console.log(clickedValue);
              }
              {/* auf /home ist item.categoryName = "category",
                  von da Weiterleitung auf /caradvisorFunnel  */}
              {/* klickbare Optionen befinden sich in {min: item.value} und{max} (Data Object)!!!! */}
              {/* dispatch der Kategorien = item.categoryName: categorys(=Aufbautyp!!!!), rangeLithiums(=Reichweite!!!!),
                   loadingWeights(=Zuladung), prices(=Preisspanne) */}
              item.categoryName === "category" /* ? <Form /> : null; */
                ? Router.push("/caradvisorFunnel")
                : null;
              {/* dispatching an action to update the state of the store. Includes a "type" property that is set to the value of "item.categoryName", and a "data" property that is an array with a single object containing two properties: "min" and "max". The values of these properties are set to "item.value" and "item.max", respectively. categorys(Aufbautyp) hat nur "min".

              The dispatch function is likely provided by a Redux store or a similar state management library, and is used to trigger a state update by passing an action object to the store's reducer function. The reducer will then use the action's "type" property to determine how to update the state, and will use the "data" property to provide additional information needed for the update. */}
              dispatch({
                type: item.categoryName,

                data: [{ min: item.value, max: item.max }],
              });
            }}
            key={index}
            className="flex flex-col items-center justify-center transition bg-white cursor-pointer shadow-dropdown sm:mb-8 hover:scale-110 min-w-[140px] lg:w-[190px] min-h-[140px] lg:h-[190px] md:w-[190px] md:h-[190px] xl:w-[220px] xl:h-[220px]"
          >
            {/* {console.log("alle Values der gewählten Kategorie aus FunnelBoxTest: ", item.value)} */}

            {/* <div className="w-full p-4" onClick={()=> {
              const cat = item.value}}> */}
              <div className="w-full p-4">
              <Image
                src={item.image}
                alt="picture"
                objectFit="contain"
                width={48}
                height={28}
                layout="responsive"
              />
            </div>
            <p className="py-4 text-sm font-bold text-center text-black lg:text-lg xl:text-xl">
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  ) : null;
}
