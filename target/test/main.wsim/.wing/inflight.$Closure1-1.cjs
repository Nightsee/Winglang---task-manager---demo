"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $counter, $db, $std_Json }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(data) {
      {
        const $if_let_value = data;
        if ($if_let_value != undefined) {
          const body = $if_let_value;
          const taskdata = JSON.parse(body);
          const id = String.raw({ raw: ["", ""] }, (await $counter.inc()));
          (await $db.insert(id, taskdata));
          return id;
        }
      }
    }
  }
  return $Closure1;
}
//# sourceMappingURL=inflight.$Closure1-1.cjs.map