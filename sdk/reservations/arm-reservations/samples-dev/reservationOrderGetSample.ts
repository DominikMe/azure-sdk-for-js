/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ReservationOrderGetOptionalParams,
  AzureReservationAPI
} from "@azure/arm-reservations";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get the details of the `ReservationOrder`.
 *
 * @summary Get the details of the `ReservationOrder`.
 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2022-11-01/examples/GetReservationOrderDetails.json
 */
async function getReservationOrder() {
  const reservationOrderId = "a075419f-44cc-497f-b68a-14ee811d48b9";
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.reservationOrder.get(reservationOrderId);
  console.log(result);
}

/**
 * This sample demonstrates how to Get the details of the `ReservationOrder`.
 *
 * @summary Get the details of the `ReservationOrder`.
 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2022-11-01/examples/GetReservationOrderDetailsWithExpandPlanInformation.json
 */
async function getReservationWithExpandPayments() {
  const reservationOrderId = "a075419f-44cc-497f-b68a-14ee811d48b9";
  const expand = "schedule";
  const options: ReservationOrderGetOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.reservationOrder.get(reservationOrderId, options);
  console.log(result);
}

async function main() {
  await getReservationOrder();
  await getReservationWithExpandPayments();
}

main().catch(console.error);
