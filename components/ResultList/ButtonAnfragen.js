import { useState, useEffect } from "react";
import { useStore } from "../store";
import { useRouter } from "next/router";
import Form from "../repeated/Form";

function ButtonAnfragen() {
  /* HOOKS */
  const router = useRouter();

  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setDisabled(true);
          alert(<div>test</div>);
          // setOpenForm(true);
        }}
        className={
          router.pathname == "/activeCompare"
            ? "relative bg-orange-lighter hover:bg-yellow-light text-blue-dark font-bold text-sm md:text-md xl:tracking-wide rounded w-32 md:w-96 h-8 sm:h-10 disabled:bg-grey-light mx-1"
            : "relative bg-orange-lighter hover:bg-yellow-light text-blue-dark font-bold text-sm xl:tracking-wide rounded w-32 md:w-44 h-8 sm:h-10 disabled:bg-grey-light"
        }
      >
        {disabled ? "Angefragt" : "Jetzt anfragen"}
      </button>
    </>
  );
}
export default ButtonAnfragen;
