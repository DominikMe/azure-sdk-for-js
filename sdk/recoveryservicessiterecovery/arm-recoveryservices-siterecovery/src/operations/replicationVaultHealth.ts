/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ReplicationVaultHealth } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ReplicationVaultHealthGetOptionalParams,
  ReplicationVaultHealthGetResponse,
  ReplicationVaultHealthRefreshOptionalParams,
  ReplicationVaultHealthRefreshResponse
} from "../models";

/** Class containing ReplicationVaultHealth operations. */
export class ReplicationVaultHealthImpl implements ReplicationVaultHealth {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationVaultHealth class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Gets the health details of the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationVaultHealthGetOptionalParams
  ): Promise<ReplicationVaultHealthGetResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Refreshes health summary of the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  async beginRefresh(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationVaultHealthRefreshOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ReplicationVaultHealthRefreshResponse>,
      ReplicationVaultHealthRefreshResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationVaultHealthRefreshResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceName, resourceGroupName, options },
      spec: refreshOperationSpec
    });
    const poller = await createHttpPoller<
      ReplicationVaultHealthRefreshResponse,
      OperationState<ReplicationVaultHealthRefreshResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Refreshes health summary of the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  async beginRefreshAndWait(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationVaultHealthRefreshOptionalParams
  ): Promise<ReplicationVaultHealthRefreshResponse> {
    const poller = await this.beginRefresh(
      resourceName,
      resourceGroupName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultHealth",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultHealthDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const refreshOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationVaultHealth/default/refresh",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VaultHealthDetails
    },
    201: {
      bodyMapper: Mappers.VaultHealthDetails
    },
    202: {
      bodyMapper: Mappers.VaultHealthDetails
    },
    204: {
      bodyMapper: Mappers.VaultHealthDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
