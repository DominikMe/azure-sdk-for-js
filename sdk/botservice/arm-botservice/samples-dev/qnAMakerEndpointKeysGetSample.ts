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
  QnAMakerEndpointKeysRequestBody,
  AzureBotService
} from "@azure/arm-botservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists the QnA Maker endpoint keys
 *
 * @summary Lists the QnA Maker endpoint keys
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/stable/2022-09-15/examples/ListQnAMakerEndpointKeys.json
 */
async function listQnAMakerEndpointKeys(): Promise<void> {
  const subscriptionId =
    process.env["BOTSERVICE_SUBSCRIPTION_ID"] || "subscription-id";
  const parameters: QnAMakerEndpointKeysRequestBody = {
    authkey: "testAuthKey",
    hostname: "https://xxx.cognitiveservices.azure.com/"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.qnAMakerEndpointKeys.get(parameters);
  console.log(result);
}

async function main(): Promise<void> {
  await listQnAMakerEndpointKeys();
}

main().catch(console.error);
