import CarCard from "./CarCard.js";
import { useStore } from "../store";
import { useState, useEffect } from "react";
import ButtonForAlleTransporter from "../../components/Sliders/ButtonForAlleTransporter";

const ResultList = (props) => {
  const { state, dispatch } = useStore();
  // console.log("State aus resultlist: ", state);
  // shownCars enthält Array von Autoartikeln, die Filterkriterien erfüllen, initial: leer
  const [shownCars, setShownCars] = useState([]); 
  // console.log("shownCars", shownCars);

  /* useEffect - is a hook to apply the filters, 
  aktualisiert den state "shownCars" mit der gefilterten Liste */
  useEffect(() => {
    if (
      !state?.prices ||
      !state?.loadingWeights ||
      !state?.rangeLithiums ||
      !state?.maxSpeeds ||
      !state?.chargingTimeLithiums ||
      !state?.categorys ||
      !state?.brands ||
      props.sortedCars?.length === 0
    )
      return;
   
    let filteredCars = props.sortedCars?.filter((car) => {
      let rangeval = car.rangeLithium.value;
      let chargingTimeval = car.chargingTimeLithium.value;
      //declaring the right range and charging time according to the battery
      car.rangeLithium.value == 0 ? (rangeval = car.range230V.value) : null;
      car.chargingTimeLithium.value == 0
        ? (chargingTimeval = car.chargingTime230V.value)
        : null;
      if (
        state?.prices?.length > 0 &&
        state?.prices?.every(
          (entry) => entry.min > car.price || entry.max < car.price
        )
      )
        return false;

      if (
        state?.loadingWeights?.length > 0 &&
        state?.loadingWeights?.every(
          (entry) =>
            entry.min > car.loadingWeight.value ||
            entry.max < car.loadingWeight.value
        )
      )
        return false;
      if (
        state?.rangeLithiums?.length > 0 &&
        state?.rangeLithiums?.every(
          (entry) => entry.min > rangeval || entry.max < rangeval
        )
      )
        return false;
      if (
        state?.maxSpeeds?.length > 0 &&
        state?.maxSpeeds?.every(
          (entry) =>
            entry.min > car.maxSpeed.value || entry.max < car.maxSpeed.value
        )
      )
        return false;
      if (
        state?.chargingTimeLithiums?.length > 0 &&
        state?.chargingTimeLithiums?.every(
          (entry) => entry.min > chargingTimeval || entry.max < chargingTimeval
        )
      )
        return false;
      if (
        state?.categorys?.length > 0 &&
        !state?.categorys?.some((entry) => entry.min == car.category)
      )
        return false;
      if (
        state?.brands?.length > 0 &&
        !state?.brands?.some(
          (entry) => entry.split(/[\s-]+/)[0] == car.name.split(/[\s-]+/)[0]
        )
      )
        return false;
      return true;
    });

    setShownCars(filteredCars);
  }, [
    state?.prices,
    state?.loadingWeights,
    state?.rangeLithiums,
    state?.maxSpeeds,
    state?.chargingTimeLithiums,
    state?.categorys,
    state?.brands,
    props.sortedCars,
  ]);
  /* Cars with all prices */

  /* ɢᴇᴛ pop up for not meeting criteria */
  const showMoreMessage = (
    <div className="mx-auto">
      <p className="px-4 pt-4 text-center md:text-xl text-black-darkest">
        Ist ihr gesuchter Transporter nicht dabei?
      </p>
      <ButtonForAlleTransporter />
    </div>
  );

  /* ɢᴇᴛ the cars upon filters */
  const getdisplayedCars = shownCars?.map((carItem, index) => {
    return (
      <div className="w-full container-product md:pl-4" key={index}>
        {/* <div className="product-icon"></div> */}
        
        <CarCard
          carItem={carItem}
          getAllReviews={props.getCarsReviews}
        />
      </div>
    );
  });

  // not working: const cat1 = state.categorys[0].min (min is the value from the data object)
  const cat1 = state.categorys[0]; // data object with the choosed category
  // console.log("Object resultList: ", cat1);
  const cat2 = state.categorys.map(item => item.min);
  const aufbau = cat2[0];
  // console.log("Kategorie aus Object? ", aufbau);
  /* get all cars from checked category for alternative results */
  const catCar = props.sortedCars.filter(car => car.category === aufbau);
  // console.log(catCar);
  const getCategoryCars = catCar?.map((carItem, index) => {
    return (
      <div className="w-full container-product pt-4 md:pl-4" key={index}>
        {/* <div className="product-icon"></div> */}

        <CarCard
          carItem={carItem}
          getAllReviews={props.getCarsReviews}
        />
      </div>
    );
  });


  const similarResults = (getdisplayedCars) => {
    return (
      <div>
    {getdisplayedCars}
    <h2 className="pt-6 pb-6 pl-4 font-bold text-black">Ähnliche Suchergebnisse:</h2>
    {getCategoryCars}
    {/* {showMoreMessage} */}
    </div>
    )
  } 

  const showMoreMessage2 = (getCategoryCars) => {
    return (
    <div className="mx-auto">
      <p className="px-4 pt-4 text-center md:text-xl text-black-darkest">
        Kein Ergebnis für ihre Suche. Schauen Sie sich alle Ergebnisse aus der Kategorie {aufbau} an: 
      </p>
      {getCategoryCars}
    </div>
    );
  };

  // Wurde eine Kategorie für den Aufbau gewählt, dann Klammer1, sonst Klammer 2
  // wenn weniger als 4 Ergebnisse, dann darunter similarResults
  // wenn 0 Ergebnisse, 
    // wenn Aufbau gewählt, dann alle Transporter aus der Kategorie
    // wenn kein Aufbau, dann Show More - Button
  return (
    <div className="flex flex-col flex-1 lg:w-full lg:bg-white">
          {
            aufbau ? 
          (
            shownCars?.length === 0 ? showMoreMessage2(getCategoryCars)
          : shownCars?.length < 4 ? similarResults(getdisplayedCars)
          : getdisplayedCars
          ) 
          : (
            shownCars?.length === 0 ? showMoreMessage 
          : (shownCars.length > 0 && shownCars.length < 4) ? similarResults(getdisplayedCars)
          : getdisplayedCars
          )
        }
    </div>
  );
};
export default ResultList;
