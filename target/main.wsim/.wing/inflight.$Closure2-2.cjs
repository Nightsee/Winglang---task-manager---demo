"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $Util, $__parent_this_2_host_endpoint, $__parent_this_2_tableName, $handler, $options }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      (await $Util.processRecordsAsync($__parent_this_2_host_endpoint, $__parent_this_2_tableName, $handler, $options));
    }
  }
  return $Closure2;
}
//# sourceMappingURL=inflight.$Closure2-2.cjs.map