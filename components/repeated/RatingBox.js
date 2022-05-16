function RatingBox(props) {
  return (
    <div className="flex flex-col items-center justify-between text-sm bg-white border-2 border-black-darkest h-28">
      <p className="flex flex-col justify-center w-full ">
        <span className="flex items-center justify-center flex-1 h-6 text-xs font-bold text-white bg-orange-dark">
          TEST
        </span>
        <span className="flex justify-center pt-2 text-xs font-bold text-grey-dark ">
          ERGEBNIS
        </span>
      </p>
      <p className="pb-2 font-bold text-grey-darkest custom-text">
        <span className="text-2xl">{props.carItem?.rating.value}</span>
        <br />
        <span className="px-2 text-xs">{props.carItem?.rating.key}</span>
      </p>
    </div>
  );
}
export default RatingBox;
