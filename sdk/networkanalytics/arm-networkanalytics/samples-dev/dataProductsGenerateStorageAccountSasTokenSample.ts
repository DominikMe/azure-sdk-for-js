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
  AccountSas,
  MicrosoftNetworkAnalytics
} from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Generate sas token for storage account.
 *
 * @summary Generate sas token for storage account.
 * x-ms-original-file: specification/networkanalytics/resource-manager/Microsoft.NetworkAnalytics/stable/2023-11-15/examples/DataProducts_GenerateStorageAccountSasToken_MaximumSet_Gen.json
 */
async function dataProductsGenerateStorageAccountSasTokenMaximumSetGen() {
  const subscriptionId =
    process.env["NETWORKANALYTICS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-00000000000";
  const resourceGroupName =
    process.env["NETWORKANALYTICS_RESOURCE_GROUP"] || "aoiresourceGroupName";
  const dataProductName = "dataproduct01";
  const body: AccountSas = {
    expiryTimeStamp: new Date("2023-08-24T05:34:58.151Z"),
    ipAddress: "1.1.1.1",
    startTimeStamp: new Date("2023-08-24T05:34:58.151Z")
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftNetworkAnalytics(credential, subscriptionId);
  const result = await client.dataProducts.generateStorageAccountSasToken(
    resourceGroupName,
    dataProductName,
    body
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Generate sas token for storage account.
 *
 * @summary Generate sas token for storage account.
 * x-ms-original-file: specification/networkanalytics/resource-manager/Microsoft.NetworkAnalytics/stable/2023-11-15/examples/DataProducts_GenerateStorageAccountSasToken_MinimumSet_Gen.json
 */
async function dataProductsGenerateStorageAccountSasTokenMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen() {
  const subscriptionId =
    process.env["NETWORKANALYTICS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-00000000000";
  const resourceGroupName =
    process.env["NETWORKANALYTICS_RESOURCE_GROUP"] || "aoiresourceGroupName";
  const dataProductName = "dataproduct01";
  const body: AccountSas = {
    expiryTimeStamp: new Date("2023-08-24T05:35:17.051Z"),
    ipAddress: "1.1.1.1",
    startTimeStamp: new Date("2023-08-24T05:35:17.051Z")
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftNetworkAnalytics(credential, subscriptionId);
  const result = await client.dataProducts.generateStorageAccountSasToken(
    resourceGroupName,
    dataProductName,
    body
  );
  console.log(result);
}

async function main() {
  await dataProductsGenerateStorageAccountSasTokenMaximumSetGen();
  await dataProductsGenerateStorageAccountSasTokenMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
