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
      try {
        const res = (await $db.scan());
        const tasks = res.Items;
        return ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(({"success": true, "tasks": tasks}));
      }
      catch {
        return ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(({"success": false}));
      }
    }
  }
  return $Closure3;
}
//# sourceMappingURL=inflight.$Closure3-5.cjs.map