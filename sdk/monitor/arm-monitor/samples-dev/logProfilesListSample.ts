/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List the log profiles.
 *
 * @summary List the log profiles.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2016-03-01/examples/listLogProfile.json
 */
async function listLogProfiles() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "df602c9c-7aa0-407d-a6fb-eb20c8bd1192";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.logProfiles.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listLogProfiles();
}

main().catch(console.error);
