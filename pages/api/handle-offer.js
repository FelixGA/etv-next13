const express = require("express");
const app = express();
const pipedrive = require("pipedrive");

const defaultClient = pipedrive.ApiClient.instance;
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = "f7bd272970fd0a0e33611f38cdb3fc7bf41b7c75";

module.exports = async (body, person, organization) => {
  const api = new pipedrive.DealsApi();
  const encoded = encodeURI(body.message);
  const stageId = 238;
  let deal;

  try {
    deal = await api.addDeal({
      title: `ETV ${body.firstName} ${
        body.message ? body.message.replace("stageId238", "") : "Auto"
      }`,
      person_id: person.id,
      org_id: organization.id,
      stage_id: stageId,
      // summery
      fb07b001b07303f14b2ca37cd10cf492a60d3399: `Name:
      ${body.firstName ? body.firstName : "No Name"}} 
      Firma: ${body.firma ? body.firma : "Keine Angabe"}
      Phone: ${body.phone ? body.phone : "Keine Angabe"}
      email: ${body.emailInput}
      location: ${body.city ? body.city : ""}, ${
        body.zipcode ? body.zipcode : ""
      }
     , ${body.message.replace("stageId238", "")}
 `,
      c4f78672fa0a3a246610b8a6b143af85088c466c: `https://www.elektrotransporter-vergleich.de/sheets/${encoded}.pdf`,
    });
  } catch (error) {
    console.log("error is", error);
  }
  return deal;
};
