"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $dynamodb_client_Client }) {
  class Table_sim {
    constructor({ $this_connection, $this_host_endpoint, $this_tableName }) {
      this.$this_connection = $this_connection;
      this.$this_host_endpoint = $this_host_endpoint;
      this.$this_tableName = $this_tableName;
    }
    async delete(options) {
      return (await this.client.delete(options));
    }
    async get(options) {
      return (await this.client.get(options));
    }
    async put(options) {
      return (await this.client.put(options));
    }
    async transactWrite(options) {
      return (await this.client.transactWrite(options));
    }
    async scan(options) {
      return (await this.client.scan(options));
    }
    async query(options) {
      return (await this.client.query(options));
    }
    async readWriteConnection() {
      return this.$this_connection;
    }
    async $inflight_init() {
      this.client = (await (async () => {const o = new $dynamodb_client_Client({ tableName: this.$this_tableName, endpoint: this.$this_host_endpoint, region: "local", credentials: ({"accessKeyId": "local", "secretAccessKey": "local"}) }); await o.$inflight_init?.(); return o; })());
    }
  }
  return Table_sim;
}
//# sourceMappingURL=inflight.Table_sim-2.cjs.map