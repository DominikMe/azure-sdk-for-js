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
  Certificate,
  CertificatesCreateOrUpdateOptionalParams,
  ContainerAppsAPIClient,
} from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or Update a Certificate.
 *
 * @summary Create or Update a Certificate.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/Certificate_CreateOrUpdate.json
 */
async function createOrUpdateCertificate(): Promise<void> {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const environmentName = "testcontainerenv";
  const certificateName = "certificate-firendly-name";
  const certificateEnvelope: Certificate = {
    location: "East US",
    properties: {
      certificateType: "ImagePullTrustedCA",
      password: "private key password",
      value: Buffer.from("Y2VydA=="),
    },
  };
  const options: CertificatesCreateOrUpdateOptionalParams = {
    certificateEnvelope,
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.certificates.createOrUpdate(
    resourceGroupName,
    environmentName,
    certificateName,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or Update a Certificate.
 *
 * @summary Create or Update a Certificate.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/Certificate_CreateOrUpdate_FromKeyVault.json
 */
async function createOrUpdateCertificateUsingManagedIdentity(): Promise<void> {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const environmentName = "testcontainerenv";
  const certificateName = "certificate-firendly-name";
  const certificateEnvelope: Certificate = {
    location: "East US",
    properties: {
      certificateKeyVaultProperties: {
        identity:
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/test-rg/providers/microsoft.managedidentity/userassignedidentities/test-user-mi",
        keyVaultUrl: "https://xxxxxxxx.vault.azure.net/certificates/certName",
      },
      certificateType: "ServerSSLCertificate",
    },
  };
  const options: CertificatesCreateOrUpdateOptionalParams = {
    certificateEnvelope,
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.certificates.createOrUpdate(
    resourceGroupName,
    environmentName,
    certificateName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateCertificate();
  await createOrUpdateCertificateUsingManagedIdentity();
}

main().catch(console.error);
