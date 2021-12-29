function TruncateFilter() {
  return (
    <div>
      {/* Preis */}
      <div className="flex flex-col">
        <h3>Preis</h3>
        <div>
          <input type="checkbox" id="preis" name="preis" checked></input>
          <label forhtml="preis">3000-9000 €</label>
        </div>
        <div>
          <input type="checkbox" id="preis2" name="preis2"></input>
          <label forhtml="preis2">9001-13000 €</label>
        </div>
        <div>
          <input type="checkbox" id="preis3" name="preis3"></input>
          <label forhtml="preis3">13001-20000 €</label>
        </div>
      </div>
      {/* Reichweite */}
      <div className="flex flex-col">
        <h3>Reichweite</h3>
        <div>
          <input
            type="checkbox"
            id="reichweite"
            name="reichweite"
            checked
          ></input>
          <label forhtml="reichweite">bis 100km</label>
        </div>
        <div>
          <input type="checkbox" id="reichweite2" name="reichweite2"></input>
          <label forhtml="reichweite2">bis 250km</label>
        </div>
        <div>
          <input type="checkbox" id="reichweite3" name="reichweite3"></input>
          <label forhtml="reichweite3">bis 500km</label>
        </div>
        <div>
          <input type="checkbox" id="reichweite4" name="reichweite4"></input>
          <label forhtml="reichweite4">mind. 12400km</label>
        </div>
      </div>
      {/* Zuladung */}
      <div className="flex flex-col">
        <h3>Zuladung</h3>
        <div>
          <input type="checkbox" id="zuladung" name="zuladung" checked></input>
          <label forhtml="zuladung">bis 100kg</label>
        </div>
        <div>
          <input type="checkbox" id="zuladung2" name="zuladung2"></input>
          <label forhtml="zuladung2">bis 250kg</label>
        </div>
        <div>
          <input type="checkbox" id="zuladung3" name="zuladung3"></input>
          <label forhtml="zuladung3">bis 500kg</label>
        </div>
        <div>
          <input type="checkbox" id="zuladung4" name="zuladung4"></input>
          <label forhtml="zuladung4">mind. 12400kg</label>
        </div>
      </div>
      {/* Höchstgeschwindigkeit */}
      <div className="flex flex-col">
        <h3>Höchstgeschwindigkeit</h3>
        <div>
          <input
            type="checkbox"
            id="Höchstgeschwindigkeit"
            name="Höchstgeschwindigkeit"
            checked
          ></input>
          <label forhtml="Höchstgeschwindigkeit">bis 80km/h</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Höchstgeschwindigkeit2"
            name="Höchstgeschwindigkeit2"
          ></input>
          <label forhtml="Höchstgeschwindigkeit2">bis 120km/h</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Höchstgeschwindigkeit3"
            name="Höchstgeschwindigkeit3"
          ></input>
          <label forhtml="Höchstgeschwindigkeit3">bis 300km/h</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Höchstgeschwindigkeit4"
            name="Höchstgeschwindigkeit4"
          ></input>
          <label forhtml="Höchstgeschwindigkeit4">mind. Mach 5</label>
        </div>
      </div>
      {/* Weitere Filter */}
      <div className="flex flex-col">
        <h3>Weitere Filter</h3>
        <div>
          <input
            type="checkbox"
            id="WeitereFilter"
            name="WeitereFilter"
            checked
          ></input>
          <label forhtml="WeitereFilter">bis 80km/h</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="WeitereFilter2"
            name="WeitereFilter2"
          ></input>
          <label forhtml="WeitereFilter2">bis 120km/h</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="WeitereFilter3"
            name="WeitereFilter3"
          ></input>
          <label forhtml="WeitereFilter3">bis 300km/h</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="WeitereFilter4"
            name="WeitereFilter4"
          ></input>
          <label forhtml="WeitereFilter4">mind. Mach 5</label>
        </div>
      </div>
    </div>
  );
}

export default TruncateFilter;
