/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ChaosManagementClient } from "@azure/arm-chaos";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get the status of a long running azure asynchronous operation.
 *
 * @summary Get the status of a long running azure asynchronous operation.
 * x-ms-original-file: specification/chaos/resource-manager/Microsoft.Chaos/stable/2024-01-01/examples/GetOperationStatus.json
 */
async function getSpecificOperationStatus(): Promise<void> {
  const subscriptionId =
    process.env["CHAOS_SUBSCRIPTION_ID"] ||
    "613192d7-503f-477a-9cfe-4efc3ee2bd60";
  const location = "West US";
  const asyncOperationId = "713192d7-503f-477a-9cfe-4efc3ee2bd11";
  const credential = new DefaultAzureCredential();
  const client = new ChaosManagementClient(credential, subscriptionId);
  const result = await client.operationStatuses.get(location, asyncOperationId);
  console.log(result);
}

async function main(): Promise<void> {
  await getSpecificOperationStatus();
}

main().catch(console.error);
