/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { EncryptionScopes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CognitiveServicesManagementClient } from "../cognitiveServicesManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  EncryptionScope,
  EncryptionScopesListNextOptionalParams,
  EncryptionScopesListOptionalParams,
  EncryptionScopesListResponse,
  EncryptionScopesGetOptionalParams,
  EncryptionScopesGetResponse,
  EncryptionScopesCreateOrUpdateOptionalParams,
  EncryptionScopesCreateOrUpdateResponse,
  EncryptionScopesDeleteOptionalParams,
  EncryptionScopesDeleteResponse,
  EncryptionScopesListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EncryptionScopes operations. */
export class EncryptionScopesImpl implements EncryptionScopes {
  private readonly client: CognitiveServicesManagementClient;

  /**
   * Initialize a new instance of the class EncryptionScopes class.
   * @param client Reference to the service client
   */
  constructor(client: CognitiveServicesManagementClient) {
    this.client = client;
  }

  /**
   * Gets the content filters associated with the Azure OpenAI account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: EncryptionScopesListOptionalParams,
  ): PagedAsyncIterableIterator<EncryptionScope> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          accountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: EncryptionScopesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<EncryptionScope[]> {
    let result: EncryptionScopesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, accountName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: EncryptionScopesListOptionalParams,
  ): AsyncIterableIterator<EncryptionScope> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets the content filters associated with the Azure OpenAI account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: EncryptionScopesListOptionalParams,
  ): Promise<EncryptionScopesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec,
    );
  }

  /**
   * Gets the specified EncryptionScope associated with the Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param encryptionScopeName The name of the encryptionScope associated with the Cognitive Services
   *                            Account
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    encryptionScopeName: string,
    options?: EncryptionScopesGetOptionalParams,
  ): Promise<EncryptionScopesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, encryptionScopeName, options },
      getOperationSpec,
    );
  }

  /**
   * Update the state of specified encryptionScope associated with the Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param encryptionScopeName The name of the encryptionScope associated with the Cognitive Services
   *                            Account
   * @param encryptionScope The encryptionScope properties.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    encryptionScopeName: string,
    encryptionScope: EncryptionScope,
    options?: EncryptionScopesCreateOrUpdateOptionalParams,
  ): Promise<EncryptionScopesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        encryptionScopeName,
        encryptionScope,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes the specified encryptionScope associated with the Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param encryptionScopeName The name of the encryptionScope associated with the Cognitive Services
   *                            Account
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    encryptionScopeName: string,
    options?: EncryptionScopesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<EncryptionScopesDeleteResponse>,
      EncryptionScopesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<EncryptionScopesDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accountName, encryptionScopeName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      EncryptionScopesDeleteResponse,
      OperationState<EncryptionScopesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified encryptionScope associated with the Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param encryptionScopeName The name of the encryptionScope associated with the Cognitive Services
   *                            Account
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    encryptionScopeName: string,
    options?: EncryptionScopesDeleteOptionalParams,
  ): Promise<EncryptionScopesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      encryptionScopeName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: EncryptionScopesListNextOptionalParams,
  ): Promise<EncryptionScopesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScopeListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes/{encryptionScopeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScope,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.encryptionScopeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes/{encryptionScopeName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScope,
    },
    201: {
      bodyMapper: Mappers.EncryptionScope,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.encryptionScope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.encryptionScopeName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes/{encryptionScopeName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.EncryptionScopesDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.EncryptionScopesDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.EncryptionScopesDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.EncryptionScopesDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.encryptionScopeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScopeListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
