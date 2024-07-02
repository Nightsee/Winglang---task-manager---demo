"use strict";
const $stdlib = require('@winglang/sdk');
const $platforms = ((s) => !s ? [] : s.split(';'))(process.env.WING_PLATFORMS);
const $outdir = process.env.WING_SYNTH_DIR ?? ".";
const $wing_is_test = process.env.WING_IS_TEST === "true";
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const $extern = $helpers.createExternRequire(__dirname);
class $Root extends $stdlib.std.Resource {
  constructor($scope, $id) {
    super($scope, $id);
    $helpers.nodeof(this).root.$preflightTypesMap = { };
    let $preflightTypesMap = {};
    const cloud = $stdlib.cloud;
    const dynamodb = $helpers.bringJs(`${__dirname}/preflight.dynamodb-6.cjs`, $preflightTypesMap);
    $helpers.nodeof(this).root.$preflightTypesMap = $preflightTypesMap;
    class $Closure1 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure1-5.cjs")({
            $counter: ${$stdlib.core.liftObject(counter)},
            $db: ${$stdlib.core.liftObject(db)},
            $std_Json: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"))},
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
            [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), [].concat(["parse"], ["stringify"])],
            [counter, ["inc"]],
            [db, ["put"]],
          ],
          "$inflight_init": [
            [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), []],
            [counter, []],
            [db, []],
          ],
        });
      }
    }
    class $Closure2 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure2-5.cjs")({
            $db: ${$stdlib.core.liftObject(db)},
            $std_Json: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"))},
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
            [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), ["stringify"]],
            [db, ["delete"]],
          ],
          "$inflight_init": [
            [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), []],
            [db, []],
          ],
        });
      }
    }
    class $Closure3 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure3-5.cjs")({
            $db: ${$stdlib.core.liftObject(db)},
            $std_Json: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"))},
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
            [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), ["stringify"]],
            [db, ["scan"]],
          ],
          "$inflight_init": [
            [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), []],
            [db, []],
          ],
        });
      }
    }
    class $Closure4 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure4-5.cjs")({
            $getTasks: ${$stdlib.core.liftObject(getTasks)},
            $std_Json: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"))},
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure4Client = ${$Closure4._toInflightType()};
            const client = new $Closure4Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      get _liftMap() {
        return ({
          "handle": [
            [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), [].concat(["parse"], ["stringify"])],
            [getTasks, ["invoke"]],
          ],
          "$inflight_init": [
            [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), []],
            [getTasks, []],
          ],
        });
      }
    }
    class $Closure5 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure5-5.cjs")({
            $addTask: ${$stdlib.core.liftObject(addTask)},
            $std_Json: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"))},
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure5Client = ${$Closure5._toInflightType()};
            const client = new $Closure5Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      get _liftMap() {
        return ({
          "handle": [
            [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), [].concat(["parse"], ["stringify"])],
            [addTask, ["invoke"]],
          ],
          "$inflight_init": [
            [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), []],
            [addTask, []],
          ],
        });
      }
    }
    class $Closure6 extends $stdlib.std.AutoIdResource {
      _id = $stdlib.core.closureId();
      constructor($scope, $id, ) {
        super($scope, $id);
        $helpers.nodeof(this).hidden = true;
      }
      static _toInflightType() {
        return `
          require("${$helpers.normalPath(__dirname)}/inflight.$Closure6-5.cjs")({
            $deleteTask: ${$stdlib.core.liftObject(deleteTask)},
            $std_Json: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"))},
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure6Client = ${$Closure6._toInflightType()};
            const client = new $Closure6Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      get _liftMap() {
        return ({
          "handle": [
            [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), ["parse"]],
            [deleteTask, ["invoke"]],
          ],
          "$inflight_init": [
            [$stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"), []],
            [deleteTask, []],
          ],
        });
      }
    }
    const website = this.node.root.new("@winglang/sdk.cloud.Website", cloud.Website, this, "Website", { path: "./public" });
    const api = this.node.root.new("@winglang/sdk.cloud.Api", cloud.Api, this, "Api", ({"cors": true}));
    const counter = this.node.root.new("@winglang/sdk.cloud.Counter", cloud.Counter, this, "Counter");
    const db = new dynamodb.Table(this, "Table", { attributes: [({"name": "id", "type": "S"})], hashKey: "id" });
    const addTask = this.node.root.new("@winglang/sdk.cloud.Function", cloud.Function, this, "Add Task", new $Closure1(this, "$Closure1"));
    const deleteTask = this.node.root.new("@winglang/sdk.cloud.Function", cloud.Function, this, "Delete Task", new $Closure2(this, "$Closure2"));
    const getTasks = this.node.root.new("@winglang/sdk.cloud.Function", cloud.Function, this, "get tasks", new $Closure3(this, "$Closure3"));
    (api.get("/", new $Closure4(this, "$Closure4")));
    (api.post("/add", new $Closure5(this, "$Closure5")));
    (api.delete("/delete/:id", new $Closure6(this, "$Closure6")));
  }
}
const $PlatformManager = new $stdlib.platform.PlatformManager({platformPaths: $platforms});
const $APP = $PlatformManager.createApp({ outdir: $outdir, name: "main", rootConstruct: $Root, isTestEnvironment: $wing_is_test, entrypointDir: process.env['WING_SOURCE_DIR'], rootId: process.env['WING_ROOT_ID'] });
$APP.synth();
//# sourceMappingURL=preflight.cjs.map