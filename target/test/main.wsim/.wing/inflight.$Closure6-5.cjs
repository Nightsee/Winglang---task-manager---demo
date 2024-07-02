"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $deleteTask, $std_Json }) {
  class $Closure6 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      const taskid = ((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })(request.vars, "id");
      const res = (await $deleteTask.invoke(taskid));
      const tmp = JSON.parse($helpers.unwrap(res));
      if ($helpers.eq($helpers.lookup(tmp, "success"), true)) {
        return ({"status": 200});
      }
      else {
        return ({"status": 504});
      }
    }
  }
  return $Closure6;
}
//# sourceMappingURL=inflight.$Closure6-5.cjs.map