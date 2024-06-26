"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $addTask }) {
  class $Closure4 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(request) {
      const id = (await $addTask.invoke(request.body));
      return ({"status": 200});
    }
  }
  return $Closure4;
}
//# sourceMappingURL=inflight.$Closure4-1.cjs.map