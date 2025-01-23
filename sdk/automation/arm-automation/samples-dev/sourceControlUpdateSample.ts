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
  SourceControlUpdateParameters,
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a source control.
 *
 * @summary Update a source control.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/sourceControl/updateSourceControl_patch.json
 */
async function updateASourceControl(): Promise<void> {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "sampleAccount9";
  const sourceControlName = "sampleSourceControl";
  const parameters: SourceControlUpdateParameters = {
    description: "my description",
    autoSync: true,
    branch: "master",
    folderPath: "/folderOne/folderTwo",
    publishRunbook: true,
    securityToken: {
      accessToken: "******",
      tokenType: "PersonalAccessToken"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.sourceControlOperations.update(
    resourceGroupName,
    automationAccountName,
    sourceControlName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateASourceControl();
}

main().catch(console.error);
