"use strict";
const express = require("express");
const app = express();
const pipedrive = require("pipedrive");
const defaultClient = pipedrive.ApiClient.instance;
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = "f7bd272970fd0a0e33611f38cdb3fc7bf41b7c75";

module.exports = async function handlePerson(body, organization) {
  // console.log("organization", organization.id);
  const api = new pipedrive.PersonsApi();

  if (!body.emailInput) return;
  let person = await api.searchPersons({
    term: body.emailInput,
    exact_match: true,
  });

  // create person if not exist
  if (person.data.items.length === 0) {
    person = await api.addPerson({
      name: body.firstName,
      email: body.emailInput,
      phone: [body.phone],
      org_id: organization ? organization.id : null,
      "37cbbe1c9b522a5c9681f050ed7680d7c8b39ae7": body.locale || null,
    });
    return person.data;
  }
  //change organization
  if (!person.data.items[0].item.org_id && organization) {
    person = await api.updatePerson({
      id: person.data.items[0].item.id,
      org_id: organization.id,
    });
    return person.data;
  }
  person = person.data;
  return person;
};
