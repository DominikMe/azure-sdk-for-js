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
  BareMetalMachineReplaceParameters,
  BareMetalMachinesReplaceOptionalParams,
  NetworkCloud
} from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Replace the provided bare metal machine.
 *
 * @summary Replace the provided bare metal machine.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2022-12-12-preview/examples/BareMetalMachines_Replace.json
 */
async function replaceBareMetalMachine() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const bareMetalMachineName = "bareMetalMachineName";
  const bareMetalMachineReplaceParameters: BareMetalMachineReplaceParameters = {
    bmcCredentials: { password: "{password}", username: "bmcuser" },
    bmcMacAddress: "00:00:4f:00:57:ad",
    bootMacAddress: "00:00:4e:00:58:af",
    machineName: "name",
    serialNumber: "BM1219XXX"
  };
  const options: BareMetalMachinesReplaceOptionalParams = {
    bareMetalMachineReplaceParameters
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.bareMetalMachines.beginReplaceAndWait(
    resourceGroupName,
    bareMetalMachineName,
    options
  );
  console.log(result);
}

async function main() {
  replaceBareMetalMachine();
}

main().catch(console.error);
