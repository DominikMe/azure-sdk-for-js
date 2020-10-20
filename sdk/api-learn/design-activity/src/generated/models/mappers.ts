/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const PageOfComputeNodes: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PageOfComputeNodes",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "ComputeNode" } }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComputeNode: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ComputeNode",
    uberParent: "ComputeNode",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind"
    },
    modelProperties: {
      eTag: {
        serializedName: "eTag",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComputeOperationState: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ComputeOperationState",
    modelProperties: {
      createdDateTime: {
        serializedName: "createdDateTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      percentComplete: {
        constraints: {
          InclusiveMaximum: 100
        },
        serializedName: "percentComplete",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinuxComputeNode: coreHttp.CompositeMapper = {
  serializedName: "LinuxComputeNode",
  type: {
    name: "Composite",
    className: "LinuxComputeNode",
    uberParent: "ComputeNode",
    polymorphicDiscriminator: ComputeNode.type.polymorphicDiscriminator,
    modelProperties: {
      ...ComputeNode.type.modelProperties,
      sshPublicKey: {
        serializedName: "sshPublicKey",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WindowsComputeNode: coreHttp.CompositeMapper = {
  serializedName: "WindowsComputeNode",
  type: {
    name: "Composite",
    className: "WindowsComputeNode",
    uberParent: "ComputeNode",
    polymorphicDiscriminator: ComputeNode.type.polymorphicDiscriminator,
    modelProperties: {
      ...ComputeNode.type.modelProperties,
      userName: {
        serializedName: "userName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComputationsComputePiHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ComputationsComputePiHeaders",
    modelProperties: {
      operationLocation: {
        serializedName: "operation-location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GeneratedClientComputationHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GeneratedClientComputationHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export let discriminators = {
  ComputeNode: ComputeNode,
  "ComputeNode.LinuxComputeNode": LinuxComputeNode,
  "ComputeNode.WindowsComputeNode": WindowsComputeNode
};
