"use strict";
const $stdlib = require('@winglang/sdk');
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const $extern = $helpers.createExternRequire(__dirname);
let $preflightTypesMap = {};
const dynamodb_types = $helpers.bringJs(`${__dirname}/preflight.dynamodbtypes-1.cjs`, $preflightTypesMap);
class Util extends $stdlib.std.Resource {
  constructor($scope, $id, ) {
    super($scope, $id);
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.Util-1.cjs")({
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const UtilClient = ${Util._toInflightType()};
        const client = new UtilClient({
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    `;
  }
  get _liftMap() {
    return ({
      "$inflight_init": [
      ],
    });
  }
  static get _liftTypeMap() {
    return ({
      "createDocumentClient": [
      ],
    });
  }
}
class Client extends $stdlib.std.Resource {
  constructor($scope, $id, ) {
    super($scope, $id);
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.Client-1.cjs")({
        $Util: ${$stdlib.core.liftObject(Util)},
        $std_Json: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"))},
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const ClientClient = ${Client._toInflightType()};
        const client = new ClientClient({
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    `;
  }
  get _liftMap() {
    return ({
      "delete": [
        [this, [].concat(["tableName"], ["client"])],
      ],
      "get": [
        [this, [].concat(["tableName"], ["client"])],
      ],
      "put": [
        [this, [].concat(["tableName"], ["client"])],
      ],
      "transactWrite": [
        [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), ["deepCopy"]],
        [this, [].concat(["tableName"], ["client"])],
      ],
      "scan": [
        [this, [].concat(["tableName"], ["client"])],
      ],
      "query": [
        [this, [].concat(["tableName"], ["client"])],
      ],
      "$inflight_init": [
        [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), []],
        [Util, ["createDocumentClient"]],
        [this, [].concat(["tableName"], ["client"])],
      ],
      "tableName": [
      ],
      "client": [
      ],
    });
  }
}
if ($preflightTypesMap[2]) { throw new Error("Client is already in type map"); }
$preflightTypesMap[2] = Client;
module.exports = { $preflightTypesMap, Client };
//# sourceMappingURL=preflight.dynamodbclient-2.cjs.map