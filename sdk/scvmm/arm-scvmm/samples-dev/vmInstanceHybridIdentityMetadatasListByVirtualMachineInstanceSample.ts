/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ScVmm } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns the list of HybridIdentityMetadata of the given VM.
 *
 * @summary Returns the list of HybridIdentityMetadata of the given VM.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VmInstanceHybridIdentityMetadatas_ListByVirtualMachineInstance_MaximumSet_Gen.json
 */
async function vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceMaximumSet() {
  const resourceUri = "gtgclehcbsyave";
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential);
  const resArray = new Array();
  for await (let item of client.vmInstanceHybridIdentityMetadatas.listByVirtualMachineInstance(
    resourceUri,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Returns the list of HybridIdentityMetadata of the given VM.
 *
 * @summary Returns the list of HybridIdentityMetadata of the given VM.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VmInstanceHybridIdentityMetadatas_ListByVirtualMachineInstance_MinimumSet_Gen.json
 */
async function vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceMinimumSet() {
  const resourceUri = "gtgclehcbsyave";
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential);
  const resArray = new Array();
  for await (let item of client.vmInstanceHybridIdentityMetadatas.listByVirtualMachineInstance(
    resourceUri,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceMaximumSet();
  await vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceMinimumSet();
}

main().catch(console.error);
