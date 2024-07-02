"use strict";
const $stdlib = require('@winglang/sdk');
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const $extern = $helpers.createExternRequire(__dirname);
let $preflightTypesMap = {};
const aws = $stdlib.aws;
const util = $stdlib.util;
const ui = $stdlib.ui;
const dynamodb_types = $helpers.bringJs(`${__dirname}/preflight.dynamodbtypes-1.cjs`, $preflightTypesMap);
const dynamodb_sim = $helpers.bringJs(`${__dirname}/preflight.dynamodbsim-3.cjs`, $preflightTypesMap);
const dynamodb_tfaws = $helpers.bringJs(`${__dirname}/preflight.dynamodbtfaws-4.cjs`, $preflightTypesMap);
class Table extends $stdlib.std.Resource {
  constructor($scope, $id, props) {
    super($scope, $id);
    const target = (util.Util.env("WING_TARGET"));
    if ($helpers.eq(target, "sim")) {
      const sim = new dynamodb_sim.Table_sim(this, "Table_sim", props);
      this.connection = sim.connection;
      this.tableName = sim.tableName;
      this.adminEndpoint = sim.adminEndpoint;
      this.implementation = sim;
      $helpers.nodeof(sim).hidden = true;
    }
    else if ($helpers.eq(target, "tf-aws")) {
      const tfaws = new dynamodb_tfaws.Table_tfaws(this, "Table_tfaws", props);
      this.connection = tfaws.connection;
      this.tableName = tfaws.tableName;
      this.implementation = tfaws;
      $helpers.nodeof(tfaws).hidden = true;
    }
    else {
      throw new Error(String.raw({ raw: ["Unsupported target ", ""] }, target));
    }
    const __parent_this_1 = this;
    class $Closure1 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure1-4.cjs")({
            $__parent_this_1_tableName: ${$stdlib.core.liftObject(__parent_this_1.tableName)},
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
            [__parent_this_1.tableName, []],
          ],
          "$inflight_init": [
            [__parent_this_1.tableName, []],
          ],
        });
      }
    }
    this.node.root.new("@winglang/sdk.ui.Field", ui.Field, this, "Table Name", "Table Name", new $Closure1(this, "$Closure1"));
    {
      const $if_let_value = this.adminEndpoint;
      if ($if_let_value != undefined) {
        const adminEndpoint = $if_let_value;
        const __parent_this_2 = this;
        class $Closure2 extends $stdlib.std.AutoIdResource {
          _id = $stdlib.core.closureId();
          constructor($scope, $id, ) {
            super($scope, $id);
            $helpers.nodeof(this).hidden = true;
          }
          static _toInflightType() {
            return `
              require("${$helpers.normalPath(__dirname)}/inflight.$Closure2-4.cjs")({
                $__parent_this_2_tableName: ${$stdlib.core.liftObject(__parent_this_2.tableName)},
                $adminEndpoint: ${$stdlib.core.liftObject(adminEndpoint)},
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
                [__parent_this_2.tableName, []],
                [adminEndpoint, []],
              ],
              "$inflight_init": [
                [__parent_this_2.tableName, []],
                [adminEndpoint, []],
              ],
            });
          }
        }
        this.node.root.new("@winglang/sdk.ui.Field", ui.Field, this, "Admin", "Admin", new $Closure2(this, "$Closure2"), { link: true });
      }
    }
    $helpers.nodeof(this).icon = "table-cells";
    $helpers.nodeof(this).color = "sky";
  }
  setStreamConsumer(handler, opts) {
    (this.implementation.setStreamConsumer(handler, opts));
  }
  onLift(host, ops) {
    (this.implementation.onLift(host, ops));
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.Table-4.cjs")({
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const TableClient = ${Table._toInflightType()};
        const client = new TableClient({
          $this_implementation: ${$stdlib.core.liftObject(this.implementation)},
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    `;
  }
  get _liftMap() {
    return ({
      "delete": [
        [this.implementation, ["delete"]],
      ],
      "get": [
        [this.implementation, ["get"]],
      ],
      "put": [
        [this.implementation, ["put"]],
      ],
      "transactWrite": [
        [this.implementation, ["transactWrite"]],
      ],
      "scan": [
        [this.implementation, ["scan"]],
      ],
      "query": [
        [this.implementation, ["query"]],
      ],
      "readWriteConnection": [
        [this.implementation, ["readWriteConnection"]],
      ],
      "$inflight_init": [
        [this.implementation, []],
      ],
    });
  }
}
module.exports = { $preflightTypesMap, Table };
//# sourceMappingURL=preflight.dynamodb-5.cjs.map