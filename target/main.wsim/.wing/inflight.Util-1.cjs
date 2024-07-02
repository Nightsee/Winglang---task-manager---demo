"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({  }) {
  class Util {
    constructor({  }) {
    }
    static async createDocumentClient(options) {
      return (require("@winglibs/dynamodb/dynamodb.mjs")["createDocumentClient"])(options)
    }
  }
  return Util;
}
//# sourceMappingURL=inflight.Util-1.cjs.map