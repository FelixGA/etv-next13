import { useState, useEffect } from "react";
import { useStore } from "../store";
function ButtonAnfragen() {
  /* HOOKS */

  const [disabled, setDisabled] = useState(false);

  return (
    <button
      onClick={() => {
        setDisabled(true);
      }}
      className="bg-orange-lighter  hover:bg-yellow-light text-blue-dark my-2 px-2 font-bold text-xs  xl:tracking-wide rounded w-28 h-7 disabled:bg-grey-light "
    >
      {" "}
      {disabled ? "Angefragt" : "Jetzt anfragen"}
    </button>
  );
}
export default ButtonAnfragen;
