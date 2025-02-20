/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AttestationProvidersGetOptionalParams,
  AttestationProvidersGetResponse,
  AttestationServiceCreationParams,
  AttestationProvidersCreateOptionalParams,
  AttestationProvidersCreateResponse,
  AttestationServicePatchParams,
  AttestationProvidersUpdateOptionalParams,
  AttestationProvidersUpdateResponse,
  AttestationProvidersDeleteOptionalParams,
  AttestationProvidersListOptionalParams,
  AttestationProvidersListResponse,
  AttestationProvidersListByResourceGroupOptionalParams,
  AttestationProvidersListByResourceGroupResponse,
  AttestationProvidersListDefaultOptionalParams,
  AttestationProvidersListDefaultResponse,
  AttestationProvidersGetDefaultByLocationOptionalParams,
  AttestationProvidersGetDefaultByLocationResponse
} from "../models/index.js";

/** Interface representing a AttestationProviders. */
export interface AttestationProviders {
  /**
   * Get the status of Attestation Provider.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    providerName: string,
    options?: AttestationProvidersGetOptionalParams
  ): Promise<AttestationProvidersGetResponse>;
  /**
   * Creates a new Attestation Provider.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param creationParams Client supplied parameters.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    providerName: string,
    creationParams: AttestationServiceCreationParams,
    options?: AttestationProvidersCreateOptionalParams
  ): Promise<AttestationProvidersCreateResponse>;
  /**
   * Updates the Attestation Provider.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param updateParams Client supplied parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    providerName: string,
    updateParams: AttestationServicePatchParams,
    options?: AttestationProvidersUpdateOptionalParams
  ): Promise<AttestationProvidersUpdateResponse>;
  /**
   * Delete Attestation Service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation service
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    providerName: string,
    options?: AttestationProvidersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Returns a list of attestation providers in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: AttestationProvidersListOptionalParams
  ): Promise<AttestationProvidersListResponse>;
  /**
   * Returns attestation providers list in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AttestationProvidersListByResourceGroupOptionalParams
  ): Promise<AttestationProvidersListByResourceGroupResponse>;
  /**
   * Get the default provider
   * @param options The options parameters.
   */
  listDefault(
    options?: AttestationProvidersListDefaultOptionalParams
  ): Promise<AttestationProvidersListDefaultResponse>;
  /**
   * Get the default provider by location.
   * @param location The location of the default provider.
   * @param options The options parameters.
   */
  getDefaultByLocation(
    location: string,
    options?: AttestationProvidersGetDefaultByLocationOptionalParams
  ): Promise<AttestationProvidersGetDefaultByLocationResponse>;
}
