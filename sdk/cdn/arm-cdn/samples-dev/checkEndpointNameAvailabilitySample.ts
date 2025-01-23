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
  CheckEndpointNameAvailabilityInput,
  CdnManagementClient,
} from "@azure/arm-cdn";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Check the availability of a resource name. This is needed for resources where name is globally unique, such as a afdx endpoint.
 *
 * @summary Check the availability of a resource name. This is needed for resources where name is globally unique, such as a afdx endpoint.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2024-02-01/examples/CheckEndpointNameAvailability.json
 */
async function checkEndpointNameAvailability(): Promise<void> {
  const subscriptionId = process.env["CDN_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["CDN_RESOURCE_GROUP"] || "myResourceGroup";
  const checkEndpointNameAvailabilityInput: CheckEndpointNameAvailabilityInput =
  {
    name: "sampleName",
    type: "Microsoft.Cdn/Profiles/AfdEndpoints",
    autoGeneratedDomainNameLabelScope: "TenantReuse",
  };
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.checkEndpointNameAvailability(
    resourceGroupName,
    checkEndpointNameAvailabilityInput,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await checkEndpointNameAvailability();
}

main().catch(console.error);
