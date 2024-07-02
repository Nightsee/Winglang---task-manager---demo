"use strict";
const $stdlib = require('@winglang/sdk');
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const $extern = $helpers.createExternRequire(__dirname);
const $preflightTypesMap = {};
Object.assign(module.exports, $helpers.bringJs(`${__dirname}/preflight.dynamodb-5.cjs`, $preflightTypesMap));
Object.assign(module.exports, $helpers.bringJs(`${__dirname}/preflight.dynamodbtfaws-4.cjs`, $preflightTypesMap));
Object.assign(module.exports, $helpers.bringJs(`${__dirname}/preflight.dynamodbsim-3.cjs`, $preflightTypesMap));
Object.assign(module.exports, $helpers.bringJs(`${__dirname}/preflight.dynamodbtypes-1.cjs`, $preflightTypesMap));
Object.assign(module.exports, $helpers.bringJs(`${__dirname}/preflight.dynamodbclient-2.cjs`, $preflightTypesMap));
module.exports = { ...module.exports, $preflightTypesMap };
//# sourceMappingURL=preflight.dynamodb-6.cjs.map