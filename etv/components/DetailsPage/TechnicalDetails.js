import { v4 as uuidv4 } from "uuid";

const TechnicalDetails = (props) => {
  let carItem = props.carItem;
  /* get two subsets of the car properties to map them */
  const grundlagen = (({ range, weight, maxSpeed, chargingTime }) => [
    range,
    weight,
    chargingTime,
    maxSpeed,
  ])(carItem);
  const ausstattung = (({
    electricWindows,
    ABS,
    airBags,
    airConditioning,
    extras,
  }) => [electricWindows, ABS, airBags, airConditioning, extras])(carItem);

  return (
    <div className="w-full flex flex-col justify-center items-start lg:pt-12  px-4 py-8 lg:px-24">
      <h3 className="text-black-darkest font-bold py-2 lg:text-3xl">
        Technische Daten
      </h3>
      <div className="flex flex-col w-full lg:flex-row">
        <section className="w-full lg:w-1/2 lg:px-2">
          <h3 className="text-black-darkest font-bold py-2">Grundlagen</h3>
          <div className="flex flex-col w-full text-[#2C3F53] font-bold ">
            {grundlagen?.map((item, index) => (
              <div
                key={uuidv4()}
                className={
                  index % 2 == 0
                    ? "flex flex-row w-full bg-[#F2F5F8] "
                    : "flex flex-row w-full "
                }
              >
                <p className="w-1/2 py-1">{item.key}</p>
                <p className="w-1/2 py-1">
                  {item.value} {item.baseUnit}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full lg:w-1/2 lg:px-2">
          <h3 className="text-black-darkest font-bold py-2">Ausstattung</h3>
          <div className="flex flex-col w-full text-[#2C3F53] font-bold">
            {ausstattung?.map((item, index) => (
              <div
                key={uuidv4()}
                className={
                  index % 2 == 0
                    ? "flex flex-row w-full bg-[#F2F5F8] "
                    : "flex flex-row w-full "
                }
              >
                <p className="w-1/2 py-1">{item.key}</p>
                <p className="w-1/2 py-1">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
export default TechnicalDetails;
