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
  ConnectionUpdateParameters,
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a connection.
 *
 * @summary Update a connection.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/updateConnection.json
 */
async function updateAConnection(): Promise<void> {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "myAutomationAccount28";
  const connectionName = "myConnection";
  const parameters: ConnectionUpdateParameters = {
    name: "myConnection",
    description: "my description goes here",
    fieldDefinitionValues: {
      automationCertificateName: "myCertificateName",
      subscriptionID: "b5e4748c-f69a-467c-8749-e2f9c8cd3009"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.connectionOperations.update(
    resourceGroupName,
    automationAccountName,
    connectionName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateAConnection();
}

main().catch(console.error);
