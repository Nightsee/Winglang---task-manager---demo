"use strict";
const $stdlib = require('@winglang/sdk');
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const $extern = $helpers.createExternRequire(__dirname);
let $preflightTypesMap = {};
const cloud = $stdlib.cloud;
const aws = $stdlib.aws;
const cdktf = require("cdktf");
const tfaws = require("@cdktf/provider-aws");
const dynamodb_types = $helpers.bringJs(`${__dirname}/preflight.dynamodbtypes-1.cjs`, $preflightTypesMap);
const dynamodb_client = $helpers.bringJs(`${__dirname}/preflight.dynamodbclient-2.cjs`, $preflightTypesMap);
class Util extends $stdlib.std.Resource {
  constructor($scope, $id, ) {
    super($scope, $id);
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.Util-3.cjs")({
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
        [Util, []],
      ],
    });
  }
  static get _liftTypeMap() {
    return ({
      "unmarshall": [
      ],
      "safeUnmarshall": [
        [Util, ["unmarshall"]],
      ],
    });
  }
}
class Table_tfaws extends $stdlib.std.Resource {
  constructor($scope, $id, props) {
    super($scope, $id);
    this.table = this.node.root.new("@cdktf/provider-aws.dynamodbTable.DynamodbTable", tfaws.dynamodbTable.DynamodbTable, this, "DynamodbTable", ({"name": (props.name ?? String.raw({ raw: ["", "-", ""] }, ($helpers.nodeof(this).path.replaceAll("/", "-").substring(21, ((255 + 21) - 9))), ($helpers.nodeof(this).addr.substring((42 - 8))))), "attribute": props.attributes, "hashKey": props.hashKey, "rangeKey": props.rangeKey, "billingMode": "PAY_PER_REQUEST", "streamEnabled": true, "streamViewType": "NEW_AND_OLD_IMAGES", "pointInTimeRecovery": ({"enabled": props.pointInTimeRecovery})}));
    this.tableName = this.table.name;
    this.connection = ({"tableName": this.tableName});
  }
  setStreamConsumer(handler, options) {
    class $Closure1 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure1-3.cjs")({
            $Util: ${$stdlib.core.liftObject(Util)},
            $handler: ${$stdlib.core.liftObject(handler)},
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
            [Util, ["safeUnmarshall"]],
            [handler, ["handle"]],
          ],
          "$inflight_init": [
            [Util, []],
            [handler, []],
          ],
        });
      }
    }
    const consumer = this.node.root.new("@winglang/sdk.cloud.Function", cloud.Function, this, "Function", new $Closure1(this, "$Closure1"));
    {
      const $if_let_value = (aws.Function.from(consumer));
      if ($if_let_value != undefined) {
        const lambda = $if_let_value;
        (lambda.addPolicyStatements(({"actions": ["dynamodb:DescribeStream", "dynamodb:GetRecords", "dynamodb:GetShardIterator", "dynamodb:ListStreams"], "effect": aws.Effect.ALLOW, "resources": [this.table.streamArn]})));
        this.node.root.new("@cdktf/provider-aws.lambdaEventSourceMapping.LambdaEventSourceMapping", tfaws.lambdaEventSourceMapping.LambdaEventSourceMapping, this, "LambdaEventSourceMapping", ({"eventSourceArn": this.table.streamArn, "functionName": lambda.functionName, "batchSize": options?.batchSize, "startingPosition": options?.startingPosition}));
      }
    }
  }
  onLift(host, ops) {
    {
      const $if_let_value = (aws.Function.from(host));
      if ($if_let_value != undefined) {
        const lambda = $if_let_value;
        const actions = [];
        if (ops.includes("delete")) {
          actions.push("dynamodb:DeleteItem");
        }
        if (ops.includes("get")) {
          actions.push("dynamodb:GetItem");
        }
        if (ops.includes("put")) {
          actions.push("dynamodb:PutItem");
        }
        if (ops.includes("scan")) {
          actions.push("dynamodb:Scan");
        }
        if (ops.includes("query")) {
          actions.push("dynamodb:Query");
        }
        if (ops.includes("transactWrite")) {
          actions.push("dynamodb:ConditionCheckItem", "dynamodb:PutItem", "dynamodb:UpdateItem", "dynamodb:DeleteItem", "dynamodb:GetItem");
        }
        if (ops.includes("readWriteConnection")) {
          actions.push("dynamodb:*");
        }
        if ((ops.length > 0)) {
          (lambda.addPolicyStatements(({"actions": [...(actions)], "effect": aws.Effect.ALLOW, "resources": [this.table.arn]})));
        }
      }
    }
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.Table_tfaws-3.cjs")({
        $dynamodb_client_Client: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(dynamodb_client.Client, "", "Client"))},
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const Table_tfawsClient = ${Table_tfaws._toInflightType()};
        const client = new Table_tfawsClient({
          $this_connection: ${$stdlib.core.liftObject(this.connection)},
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
        [this.tableName, []],
      ],
      "client": [
      ],
    });
  }
}
module.exports = { $preflightTypesMap, Table_tfaws };
//# sourceMappingURL=preflight.dynamodbtfaws-4.cjs.map