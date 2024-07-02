"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({  }) {
  class Table {
    constructor({ $this_implementation }) {
      this.$this_implementation = $this_implementation;
    }
    async delete(options) {
      return (await this.$this_implementation.delete(options));
    }
    async get(options) {
      return (await this.$this_implementation.get(options));
    }
    async put(options) {
      return (await this.$this_implementation.put(options));
    }
    async transactWrite(options) {
      return (await this.$this_implementation.transactWrite(options));
    }
    async scan(options) {
      return (await this.$this_implementation.scan(options));
    }
    async query(options) {
      return (await this.$this_implementation.query(options));
    }
    async readWriteConnection() {
      return (await this.$this_implementation.readWriteConnection());
    }
  }
  return Table;
}
//# sourceMappingURL=inflight.Table-4.cjs.map