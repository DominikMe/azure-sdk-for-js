/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ConnectedEnvironment,
  ConnectedEnvironmentsListBySubscriptionOptionalParams,
  ConnectedEnvironmentsListByResourceGroupOptionalParams,
  ConnectedEnvironmentsGetOptionalParams,
  ConnectedEnvironmentsGetResponse,
  ConnectedEnvironmentsCreateOrUpdateOptionalParams,
  ConnectedEnvironmentsCreateOrUpdateResponse,
  ConnectedEnvironmentsDeleteOptionalParams,
  ConnectedEnvironmentsUpdateOptionalParams,
  ConnectedEnvironmentsUpdateResponse,
  CheckNameAvailabilityRequest,
  ConnectedEnvironmentsCheckNameAvailabilityOptionalParams,
  ConnectedEnvironmentsCheckNameAvailabilityResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ConnectedEnvironments. */
export interface ConnectedEnvironments {
  /**
   * Get all connectedEnvironments for a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ConnectedEnvironmentsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<ConnectedEnvironment>;
  /**
   * Get all connectedEnvironments in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ConnectedEnvironmentsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ConnectedEnvironment>;
  /**
   * Get the properties of an connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connectedEnvironment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsGetOptionalParams,
  ): Promise<ConnectedEnvironmentsGetResponse>;
  /**
   * Creates or updates an connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connectedEnvironment.
   * @param environmentEnvelope Configuration details of the connectedEnvironment.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    environmentEnvelope: ConnectedEnvironment,
    options?: ConnectedEnvironmentsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ConnectedEnvironmentsCreateOrUpdateResponse>,
      ConnectedEnvironmentsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connectedEnvironment.
   * @param environmentEnvelope Configuration details of the connectedEnvironment.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    environmentEnvelope: ConnectedEnvironment,
    options?: ConnectedEnvironmentsCreateOrUpdateOptionalParams,
  ): Promise<ConnectedEnvironmentsCreateOrUpdateResponse>;
  /**
   * Delete an connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connectedEnvironment.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete an connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connectedEnvironment.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Patches a Managed Environment. Only patching of tags is supported currently
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connectedEnvironment.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsUpdateOptionalParams,
  ): Promise<ConnectedEnvironmentsUpdateResponse>;
  /**
   * Checks if resource connectedEnvironmentName is available.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the Managed Environment.
   * @param checkNameAvailabilityRequest The check connectedEnvironmentName availability request.
   * @param options The options parameters.
   */
  checkNameAvailability(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    checkNameAvailabilityRequest: CheckNameAvailabilityRequest,
    options?: ConnectedEnvironmentsCheckNameAvailabilityOptionalParams,
  ): Promise<ConnectedEnvironmentsCheckNameAvailabilityResponse>;
}
