// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { OperationType, ResourceType } from "../../common";

export interface ConflictDefinition {
  /** The id of the conflict */
  id?: string;
  /** Source resource id */
  resourceId?: string;
  resourceType?: ResourceType;
  operationType?: OperationType;
  content?: string;
}
