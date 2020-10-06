/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { ApplicationInsightsClientOptionalParams } from "./models";

const packageName = "@azure/monitor-opentelemetry-exporter";
const packageVersion = "1.0.0";

export class ApplicationInsightsClientContext extends coreHttp.ServiceClient {
  host: string;

  /**
   * Initializes a new instance of the ApplicationInsightsClientContext class.
   * @param options The parameter options
   */
  constructor(options?: ApplicationInsightsClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{Host}/v2";

    // Assigning values to Constant parameters
    this.host = options.host || "https://dc.services.visualstudio.com";
  }
}
