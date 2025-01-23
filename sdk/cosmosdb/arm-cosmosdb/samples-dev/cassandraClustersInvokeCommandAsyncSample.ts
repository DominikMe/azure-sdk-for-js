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
  CommandAsyncPostBody,
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Invoke a command like nodetool for cassandra maintenance asynchronously
 *
 * @summary Invoke a command like nodetool for cassandra maintenance asynchronously
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBManagedCassandraCommandAsync.json
 */
async function cosmosDbManagedCassandraCommandAsync(): Promise<void> {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["COSMOSDB_RESOURCE_GROUP"] || "cassandra-prod-rg";
  const clusterName = "cassandra-prod";
  const body: CommandAsyncPostBody = {
    arguments: { status: "" },
    command: "nodetool",
    host: "10.0.1.12",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraClusters.beginInvokeCommandAsyncAndWait(
    resourceGroupName,
    clusterName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await cosmosDbManagedCassandraCommandAsync();
}

main().catch(console.error);
