## API Report File for "@azure/iot-device-update"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreHttp from '@azure/core-http';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

// @public
export interface AccessCondition {
    ifNoneMatch?: string;
}

// @public
export interface Compatibility {
    deviceManufacturer: string;
    deviceModel: string;
}

// @public
export interface Deployment {
    deploymentId: string;
    deploymentType: DeploymentType;
    deviceClassId?: string;
    deviceGroupDefinition: string[];
    deviceGroupType: DeviceGroupType;
    isCanceled?: boolean;
    isCompleted?: boolean;
    isRetried?: boolean;
    startDateTime: Date;
    updateId: UpdateId;
}

// @public
export interface DeploymentDeviceState {
    deviceId: string;
    deviceState: DeviceDeploymentState;
    movedOnToNewDeployment: boolean;
    retryCount: number;
}

// @public
export interface DeploymentDeviceStatesFilter {
    deviceId?: string;
    deviceState?: DeviceState;
}

// @public
export interface DeploymentFilter {
    name?: string;
    provider?: string;
    version?: string;
}

// @public
export type DeploymentsCancelDeploymentResponse = Deployment & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Deployment;
    };
};

// @public
export type DeploymentsCreateOrUpdateDeploymentResponse = Deployment & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Deployment;
    };
};

// @public
export interface DeploymentsGetAllDeploymentsNextOptionalParams extends coreHttp.OperationOptions {
    filter?: string;
}

// @public
export type DeploymentsGetAllDeploymentsNextResponse = PageableListOfDeployments & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfDeployments;
    };
};

// @public
export interface DeploymentsGetAllDeploymentsOptionalParams extends coreHttp.OperationOptions {
    filter?: string;
}

// @public
export type DeploymentsGetAllDeploymentsResponse = PageableListOfDeployments & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfDeployments;
    };
};

// @public
export interface DeploymentsGetDeploymentDevicesNextOptionalParams extends coreHttp.OperationOptions {
    filter?: string;
}

// @public
export type DeploymentsGetDeploymentDevicesNextResponse = PageableListOfDeploymentDeviceStates & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfDeploymentDeviceStates;
    };
};

// @public
export interface DeploymentsGetDeploymentDevicesOptionalParams extends coreHttp.OperationOptions {
    filter?: string;
}

// @public
export type DeploymentsGetDeploymentDevicesResponse = PageableListOfDeploymentDeviceStates & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfDeploymentDeviceStates;
    };
};

// @public
export type DeploymentsGetDeploymentResponse = Deployment & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Deployment;
    };
};

// @public
export type DeploymentsGetDeploymentStatusResponse = DeploymentStatus & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: DeploymentStatus;
    };
};

// @public
export type DeploymentsRetryDeploymentResponse = Deployment & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Deployment;
    };
};

// @public
export type DeploymentState = string;

// @public
export interface DeploymentStatus {
    deploymentState: DeploymentState;
    devicesCanceledCount?: number;
    devicesCompletedFailedCount?: number;
    devicesCompletedSucceededCount?: number;
    devicesIncompatibleCount?: number;
    devicesInProgressCount?: number;
    totalDevices?: number;
}

// @public
export type DeploymentType = string;

// @public
export interface Device {
    deploymentStatus?: DeviceDeploymentState;
    deviceClassId: string;
    deviceId: string;
    groupId?: string;
    installedUpdateId?: UpdateId | null;
    lastAttemptedUpdateId?: UpdateId | null;
    lastDeploymentId?: string;
    manufacturer: string;
    model: string;
    onLatestUpdate: boolean;
}

// @public
export interface DeviceClass {
    bestCompatibleUpdateId: UpdateId | null;
    deviceClassId: string;
    manufacturer: string;
    model: string;
}

// @public
export type DeviceDeploymentState = string;

// @public
export interface DeviceFilter {
    groupId?: string;
}

// @public
export type DeviceGroupType = string;

// @public
export type DevicesCreateOrUpdateGroupResponse = Group & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Group;
    };
};

