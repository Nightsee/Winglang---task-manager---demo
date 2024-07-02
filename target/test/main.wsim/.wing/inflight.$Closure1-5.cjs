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
          try {
            const taskdata = JSON.parse(body);
            const id = String.raw({ raw: ["", ""] }, (await $counter.inc()));
            (await $db.put({ Item: ({"id": id, "task": $helpers.lookup(taskdata, "task")}) }));
            return ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(({"success": true, "message": "adding ...."}));
          }
          catch ($error_e) {
            const e = $error_e.message;
            console.log(e);
            return ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(({"success": false, "message": "can't add task."}));
          }
        }
      }
    }
  }
  return $Closure1;
}
//# sourceMappingURL=inflight.$Closure1-5.cjs.map