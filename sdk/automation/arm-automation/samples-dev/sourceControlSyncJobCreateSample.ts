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
  SourceControlSyncJobCreateParameters,
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates the sync job for a source control.
 *
 * @summary Creates the sync job for a source control.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/sourceControlSyncJob/createSourceControlSyncJob.json
 */
async function createOrUpdateASourceControlSyncJob(): Promise<void> {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "myAutomationAccount33";
  const sourceControlName = "MySourceControl";
  const sourceControlSyncJobId = "ce6fe3e3-9db3-4096-a6b4-82bfb4c10a9a";
  const parameters: SourceControlSyncJobCreateParameters = {
    commitId: "9de0980bfb45026a3d97a1b0522d98a9f604226e"
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.sourceControlSyncJobOperations.create(
    resourceGroupName,
    automationAccountName,
    sourceControlName,
    sourceControlSyncJobId,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateASourceControlSyncJob();
}

main().catch(console.error);
