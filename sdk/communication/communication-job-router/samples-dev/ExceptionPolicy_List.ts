// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * @summary Exception policy crud
 */

// Load the .env file (you will need to set these environment variables)
import "dotenv/config";
import type { ExceptionPolicyItem } from "@azure/communication-job-router";
import { JobRouterAdministrationClient } from "@azure/communication-job-router";

const connectionString = process.env["COMMUNICATION_CONNECTION_STRING"] || "";

// List exception policies
async function listExceptionPolicies(): Promise<void> {
  // Create the Router Client
  const routerAdministrationClient: JobRouterAdministrationClient =
    new JobRouterAdministrationClient(connectionString);

  let pagesCount = 1;
  const maxPageSize = 3;
  const receivedPagedItems: ExceptionPolicyItem[] = [];

  for await (const page of routerAdministrationClient
    .listExceptionPolicies({ maxPageSize })
    .byPage()) {
    ++pagesCount;
    console.log("page: " + pagesCount);
    for (const policy of page) {
      if (policy.exceptionPolicy) {
        receivedPagedItems.push(policy);
        console.log("Listing exception policy with id: " + policy.exceptionPolicy.id);
      }
    }
  }
}

listExceptionPolicies().catch(console.error);
