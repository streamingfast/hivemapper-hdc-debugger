// @generated by protoc-gen-es v1.2.1 with parameter "target=js"
// @generated from file proto/sf/events/v1/events.proto (package sf.events.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message sf.events.v1.EventsRequest
 */
export const EventsRequest = proto3.makeMessageType(
  "sf.events.v1.EventsRequest",
  () => [
    { no: 1, name: "includes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "excludes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message sf.events.v1.EventsResponse
 */
export const EventsResponse = proto3.makeMessageType(
  "sf.events.v1.EventsResponse",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "payload", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

