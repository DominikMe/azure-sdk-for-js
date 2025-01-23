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
  PolicyFragmentContract
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a policy fragment.
 *
 * @summary Creates or updates a policy fragment.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreatePolicyFragment.json
 */
async function apiManagementCreatePolicy(): Promise<void> {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const id = "policyFragment1";
  const parameters: PolicyFragmentContract = {
    format: "xml",
    description: "A policy fragment example",
    value:
      '<fragment><json-to-xml apply="always" consider-accept-header="false" /></fragment>'
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.policyFragment.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    id,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  await apiManagementCreatePolicy();
}

main().catch(console.error);
