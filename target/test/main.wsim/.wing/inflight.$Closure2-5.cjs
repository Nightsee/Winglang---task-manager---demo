"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $db, $std_Json }) {
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
          try {
            (await $db.delete({ Key: ({"id": id}), ReturnValues: "NONE" }));
            return ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(({"success": true}));
          }
          catch {
            return ((json, opts) => { return JSON.stringify(json, null, opts?.indent) })(({"success": false}));
          }
        }
      }
    }
  }
  return $Closure2;
}
//# sourceMappingURL=inflight.$Closure2-5.cjs.map