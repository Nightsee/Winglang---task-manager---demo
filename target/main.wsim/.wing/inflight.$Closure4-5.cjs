"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $getTasks, $std_Json }) {
  class $Closure4 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const res = (await $getTasks.invoke());
      const tmp = JSON.parse($helpers.unwrap(res));
      if ($helpers.eq($helpers.lookup(tmp, "success"), true)) {
        return ({"status": 200, "headers": ({"Content-Type": "application/json"}), "body": ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(({"tasks": $helpers.lookup(tmp, "tasks")}))});
      }
      else {
        return ({"status": 504, "headers": ({"Content-Type": "application/json"})});
      }
    }
  }
  return $Closure4;
}
//# sourceMappingURL=inflight.$Closure4-5.cjs.map