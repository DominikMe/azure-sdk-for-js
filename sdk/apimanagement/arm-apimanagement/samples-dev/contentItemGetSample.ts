/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Returns the developer portal's content item specified by its identifier.
 *
 * @summary Returns the developer portal's content item specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementGetContentTypeContentItem.json
 */
async function apiManagementGetContentTypeContentItem(): Promise<void> {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const contentTypeId = "page";
  const contentItemId = "4e3cf6a5-574a-ba08-1f23-2e7a38faa6d8";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.contentItem.get(
    resourceGroupName,
    serviceName,
    contentTypeId,
    contentItemId
  );
  console.log(result);
}

async function main(): Promise<void> {
  await apiManagementGetContentTypeContentItem();
}

main().catch(console.error);
