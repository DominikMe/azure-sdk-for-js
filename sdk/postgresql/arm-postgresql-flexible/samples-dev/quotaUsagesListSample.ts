/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PostgreSQLManagementFlexibleServerClient } from "@azure/arm-postgresql-flexible";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get quota usages at specified location in a given subscription.
 *
 * @summary Get quota usages at specified location in a given subscription.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/preview/2023-12-01-preview/examples/QuotaUsagesForFlexibleServers.json
 */
async function listOfQuotaUsagesForFlexibleServers() {
  const subscriptionId =
    process.env["POSTGRESQL_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const locationName = "westus";
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId,
  );
  const resArray = new Array();
  for await (let item of client.quotaUsages.list(locationName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listOfQuotaUsagesForFlexibleServers();
}

main().catch(console.error);
