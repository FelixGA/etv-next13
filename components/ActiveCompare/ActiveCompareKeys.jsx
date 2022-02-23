export default function ActiveCompareKeys({ getKeys }) {
  console.log();
  return (
    /* BUTTON AND IMAGES AND COMPARE CATEGORIES  <>VISIBLE IN MOBILE VIEW<> */
    <>
      <div className=" w-full border-r-2  shadow-xl">
        <div className="h-36 bg-grey-lighter"></div>
        <div className=" flex items-center h-10 w-full bg-white ">
          <h3 className=" p-4 text-[#2C3F53] text-xl">Grundlagen</h3>
        </div>
        {getKeys
          .map((key, index) => (
            <div
              key={index}
              className={
                index % 2 == 0
                  ? "flex items-center h-10 flex-1 bg-grey-lighter"
                  : "flex items-center h-10 flex-1 bg-white"
              }
            >
              <h3 className="p-4 text-[#2C3F53] text-sm">{key}</h3>
            </div>
          ))
          .splice(0, 11)}

        {/* <div className="w-[105%] bg-[#D0DDEA] h-20"></div> */}
      </div>
    </>
  );
}
