import { createContext, useReducer, useContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "price":
      return { ...state, prices: action.data };
    case "range":
      return { ...state, ranges: action.data };
    case "weight":
      return { ...state, weights: action.data };
    // case "menuHidden":
    //   return { ...state, menuHidden: action.data };
    // case "exitPopupOpened":
    //   return { ...state, exitPopupOpened: action.data };
    // case "shopModel":
    //   return { ...state, shopModel: action.data };
    // case "currencyRates":
    //   return { ...state, currencyRates: action.data };
    default:
      return;
  }
};

const initialState = {
  prices: 0,
  ranges: 0,
  weights: 0,

  //   translations: [],
  //   menuHidden: false,
  //   exitPopupOpened: false,
  //   shopModel: "",
  //   currencyRates: null,
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
