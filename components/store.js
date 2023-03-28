/* Dieser Code definiert ein global state management system, das die React-Context-API und den useReducer-Hook verwendet. Der state wird in einem Object namens „initialState" gespeichert, das verschiedene Eigenschaften enthält, die Arrays von Daten enthalten, die sich auf verschiedene Aspekte der Anwendung beziehen.

Die Reducer-Funktion ist eine reine Funktion, die den aktuellen state(Zustand) und eine Aktion aufnimmt und basierend auf dem Typ und den Daten der Aktion einen neuen state zurückgibt. Es verwendet eine switch-Anweisung, um zu bestimmen, welche Eigenschaft des state basierend auf dem Typ der Aktion aktualisiert werden soll. */

import { createContext, useReducer, useContext } from "react";

const reducer = (state, action) => {
  // console.log(state); // array with car properties 
  // console.log(action); // array with property in caradvisorfunnel
  // 
  switch (action.type) {
    /* filter: customer choose this buttons*/
    case "price":
      return { ...state, prices: action.data };
    case "rangeLithium":
      return { ...state, rangeLithiums: action.data };
    case "loadingWeight":
      return { ...state, loadingWeights: action.data };
    case "maxSpeed":
      return { ...state, maxSpeeds: action.data };
    case "chargingTimeLithium":
      return { ...state, chargingTimeLithiums: action.data };
    case "category":
      return { ...state, categorys: action.data };
    case "brand":
      return { ...state, brands: action.data };
    
    /*  */
    case "truncate":
      return { ...state, truncates: action.data };
    /* sorting state */
    case "activeSortValue":
      return { ...state, activeSortValues: action.data };
    /*  states for comparison popup */
    case "removeAllCarsForComparison":
      return { ...state, removeAllCarsForComparisons: action.data };
    case "autoForComparison":
      return { ...state, autoForComparisons: action.data };

    case "disabledButton":
      return { ...state, disabledButtons: action.data };

    case "maximalThree":
      return { ...state, maximalThrees: action.data };
    /*  states for navbar */
    case "mobileNavActive":
      return { ...state, mobileNavActives: action.data };

    default:
      return;
  }
};

const initialState = {
  mobileNavActive: false,
  prices: [],
  rangeLithiums: [],
  loadingWeights: [],
  maxSpeeds: [],
  chargingTimeLithiums: [],
  categorys: [],
  brands: [],
  truncates: "",
  /*  states for comparison popup */
  autoForComparisons: [],
  removeAllCarsForComparisons: false,
  disabledButtons: "",
  maximalThrees: "",
  /* sorting state */
  activeSortValues: [{ sortCategory: "Alphabet", sortType: "alphabetical" }],
};

/* Der StoreContext wird mithilfe der createContext-Funktion erstellt, die ein Context-Objekt erstellt, das verwendet werden kann, um die state- und Dispatch-Funktionen an jede Komponente in der Anwendung zu übergeben. */

const StoreContext = createContext(initialState);
// console.log("StoreContext: ", StoreContext);

/* Die StoreProvider-Komponente ist eine Wrapper-Komponente, die den StoreContext mithilfe der Context Provider-Komponente für ihre untergeordneten Elemente bereitstellt. Es akzeptiert props als Eingabe und rendert seine Kinder(children) als Ausgabe. */

export function StoreProvider(props) {
  // console.log(props.children); // all props: brands, vehicles, page, posts
  // console.log(initialState); // leere Arrays
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
      {/* {console.log("props.children aus StoreContext.Provider: ", props.children)} */}
    </StoreContext.Provider>
  );
}

/* Der Hook useStore wird verwendet, um den StoreContext in anderen Komponenten zu verwenden. Es gibt ein Objekt mit dem aktuellen state und der Dispatch-Funktion zurück. Dadurch können Komponenten den globalen state aktualisieren, indem sie Aktionen senden, die den state über die Reducer-Funktion aktualisieren. */

export function useStore() {
  const store = useContext(StoreContext);
  // console.log("StoreContext 2: ", store);
  return store;
}