// @public
export type DevicesGetAllDeviceClassesNextResponse = PageableListOfDeviceClasses & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfDeviceClasses;
    };
};

// @public
export type DevicesGetAllDeviceClassesResponse = PageableListOfDeviceClasses & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfDeviceClasses;
    };
};

// @public
export interface DevicesGetAllDevicesNextOptionalParams extends coreHttp.OperationOptions {
    filter?: string;
}

// @public
export type DevicesGetAllDevicesNextResponse = PageableListOfDevices & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfDevices;
    };
};

// @public
export interface DevicesGetAllDevicesOptionalParams extends coreHttp.OperationOptions {
    filter?: string;
}

// @public
export type DevicesGetAllDevicesResponse = PageableListOfDevices & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfDevices;
    };
};

// @public
export type DevicesGetAllDeviceTagsNextResponse = PageableListOfDeviceTags & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfDeviceTags;
    };
};

// @public
export type DevicesGetAllDeviceTagsResponse = PageableListOfDeviceTags & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfDeviceTags;
    };
};

// @public
export type DevicesGetAllGroupsNextResponse = PageableListOfGroups & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfGroups;
    };
};

// @public
export type DevicesGetAllGroupsResponse = PageableListOfGroups & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfGroups;
    };
};

// @public
export type DevicesGetDeviceClassDeviceIdsNextResponse = PageableListOfStrings & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfStrings;
    };
};

// @public
export type DevicesGetDeviceClassDeviceIdsResponse = PageableListOfStrings & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfStrings;
    };
};

// @public
export type DevicesGetDeviceClassInstallableUpdatesNextResponse = PageableListOfUpdateIds & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfUpdateIds;
    };
};

// @public
export type DevicesGetDeviceClassInstallableUpdatesResponse = PageableListOfUpdateIds & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfUpdateIds;
    };
};

// @public
export type DevicesGetDeviceClassResponse = DeviceClass & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: DeviceClass;
    };
};

// @public
export type DevicesGetDeviceResponse = Device & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Device;
    };
};

// @public
export type DevicesGetDeviceTagResponse = DeviceTag & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: DeviceTag;
    };
};

// @public
export interface DevicesGetGroupBestUpdatesNextOptionalParams extends coreHttp.OperationOptions {
    filter?: string;
}

// @public
export type DevicesGetGroupBestUpdatesNextResponse = PageableListOfUpdatableDevices & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfUpdatableDevices;
    };
};

// @public
export interface DevicesGetGroupBestUpdatesOptionalParams extends coreHttp.OperationOptions {
    filter?: string;
}

// @public
export type DevicesGetGroupBestUpdatesResponse = PageableListOfUpdatableDevices & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfUpdatableDevices;
    };
};

// @public
export type DevicesGetGroupResponse = Group & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Group;
    };
};

// @public
export type DevicesGetGroupUpdateComplianceResponse = UpdateCompliance & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: UpdateCompliance;
    };
};

// @public
export type DevicesGetUpdateComplianceResponse = UpdateCompliance & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: UpdateCompliance;
    };
};

// @public
export type DeviceState = string;

// @public
export interface DeviceTag {
    deviceCount: number;
    tagName: string;
}

// @public (undocumented)
export class DeviceUpdateClient extends DeviceUpdateClientContext {
    constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, accountEndpoint: string, instanceId: string, options?: DeviceUpdateClientOptionalParams);
    // Warning: (ae-forgotten-export) The symbol "Deployments" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    deployments: Deployments;
    // Warning: (ae-forgotten-export) The symbol "Devices" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    devices: Devices;
    // Warning: (ae-forgotten-export) The symbol "Updates" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    updates: Updates;
}

// @public (undocumented)
export class DeviceUpdateClientContext extends coreHttp.ServiceClient {
    constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, accountEndpoint: string, instanceId: string, options?: DeviceUpdateClientOptionalParams);
    // (undocumented)
    accountEndpoint: string;
    // (undocumented)
    instanceId: string;
}

