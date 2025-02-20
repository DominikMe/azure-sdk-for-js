// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DeviceRegistryManagementClient } = require("@azure/arm-deviceregistry");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list SchemaRegistry resources by resource group
 *
 * @summary list SchemaRegistry resources by resource group
 * x-ms-original-file: 2024-09-01-preview/List_SchemaRegistries_ResourceGroup.json
 */
async function listSchemaRegistriesResourceGroup() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DeviceRegistryManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.schemaRegistries.listByResourceGroup("myResourceGroup")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  listSchemaRegistriesResourceGroup();
}

main().catch(console.error);
