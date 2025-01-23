/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB SQL database from manual throughput to autoscale
 *
 * @summary Migrate an Azure Cosmos DB SQL database from manual throughput to autoscale
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBSqlDatabaseMigrateToAutoscale.json
 */
async function cosmosDbSqlDatabaseMigrateToAutoscale(): Promise<void> {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.sqlResources.beginMigrateSqlDatabaseToAutoscaleAndWait(
      resourceGroupName,
      accountName,
      databaseName,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await cosmosDbSqlDatabaseMigrateToAutoscale();
}

main().catch(console.error);