// @public
export interface DeviceUpdateClientOptionalParams extends coreHttp.ServiceClientOptions {
    endpoint?: string;
}

// @public
export interface ErrorModel {
    code: string;
    details?: ErrorModel[];
    innererror?: InnerError;
    message: string;
    occurredDateTime?: Date;
    target?: string;
}

// @public
export interface File {
    etag?: string;
    fileId: string;
    fileName: string;
    hashes: {
        [propertyName: string]: string;
    };
    mimeType?: string;
    sizeInBytes: number;
}

// @public
export interface FileImportMetadata {
    filename: string;
    url: string;
}

// @public
export interface Group {
    createdDateTime: string;
    deviceCount?: number;
    groupId: string;
    groupType: GroupType;
    tags: string[];
}

// @public
export interface GroupBestUpdatesFilter {
    name?: string;
    provider?: string;
    version?: string;
}

// @public
export type GroupType = string;

// @public
export interface ImportManifestMetadata {
    hashes: {
        [propertyName: string]: string;
    };
    sizeInBytes: number;
    url: string;
}

// @public
export interface ImportUpdateInput {
    files: FileImportMetadata[];
    importManifest: ImportManifestMetadata;
}

// @public
export interface InnerError {
    code: string;
    errorDetail?: string;
    innerError?: InnerError;
    message?: string;
}

// @public
export const enum KnownDeploymentState {
    Active = "Active",
    Canceled = "Canceled",
    Superseded = "Superseded"
}

// @public
export const enum KnownDeploymentType {
    Complete = "Complete",
    Download = "Download",
    Install = "Install"
}

// @public
export const enum KnownDeviceDeploymentState {
    Canceled = "Canceled",
    Failed = "Failed",
    Incompatible = "Incompatible",
    InProgress = "InProgress",
    Succeeded = "Succeeded"
}

// @public
export const enum KnownDeviceGroupType {
    All = "All",
    DeviceGroupDefinitions = "DeviceGroupDefinitions",
    Devices = "Devices"
}

// @public
export const enum KnownDeviceState {
    AlreadyInDeployment = "AlreadyInDeployment",
    Canceled = "Canceled",
    Failed = "Failed",
    Incompatible = "Incompatible",
    InProgress = "InProgress",
    NotStarted = "NotStarted",
    Succeeded = "Succeeded"
}

// @public
export const enum KnownGroupType {
    IoTHubTag = "IoTHubTag"
}

// @public
export const enum KnownOperationFilterStatus {
    // (undocumented)
    NotStarted = "NotStarted",
    // (undocumented)
    Running = "Running"
}

// @public
export const enum KnownOperationStatus {
    Failed = "Failed",
    NotStarted = "NotStarted",
    Running = "Running",
    Succeeded = "Succeeded",
    Undefined = "Undefined"
}

// @public
export interface Operation {
    createdDateTime: Date;
    error?: ErrorModel;
    etag?: string;
    lastActionDateTime: Date;
    operationId: string;
    resourceLocation?: string;
    status: OperationStatus;
    traceId?: string;
    updateId?: UpdateId;
}

// @public
export interface OperationFilter {
    status?: OperationFilterStatus;
}

// @public
export type OperationFilterStatus = string;

// @public
export type OperationStatus = string;

// @public
export interface PageableListOfDeploymentDeviceStates {
    nextLink?: string;
    value?: DeploymentDeviceState[];
}

// @public
export interface PageableListOfDeployments {
    nextLink?: string;
    value?: Deployment[];
}

// @public
export interface PageableListOfDeviceClasses {
    nextLink?: string;
    value?: DeviceClass[];
}

// @public
export interface PageableListOfDevices {
    nextLink?: string;
    value?: Device[];
}

// @public
export interface PageableListOfDeviceTags {
    nextLink?: string;
    value?: DeviceTag[];
}

// @public
export interface PageableListOfGroups {
    nextLink?: string;
    value?: Group[];
}

// @public
export interface PageableListOfOperations {
    nextLink?: string;
    value?: Operation[];
}

