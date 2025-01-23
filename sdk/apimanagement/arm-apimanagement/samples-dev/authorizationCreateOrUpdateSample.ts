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
  ApiManagementClient,
  AuthorizationContract
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates authorization.
 *
 * @summary Creates or updates authorization.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateAuthorizationAADAuthCode.json
 */
async function apiManagementCreateAuthorizationAadAuthCode(): Promise<void> {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const authorizationProviderId = "aadwithauthcode";
  const authorizationId = "authz2";
  const parameters: AuthorizationContract = {
    authorizationType: "OAuth2",
    oAuth2GrantType: "AuthorizationCode"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.authorization.createOrUpdate(
    resourceGroupName,
    serviceName,
    authorizationProviderId,
    authorizationId,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates authorization.
 *
 * @summary Creates or updates authorization.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateAuthorizationAADClientCred.json
 */
async function apiManagementCreateAuthorizationAadClientCred(): Promise<void> {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const authorizationProviderId = "aadwithclientcred";
  const authorizationId = "authz1";
  const parameters: AuthorizationContract = {
    authorizationType: "OAuth2",
    oAuth2GrantType: "AuthorizationCode",
    parameters: {
      clientId: "",
      clientSecret: ""
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.authorization.createOrUpdate(
    resourceGroupName,
    serviceName,
    authorizationProviderId,
    authorizationId,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  await apiManagementCreateAuthorizationAadAuthCode();
  await apiManagementCreateAuthorizationAadClientCred();
}

main().catch(console.error);
