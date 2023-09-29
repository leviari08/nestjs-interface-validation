/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const EventDTO = t.iface([], {
  "id": "string",
  "color": t.opt("string"),
  "timeWindow": "TimeWindow",
});

export const TimeWindow = t.iface([], {
  "id": "string",
  "startTime": "string",
  "endTime": "string",
});

const exportedTypeSuite: t.ITypeSuite = {
  EventDTO,
  TimeWindow,
};
export default exportedTypeSuite;
