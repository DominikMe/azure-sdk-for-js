/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CostManagementClient } from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to run an export.
 *
 * @summary The operation to run an export.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportRunByBillingAccount.json
 */
async function exportRunByBillingAccount(): Promise<void> {
  const scope = "providers/Microsoft.Billing/billingAccounts/123456";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.execute(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to run an export.
 *
 * @summary The operation to run an export.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportRunByDepartment.json
 */
async function exportRunByDepartment(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/12/departments/1234";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.execute(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to run an export.
 *
 * @summary The operation to run an export.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportRunByEnrollmentAccount.json
 */
async function exportRunByEnrollmentAccount(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/100/enrollmentAccounts/456";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.execute(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to run an export.
 *
 * @summary The operation to run an export.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportRunByManagementGroup.json
 */
async function exportRunByManagementGroup(): Promise<void> {
  const scope = "providers/Microsoft.Management/managementGroups/TestMG";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.execute(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to run an export.
 *
 * @summary The operation to run an export.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportRunByResourceGroup.json
 */
async function exportRunByResourceGroup(): Promise<void> {
  const scope =
    "subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.execute(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to run an export.
 *
 * @summary The operation to run an export.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportRunBySubscription.json
 */
async function exportRunBySubscription(): Promise<void> {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.execute(scope, exportName);
  console.log(result);
}

async function main(): Promise<void> {
  await exportRunByBillingAccount();
  await exportRunByDepartment();
  await exportRunByEnrollmentAccount();
  await exportRunByManagementGroup();
  await exportRunByResourceGroup();
  await exportRunBySubscription();
}

main().catch(console.error);
