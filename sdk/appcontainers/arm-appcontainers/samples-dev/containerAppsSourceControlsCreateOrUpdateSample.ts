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
  SourceControl,
  ContainerAppsSourceControlsCreateOrUpdateOptionalParams,
  ContainerAppsAPIClient,
} from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update the SourceControl for a Container App.
 *
 * @summary Create or update the SourceControl for a Container App.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/SourceControls_CreateOrUpdate.json
 */
async function createOrUpdateContainerAppSourceControl(): Promise<void> {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "651f8027-33e8-4ec4-97b4-f6e9f3dc8744";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "workerapps-rg-xj";
  const containerAppName = "testcanadacentral";
  const sourceControlName = "current";
  const xMsGithubAuxiliary = "githubaccesstoken";
  const sourceControlEnvelope: SourceControl = {
    branch: "master",
    githubActionConfiguration: {
      azureCredentials: {
        clientId: "<clientid>",
        clientSecret: "<clientsecret>",
        kind: "feaderated",
        tenantId: "<tenantid>",
      },
      buildEnvironmentVariables: [
        { name: "foo1", value: "bar1" },
        { name: "foo2", value: "bar2" },
      ],
      contextPath: "./",
      dockerfilePath: "./Dockerfile",
      githubPersonalAccessToken: "test",
      image: "image/tag",
      registryInfo: {
        registryPassword: "<registrypassword>",
        registryUrl: "test-registry.azurecr.io",
        registryUserName: "test-registry",
      },
    },
    repoUrl: "https://github.com/xwang971/ghatest",
  };
  const options: ContainerAppsSourceControlsCreateOrUpdateOptionalParams = {
    xMsGithubAuxiliary,
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result =
    await client.containerAppsSourceControls.beginCreateOrUpdateAndWait(
      resourceGroupName,
      containerAppName,
      sourceControlName,
      sourceControlEnvelope,
      options,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateContainerAppSourceControl();
}

main().catch(console.error);
