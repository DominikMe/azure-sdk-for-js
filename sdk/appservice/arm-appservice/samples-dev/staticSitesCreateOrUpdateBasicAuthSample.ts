/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  StaticSiteBasicAuthPropertiesARMResource,
  WebSiteManagementClient,
} from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Adds or updates basic auth for a static site.
 *
 * @summary Description for Adds or updates basic auth for a static site.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-12-01/examples/CreateOrUpdateStaticSiteBasicAuth.json
 */
async function createsOrUpdatesBasicAuthPropertiesForAStaticSite(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "rg";
  const name = "testStaticSite0";
  const basicAuthName = "default";
  const basicAuthEnvelope: StaticSiteBasicAuthPropertiesARMResource = {
    applicableEnvironmentsMode: "AllEnvironments",
    environments: [],
    password: "**********************",
    secretUrl: undefined,
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.createOrUpdateBasicAuth(
    resourceGroupName,
    name,
    basicAuthName,
    basicAuthEnvelope,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createsOrUpdatesBasicAuthPropertiesForAStaticSite();
}

main().catch(console.error);
