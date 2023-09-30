/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const BaseEvent = t.iface([], {
  "id": "string",
  "timeWindow": "TimeWindow",
});

export const AerialEvent = t.iface(["BaseEvent"], {
  "color": t.opt("string"),
  "crewMembers": t.array("CrewMember"),
});

export const GroundEvent = t.iface(["BaseEvent"], {
  "color": t.opt("string"),
});

export const TimeWindow = t.iface([], {
  "id": "string",
  "startTime": "string",
  "endTime": "string",
});

export const CrewMember = t.iface([], {
  "id": "string",
  "name": "string",
  "unitId": "string",
});

const exportedTypeSuite: t.ITypeSuite = {
  BaseEvent,
  AerialEvent,
  GroundEvent,
  TimeWindow,
  CrewMember,
};
export default exportedTypeSuite;
