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
  AppResource,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Operation to update an exiting App.
 *
 * @summary Operation to update an exiting App.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/Apps_Update.json
 */
async function appsUpdate(): Promise<void> {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const appResource: AppResource = {
    identity: {
      type: "SystemAssigned,UserAssigned",
      principalId: undefined,
      tenantId: undefined,
      userAssignedIdentities: {
        "/subscriptions/00000000000000000000000000000000/resourceGroups/samplegroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/id1": {
          clientId: undefined,
          principalId: undefined
        },
        "/subscriptions/00000000000000000000000000000000/resourceGroups/samplegroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/id2": {
          clientId: undefined,
          principalId: undefined
        }
      }
    },
    location: "eastus",
    properties: {
      customPersistentDisks: [
        {
          customPersistentDiskProperties: {
            type: "AzureFileVolume",
            mountOptions: [],
            mountPath: "/mypath1/mypath2",
            shareName: "myFileShare"
          },
          storageId: "myASCStorageID"
        }
      ],
      enableEndToEndTLS: false,
      httpsOnly: false,
      persistentDisk: { mountPath: "/mypersistentdisk", sizeInGB: 2 },
      public: true,
      temporaryDisk: { mountPath: "/mytemporarydisk", sizeInGB: 2 }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.apps.beginUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    appResource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Operation to update an exiting App.
 *
 * @summary Operation to update an exiting App.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/Apps_Update_VNetInjection.json
 */
async function appsUpdateVNetInjection(): Promise<void> {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const appResource: AppResource = {
    identity: {
      type: "SystemAssigned,UserAssigned",
      principalId: undefined,
      tenantId: undefined,
      userAssignedIdentities: {
        "/subscriptions/00000000000000000000000000000000/resourceGroups/samplegroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/id1": {
          clientId: undefined,
          principalId: undefined
        },
        "/subscriptions/00000000000000000000000000000000/resourceGroups/samplegroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/id2": {
          clientId: undefined,
          principalId: undefined
        }
      }
    },
    location: "eastus",
    properties: {
      customPersistentDisks: [
        {
          customPersistentDiskProperties: {
            type: "AzureFileVolume",
            mountOptions: [],
            mountPath: "/mypath1/mypath2",
            shareName: "myFileShare"
          },
          storageId: "myASCStorageID"
        }
      ],
      enableEndToEndTLS: false,
      httpsOnly: false,
      persistentDisk: { mountPath: "/mypersistentdisk", sizeInGB: 2 },
      public: true,
      temporaryDisk: { mountPath: "/mytemporarydisk", sizeInGB: 2 },
      vnetAddons: { publicEndpoint: true }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.apps.beginUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    appResource
  );
  console.log(result);
}

async function main(): Promise<void> {
  await appsUpdate();
  await appsUpdateVNetInjection();
}

main().catch(console.error);
