"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $addTask, $std_Json }) {
  class $Closure5 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      const res = (await $addTask.invoke(request.body));
      const tmp = JSON.parse($helpers.unwrap(res));
      if ($helpers.eq($helpers.lookup(tmp, "success"), true)) {
        return ({"status": 200, "headers": ({"Content-Type": "application/json"}), "body": ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(({"message": $helpers.lookup(tmp, "message")}))});
      }
      else {
        return ({"status": 504, "headers": ({"Content-Type": "application/json"}), "body": ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(({"message": $helpers.lookup(tmp, "message")}))});
      }
    }
  }
  return $Closure5;
}
//# sourceMappingURL=inflight.$Closure5-5.cjs.map