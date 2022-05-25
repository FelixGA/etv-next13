const fs = require("fs");
const ObjectsToCsv = require("objects-to-csv-file");
const formatPrice = require("./format-price");

// the cars
const arrayForCars = require("./arrayForCars.js");

// data.cars.map((car) => {
//   let entry = {};
//   entry.modelName = car.title;
//   entry.price = formatPrice(car.price);
//   //                      here we add the review!!!!!
//   entry.relatedReviews = car.relatedReviews;
//   entry.image = car.src.substring(8);

//   // leasing
//   const netto = car.price;
//   let zins = 0.039;
//   if (netto < 29994) zins = 0.049;
//   if (netto < 10000) zins = 0.059;
//   const rest48 = netto * 0.2;
//   const help48 = Math.pow(1 + zins / 12, 48);
//   const leasingRate48 =
//     ((zins / 12 / (1 + zins / 12)) * (-1 * netto * help48 + rest48)) /
//     (1 - help48);
//   entry.leasingRate = formatPrice(leasingRate48, "de");

//   // body key value pairs
//   for (const [key, value] of Object.entries(car)) {
//     if (value?.value) {
//       const translatedKey = `${key}Key`;
//       /*  entry = { ...entry, [translatedKey]: value.key }; */
//       entry = { ...entry, [key]: `${value.value} ${value?.baseUnit || ""}` };
//     }
//   }
//   carsData.push(entry);

//   return car;
// });
// console.log(carsData);
main();
async function main() {
  let carsData = [];

  // if (body.attributes.model.data?.attributes?.name === "ARI 1280") continue;

  arrayForCars.cars.map((car) => {
    let entry = {};
    entry.modelName = car.title;
    entry.price = formatPrice(car.price);
    //                      here we add the review!!!!!
    entry.relatedReviews = car.relatedReviews;
    entry.image = car.src.substring(8);

    // leasing
    const netto = car.price;
    let zins = 0.039;
    if (netto < 29994) zins = 0.049;
    if (netto < 10000) zins = 0.059;
    const rest48 = netto * 0.2;
    const help48 = Math.pow(1 + zins / 12, 48);
    const leasingRate48 =
      ((zins / 12 / (1 + zins / 12)) * (-1 * netto * help48 + rest48)) /
      (1 - help48);
    entry.leasingRate = formatPrice(leasingRate48, "de");

    // body key value pairs
    for (const [key, value] of Object.entries(car)) {
      if (value?.value) {
        const translatedKey = `${key}Key`;
        /*  entry = { ...entry, [translatedKey]: value.key }; */
        entry = {
          ...entry,
          [key]: `${value.value} ${value?.baseUnit || ""}`,
        };
      }
    }
    carsData.push(entry);

    return car;
  });
  console.log(carsData);

  await writeFile("datenblatt", carsData);
  carsData = [];
}
/*  writing */
/*  writing */
/*  writing */
async function writeFile(filetype, data) {
  const csv = new ObjectsToCsv(data);
  // console.log(csv);
  const filename = `./pdf-export-${filetype}`;
  const file = await csv.toDisk(`${filename}.csv`, {
    delimiter: "\t",
  });
  const utf16buffer = Buffer.from(`\ufeff${file}`, "utf16le");
  fs.writeFileSync(`${filename}.csv`, utf16buffer);
  fs.writeFileSync(`${filename}.txt`, utf16buffer);
}
