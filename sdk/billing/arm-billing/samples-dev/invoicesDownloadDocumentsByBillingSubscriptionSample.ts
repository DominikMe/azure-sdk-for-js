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
  DocumentDownloadRequest,
  BillingManagementClient,
} from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a URL to download multiple invoice documents (invoice pdf, tax receipts, credit notes) as a zip file. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @summary Gets a URL to download multiple invoice documents (invoice pdf, tax receipts, credit notes) as a zip file. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/invoicesDownloadDocumentsByBillingSubscription.json
 */
async function invoicesDownloadDocumentsByBillingSubscription(): Promise<void> {
  const subscriptionId =
    process.env["BILLING_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const parameters: DocumentDownloadRequest[] = [
    { documentName: "12345678", invoiceName: "E123456789" },
    { documentName: "12345678", invoiceName: "E987654321" },
  ];
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential, subscriptionId);
  const result =
    await client.invoices.beginDownloadDocumentsByBillingSubscriptionAndWait(
      parameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await invoicesDownloadDocumentsByBillingSubscription();
}

main().catch(console.error);
