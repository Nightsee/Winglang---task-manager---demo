"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({  }) {
  class Util {
    constructor({  }) {
    }
    static async unmarshall(item, options) {
      return (require("@winglibs/dynamodb/dynamodb.mjs")["unmarshall"])(item, options)
    }
    static async safeUnmarshall(item, options) {
      if ($helpers.neq(item, undefined)) {
        return (await Util.unmarshall(item, options));
      }
      return undefined;
    }
  }
  return Util;
}
//# sourceMappingURL=inflight.Util-3.cjs.map