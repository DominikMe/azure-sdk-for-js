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
  SavingsPlanUpdateRequest,
  BillingManagementClient,
} from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update savings plan by billing account.
 *
 * @summary Update savings plan by billing account.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/savingsPlanUpdateByBillingAccount.json
 */
async function savingsPlanUpdate(): Promise<void> {
  const billingAccountName =
    "00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31";
  const savingsPlanOrderId = "20000000-0000-0000-0000-000000000000";
  const savingsPlanId = "30000000-0000-0000-0000-000000000000";
  const body: SavingsPlanUpdateRequest = {
    properties: {
      appliedScopeProperties: {
        managementGroupId:
          "/providers/Microsoft.Management/managementGroups/mg1",
        tenantId: "80000000-0000-0000-0000-000000000000",
      },
      appliedScopeType: "ManagementGroup",
      displayName: "sp_newName",
      renew: true,
      renewProperties: {
        purchaseProperties: {
          appliedScopeProperties: {
            managementGroupId:
              "/providers/Microsoft.Management/managementGroups/mg1",
            tenantId: "80000000-0000-0000-0000-000000000000",
          },
          appliedScopeType: "ManagementGroup",
          billingPlan: "P1M",
          billingScopeId: "/subscriptions/50000000-0000-0000-0000-000000000000",
          commitment: { amount: 0.001, currencyCode: "USD", grain: "Hourly" },
          displayName: "sp_newName_renewed",
          sku: { name: "Compute_Savings_Plan" },
          term: "P3Y",
        },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result = await client.savingsPlans.beginUpdateByBillingAccountAndWait(
    billingAccountName,
    savingsPlanOrderId,
    savingsPlanId,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await savingsPlanUpdate();
}

main().catch(console.error);
