// import handlePerson from "/backend/pipedrive/handle-person";
// import createJobDeal from "/backend/forms/create-job-deal";

import handlePerson from "./handle-person";
import handleOrganization from "./handle-organization";
import handleForm from "./handleForm";

export default async function handler(req, res) {
  try {
    const { body } = req;
    const organization = await handleOrganization(body);

    const person = await handlePerson(body, organization);
    await handleForm(body, person, organization);

    res.status(200).json({ status: "ok" });
  } catch (e) {
    console.log("error is", e);
  }
}
