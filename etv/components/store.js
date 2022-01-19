import { createContext, useReducer, useContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    //filter
    case "price":
      return { ...state, prices: action.data };
    case "range":
      return { ...state, ranges: action.data };
    case "weight":
      return { ...state, weights: action.data };
    case "maxSpeed":
      return { ...state, maxSpeeds: action.data };
    case "chargingTime":
      return { ...state, chargingTimes: action.data };
    case "removeFilter":
      return { ...state, removeFilters: action.data };
    //sorting
    case "highest":
      return { ...state, highests: action.data };
    case "lowest":
      return { ...state, lowests: action.data };
    case "highestRange":
      return { ...state, highestRanges: action.data };
    case "highestVmax":
      return { ...state, highestVmaxs: action.data };
    case "highestWeight":
      return { ...state, highestWeights: action.data };
    case "sortChargingTime":
      return { ...state, sortChargingTimes: action.data };
    case "highestRating":
      return { ...state, highestRatings: action.data };
    //for the comparison popup
    case "removeAllCarsForComparison":
      return { ...state, removeAllCarsForComparisons: action.data };
    case "autoForComparison":
      return { ...state, autoForComparisons: action.data };
    case "activeSortValue":
      return { ...state, activeSortValues: action.data };
    case "disabledButton":
      return { ...state, disabledButtons: action.data };

    default:
      return;
  }
};

const initialState = {
  prices: [],
  ranges: [],
  weights: [],
  maxSpeeds: [],
  chargingTimes: [],
  autoForComparisons: [],
  removeFilters: false,
  removeAllCarsForComparisons: false,
  highests: "",
  disabledButtons: "",
  activeSortValues: "Niedrigster Preis",
};

const StoreContext = createContext(initialState);
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const store = useContext(StoreContext);

  return store;
}
