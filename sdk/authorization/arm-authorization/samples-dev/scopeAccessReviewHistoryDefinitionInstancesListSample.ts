/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AuthorizationManagementClient } from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get access review history definition instances by definition Id
 *
 * @summary Get access review history definition instances by definition Id
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2021-12-01-preview/examples/GetAccessReviewHistoryDefinitionInstances.json
 */
async function getAccessReviewHistoryDefinitionInstances(): Promise<void> {
  const scope = "subscriptions/129a304b-4aea-4b86-a9f7-ba7e2b23737a";
  const historyDefinitionId = "44724910-d7a5-4c29-b28f-db73e717165a";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.scopeAccessReviewHistoryDefinitionInstances.list(
    scope,
    historyDefinitionId
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await getAccessReviewHistoryDefinitionInstances();
}

main().catch(console.error);
