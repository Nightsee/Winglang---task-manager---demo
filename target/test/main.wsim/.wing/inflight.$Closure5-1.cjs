"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $deleteTask }) {
  class $Closure5 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      const taskid = ((obj, key) => { if (!(key in obj)) throw new Error(`Map does not contain key: "${key}"`); return obj[key]; })(request.vars, "id");
      (await $deleteTask.invoke(taskid));
      return ({"status": 200});
    }
  }
  return $Closure5;
}
//# sourceMappingURL=inflight.$Closure5-1.cjs.map