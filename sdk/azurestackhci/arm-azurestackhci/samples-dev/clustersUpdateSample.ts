/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ClusterPatch, AzureStackHCIClient } from "@azure/arm-azurestackhci";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update an HCI cluster.
 *
 * @summary Update an HCI cluster.
 * x-ms-original-file: specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/stable/2024-04-01/examples/UpdateCluster.json
 */
async function updateCluster(): Promise<void> {
  const subscriptionId =
    process.env["AZURESTACKHCI_SUBSCRIPTION_ID"] ||
    "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName =
    process.env["AZURESTACKHCI_RESOURCE_GROUP"] || "test-rg";
  const clusterName = "myCluster";
  const cluster: ClusterPatch = {
    type: "SystemAssigned",
    cloudManagementEndpoint:
      "https://98294836-31be-4668-aeae-698667faf99b.waconazure.com",
    desiredProperties: {
      diagnosticLevel: "Basic",
      windowsServerSubscription: "Enabled",
    },
    tags: { tag1: "value1", tag2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureStackHCIClient(credential, subscriptionId);
  const result = await client.clusters.update(
    resourceGroupName,
    clusterName,
    cluster,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateCluster();
}

main().catch(console.error);
