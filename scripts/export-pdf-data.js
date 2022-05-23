const fs = require("fs");
const fetch = require("node-fetch");
const ObjectsToCsv = require("objects-to-csv-file");
const formatPrice = require("./format-price");
const getContent = require("../utils/getContent");

const dataSheetNames = {
  de: "datenblatt",
  en: "data_sheet",
  es: "ficha_tecnica",
  fr: "fiche_technique",
  it: "scheda_tecnica",
  cs: "datenblatt",
};
const productSheetNames = {
  de: "produktblatt",
  en: "product_sheet",
  es: "hoja_del_producto",
  fr: "fiche_produit",
  it: "scheda_prodotto",
  cs: "produktblatt",
};
const internalDimensions = {
  de: "Innenmaße Ladefläche: ",
  en: "Dimensions loading bed: ",
  es: "Dimensiones interiores del área de carga: ",
  fr: "Dimensions intérieures: ",
  it: "Dimensioni interne dell: ",
  cs: "Vnitřní rozměry ložné plochy: ",
};
const monthly = {
  de: "mtl.",
  en: "mo.",
  es: "mensual",
  fr: "mensuel",
  it: "Mensilmente",
  cs: "měsíčně",
};
const fix = {
  de: "ab",
  en: "from",
  es: "desde",
  fr: "à partir de",
  it: "a partire da",
  cs: "od",
};

const locale = "de";

main();
// replace mit getcontent
async function main() {
  const bodiesData = await getContent("vehicles", context.locale);
  let bodies = bodiesData.bodies.data
    .sort((a, b) => {
      return ("" + a.name).localeCompare(b.name);
    })
    .reverse();

  /*  bodies = bodies.sort((a, b) => {
    const aGerman = a.localizations.data.find(
      (localization) => localization.locale === "de"
    );
    const bGerman = b.localizations.data.find(
      (localization) => localization.locale === "de"
    );
    return ("" + bGerman.fullName).localeCompare(aGerman.fullName);
  });

  let data = [];
 */
  //
  /*   let rates;
  try {
    const response = await fetch(
      "https://openexchangerates.org/api/latest.json?app_id=a285bacd41b0403db8e1b5b4f0efcc3a&base=EUR"
    );
    const json = await response.json();
    rates = json.rates;
  } catch (err) {
    return err;
  } */

  for (let filetype of ["datenblatt", "produktblatt"]) {
    for (let body of bodies) {
      if (body.model.data?.name === "ARI 1280") continue;
      //   console.log(body.fullName);

      let entry = {};
      entry.modelName = body.model.data?.name;
      entry.bodyName = body.name;
      entry.locale = body.locale.toUpperCase();
      entry.filetype = filetype[locale];

      let bodyName = body.name;

      entry["@previewImage"] =
        `.\\images\\title\\ARI-Titelbild-${entry.modelName}-${bodyName}.png`.replace(
          /\s+/g,
          "-"
        );
      entry["@tecDatImage1"] =
        `.\\images\\tecdat\\ARI-TecDat-${entry.modelName}-${bodyName}-1.png`.replace(
          /\s+/g,
          "-"
        );
      entry["@tecDatImage2"] =
        `.\\images\\tecdat\\ARI-TecDat-${entry.modelName}-${bodyName}-2.png`.replace(
          /\s+/g,
          "-"
        );
      entry.price = formatPrice(body.price, locale, rates);

      // leasing
      const netto = body.price;
      let zins = 0.039;
      if (netto < 29994) zins = 0.049;
      if (netto < 10000) zins = 0.059;
      const rest48 = netto * 0.2;
      const help48 = Math.pow(1 + zins / 12, 48);
      const leasingRate48 =
        ((zins / 12 / (1 + zins / 12)) * (-1 * netto * help48 + rest48)) /
        (1 - help48);
      entry.leasingRate = formatPrice(leasingRate48, locale, rates);

      // body key value pairs
      for (const [key, value] of Object.entries(bod)) {
        if (value?.value) {
          const translatedKey = `${key}Key`;
          entry = { ...entry, [translatedKey]: value.key };
          entry = { ...entry, [key]: value.value };
        }
      }

      // model key value pairs
      /*   if (body.model?.data) {
        for (const [key, value] of Object.entries(body.model?.data)) {
          if (value?.value) {
            const translatedKey = `${key}Key`;
            entry = { ...entry, [translatedKey]: value.key || "" };
            entry = { ...entry, [key]: value.value || "" };
          }
        }
      } */

      // pdfContent key value pairs
      if (body.pdfContent?.data) {
        for (const [key, value] of Object.entries(body.pdfContent?.data)) {
          entry = {
            ...entry,
            [key]: value?.replace(/(\r\n|\n|\r)/gm, "") || "a",
          };
        }
      }

      data.push(entry);
    }

    await writeFile(filetype[locale], data);
    data = [];
  }
}

