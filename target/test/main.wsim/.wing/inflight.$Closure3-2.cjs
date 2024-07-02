"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $Util, $clientConfig, $props_attributes, $props_globalSecondaryIndex, $props_hashKey, $props_rangeKey, $props_timeToLiveAttribute, $state, $tableName, $util_Util }) {
  class $Closure3 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      const client = (await $Util.createClient($clientConfig));
      const attributeDefinitions = [];
      for (const attributeDefinition of $props_attributes) {
        attributeDefinitions.push(({"AttributeName": attributeDefinition.name, "AttributeType": attributeDefinition.type}));
      }
      const keySchemas = [];
      keySchemas.push(({"AttributeName": $props_hashKey, "KeyType": "HASH"}));
      {
        const $if_let_value = $props_rangeKey;
        if ($if_let_value != undefined) {
          const rangeKey = $if_let_value;
          keySchemas.push(({"AttributeName": rangeKey, "KeyType": "RANGE"}));
        }
      }
      const globalSecondaryIndexes = (await (async () => {
        {
          const $if_let_value = $props_globalSecondaryIndex;
          if ($if_let_value != undefined) {
            const globalSecondaryIndex = $if_let_value;
            const indexes = [];
            for (const gsi of globalSecondaryIndex) {
              const keySchema = [];
              keySchema.push(({"AttributeName": gsi.hashKey, "KeyType": "HASH"}));
              {
                const $if_let_value = gsi.rangeKey;
                if ($if_let_value != undefined) {
                  const rangeKey = $if_let_value;
                  keySchema.push(({"AttributeName": rangeKey, "KeyType": "RANGE"}));
                }
              }
              const provisionedThroughput = (await (async () => {
                if (($helpers.neq(gsi.readCapacity, undefined) || $helpers.neq(gsi.writeCapacity, undefined))) {
                  return ({"ReadCapacityUnits": gsi.readCapacity, "WriteCapacityUnits": gsi.writeCapacity});
                }
                return undefined;
              })());
              indexes.push(({"IndexName": gsi.name, "KeySchema": [...(keySchema)], "Projection": ({"ProjectionType": gsi.projectionType, "NonKeyAttributes": gsi.nonKeyAttributes}), "ProvisionedThroughput": provisionedThroughput}));
            }
            return [...(indexes)];
          }
        }
        return undefined;
      })());
      try {
        (await client.deleteTable(({"TableName": $tableName})));
      }
      catch ($error_e) {
        const e = $error_e.message;
      }
      (await $util_Util.waitUntil((async () => {
        try {
          (await client.createTable(({"TableName": $tableName, "AttributeDefinitions": [...(attributeDefinitions)], "KeySchema": [...(keySchemas)], "GlobalSecondaryIndexes": globalSecondaryIndexes, "BillingMode": "PAY_PER_REQUEST", "StreamSpecification": ({"StreamEnabled": true, "StreamViewType": "NEW_AND_OLD_IMAGES"})})));
          (await $util_Util.waitUntil((async () => {
            try {
              (await client.describeTable(({"TableName": $tableName})));
              return true;
            }
            catch ($error_error) {
              const error = $error_error.message;
              return false;
            }
          })));
          {
            const $if_let_value = $props_timeToLiveAttribute;
            if ($if_let_value != undefined) {
              const timeToLiveAttribute = $if_let_value;
              (await client.updateTimeToLive(({"TableName": $tableName, "TimeToLiveSpecification": ({"AttributeName": timeToLiveAttribute, "Enabled": true})})));
            }
          }
          (await $state.set("tableName", $tableName));
          return true;
        }
        catch ($error_error) {
          const error = $error_error.message;
          return false;
        }
      })));
    }
  }
  return $Closure3;
}
//# sourceMappingURL=inflight.$Closure3-2.cjs.map