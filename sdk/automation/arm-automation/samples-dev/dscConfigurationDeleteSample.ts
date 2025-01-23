/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AutomationClient } from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Delete the dsc configuration identified by configuration name.
 *
 * @summary Delete the dsc configuration identified by configuration name.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2019-06-01/examples/deleteDscConfiguration.json
 */
async function deleteDscConfiguration(): Promise<void> {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "myAutomationAccount33";
  const configurationName = "TemplateBasic";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.dscConfigurationOperations.delete(
    resourceGroupName,
    automationAccountName,
    configurationName
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deleteDscConfiguration();
}

main().catch(console.error);
