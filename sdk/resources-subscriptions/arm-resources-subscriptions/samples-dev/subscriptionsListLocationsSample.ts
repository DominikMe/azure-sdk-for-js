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
  SubscriptionsListLocationsOptionalParams,
  SubscriptionClient
} from "@azure/arm-resources-subscriptions";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to This operation provides all the locations that are available for resource providers; however, each resource provider may support a subset of this list.
 *
 * @summary This operation provides all the locations that are available for resource providers; however, each resource provider may support a subset of this list.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2022-12-01/examples/GetLocations.json
 */
async function getLocationsWithASubscriptionId() {
  const subscriptionId = "a1ffc958-d2c7-493e-9f1e-125a0477f536";
  const credential = new DefaultAzureCredential();
  const client = new SubscriptionClient(credential);
  const resArray = new Array();
  for await (let item of client.subscriptions.listLocations(subscriptionId)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to This operation provides all the locations that are available for resource providers; however, each resource provider may support a subset of this list.
 *
 * @summary This operation provides all the locations that are available for resource providers; however, each resource provider may support a subset of this list.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2022-12-01/examples/GetLocationsWithExtendedLocations.json
 */
async function getLocationsWithExtendedLocations() {
  const subscriptionId = "a1ffc958-d2c7-493e-9f1e-125a0477f536";
  const includeExtendedLocations = true;
  const options: SubscriptionsListLocationsOptionalParams = {
    includeExtendedLocations
  };
  const credential = new DefaultAzureCredential();
  const client = new SubscriptionClient(credential);
  const resArray = new Array();
  for await (let item of client.subscriptions.listLocations(
    subscriptionId,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await getLocationsWithASubscriptionId();
  await getLocationsWithExtendedLocations();
}

main().catch(console.error);
