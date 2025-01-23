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
  ReportListOptionalParams,
  AppComplianceAutomationToolForMicrosoft365,
} from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get the AppComplianceAutomation report list for the tenant.
 *
 * @summary Get the AppComplianceAutomation report list for the tenant.
 * x-ms-original-file: specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/stable/2024-06-27/examples/Report_List.json
 */
async function reportList(): Promise<void> {
  const skipToken = "1";
  const top = 100;
  const offerGuid = "00000000-0000-0000-0000-000000000000";
  const reportCreatorTenantId = "00000000-0000-0000-0000-000000000000";
  const options: ReportListOptionalParams = {
    skipToken,
    top,
    offerGuid,
    reportCreatorTenantId,
  };
  const credential = new DefaultAzureCredential();
  const client = new AppComplianceAutomationToolForMicrosoft365(credential);
  const resArray = new Array();
  for await (let item of client.report.list(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await reportList();
}

main().catch(console.error);
