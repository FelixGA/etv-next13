import { createContext, useReducer, useContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "cars":
      return { ...state, locale: action.data };
    // case "setTranslations":
    //   return { ...state, translations: action.data };
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
  cars: [],
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
