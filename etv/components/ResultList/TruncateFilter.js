import arrowDown from "../../public/images/Chevron_down.png";
import Image from "next/image";
import { useState } from "react";
function TruncateFilter() {
  const [truncPrice, setTruncPrice] = useState(true);
  const [truncDistance, setTruncDistance] = useState(true);
  const [truncLoad, setTruncLoad] = useState(true);
  const [truncSpeed, setTruncSpeed] = useState(true);
  const [truncMoreFilters, setTruncMoreFilters] = useState(true);

  return (
    <div>
      <div className="flex flex-col mt-2">
        {/* Preis */}
        <div className="my-1" onClick={() => setTruncPrice(!truncPrice)}>
          <div className="w-full flex flex-row justify-between  shadow-dropdown  ">
            <div className="pl-4 my-auto">
              <h4 className="py-1">Preis</h4>
            </div>
            <div className="w-3 mr-4 my-auto">
              <Image
                src={arrowDown}
                alt="filter icon"
                objectFit="cover"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
          </div>

          <div className={truncPrice ? "flex flex-col ml-4 mt-2" : "hidden"}>
            <div className="mt-1">
              <input
                type="checkbox"
                id="preis"
                name="preis"
                defaultChecked
              ></input>
              <label forhtml="preis" className="pl-2 font-normal ">
                3000-9000 €
              </label>
            </div>
            <div className="mt-1">
              <input type="checkbox" id="preis2" name="preis2"></input>
              <label forhtml="preis2" className="pl-2 font-normal">
                9001-13000 €
              </label>
            </div>
            <div className="mt-1">
              <input type="checkbox" id="preis3" name="preis3"></input>
              <label forhtml="preis3" className="pl-2 font-normal">
                13001-20000 €
              </label>
            </div>
          </div>
        </div>
        {/* Reichweite */}

        <div className="my-1 " onClick={() => setTruncDistance(!truncDistance)}>
          <div className="flex flex-row justify-between  shadow-dropdown">
            <div className="pl-4 my-auto">
              <h4 className="py-1">Reichweite</h4>
            </div>
            <div className="w-3 mr-4 my-auto">
              <Image
                src={arrowDown}
                alt="filter icon"
                objectFit="cover"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
          </div>

          <div className={truncDistance ? "flex flex-col ml-4 mt-2" : "hidden"}>
            <div className="mt-1">
              <input
                type="checkbox"
                id="reichweite"
                name="reichweite"
                defaultChecked
              ></input>
              <label forhtml="reichweite" className="pl-2 font-normal">
                bis 100km
              </label>
            </div>
            <div className="mt-1">
              <input
                type="checkbox"
                id="reichweite2"
                name="reichweite2"
              ></input>
              <label forhtml="reichweite2" className="pl-2 font-normal">
                bis 250km
              </label>
            </div>
            <div className="mt-1">
              <input
                type="checkbox"
                id="reichweite3"
                name="reichweite3"
              ></input>
              <label forhtml="reichweite3" className="pl-2 font-normal">
                bis 500km
              </label>
            </div>
            <div className="mt-1">
              <input
                type="checkbox"
                id="reichweite4"
                name="reichweite4"
              ></input>
              <label forhtml="reichweite4" className="pl-2 font-normal">
                mind. 12400km
              </label>
            </div>
          </div>
        </div>

        {/* Zuladung */}

        <div className="my-1" onClick={() => setTruncLoad(!truncLoad)}>
          <div className="flex flex-row justify-between  shadow-dropdown">
            <div className="pl-4 my-auto">
              <h4 className="py-1">Zuladung</h4>
            </div>
            <div className="w-3 mr-4 my-auto">
              <Image
                src={arrowDown}
                alt="filter icon"
                objectFit="cover"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
          </div>

          <div className={truncLoad ? "flex flex-col ml-4 mt-2" : "hidden"}>
            <div className="mt-1">
              <input
                type="checkbox"
                id="zuladung"
                name="zuladung"
                defaultChecked
              ></input>
              <label forhtml="zuladung" className="pl-2 font-normal">
                bis 100kg
              </label>
            </div>
            <div className="mt-1">
              <input type="checkbox" id="zuladung2" name="zuladung2"></input>
              <label forhtml="zuladung2" className="pl-2 font-normal">
                bis 250kg
              </label>
            </div>
            <div className="mt-1">
              <input type="checkbox" id="zuladung3" name="zuladung3"></input>
              <label forhtml="zuladung3" className="pl-2 font-normal">
                bis 500kg
              </label>
            </div>
            <div className="mt-1">
              <input type="checkbox" id="zuladung4" name="zuladung4"></input>
              <label forhtml="zuladung4" className="pl-2 font-normal">
                mind. 12400kg
              </label>
            </div>
          </div>
        </div>
        {/* Höchstgeschwindigkeit */}

        <div className="my-1" onClick={() => setTruncSpeed(!truncSpeed)}>
          <div className="flex flex-row justify-between  shadow-dropdown">
            <div className="pl-4 my-auto">
              <h4 className="py-1">Höchstgeschwindigkeit</h4>
            </div>
            <div className="w-3 mr-4 my-auto">
              <Image
                src={arrowDown}
                alt="filter icon"
                objectFit="cover"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
          </div>

          <div className={truncSpeed ? "flex flex-col ml-4 mt-2" : "hidden"}>
            <div className="mt-1">
              <input
                type="checkbox"
                id="höchstgeschwindigkeit"
                name="höchstgeschwindigkeit"
                defaultChecked
              ></input>
              <label
                forhtml="höchstgeschwindigkeit"
                className="pl-2 font-normal"
              >
                bis 80km/h
              </label>
            </div>
            <div className="mt-1">
              <input
                type="checkbox"
                id="höchstgeschwindigkeit2"
                name="höchstgeschwindigkeit2"
              ></input>
              <label
                forhtml="höchstgeschwindigkeit2"
                className="pl-2 font-normal"
              >
                bis 120km/h
              </label>
            </div>
            <div className="mt-1">
              <input
                type="checkbox"
                id="höchstgeschwindigkeit3"
                name="höchstgeschwindigkeit3"
              ></input>
              <label
                forhtml="höchstgeschwindigkeit3"
                className="pl-2 font-normal"
              >
                bis 300km/h
              </label>
            </div>
            <div className="mt-1">
              <input
                type="checkbox"
                id="höchstgeschwindigkeit4"
                name="höchstgeschwindigkeit4"
              ></input>
              <label
                forhtml="höchstgeschwindigkeit4"
                className="pl-2 font-normal"
              >
                mind. Mach 5
              </label>
            </div>
          </div>
        </div>

        {/* Weitere Filter */}

        <div
          className="my-1"
          onClick={() => setTruncMoreFilters(!truncMoreFilters)}
        >
          <div className="flex flex-row justify-between  shadow-dropdown">
            <div className="pl-4 my-auto">
              <h4 className="py-1">Weitere Filter</h4>
            </div>
            <div className="w-3 mr-4 my-auto">
              <Image
                src={arrowDown}
                alt="filter icon"
                objectFit="cover"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
          </div>

          <div
            className={truncMoreFilters ? "flex flex-col ml-4 mt-2" : "hidden"}
          >
            <div className="mt-1">
              <input
                type="checkbox"
                id="weitereFilter"
                name="weitereFilter"
                defaultChecked
              ></input>
              <label forhtml="weitereFilter" className="pl-2 font-normal">
                bis 80km/h
              </label>
            </div>
            <div className="mt-1">
              <input
                type="checkbox"
                id="weitereFilter2"
                name="weitereFilter2"
              ></input>
              <label forhtml="weitereFilter2" className="pl-2 font-normal">
                bis 120km/h
              </label>
            </div>
            <div className="mt-1">
              <input
                type="checkbox"
                id="weitereFilter3"
                name="weitereFilter3"
              ></input>
              <label forhtml="weitereFilter3" className="pl-2 font-normal">
                bis 300km/h
              </label>
            </div>
            <div className="mt-1">
              <input
                type="checkbox"
                id="weitereFilter4"
                name="weitereFilter4"
              ></input>
              <label forhtml="weitereFilter4" className="pl-2 font-normal">
                mind. Mach 5
              </label>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
}

export default TruncateFilter;
