"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure1Client = 
          require("C:/Users/WIN10/Desktop/FeverTokens - internship/winglang/winglang demo/target/test/main.wsim/.wing/inflight.$Closure1-4.cjs")({
            $__parent_this_1_tableName: process.env["WING_TOKEN_WSIM_ROOT_ENV0_TABLE_TABLE_SIM_STATE_ATTRS_TABLENAME"],
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        );
  return await $handler.handle(event);
};
process.on("uncaughtException", (reason) => {
  process.send({ type: "error", reason });
});

process.on("message", async (message) => {
  const { fn, args } = message;
  const value = await exports[fn](...args);
  process.send({ type: "ok", value });
});