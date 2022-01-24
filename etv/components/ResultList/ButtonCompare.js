import { useState, useEffect } from "react";
import { useStore } from "../store";
function ButtonCompare(props) {
  /* HOOKS */
  const { state, dispatch } = useStore();
  const [disabled, setDisabled] = useState(false);
  const [disabledAsMaximun, setDisabledAsMaximun] = useState(false);
  /* control to enable again the button */
  useEffect(() => {
    if (state?.autoForComparisons?.length < 3) setDisabledAsMaximun(false);
    if (!state?.autoForComparisons?.length) setDisabled(false);
    if (state?.disabledButtons === props.carItem.title) {
      console.log("single button State from ", props.carItem.title, disabled);
      setDisabled(false);
    }
  }, [state?.disabledButtons, state?.autoForComparisons]);
  /* VERGLEICHEN BUTTON INPUT */

  const buttonInput = (
    <>
      <span className="text-blue-dark hidden xs:flex  lg:w-0 xl:w-4 justify-center font-bold rounded-full my-auto mr-2 bg-white">
        &nbsp;+&nbsp;
      </span>
      <span className="my-auto">Vergleichen</span>
    </>
  );

  return (
    <>
      <button
        disabled={disabled}
        onClick={() => {
          if (state?.autoForComparisons?.length < 3) {
            dispatch({
              type: "disabledButton",
              data: true,
            });
            console.log(`disabled to ${disabled} on Zum Vergleich `);
            dispatch({
              type: "autoForComparison",
              data: [
                ...state.autoForComparisons,
                {
                  pic: props.carItem.photo.data[0].attributes.url,
                  title: props.carItem.title,
                  price: props.carItem.price,
                  auto: props.carItem,
                },
              ],
            });

            setDisabled(true);
          } else {
            setDisabledAsMaximun(true);
          }
        }}
        className="bg-blue-dark disabled:bg-grey-light hover:bg-blue-light text-white mb-2 px-2 text-xs xl:tracking-wider rounded  flex justify-center items-center w-5/6 h-7 xxs:h-9 "
      >
        {disabled ? "Zum Vergleich" : buttonInput}
      </button>
      <p>{disabledAsMaximun ? "Maximal 3 Fahrzeuge" : null}</p>
    </>
  );
}
export default ButtonCompare;
