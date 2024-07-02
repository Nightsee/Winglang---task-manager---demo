"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $Util, $handler }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(eventStr) {
      const event = eventStr;
      for (const record of event.Records) {
        (await $handler(({"eventID": record.eventID, "eventName": record.eventName, "dynamodb": ({"ApproximateCreationDateTime": record.dynamodb.ApproximateCreationDateTime, "Keys": (await $Util.safeUnmarshall(record.dynamodb.Keys, ({"wrapNumbers": true}))), "NewImage": (await $Util.safeUnmarshall(record.dynamodb.NewImage, ({"wrapNumbers": true}))), "OldImage": (await $Util.safeUnmarshall(record.dynamodb.OldImage, ({"wrapNumbers": true}))), "SequenceNumber": record.dynamodb.SequenceNumber, "SizeBytes": record.dynamodb.SizeBytes, "StreamViewType": record.dynamodb.StreamViewType})})));
      }
    }
  }
  return $Closure1;
}
//# sourceMappingURL=inflight.$Closure1-3.cjs.map