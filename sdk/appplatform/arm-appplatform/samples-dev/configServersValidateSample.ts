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
  ConfigServerSettings,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Check if the config server settings are valid.
 *
 * @summary Check if the config server settings are valid.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/ConfigServers_Validate.json
 */
async function configServersValidate(): Promise<void> {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const configServerSettings: ConfigServerSettings = {
    gitProperty: {
      label: "master",
      searchPaths: ["/"],
      uri: "https://github.com/fake-user/fake-repository.git"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.configServers.beginValidateAndWait(
    resourceGroupName,
    serviceName,
    configServerSettings
  );
  console.log(result);
}

async function main(): Promise<void> {
  await configServersValidate();
}

main().catch(console.error);
