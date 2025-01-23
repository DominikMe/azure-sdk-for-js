/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AutomanageClient } from "@azure/arm-automanage";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get information about a configuration profile version
 *
 * @summary Get information about a configuration profile version
 * x-ms-original-file: specification/automanage/resource-manager/Microsoft.Automanage/stable/2022-05-04/examples/getConfigurationProfileVersion.json
 */
async function getAConfigurationProfileVersion(): Promise<void> {
  const subscriptionId =
    process.env["AUTOMANAGE_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const configurationProfileName = "customConfigurationProfile";
  const versionName = "version1";
  const resourceGroupName =
    process.env["AUTOMANAGE_RESOURCE_GROUP"] || "myResourceGroupName";
  const credential = new DefaultAzureCredential();
  const client = new AutomanageClient(credential, subscriptionId);
  const result = await client.configurationProfilesVersions.get(
    configurationProfileName,
    versionName,
    resourceGroupName
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getAConfigurationProfileVersion();
}

main().catch(console.error);
