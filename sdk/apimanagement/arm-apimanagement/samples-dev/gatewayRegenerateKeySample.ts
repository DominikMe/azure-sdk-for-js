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
  ApiManagementClient,
  GatewayKeyRegenerationRequestContract
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Regenerates specified gateway key invalidating any tokens created with it.
 *
 * @summary Regenerates specified gateway key invalidating any tokens created with it.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementGatewayRegenerateKey.json
 */
async function apiManagementGatewayRegenerateKey(): Promise<void> {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const gatewayId = "gwId";
  const parameters: GatewayKeyRegenerationRequestContract = {
    keyType: "primary"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.gateway.regenerateKey(
    resourceGroupName,
    serviceName,
    gatewayId,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  await apiManagementGatewayRegenerateKey();
}

main().catch(console.error);
