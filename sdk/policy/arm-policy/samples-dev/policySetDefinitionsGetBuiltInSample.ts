/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PolicyClient } from "@azure/arm-policy";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to This operation retrieves the built-in policy set definition with the given name.
 *
 * @summary This operation retrieves the built-in policy set definition with the given name.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/getBuiltInPolicySetDefinition.json
 */
async function retrieveABuiltInPolicySetDefinition() {
  const subscriptionId =
    process.env["POLICY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const policySetDefinitionName = "1f3afdf9-d0c9-4c3d-847f-89da613e70a8";
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policySetDefinitions.getBuiltIn(
    policySetDefinitionName
  );
  console.log(result);
}

async function main() {
  await retrieveABuiltInPolicySetDefinition();
}

main().catch(console.error);
