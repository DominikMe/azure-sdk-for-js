// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * @summary Exception policy crud
 */
import { JobRouterAdministrationClient } from "@azure/communication-job-router";

// Load the .env file (you will need to set these environment variables)
import "dotenv/config";
import type { ExceptionPolicy, QueueLengthExceptionTrigger } from "@azure/communication-job-router";

const connectionString = process.env["COMMUNICATION_CONNECTION_STRING"] || "";

// Create an exception policy
async function createExceptionPolicy(): Promise<void> {
  // Create the Router Client
  const routerAdministrationClient: JobRouterAdministrationClient =
    new JobRouterAdministrationClient(connectionString);

  // define exception trigger for queue over flow
  const queueLengthExceptionTrigger: QueueLengthExceptionTrigger = {
    kind: "queue-length",
    threshold: 10,
  };

  const id = "exception-policy-123";
  const exceptionPolicyRequest: ExceptionPolicy = {
    id: "exception-policy-123",
    name: "test-policy",
    exceptionRules: {
      MaxWaitTimeExceeded: {
        actions: {
          MoveJobToEscalatedQueue: {
            kind: "reclassify",
            classificationPolicyId: "Main",
            labelsToUpsert: {
              escalated: true,
            },
          },
        },
        trigger: queueLengthExceptionTrigger,
      },
    },
  };

  const request = exceptionPolicyRequest;

  const result = await routerAdministrationClient.createExceptionPolicy(id, request);

  console.log("exception policy: " + result);
}

createExceptionPolicy().catch(console.error);
