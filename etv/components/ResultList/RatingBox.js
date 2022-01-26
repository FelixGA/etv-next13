function RatingBox(props) {
  return (
    <div className="border-2 border-black-darkest flex flex-col text-sm xl:w-20 max-w-fit min-w-fit bg-white">
      <p className=" flex flex-col justify-center ">
        <span className="px-1 w-20 xl:w-20 bg-orange-dark text-white font-bold text-xs flex justify-center ">
          TEST
        </span>
        <span className="flex justify-center text-grey-dark text-xs font-bold pt-2">
          ERGEBNIS
        </span>
      </p>
      <p className="px-1 text-s font-bold text-grey-darkest custom-text">
        <b className="text-2xl">{props.carItem?.rating.value}</b>
        <br />
        <span className="pb-2">{props.carItem?.rating.key}</span>
      </p>
    </div>
  );
}
export default RatingBox;
