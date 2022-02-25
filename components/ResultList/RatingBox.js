function RatingBox(props) {
  return (
    <div className="border-2 border-black-darkest flex flex-col text-sm h-28 justify-between items-center bg-white">
      <p className=" flex flex-col justify-center  w-full">
        <span className=" flex flex-1 bg-orange-dark text-white font-bold text-xs justify-center items-center h-6 ">
          TEST
        </span>
        <span className="flex justify-center text-grey-dark text-xs font-bold pt-2">
          ERGEBNIS
        </span>
      </p>
      <p className=" font-bold text-grey-darkest custom-text  pb-2">
        <span className="text-2xl">{props.carItem?.rating.value}</span>
        <br />
        <span className="">{props.carItem?.rating.key}</span>
      </p>
    </div>
  );
}
export default RatingBox;
