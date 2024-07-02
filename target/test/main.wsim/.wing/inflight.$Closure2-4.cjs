"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $__parent_this_2_tableName, $adminEndpoint }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      return String.raw({ raw: ["", "/tables/", ""] }, $adminEndpoint, $__parent_this_2_tableName);
    }
  }
  return $Closure2;
}
//# sourceMappingURL=inflight.$Closure2-4.cjs.map