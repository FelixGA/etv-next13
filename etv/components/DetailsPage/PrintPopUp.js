import ButtonAnfragen from "../ResultList/ButtonAnfragen";
import ButtonCompare from "../ResultList/ButtonCompare";

const PrintPopUp = (props) => {
  let carItem = props.carItem;
  return (
    <div className="sticky md:mt-20 lg:z-10 lg:bottom-0 w-full h-18 lg:h-32 bg-grey-light flex justify-between items-center">
      <div className="hidden lg:block md:w-3/6">.</div>
      <span
        id="BLUE-BUTTONS-SECTION"
        className=" xs:flex-row flex-wrap w-1/2 md:w-3/12 flex flex-col justify-center items-start"
      >
        <div className=" xs:mx-2 justify-center items-center">
          <button
            onClick={() => console.log("window.print doesnt work")}
            className="bg-blue-dark disabled:bg-grey-light hover:bg-blue-light text-white px-4 text-xs xl:tracking-wider rounded flex justify-center items-center h-7 my-1 xs:my-0 md:mr-4 w-18"
          >
            Drucken
          </button>
        </div>
        <div className=" h-7 justify-center items-center  ">
          <ButtonCompare carItem={carItem} />
        </div>
      </span>
      <span
        id="PRICE-ANFRAGEN-BUTTONS-SECTION"
        className="md:mt-4 xs:px-1 h-7 flex-row-reverse w-2/3 md:w-3/12 flex lg:flex-col justify-end items-center"
      >
        <p className="text-green-700  text-sm xl:text-xl font-bold ">
          ab {carItem?.price} €
        </p>{" "}
        <div className="w-28 xs:w-40 ">
          <ButtonAnfragen />
        </div>
      </span>
    </div>
  );
};
export default PrintPopUp;
