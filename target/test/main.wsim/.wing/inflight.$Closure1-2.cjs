"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $Util, $currentdir, $homeEnv, $pathEnv, $props_endpoint, $state }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      try {
        const res = (await $Util.startDbAdmin({ endpoint: $props_endpoint, currentdir: $currentdir, homeEnv: $homeEnv, pathEnv: $pathEnv }));
        (await $state.set("dbAdminPort", String.raw({ raw: ["", ""] }, (await res.port()))));
        return (async () => {
          (await res.close());
        });
      }
      catch ($error_e) {
        const e = $error_e.message;
        console.log(e);
        throw new Error(e);
      }
    }
  }
  return $Closure1;
}
//# sourceMappingURL=inflight.$Closure1-2.cjs.map