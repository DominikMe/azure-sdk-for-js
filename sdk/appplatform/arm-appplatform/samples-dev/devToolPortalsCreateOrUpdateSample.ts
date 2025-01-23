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
  DevToolPortalResource,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create the default Dev Tool Portal or update the existing Dev Tool Portal.
 *
 * @summary Create the default Dev Tool Portal or update the existing Dev Tool Portal.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/DevToolPortals_CreateOrUpdate.json
 */
async function devToolPortalsCreateOrUpdate(): Promise<void> {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const devToolPortalName = "default";
  const devToolPortalResource: DevToolPortalResource = {
    properties: {
      features: {
        applicationAccelerator: { state: "Enabled" },
        applicationLiveView: { state: "Enabled" }
      },
      public: true,
      ssoProperties: {
        clientId: "00000000-0000-0000-0000-000000000000",
        clientSecret: "xxxxx",
        metadataUrl:
          "https://login.microsoftonline.com/00000000-0000-0000-0000-000000000000/v2.0/.well-known/openid-configuration",
        scopes: ["openid"]
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.devToolPortals.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    devToolPortalName,
    devToolPortalResource
  );
  console.log(result);
}

async function main(): Promise<void> {
  await devToolPortalsCreateOrUpdate();
}

main().catch(console.error);
