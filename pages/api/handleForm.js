const express = require("express");
const app = express();
const pipedrive = require("pipedrive");

const defaultClient = pipedrive.ApiClient.instance;
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = "f7bd272970fd0a0e33611f38cdb3fc7bf41b7c75";

module.exports = async (request, response) => {
  console.log("request", request.body);

  //   console.log("response", response);
  const api = new pipedrive.DealsApi();
  // console.log(
  //   "api.apiClient.authentications.api_key is ",
  //   api.apiClient.authentications.api_key
  // );
  let deal;
  try {
    deal = await api.addDeal({
      title: `ETV ${request.body.firstName} ${
        request.body.message ? request.body.message : "Auto"
      }`,
      // summery
      fb07b001b07303f14b2ca37cd10cf492a60d3399: `Name:
      ${request.body.firstName} 
      Firma: ${request.body.firma ? request.body.firma : "Keine Angabe"}
      Phone: ${request.body.phone ? request.body.phone : "Keine Angabe"}
      email: ${request.body.emailInput}
      location: ${request.body.city ? request.body.city : ""}, ${
        request.body.zipcode ? request.body.zipcode : ""
      }
     , ${request.body.message}

      

      
      
      `,
    });
  } catch (error) {
    console.log("error is", error);
  }
  console.log("deal", deal);
  response.send(deal.success);
  return deal;
};
