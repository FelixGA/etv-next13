const data = require("./array.js");

const thisString = "Mary";
if (data && data.names && data.names.includes(thisString)) {
  console.log("You are in!");
}
