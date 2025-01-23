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
  SqlStoredProcedureCreateUpdateParameters,
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB SQL storedProcedure
 *
 * @summary Create or update an Azure Cosmos DB SQL storedProcedure
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBSqlStoredProcedureCreateUpdate.json
 */
async function cosmosDbSqlStoredProcedureCreateUpdate(): Promise<void> {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const storedProcedureName = "storedProcedureName";
  const createUpdateSqlStoredProcedureParameters: SqlStoredProcedureCreateUpdateParameters =
    { options: {}, resource: { body: "body", id: "storedProcedureName" } };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.sqlResources.beginCreateUpdateSqlStoredProcedureAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      containerName,
      storedProcedureName,
      createUpdateSqlStoredProcedureParameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await cosmosDbSqlStoredProcedureCreateUpdate();
}

main().catch(console.error);
