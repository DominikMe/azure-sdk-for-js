/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListByCloudHsmClusterOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateEndpointConnections. */
export interface PrivateEndpointConnections {
  /**
   * The List operation gets information about the private endpoint connections associated with the Cloud
   * HSM Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudHsmClusterName The name of the Cloud HSM Cluster within the specified resource group.
   *                            Cloud HSM Cluster names must be between 3 and 23 characters in length.
   * @param options The options parameters.
   */
  listByCloudHsmCluster(
    resourceGroupName: string,
    cloudHsmClusterName: string,
    options?: PrivateEndpointConnectionsListByCloudHsmClusterOptionalParams,
  ): PagedAsyncIterableIterator<PrivateEndpointConnection>;
}
