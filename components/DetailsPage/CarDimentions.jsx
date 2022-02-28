const CarDimentions = ({ vehichleDimentions, carItem }) => {
  /* calculations */
  // let loadingspace = parseFloat(
  //   (carItem?.loadingVolume.valueheight *
  //     carItem?.loadingVolume.valuewidth *
  //     carItem?.loadingVolume.valuelength) /
  //     1000000000
  // ).toFixed(2);
  // let truckBed = parseFloat(
  //   (carItem?.loadingVolume.valuewidth * carItem?.loadingVolume.valuelength) /
  //     1000000
  // ).toFixed(2);
  return (
    <section className="w-full lg:w-1/2 lg:px-2 lg:pl-6 ">
      <h3 className="text-black-darkest font-bold pt-8 pb-4">Fahrzeug Maße </h3>
      <div className="flex flex-col w-full text-[#2C3F53] ">
        {vehichleDimentions?.map((item, index) => (
          <div
            key={index}
            className={
              index % 2 == 0 ? "flex flex-1 bg-grey-lighter " : "flex flex-1 "
            }
          >
            <p className="w-1/2 py-1">{item.key}:</p>
            <p className="w-1/2 py-1">{item.value}</p>
          </div>
        ))}
        <div
          className="
               flex flex-1 bg-grey-lighter "
        >
          <p className="w-1/2 py-1 ">{carItem.carSizes.wheelbase}:</p>
          <p className="w-1/2 py-1">{carItem.carSizes.valuewheelbase} mm</p>
        </div>
        {/* <div
          className="
               flex flex-row w-full  "
        >
          <p className="w-1/2 py-1 ">Ladefläche:</p>
          <p className="w-1/2 py-1">{truckBed} m²</p>
        </div> */}
        {/* <div
          className="
                 flex flex-1 bg-grey-lighter  "
        >
          <p className="w-1/2 py-1 ">Ladevolumen:</p>
          <p className="w-1/2 py-1">{loadingspace} m³</p>
        </div> */}
      </div>
    </section>
  );
};
export default CarDimentions;
