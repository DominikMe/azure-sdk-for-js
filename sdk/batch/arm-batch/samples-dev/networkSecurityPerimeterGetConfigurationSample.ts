/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BatchManagementClient } from "@azure/arm-batch";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets information about the specified NSP configuration.
 *
 * @summary Gets information about the specified NSP configuration.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2024-07-01/examples/NspConfigurationGet.json
 */
async function getNspConfiguration(): Promise<void> {
  const subscriptionId = process.env["BATCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["BATCH_RESOURCE_GROUP"] || "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const networkSecurityPerimeterConfigurationName =
    "00000000-0000-0000-0000-000000000000.sampleassociation";
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const result =
    await client.networkSecurityPerimeterOperations.getConfiguration(
      resourceGroupName,
      accountName,
      networkSecurityPerimeterConfigurationName,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await getNspConfiguration();
}

main().catch(console.error);
