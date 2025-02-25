/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  BillingPropertyGetOptionalParams,
  BillingPropertyGetResponse,
  BillingProperty,
  BillingPropertyUpdateOptionalParams,
  BillingPropertyUpdateResponse,
} from "../models/index.js";

/** Interface representing a BillingPropertyOperations. */
export interface BillingPropertyOperations {
  /**
   * Gets the billing properties for a subscription
   * @param options The options parameters.
   */
  get(
    options?: BillingPropertyGetOptionalParams,
  ): Promise<BillingPropertyGetResponse>;
  /**
   * Updates the billing property of a subscription. Currently, cost center can be updated for billing
   * accounts with agreement type Microsoft Customer Agreement and subscription service usage address can
   * be updated for billing accounts with agreement type Microsoft Online Service Program.
   * @param parameters A billing property.
   * @param options The options parameters.
   */
  update(
    parameters: BillingProperty,
    options?: BillingPropertyUpdateOptionalParams,
  ): Promise<BillingPropertyUpdateResponse>;
}
