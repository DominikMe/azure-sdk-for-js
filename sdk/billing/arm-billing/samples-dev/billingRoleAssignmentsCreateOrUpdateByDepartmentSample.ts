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
  BillingRoleAssignment,
  BillingManagementClient,
} from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update a billing role assignment. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @summary Create or update a billing role assignment. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingRoleAssignmentCreateOrUpdateByDepartment.json
 */
async function billingRoleAssignmentCreateOrUpdateByDepartment(): Promise<void> {
  const billingAccountName = "7898901";
  const departmentName = "12345";
  const billingRoleAssignmentName = "9dfd08c2-62a3-4d47-85bd-1cdba1408402";
  const parameters: BillingRoleAssignment = {
    properties: {
      principalId: "00000000-0000-0000-0000-000000000000",
      principalTenantId: "076915e7-de10-4323-bb34-a58c904068bb",
      roleDefinitionId:
        "/providers/Microsoft.Billing/billingAccounts/7898901/departments/12345/billingRoleDefinitions/9f1983cb-2574-400c-87e9-34cf8e2280db",
      userEmailAddress: "john@contoso.com",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result =
    await client.billingRoleAssignments.beginCreateOrUpdateByDepartmentAndWait(
      billingAccountName,
      departmentName,
      billingRoleAssignmentName,
      parameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await billingRoleAssignmentCreateOrUpdateByDepartment();
}

main().catch(console.error);
