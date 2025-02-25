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
  DataType,
  MicrosoftNetworkAnalytics
} from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create data type resource.
 *
 * @summary Create data type resource.
 * x-ms-original-file: specification/networkanalytics/resource-manager/Microsoft.NetworkAnalytics/stable/2023-11-15/examples/DataTypes_Create_MaximumSet_Gen.json
 */
async function dataTypesCreateMaximumSetGen() {
  const subscriptionId =
    process.env["NETWORKANALYTICS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-00000000000";
  const resourceGroupName =
    process.env["NETWORKANALYTICS_RESOURCE_GROUP"] || "aoiresourceGroupName";
  const dataProductName = "dataproduct01";
  const dataTypeName = "datatypename";
  const resource: DataType = {
    properties: {
      databaseCacheRetention: 23,
      databaseRetention: 6,
      provisioningState: "Succeeded",
      state: "STARTED",
      storageOutputRetention: 27
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftNetworkAnalytics(credential, subscriptionId);
  const result = await client.dataTypes.beginCreateAndWait(
    resourceGroupName,
    dataProductName,
    dataTypeName,
    resource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create data type resource.
 *
 * @summary Create data type resource.
 * x-ms-original-file: specification/networkanalytics/resource-manager/Microsoft.NetworkAnalytics/stable/2023-11-15/examples/DataTypes_Create_MinimumSet_Gen.json
 */
async function dataTypesCreateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen() {
  const subscriptionId =
    process.env["NETWORKANALYTICS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-00000000000";
  const resourceGroupName =
    process.env["NETWORKANALYTICS_RESOURCE_GROUP"] || "aoiresourceGroupName";
  const dataProductName = "dataproduct01";
  const dataTypeName = "datatypename";
  const resource: DataType = {};
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftNetworkAnalytics(credential, subscriptionId);
  const result = await client.dataTypes.beginCreateAndWait(
    resourceGroupName,
    dataProductName,
    dataTypeName,
    resource
  );
  console.log(result);
}

async function main() {
  await dataTypesCreateMaximumSetGen();
  await dataTypesCreateMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
