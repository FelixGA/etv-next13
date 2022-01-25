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
      className="bg-yellow-dark  hover:bg-yellow-light text-blue-dark my-3 px-2 font-bold text-xxs md:text-xs xl:tracking-wide rounded w-5/6 h-7 disabled:bg-grey-light "
    >
      {" "}
      {disabled ? "Angefragt" : "Jetzt anfragen"}
    </button>
  );
}
export default ButtonAnfragen;
