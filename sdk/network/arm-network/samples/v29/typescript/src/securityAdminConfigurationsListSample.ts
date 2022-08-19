/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all the network manager security admin configurations in a network manager, in a paginated format.
 *
 * @summary Lists all the network manager security admin configurations in a network manager, in a paginated format.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/NetworkManagerSecurityAdminConfigurationList.json
 */
async function listSecurityAdminConfigurationsInANetworkManager() {
  const subscriptionId = "subId";
  const resourceGroupName = "rg1";
  const networkManagerName = "testNetworkManager";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.securityAdminConfigurations.list(
    resourceGroupName,
    networkManagerName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listSecurityAdminConfigurationsInANetworkManager().catch(console.error);