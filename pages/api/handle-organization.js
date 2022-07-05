"use strict";
const express = require("express");
const app = express();
const pipedrive = require("pipedrive");
const defaultClient = pipedrive.ApiClient.instance;
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = "f7bd272970fd0a0e33611f38cdb3fc7bf41b7c75";

module.exports = async function handleOrganization(body) {
  const api = new pipedrive.OrganizationsApi();
  if (!body.firma) return;
  let organization;
  try {
    organization = await api.searchOrganization({
      term: body.firma,
    });
    if (organization.data.items.length === 0) {
      organization = await api.addOrganization({
        name: body.firma,
      });
    }
    organization = organization.data;
  } catch (error) {
    console.log(error);
  }
  return organization;
};
