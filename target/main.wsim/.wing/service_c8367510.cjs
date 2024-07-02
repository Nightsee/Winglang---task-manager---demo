      "use strict";
      let $stop;
      exports.start = async function() {
        if ($stop) {
          throw Error('service already started');
        }
        const client = await 
          (await (async () => {
            const $Closure1Client = 
          require("C:/Users/WIN10/Desktop/FeverTokens - internship/winglang/winglang demo/target/main.wsim/.wing/inflight.$Closure1-2.cjs")({
            $Util: 
      require("C:/Users/WIN10/Desktop/FeverTokens - internship/winglang/winglang demo/target/main.wsim/.wing/inflight.Util-2.cjs")({
      })
    ,
            $currentdir: "C:/Users/WIN10/Desktop/FeverTokens - internship/winglang/winglang demo/node_modules/@winglibs/dynamodb",
            $homeEnv: "",
            $pathEnv: "C:\\Users\\WIN10\\AppData\\Local\\Programs\\Python\\Python312\\Scripts\\;C:\\Users\\WIN10\\AppData\\Local\\Programs\\Python\\Python312\\;C:\\Program Files (x86)\\NSIS\\Bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\Program Files\\Common Files\\Siemens\\Automation\\Simatic OAM\\bin;C:\\Python39\\Scripts\\;C:\\Python39\\;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\ProgramData\\chocolatey\\bin;C:\\msys64\\mingw64\\bin;C:\\MinGW\\bin;C:\\Program Files (x86)\\Intel\\Intel(R) Management Engine Components\\DAL;C:\\Program Files\\Intel\\Intel(R) Management Engine Components\\DAL;C:\\Program Files\\PuTTY\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files (x86)\\Go\\bin;C:\\Program Files\\Cloudflare\\Cloudflare WARP\\;C:\\Program Files\\Amazon\\AWSCLIV2\\;C:\\Program Files\\nodejs\\;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin\\;C:\\Users\\WIN10\\AppData\\Local\\Microsoft\\WindowsApps;E:\\Microsoft VS Code\\bin;C:\\Users\\WIN10\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\WIN10\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\WIN10\\AppData\\Local\\Programs\\mongosh\\;C:\\Program Files\\heroku\\bin;C:\\msys64\\mingw64\\bin;C:\\MinGW\\bin;C:\\Users\\WIN10\\AppData\\Local\\Programs\\Hyper\\resources\\bin;C:\\Program Files\\JetBrains\\CLion 2023.1.3\\bin;C:\\Program Files\\JetBrains\\PyCharm 2023.1.2\\bin;C:\\Users\\WIN10\\AppData\\Local\\atom\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA 2023.3.1\\bin;;C:\\Users\\WIN10\\go\\bin;C:\\Program Files\\JetBrains\\GoLand 2023.3.3\\bin;;C:\\Program Files (x86)\\NSIS\\Bin;C:\\Users\\WIN10\\AppData\\Roaming\\npm",
            $props_endpoint: process.env["WING_TOKEN_HTTP_LOCALHOST_WSIM_ROOT_DEFAULT_DYNAMODBHOST_7JOQ92VWH6OAVMXYPWX9O_CONTAINER_ATTRS_HOST_PORT"],
            $state: (function() {
  let handle = process.env.STATE_HANDLE_fb5260ee;
  if (!handle) {
    throw new Error("Missing environment variable: STATE_HANDLE_fb5260ee");
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
          })
        ;
            const client = new $Closure1Client({
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
      