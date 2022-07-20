const express = require("express");
const app = express();
const pipedrive = require("pipedrive");

const defaultClient = pipedrive.ApiClient.instance;
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = "f7bd272970fd0a0e33611f38cdb3fc7bf41b7c75";

module.exports = async (
  request,
  person,
  organization,
  response,
  stageId = 834
) => {
  //   console.log("response", response);
  const api = new pipedrive.DealsApi();
  // console.log(
  //   "api.apiClient.authentications.api_key is ",
  //   api.apiClient.authentications.api_key
  // );
  let deal;

  // console.log("person", person);
  try {
    deal = await api.addDeal({
      title: `ETV ${request.firstName} ${
        request.message ? request.message.substring(0, 20) : "Auto"
      }`,
      person_id: person.id,
      // org_id: organization.id,
      stage_id: stageId,
      // summery
      fb07b001b07303f14b2ca37cd10cf492a60d3399: `Name:
      ${request.firstName ? request.firstName : "No Name"}} 
      Firma: ${request.firma ? request.firma : "Keine Angabe"}
      Phone: ${request.phone ? request.phone : "Keine Angabe"}
      email: ${request.emailInput}
      location: ${request.city ? request.city : ""}, ${
        request.zipcode ? request.zipcode : ""
      }
     , ${request.message}
 `,
      c4f78672fa0a3a246610b8a6b143af85088c466c: `https://www.elektrotransporter-vergleich.de/sheets/ETVBroschuere.pdf`,
    });
  } catch (error) {
    console.log("error is", error);
  }
  // response.send(deal.success);
  return deal;
};
