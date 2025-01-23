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
  ThroughputSettingsUpdateParameters,
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update RUs per second of an Azure Cosmos DB SQL container
 *
 * @summary Update RUs per second of an Azure Cosmos DB SQL container
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBSqlContainerThroughputUpdate.json
 */
async function cosmosDbSqlContainerThroughputUpdate(): Promise<void> {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const updateThroughputParameters: ThroughputSettingsUpdateParameters = {
    location: "West US",
    resource: { throughput: 400 },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.sqlResources.beginUpdateSqlContainerThroughputAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      containerName,
      updateThroughputParameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await cosmosDbSqlContainerThroughputUpdate();
}

main().catch(console.error);
