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
 * This sample demonstrates how to This operation deletes the policy definition in the given management group with the given name.
 *
 * @summary This operation deletes the policy definition in the given management group with the given name.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/deletePolicyDefinitionAtManagementGroup.json
 */
async function deleteAPolicyDefinitionAtManagementGroupLevel() {
  const subscriptionId =
    process.env["POLICY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const policyDefinitionName = "ResourceNaming";
  const managementGroupId = "MyManagementGroup";
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policyDefinitions.deleteAtManagementGroup(
    policyDefinitionName,
    managementGroupId
  );
  console.log(result);
}

async function main() {
  await deleteAPolicyDefinitionAtManagementGroupLevel();
}

main().catch(console.error);
