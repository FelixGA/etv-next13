// import handlePerson from "/backend/pipedrive/handle-person";
// import createJobDeal from "/backend/forms/create-job-deal";

import handlePerson from "./handle-person";
import handleOrganization from "./handle-organization";
import handleForm from "./handleForm";
import handleNewsletter from "./handleNewsletter";
import handleKontakt from "./handleKontakt";

export default async function handler(req, res) {
  try {
    const { body } = req;
    const organization = await handleOrganization(body);

    const person = await handlePerson(body, organization);
    if (body.message.includes("stageId238")) {
      await handleForm(body, person, organization);
      res.status(200).json({ status: "ok" });
    } else {
      await handleKontakt(body, person, organization);
      res.status(200).json({ status: "ok" });
    }
  } catch (e) {
    console.log("error is", e);
  }
}