async function writeFile(filetype, data) {
  const csv = new ObjectsToCsv(data);
  console.log(csv);
  const filename = `./pdf-export-${locale}-${filetype}`;
  const file = await csv.toDisk(`${filename}.csv`, {
    delimiter: "\t",
  });
  const utf16buffer = Buffer.from(`\ufeff${file}`, "utf16le");
  fs.writeFileSync(`${filename}.csv`, utf16buffer);
  fs.writeFileSync(`${filename}.txt`, utf16buffer);
}

/*  async function fetchBodies(locale) {
  const query = `
  {
    bodies(locale: "${locale}", sort: "fullName") {
      data {
        attributes {
          name
          localizations {data {attributes {fullName, name, locale}}}
          price
          fullName
          locale
          overallDimensions {
            key
            value
          }
          bodyDimensions {
            key
            value
          }
          weight {
            key
            value
          }
          emptyWeight {
            key
            value
          }
          range {
            key
            value
          }
          loadCapacity {
            key
            value
          }
          padding {
            key
            value
          }
          paddingColor {
            key
            value
          }
          consumptionCombined {
            key
            value
          }
          consumptionUrban {
            key
            value
          }
          consumptionExtraUrban {
            key
            value
          }
          consumptionDataSheet {
            key
            value
          }
          model {
            data {
              attributes {
                name
                wheelBase {
                  key
                  value
                }
                trackWidth {
                  key
                  value
                }
                groundClearance {
                  key
                  value
                }
                seats {
                  key
                  value
                }
                engine {
                  key
                  value
                }
                power {
                  key
                  value
                }
                batteryType {
                  key
                  value
                }
                batteryCapacity {
                  key
                  value
                }
                chargingVoltage {
                  key
                  value
                }
                transmissionType {
                  key
                  value
                }
                differential {
                  key
                  value
                }
                drivingType {
                  key
                  value
                }
                frontAxleSuspension {
                  key
                  value
                }
                rearAxleSuspension {
                  key
                  value
                }
                brakes {
                  key
                  value
                }
                handBrake {
                  key
                  value
                }
                tireSize {
                  key
                  value
                }
                rimType {
                  key
                  value
                }
                topSpeed {
                  key
                  value
                }
                gradeability {
                  key
                  value
                }
                chargingTime {
                  key
                  value
                }
                warrantyVehicle {
                  key
                  value
                }
                warrantyBattery {
                  key
                  value
                }
                seats {
                  key
                  value
                }
                turningCycle {
                  key
                  value
                }
                warrantyVehicle {
                  key
                  value
                }
                warrantyBattery {
                  key
                  value
                }
                engineVoltage {
                  key
                  value
                }
                loadVoltage {
                  key
                  value
                }
              }
            }
          }
          pdfContent {
            data {
              attributes {
                specifications
                standardAccessoriesInside
                standardAccessoriesOutside
                colors
                dimensions
                optionalAccessories
                accessories {
                  accessory {
                    data {
                      attributes {
                        name
                        price
                        fix
                        monthly
                        previewImage {data {attributes {name }}}
                        additionalInfo {key value}
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `; 

   try {
     const response = await fetch("http://localhost:1337/graphql", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         query,
       }),
     });
     const json = await response.json();
     return json.data;
   } catch (err) {
     return err;
   }
 } */
