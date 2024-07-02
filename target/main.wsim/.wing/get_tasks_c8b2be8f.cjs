"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure3Client = 
          require("C:/Users/WIN10/Desktop/FeverTokens - internship/winglang/winglang demo/target/main.wsim/.wing/inflight.$Closure3-5.cjs")({
            $db: 
      (await (async () => {
        const TableClient = 
      require("C:/Users/WIN10/Desktop/FeverTokens - internship/winglang/winglang demo/target/main.wsim/.wing/inflight.Table-4.cjs")({
      })
    ;
        const client = new TableClient({
          $this_implementation: 
      (await (async () => {
        const Table_simClient = 
      require("C:/Users/WIN10/Desktop/FeverTokens - internship/winglang/winglang demo/target/main.wsim/.wing/inflight.Table_sim-2.cjs")({
        $dynamodb_client_Client: 
      require("C:/Users/WIN10/Desktop/FeverTokens - internship/winglang/winglang demo/target/main.wsim/.wing/inflight.Client-1.cjs")({
        $Util: 
      require("C:/Users/WIN10/Desktop/FeverTokens - internship/winglang/winglang demo/target/main.wsim/.wing/inflight.Util-1.cjs")({
      })
    ,
        $std_Json: require("C:/Users/WIN10/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
      })
    ,
      })
    ;
        const client = new Table_simClient({
          $this_connection: {"tableName": "c888b05392477914fa22f9caa5e27f00facf75dcbe","clientConfig": {"endpoint": process.env["WING_TOKEN_HTTP_LOCALHOST_WSIM_ROOT_DEFAULT_DYNAMODBHOST_7JOQ92VWH6OAVMXYPWX9O_CONTAINER_ATTRS_HOST_PORT"],"region": "local","credentials": {"accessKeyId": "local","secretAccessKey": "local",},},},
          $this_host_endpoint: process.env["WING_TOKEN_HTTP_LOCALHOST_WSIM_ROOT_DEFAULT_DYNAMODBHOST_7JOQ92VWH6OAVMXYPWX9O_CONTAINER_ATTRS_HOST_PORT"],
          $this_tableName: process.env["WING_TOKEN_WSIM_ROOT_DEFAULT_TABLE_TABLE_SIM_STATE_ATTRS_TABLENAME"],
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    ,
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    ,
            $std_Json: require("C:/Users/WIN10/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
          })
        ;
            const client = new $Closure3Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        );
  return await $handler.handle(event);
};