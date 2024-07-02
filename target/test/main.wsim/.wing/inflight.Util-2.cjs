"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({  }) {
  class Util {
    constructor({  }) {
    }
    static async getPort() {
      return (require("@winglibs/dynamodb/dynamodb.mjs")["getPort"])()
    }
    static async createClient(options) {
      return (require("@winglibs/dynamodb/dynamodb.mjs")["createClient"])(options)
    }
    static async processRecordsAsync(endpoint, tableName, handler, options) {
      return (require("@winglibs/dynamodb/dynamodb.mjs")["processRecordsAsync"])(endpoint, tableName, handler, options)
    }
    static async startDbAdmin(options) {
      return (require("@winglibs/dynamodb/dynamodb.mjs")["startDbAdmin"])(options)
    }
  }
  return Util;
}
//# sourceMappingURL=inflight.Util-2.cjs.map