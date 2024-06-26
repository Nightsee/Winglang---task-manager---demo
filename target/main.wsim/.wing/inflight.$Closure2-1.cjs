"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $db }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(taskid) {
      {
        const $if_let_value = taskid;
        if ($if_let_value != undefined) {
          const id = $if_let_value;
          (await $db.delete(id));
          return "azd";
        }
      }
    }
  }
  return $Closure2;
}
//# sourceMappingURL=inflight.$Closure2-1.cjs.map