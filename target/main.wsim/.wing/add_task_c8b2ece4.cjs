"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure1Client = 
          require("C:/Users/WIN10/Desktop/FeverTokens - internship/winglang/winglang demo/target/main.wsim/.wing/inflight.$Closure1-1.cjs")({
            $counter: (function() {
  let handle = process.env.COUNTER_HANDLE_660dbe08;
  if (!handle) {
    throw new Error("Missing environment variable: COUNTER_HANDLE_660dbe08");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  const caller = process.env.WING_SIMULATOR_CALLER;
  if (!caller) {
    throw new Error("Missing environment variable: WING_SIMULATOR_CALLER");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle, caller);
})(),
            $db: (function() {
  let handle = process.env.TABLE_HANDLE_3ff47b20;
  if (!handle) {
    throw new Error("Missing environment variable: TABLE_HANDLE_3ff47b20");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  const caller = process.env.WING_SIMULATOR_CALLER;
  if (!caller) {
    throw new Error("Missing environment variable: WING_SIMULATOR_CALLER");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle, caller);
})(),
            $std_Json: require("C:/Users/WIN10/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
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