// @public
export interface PageableListOfStrings {
    nextLink?: string;
    value?: string[];
}

// @public
export interface PageableListOfUpdatableDevices {
    nextLink?: string;
    value?: UpdatableDevices[];
}

// @public
export interface PageableListOfUpdateIds {
    nextLink?: string;
    value?: UpdateId[];
}

// @public
export interface UpdatableDevices {
    deviceCount: number;
    updateId: UpdateId;
}

// @public
export interface Update {
    compatibility: Compatibility[];
    createdDateTime: Date;
    etag?: string;
    importedDateTime: Date;
    installedCriteria: string;
    manifestVersion: string;
    updateId: UpdateId;
    updateType: string;
}

// @public
export interface UpdateCompliance {
    newUpdatesAvailableDeviceCount: number;
    onLatestUpdateDeviceCount: number;
    totalDeviceCount: number;
    updatesInProgressDeviceCount: number;
}

// @public
export interface UpdateId {
    name: string;
    provider: string;
    version: string;
}

// @public
export interface UpdatesDeleteUpdateHeaders {
    location?: string;
    operationLocation?: string;
}

// @public
export type UpdatesDeleteUpdateResponse = UpdatesDeleteUpdateHeaders & {
    _response: coreHttp.HttpResponse & {
        parsedHeaders: UpdatesDeleteUpdateHeaders;
    };
};

// @public
export interface UpdatesGetFileOptionalParams extends coreHttp.OperationOptions {
    accessCondition?: AccessCondition;
}

// @public
export type UpdatesGetFileResponse = File & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: File;
    };
};

// @public
export type UpdatesGetFilesNextResponse = PageableListOfStrings & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfStrings;
    };
};

// @public
export type UpdatesGetFilesResponse = PageableListOfStrings & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfStrings;
    };
};

// @public
export type UpdatesGetNamesNextResponse = PageableListOfStrings & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfStrings;
    };
};

// @public
export type UpdatesGetNamesResponse = PageableListOfStrings & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfStrings;
    };
};

// @public
export interface UpdatesGetOperationHeaders {
    retryAfter?: string;
}

// @public
export interface UpdatesGetOperationOptionalParams extends coreHttp.OperationOptions {
    accessCondition?: AccessCondition;
}

// @public
export type UpdatesGetOperationResponse = UpdatesGetOperationHeaders & Operation & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Operation;
        parsedHeaders: UpdatesGetOperationHeaders;
    };
};

// @public
export interface UpdatesGetOperationsNextOptionalParams extends coreHttp.OperationOptions {
    filter?: string;
    top?: number;
}

// @public
export type UpdatesGetOperationsNextResponse = PageableListOfOperations & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfOperations;
    };
};

// @public
export interface UpdatesGetOperationsOptionalParams extends coreHttp.OperationOptions {
    filter?: string;
    top?: number;
}

// @public
export type UpdatesGetOperationsResponse = PageableListOfOperations & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfOperations;
    };
};

// @public
export type UpdatesGetProvidersNextResponse = PageableListOfStrings & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfStrings;
    };
};

// @public
export type UpdatesGetProvidersResponse = PageableListOfStrings & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfStrings;
    };
};

// @public
export interface UpdatesGetUpdateOptionalParams extends coreHttp.OperationOptions {
    accessCondition?: AccessCondition;
}

// @public
export type UpdatesGetUpdateResponse = Update & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Update;
    };
};

// @public
export type UpdatesGetVersionsNextResponse = PageableListOfStrings & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfStrings;
    };
};

// @public
export type UpdatesGetVersionsResponse = PageableListOfStrings & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: PageableListOfStrings;
    };
};

// @public
export interface UpdatesImportUpdateHeaders {
    location?: string;
    operationLocation?: string;
}

// @public
export type UpdatesImportUpdateResponse = UpdatesImportUpdateHeaders & {
    _response: coreHttp.HttpResponse & {
        parsedHeaders: UpdatesImportUpdateHeaders;
    };
};


// (No @packageDocumentation comment for this package)

```
