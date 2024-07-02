      "use strict";
      let $stop;
      exports.start = async function() {
        if ($stop) {
          throw Error('service already started');
        }
        const client = await 
          (await (async () => {
            const $Closure3Client = 
          require("C:/Users/WIN10/Desktop/FeverTokens - internship/winglang/winglang demo/target/test/main.wsim/.wing/inflight.$Closure3-2.cjs")({
            $Util: 
      require("C:/Users/WIN10/Desktop/FeverTokens - internship/winglang/winglang demo/target/test/main.wsim/.wing/inflight.Util-2.cjs")({
      })
    ,
            $clientConfig: {"endpoint": process.env["WING_TOKEN_HTTP_LOCALHOST_WSIM_ROOT_ENV0_DYNAMODBHOST_7JOQ92VWH6OAVMXYPWX9O_CONTAINER_ATTRS_HOST_PORT"],"region": "local","credentials": {"accessKeyId": "local","secretAccessKey": "local",},},
            $props_attributes: [{"name": "id","type": "S",}],
            $props_globalSecondaryIndex: undefined,
            $props_hashKey: "id",
            $props_rangeKey: undefined,
            $props_timeToLiveAttribute: undefined,
            $state: (function() {
  let handle = process.env.STATE_HANDLE_390bdf1b;
  if (!handle) {
    throw new Error("Missing environment variable: STATE_HANDLE_390bdf1b");
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
            $tableName: "c8b90b5903f6bfcb82edba904887af49b87f24ebf8",
            $util_Util: require("C:/Users/WIN10/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/util/util.js").Util,
          })
        ;
            const client = new $Closure3Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ;
        const noop = () => {};
        $stop = (await client.handle()) ?? noop;
      };

      exports.stop = async function() {
        if (!$stop) {
          throw Error('service not started');
        }
        await $stop();
        $stop = undefined;
      };
      