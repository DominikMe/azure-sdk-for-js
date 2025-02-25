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
 * This sample demonstrates how to The operation to get the run history of an export for the defined scope and export name.
 *
 * @summary The operation to get the run history of an export for the defined scope and export name.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportRunHistoryGetByBillingAccount.json
 */
async function exportRunHistoryGetByBillingAccount(): Promise<void> {
  const scope = "providers/Microsoft.Billing/billingAccounts/123456";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.getExecutionHistory(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to get the run history of an export for the defined scope and export name.
 *
 * @summary The operation to get the run history of an export for the defined scope and export name.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportRunHistoryGetByDepartment.json
 */
async function exportRunHistoryGetByDepartment(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/12/departments/1234";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.getExecutionHistory(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to get the run history of an export for the defined scope and export name.
 *
 * @summary The operation to get the run history of an export for the defined scope and export name.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportRunHistoryGetByEnrollmentAccount.json
 */
async function exportRunHistoryGetByEnrollmentAccount(): Promise<void> {
  const scope =
    "providers/Microsoft.Billing/billingAccounts/100/enrollmentAccounts/456";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.getExecutionHistory(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to get the run history of an export for the defined scope and export name.
 *
 * @summary The operation to get the run history of an export for the defined scope and export name.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportRunHistoryGetByManagementGroup.json
 */
async function exportRunHistoryGetByManagementGroup(): Promise<void> {
  const scope = "providers/Microsoft.Management/managementGroups/TestMG";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.getExecutionHistory(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to get the run history of an export for the defined scope and export name.
 *
 * @summary The operation to get the run history of an export for the defined scope and export name.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportRunHistoryGetByResourceGroup.json
 */
async function exportRunHistoryGetByResourceGroup(): Promise<void> {
  const scope =
    "subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.getExecutionHistory(scope, exportName);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to get the run history of an export for the defined scope and export name.
 *
 * @summary The operation to get the run history of an export for the defined scope and export name.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/ExportRunHistoryGetBySubscription.json
 */
async function exportRunHistoryGetBySubscription(): Promise<void> {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const exportName = "TestExport";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.exports.getExecutionHistory(scope, exportName);
  console.log(result);
}

async function main(): Promise<void> {
  await exportRunHistoryGetByBillingAccount();
  await exportRunHistoryGetByDepartment();
  await exportRunHistoryGetByEnrollmentAccount();
  await exportRunHistoryGetByManagementGroup();
  await exportRunHistoryGetByResourceGroup();
  await exportRunHistoryGetBySubscription();
}

main().catch(console.error);
