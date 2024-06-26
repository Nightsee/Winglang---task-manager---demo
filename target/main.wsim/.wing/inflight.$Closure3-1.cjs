"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $db, $std_Json }) {
  class $Closure3 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const result = [];
      let i = 0;
      for (const task of (await $db.list())) {
        ((obj, idx, value) => { obj[idx] = value; })(result, i, task);
        i = (i + 1);
      }
      return ({"status": 200, "body": ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(result)});
    }
  }
  return $Closure3;
}
//# sourceMappingURL=inflight.$Closure3-1.cjs.map