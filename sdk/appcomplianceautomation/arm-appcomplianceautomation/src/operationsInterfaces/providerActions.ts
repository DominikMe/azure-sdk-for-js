/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  CheckNameAvailabilityRequest,
  ProviderActionsCheckNameAvailabilityOptionalParams,
  ProviderActionsCheckNameAvailabilityResponse,
  GetCollectionCountRequest,
  ProviderActionsGetCollectionCountOptionalParams,
  ProviderActionsGetCollectionCountResponse,
  GetOverviewStatusRequest,
  ProviderActionsGetOverviewStatusOptionalParams,
  ProviderActionsGetOverviewStatusResponse,
  ListInUseStorageAccountsRequest,
  ProviderActionsListInUseStorageAccountsOptionalParams,
  ProviderActionsListInUseStorageAccountsResponse,
  OnboardRequest,
  ProviderActionsOnboardOptionalParams,
  ProviderActionsOnboardResponse,
  TriggerEvaluationRequest,
  ProviderActionsTriggerEvaluationOptionalParams,
  ProviderActionsTriggerEvaluationResponse,
} from "../models/index.js";

/** Interface representing a ProviderActions. */
export interface ProviderActions {
  /**
   * Check if the given name is available for a report.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  checkNameAvailability(
    body: CheckNameAvailabilityRequest,
    options?: ProviderActionsCheckNameAvailabilityOptionalParams,
  ): Promise<ProviderActionsCheckNameAvailabilityResponse>;
  /**
   * Get the count of reports.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  getCollectionCount(
    body: GetCollectionCountRequest,
    options?: ProviderActionsGetCollectionCountOptionalParams,
  ): Promise<ProviderActionsGetCollectionCountResponse>;
  /**
   * Get the resource overview status.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  getOverviewStatus(
    body: GetOverviewStatusRequest,
    options?: ProviderActionsGetOverviewStatusOptionalParams,
  ): Promise<ProviderActionsGetOverviewStatusResponse>;
  /**
   * List the storage accounts which are in use by related reports
   * @param body The content of the action request
   * @param options The options parameters.
   */
  listInUseStorageAccounts(
    body: ListInUseStorageAccountsRequest,
    options?: ProviderActionsListInUseStorageAccountsOptionalParams,
  ): Promise<ProviderActionsListInUseStorageAccountsResponse>;
  /**
   * Onboard given subscriptions to Microsoft.AppComplianceAutomation provider.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  beginOnboard(
    body: OnboardRequest,
    options?: ProviderActionsOnboardOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ProviderActionsOnboardResponse>,
      ProviderActionsOnboardResponse
    >
  >;
  /**
   * Onboard given subscriptions to Microsoft.AppComplianceAutomation provider.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  beginOnboardAndWait(
    body: OnboardRequest,
    options?: ProviderActionsOnboardOptionalParams,
  ): Promise<ProviderActionsOnboardResponse>;
  /**
   * Trigger quick evaluation for the given subscriptions.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  beginTriggerEvaluation(
    body: TriggerEvaluationRequest,
    options?: ProviderActionsTriggerEvaluationOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ProviderActionsTriggerEvaluationResponse>,
      ProviderActionsTriggerEvaluationResponse
    >
  >;
  /**
   * Trigger quick evaluation for the given subscriptions.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  beginTriggerEvaluationAndWait(
    body: TriggerEvaluationRequest,
    options?: ProviderActionsTriggerEvaluationOptionalParams,
  ): Promise<ProviderActionsTriggerEvaluationResponse>;
}
