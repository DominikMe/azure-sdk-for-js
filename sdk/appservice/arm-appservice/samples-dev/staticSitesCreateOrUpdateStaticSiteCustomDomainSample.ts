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
  StaticSiteCustomDomainRequestPropertiesARMResource,
  WebSiteManagementClient,
} from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Creates a new static site custom domain in an existing resource group and static site.
 *
 * @summary Description for Creates a new static site custom domain in an existing resource group and static site.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-12-01/examples/CreateOrUpdateStaticSiteCustomDomain.json
 */
async function createOrUpdateACustomDomainForAStaticSite(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "rg";
  const name = "testStaticSite0";
  const domainName = "custom.domain.net";
  const staticSiteCustomDomainRequestPropertiesEnvelope: StaticSiteCustomDomainRequestPropertiesARMResource =
    {};
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result =
    await client.staticSites.beginCreateOrUpdateStaticSiteCustomDomainAndWait(
      resourceGroupName,
      name,
      domainName,
      staticSiteCustomDomainRequestPropertiesEnvelope,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateACustomDomainForAStaticSite();
}

main().catch(console.error);
