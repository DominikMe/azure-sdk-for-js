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
  CertificateCreateOrUpdateParameters,
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a certificate.
 *
 * @summary Create a certificate.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/createOrUpdateCertificate.json
 */
async function createOrUpdateACertificate(): Promise<void> {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "myAutomationAccount18";
  const certificateName = "testCert";
  const parameters: CertificateCreateOrUpdateParameters = {
    name: "testCert",
    description: "Sample Cert",
    base64Value: "base 64 value of cert",
    isExportable: false,
    thumbprint: "thumbprint of cert"
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.certificateOperations.createOrUpdate(
    resourceGroupName,
    automationAccountName,
    certificateName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateACertificate();
}

main().catch(console.error);
