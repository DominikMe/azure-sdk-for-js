/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualNetworksMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a VirtualNetworks. */
export class VirtualNetworks {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a VirtualNetworks.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified virtual network.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, virtualNetworkName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,virtualNetworkName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified virtual network by resource group.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksGetResponse>
   */
  get(resourceGroupName: string, virtualNetworkName: string, options?: Models.VirtualNetworksGetOptionalParams): Promise<Models.VirtualNetworksGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualNetworkName: string, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualNetworkName: string, options: Models.VirtualNetworksGetOptionalParams, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
  get(resourceGroupName: string, virtualNetworkName: string, options?: Models.VirtualNetworksGetOptionalParams | msRest.ServiceCallback<Models.VirtualNetwork>, callback?: msRest.ServiceCallback<Models.VirtualNetwork>): Promise<Models.VirtualNetworksGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualNetworkName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualNetworksGetResponse>;
  }

  /**
   * Creates or updates a virtual network in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param parameters Parameters supplied to the create or update virtual network operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, virtualNetworkName: string, parameters: Models.VirtualNetwork, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworksCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,virtualNetworkName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualNetworksCreateOrUpdateResponse>;
  }

  /**
   * Updates a virtual network tags.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param parameters Parameters supplied to update virtual network tags.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworksUpdateTagsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param parameters Parameters supplied to update virtual network tags.
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param parameters Parameters supplied to update virtual network tags.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateTags(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
  updateTags(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetwork>, callback?: msRest.ServiceCallback<Models.VirtualNetwork>): Promise<Models.VirtualNetworksUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualNetworkName,
        parameters,
        options
      },
      updateTagsOperationSpec,
      callback) as Promise<Models.VirtualNetworksUpdateTagsResponse>;
  }

  /**
   * Gets all virtual networks in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksListAllResponse>
   */
  listAll(options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworksListAllResponse>;
  /**
   * @param callback The callback
   */
  listAll(callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
  listAll(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkListResult>, callback?: msRest.ServiceCallback<Models.VirtualNetworkListResult>): Promise<Models.VirtualNetworksListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.VirtualNetworksListAllResponse>;
  }

  /**
   * Gets all virtual networks in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworksListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkListResult>, callback?: msRest.ServiceCallback<Models.VirtualNetworkListResult>): Promise<Models.VirtualNetworksListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualNetworksListResponse>;
  }

  /**
   * Checks whether a private IP address is available for use.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param ipAddress The private IP address to be verified.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksCheckIPAddressAvailabilityResponse>
   */
  checkIPAddressAvailability(resourceGroupName: string, virtualNetworkName: string, ipAddress: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworksCheckIPAddressAvailabilityResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param ipAddress The private IP address to be verified.
   * @param callback The callback
   */
  checkIPAddressAvailability(resourceGroupName: string, virtualNetworkName: string, ipAddress: string, callback: msRest.ServiceCallback<Models.IPAddressAvailabilityResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param ipAddress The private IP address to be verified.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkIPAddressAvailability(resourceGroupName: string, virtualNetworkName: string, ipAddress: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.IPAddressAvailabilityResult>): void;
  checkIPAddressAvailability(resourceGroupName: string, virtualNetworkName: string, ipAddress: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.IPAddressAvailabilityResult>, callback?: msRest.ServiceCallback<Models.IPAddressAvailabilityResult>): Promise<Models.VirtualNetworksCheckIPAddressAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualNetworkName,
        ipAddress,
        options
      },
      checkIPAddressAvailabilityOperationSpec,
      callback) as Promise<Models.VirtualNetworksCheckIPAddressAvailabilityResponse>;
  }

  /**
   * Lists usage stats.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksListUsageResponse>
   */
  listUsage(resourceGroupName: string, virtualNetworkName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworksListUsageResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param callback The callback
   */
  listUsage(resourceGroupName: string, virtualNetworkName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkListUsageResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param options The optional parameters
   * @param callback The callback
   */
  listUsage(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkListUsageResult>): void;
  listUsage(resourceGroupName: string, virtualNetworkName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkListUsageResult>, callback?: msRest.ServiceCallback<Models.VirtualNetworkListUsageResult>): Promise<Models.VirtualNetworksListUsageResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualNetworkName,
        options
      },
      listUsageOperationSpec,
      callback) as Promise<Models.VirtualNetworksListUsageResponse>;
  }

  /**
   * Deletes the specified virtual network.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualNetworkName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a virtual network in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param virtualNetworkName The name of the virtual network.
   * @param parameters Parameters supplied to the create or update virtual network operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, parameters: Models.VirtualNetwork, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualNetworkName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all virtual networks in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksListAllNextResponse>
   */
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworksListAllNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkListResult>, callback?: msRest.ServiceCallback<Models.VirtualNetworkListResult>): Promise<Models.VirtualNetworksListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.VirtualNetworksListAllNextResponse>;
  }

  /**
   * Gets all virtual networks in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworksListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkListResult>, callback?: msRest.ServiceCallback<Models.VirtualNetworkListResult>): Promise<Models.VirtualNetworksListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualNetworksListNextResponse>;
  }

  /**
   * Lists usage stats.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworksListUsageNextResponse>
   */
  listUsageNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworksListUsageNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listUsageNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualNetworkListUsageResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listUsageNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkListUsageResult>): void;
  listUsageNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkListUsageResult>, callback?: msRest.ServiceCallback<Models.VirtualNetworkListUsageResult>): Promise<Models.VirtualNetworksListUsageNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listUsageNextOperationSpec,
      callback) as Promise<Models.VirtualNetworksListUsageNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualNetworks",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const checkIPAddressAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/CheckIPAddressAvailability",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.ipAddress,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IPAddressAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listUsageOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/usages",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkListUsageResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.VirtualNetwork,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetwork
    },
    201: {
      bodyMapper: Mappers.VirtualNetwork
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listUsageNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkListUsageResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
