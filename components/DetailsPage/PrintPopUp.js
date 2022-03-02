import ButtonAnfragen from "../ResultList/ButtonAnfragen";
import ButtonCompare from "../ResultList/ButtonCompare";

const PrintPopUp = (props) => {
  let carItem = props.carItem;
  return (
    <div className="sticky md:mt-20 lg:z-10 lg:bottom-0 flex-1 h-18 lg:h-32 xl:h-36 bg-grey-light flex justify-end items-center print:hidden">
      <div className="flex-1 xl:w-1/2 flex justify-between h-24">
        <div
          id="BLUE-BUTTONS-SECTION"
          className="flex items-center flex-1 justify-center"
        >
          <div className="xs:mx-2 flex ">
            <button
              onClick={() => window.print()}
              className={
                "bg-blue-dark disabled:bg-grey-light hover:bg-blue-light text-white text-sm xl:tracking-wider rounded  px-4 flex justify-center items-center h-8 sm:h-10 w-28 sm:w-36 xl:w-40 "
              }
            >
              Drucken
            </button>
          </div>
          <div className="justify-center items-center ">
            <ButtonCompare carItem={carItem} />
          </div>
        </div>
        <div
          id="PRICE-ANFRAGEN-BUTTONS-SECTION"
          className="pr-24 flex flex-col-reverse justify-between pb-7"
        >
          <div className="flex justify-center items-center">
            <ButtonAnfragen />
          </div>
          <div className="">
            <p className="text-green-700 text-md xl:text-xl 2xl:text-2xl font-black text-center xl:pb-2 2xl:pb-4">
              ab {carItem?.price} €
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrintPopUp;
