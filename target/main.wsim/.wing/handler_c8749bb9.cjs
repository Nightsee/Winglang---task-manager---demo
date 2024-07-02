"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
              (await (async () => {
                const $Closure2Client = 
              require("C:/Users/WIN10/Desktop/FeverTokens - internship/winglang/winglang demo/target/main.wsim/.wing/inflight.$Closure2-4.cjs")({
                $__parent_this_2_tableName: process.env["WING_TOKEN_WSIM_ROOT_DEFAULT_TABLE_TABLE_SIM_STATE_ATTRS_TABLENAME"],
                $adminEndpoint: process.env["WING_TOKEN_HTTP_LOCALHOST_WSIM_ROOT_DEFAULT_DYNAMODBHOST_7JOQ92VWH6OAVMXYPWX9O_ADMINUI_STATE_ATTRS_DBADMINPORT"],
              })
            ;
                const client = new $Closure2Client({
                });
                if (client.$inflight_init) { await client.$inflight_init(); }
                return client;
              })())
            );
  return await $handler.handle(event);
};