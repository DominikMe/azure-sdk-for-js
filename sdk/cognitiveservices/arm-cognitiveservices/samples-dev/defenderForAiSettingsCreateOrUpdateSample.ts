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
  DefenderForAISetting,
  CognitiveServicesManagementClient,
} from "@azure/arm-cognitiveservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or Updates the specified Defender for AI setting.
 *
 * @summary Creates or Updates the specified Defender for AI setting.
 * x-ms-original-file: specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/stable/2024-10-01/examples/PutDefenderForAISetting.json
 */
async function putDefenderForAiSetting() {
  const subscriptionId =
    process.env["COGNITIVESERVICES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["COGNITIVESERVICES_RESOURCE_GROUP"] || "resourceGroupName";
  const accountName = "accountName";
  const defenderForAISettingName = "Default";
  const defenderForAISettings: DefenderForAISetting = { state: "Enabled" };
  const credential = new DefaultAzureCredential();
  const client = new CognitiveServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.defenderForAISettings.createOrUpdate(
    resourceGroupName,
    accountName,
    defenderForAISettingName,
    defenderForAISettings,
  );
  console.log(result);
}

async function main() {
  putDefenderForAiSetting();
}

main().catch(console.error);
