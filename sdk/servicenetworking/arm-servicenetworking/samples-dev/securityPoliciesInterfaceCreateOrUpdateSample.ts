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
  SecurityPolicy,
  ServiceNetworkingManagementClient,
} from "@azure/arm-servicenetworking";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a SecurityPolicy
 *
 * @summary Create a SecurityPolicy
 * x-ms-original-file: specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/preview/2024-05-01-preview/examples/SecurityPolicyPut.json
 */
async function putSecurityPolicy() {
  const subscriptionId =
    process.env["SERVICENETWORKING_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["SERVICENETWORKING_RESOURCE_GROUP"] || "rg1";
  const trafficControllerName = "tc1";
  const securityPolicyName = "sp1";
  const resource: SecurityPolicy = {
    location: "NorthCentralUS",
    properties: {
      wafPolicy: {
        id: "/subscriptions/subid/resourcegroups/rg1/providers/Microsoft.Networking/applicationGatewayWebApplicationFirewallPolicies/wp-0",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceNetworkingManagementClient(
    credential,
    subscriptionId,
  );
  const result =
    await client.securityPoliciesInterface.beginCreateOrUpdateAndWait(
      resourceGroupName,
      trafficControllerName,
      securityPolicyName,
      resource,
    );
  console.log(result);
}

async function main() {
  await putSecurityPolicy();
}

main().catch(console.error);
