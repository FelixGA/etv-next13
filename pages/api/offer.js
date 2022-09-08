import handlePerson from "./handle-person";
import handleOrganization from "./handle-organization";
import handleOffer from "./handle-offer";

export default async function handler(req, res) {
  try {
    const { body } = req;
    const organization = await handleOrganization(body);
    const person = await handlePerson(body, organization);
    await handleOffer(body, person, organization);
    res.status(200).json({ status: "ok" });
  } catch (e) {
    console.log("error is", e);
  }
}
