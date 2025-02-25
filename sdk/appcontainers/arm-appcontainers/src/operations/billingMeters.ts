/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BillingMeters } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient.js";
import {
  BillingMetersGetOptionalParams,
  BillingMetersGetResponse,
} from "../models/index.js";

/** Class containing BillingMeters operations. */
export class BillingMetersImpl implements BillingMeters {
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class BillingMeters class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get all billingMeters for a location.
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  get(
    location: string,
    options?: BillingMetersGetOptionalParams,
  ): Promise<BillingMetersGetResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/locations/{location}/billingMeters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingMeterCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
