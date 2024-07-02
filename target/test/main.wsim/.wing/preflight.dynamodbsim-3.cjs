"use strict";
const $stdlib = require('@winglang/sdk');
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const $extern = $helpers.createExternRequire(__dirname);
let $preflightTypesMap = {};
const sim = $stdlib.sim;
const util = $stdlib.util;
const cloud = $stdlib.cloud;
const ui = $stdlib.ui;
const dynamodb_types = $helpers.bringJs(`${__dirname}/preflight.dynamodbtypes-1.cjs`, $preflightTypesMap);
const dynamodb_client = $helpers.bringJs(`${__dirname}/preflight.dynamodbclient-2.cjs`, $preflightTypesMap);
class Util extends $stdlib.std.Resource {
  constructor($scope, $id, ) {
    super($scope, $id);
  }
  static dirname() {
    return ($extern("@winglibs/dynamodb/dynamodb.mjs")["dirname"])()
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.Util-2.cjs")({
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
      "getPort": [
      ],
      "createClient": [
      ],
      "processRecordsAsync": [
      ],
      "startDbAdmin": [
      ],
    });
  }
}
class AdminUI extends $stdlib.std.Resource {
  constructor($scope, $id, props) {
    super($scope, $id);
    const state = this.node.root.new("@winglang/sdk.sim.State", sim.State, this, "State");
    const port = (state.token("dbAdminPort"));
    this.endpoint = String.raw({ raw: ["http://localhost:", ""] }, port);
    const currentdir = (Util.dirname());
    const homeEnv = ((util.Util.tryEnv("HOME")) ?? "");
    const pathEnv = ((util.Util.tryEnv("PATH")) ?? "");
    class $Closure1 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure1-2.cjs")({
            $Util: ${$stdlib.core.liftObject(Util)},
            $currentdir: ${$stdlib.core.liftObject(currentdir)},
            $homeEnv: ${$stdlib.core.liftObject(homeEnv)},
            $pathEnv: ${$stdlib.core.liftObject(pathEnv)},
            $props_endpoint: ${$stdlib.core.liftObject(props.endpoint)},
            $state: ${$stdlib.core.liftObject(state)},
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure1Client = ${$Closure1._toInflightType()};
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      get _liftMap() {
        return ({
          "handle": [
            [Util, ["startDbAdmin"]],
            [currentdir, []],
            [homeEnv, []],
            [pathEnv, []],
            [props.endpoint, []],
            [state, ["set"]],
          ],
          "$inflight_init": [
            [Util, []],
            [currentdir, []],
            [homeEnv, []],
            [pathEnv, []],
            [props.endpoint, []],
            [state, []],
          ],
        });
      }
    }
    this.node.root.new("@winglang/sdk.cloud.Service", cloud.Service, this, "Service", new $Closure1(this, "$Closure1"));
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.AdminUI-2.cjs")({
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const AdminUIClient = ${AdminUI._toInflightType()};
        const client = new AdminUIClient({
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
}
class Host extends $stdlib.std.Resource {
  constructor($scope, $id, ) {
    super($scope, $id);
    const container = this.node.root.new("@winglang/sdk.sim.Container", sim.Container, this, "Container", { name: "winglibs-dynamodb", image: "amazon/dynamodb-local", containerPort: 8000 });
    this.endpoint = String.raw({ raw: ["http://localhost:", ""] }, $helpers.unwrap(container.hostPort));
    if ((!$helpers.nodeof(this).app.isTestEnvironment)) {
      this.ui = new AdminUI(this, "AdminUI", { endpoint: this.endpoint });
    }
  }
  static of($scope, scope) {
    const uid = "DynamodbHost-7JOQ92VWh6OavMXYpWx9O";
    const root = $helpers.nodeof(scope).root;
    const rootNode = $helpers.nodeof(root);
    const host = ((rootNode.tryFindChild(uid)) ?? new Host(root, uid));
    $helpers.nodeof(host).hidden = true;
    return host;
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.Host-2.cjs")({
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const HostClient = ${Host._toInflightType()};
        const client = new HostClient({
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
}
class Table_sim extends $stdlib.std.Resource {
  constructor($scope, $id, props) {
    super($scope, $id);
    this.host = (Host.of(this, this));
    this.adminEndpoint = this.host.ui?.endpoint;
    const tableName = (props.name ?? $helpers.nodeof(this).addr);
    const state = this.node.root.new("@winglang/sdk.sim.State", sim.State, this, "State");
    this.tableName = (state.token("tableName"));
    const clientConfig = ({"endpoint": this.host.endpoint, "region": "local", "credentials": ({"accessKeyId": "local", "secretAccessKey": "local"})});
    this.connection = ({"tableName": tableName, "clientConfig": clientConfig});
    class $Closure3 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure3-2.cjs")({
            $Util: ${$stdlib.core.liftObject(Util)},
            $clientConfig: ${$stdlib.core.liftObject(clientConfig)},
            $props_attributes: ${$stdlib.core.liftObject(props.attributes)},
            $props_globalSecondaryIndex: ${$stdlib.core.liftObject(props.globalSecondaryIndex)},
            $props_hashKey: ${$stdlib.core.liftObject(props.hashKey)},
            $props_rangeKey: ${$stdlib.core.liftObject(props.rangeKey)},
            $props_timeToLiveAttribute: ${$stdlib.core.liftObject(props.timeToLiveAttribute)},
            $state: ${$stdlib.core.liftObject(state)},
            $tableName: ${$stdlib.core.liftObject(tableName)},
            $util_Util: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(util.Util, "@winglang/sdk/util", "Util"))},
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure3Client = ${$Closure3._toInflightType()};
            const client = new $Closure3Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      get _liftMap() {
        return ({
          "handle": [
            [$stdlib.core.toLiftableModuleType(util.Util, "@winglang/sdk/util", "Util"), ["waitUntil"]],
            [Util, ["createClient"]],
            [clientConfig, []],
            [props.attributes, []],
            [props.globalSecondaryIndex, []],
            [props.hashKey, []],
            [props.rangeKey, []],
            [props.timeToLiveAttribute, []],
            [state, ["set"]],
            [tableName, []],
          ],
          "$inflight_init": [
            [$stdlib.core.toLiftableModuleType(util.Util, "@winglang/sdk/util", "Util"), []],
            [Util, []],
            [clientConfig, []],
            [props.attributes, []],
            [props.globalSecondaryIndex, []],
            [props.hashKey, []],
            [props.rangeKey, []],
            [props.timeToLiveAttribute, []],
            [state, []],
            [tableName, []],
          ],
        });
      }
    }
    this.node.root.new("@winglang/sdk.cloud.Service", cloud.Service, this, "Service", new $Closure3(this, "$Closure3"));
  }
  setStreamConsumer(handler, options) {
    const __parent_this_2 = this;
    class $Closure2 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure2-2.cjs")({
            $Util: ${$stdlib.core.liftObject(Util)},
            $__parent_this_2_host_endpoint: ${$stdlib.core.liftObject(__parent_this_2.host.endpoint)},
            $__parent_this_2_tableName: ${$stdlib.core.liftObject(__parent_this_2.tableName)},
            $handler: ${$stdlib.core.liftObject(handler)},
            $options: ${$stdlib.core.liftObject(options)},
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure2Client = ${$Closure2._toInflightType()};
            const client = new $Closure2Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      get _liftMap() {
        return ({
          "handle": [
            [Util, ["processRecordsAsync"]],
            [__parent_this_2.host.endpoint, []],
            [__parent_this_2.tableName, []],
            [handler, ["handle"]],
            [options, []],
          ],
          "$inflight_init": [
            [Util, []],
            [__parent_this_2.host.endpoint, []],
            [__parent_this_2.tableName, []],
            [handler, []],
            [options, []],
          ],
        });
      }
    }
    this.node.root.new("@winglang/sdk.cloud.Service", cloud.Service, this, "StreamConsumer", new $Closure2(this, "$Closure2"));
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.Table_sim-2.cjs")({
        $dynamodb_client_Client: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(dynamodb_client.Client, "", "Client"))},
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const Table_simClient = ${Table_sim._toInflightType()};
        const client = new Table_simClient({
          $this_connection: ${$stdlib.core.liftObject(this.connection)},
          $this_host_endpoint: ${$stdlib.core.liftObject(this.host.endpoint)},
          $this_tableName: ${$stdlib.core.liftObject(this.tableName)},
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    `;
  }
  get _liftMap() {
    return ({
      "delete": [
      ],
      "get": [
      ],
      "put": [
      ],
      "transactWrite": [
      ],
      "scan": [
      ],
      "query": [
      ],
      "readWriteConnection": [
        [this.connection, []],
      ],
      "$inflight_init": [
        [$stdlib.core.toLiftableModuleType(dynamodb_client.Client, "", "Client"), []],
        [this.connection, []],
        [this.host.endpoint, []],
        [this.tableName, []],
      ],
      "client": [
      ],
    });
  }
}
module.exports = { $preflightTypesMap, Table_sim };
//# sourceMappingURL=preflight.dynamodbsim-3.cjs.map