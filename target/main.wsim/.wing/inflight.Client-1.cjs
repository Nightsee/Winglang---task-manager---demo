"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $Util, $std_Json }) {
  class Client {
    async delete(options) {
      const input = options;
      ((obj, key, value) => { obj[key] = value; })(input, "TableName", this.tableName);
      return (await this.client.delete(input));
    }
    async get(options) {
      const input = options;
      ((obj, key, value) => { obj[key] = value; })(input, "TableName", this.tableName);
      return (await this.client.get(input));
    }
    async put(options) {
      const input = options;
      ((obj, key, value) => { obj[key] = value; })(input, "TableName", this.tableName);
      return (await this.client.put(input));
    }
    async transactWrite(options) {
      const transactItems = [];
      for (const item of options.TransactItems) {
        {
          const $if_let_value = item.ConditionCheck;
          if ($if_let_value != undefined) {
            const operation = $if_let_value;
            const input = operation;
            ((obj, key, value) => { obj[key] = value; })(input, "TableName", this.tableName);
            transactItems.push(({"ConditionCheck": JSON.parse(JSON.stringify(input))}));
          }
          else {
            const $elif_let_value0 = item.Delete;
            if ($elif_let_value0 != undefined) {
              const operation = $elif_let_value0;
              const input = operation;
              ((obj, key, value) => { obj[key] = value; })(input, "TableName", this.tableName);
              transactItems.push(({"Delete": JSON.parse(JSON.stringify(input))}));
            }
            else {
              const $elif_let_value1 = item.Put;
              if ($elif_let_value1 != undefined) {
                const operation = $elif_let_value1;
                const input = operation;
                ((obj, key, value) => { obj[key] = value; })(input, "TableName", this.tableName);
                transactItems.push(({"Put": JSON.parse(JSON.stringify(input))}));
              }
              else {
                const $elif_let_value2 = item.Update;
                if ($elif_let_value2 != undefined) {
                  const operation = $elif_let_value2;
                  const input = operation;
                  ((obj, key, value) => { obj[key] = value; })(input, "TableName", this.tableName);
                  transactItems.push(({"Update": JSON.parse(JSON.stringify(input))}));
                }
                else {
                  throw new Error("Invalid transact item");
                }
              }
            }
          }
        }
      }
      return (await this.client.transactWrite(({"TransactItems": [...(transactItems)]})));
    }
    async scan(options) {
      const input = (options ?? ({}));
      ((obj, key, value) => { obj[key] = value; })(input, "TableName", this.tableName);
      return (await this.client.scan(input));
    }
    async query(options) {
      const input = options;
      ((obj, key, value) => { obj[key] = value; })(input, "TableName", this.tableName);
      return (await this.client.query(input));
    }
    constructor(props){
      this.$inflight_init = async () => {
        this.tableName = props.tableName;
        this.client = (await $Util.createDocumentClient(({"region": props.region, "credentials": props.credentials, "endpoint": props.endpoint})));
      }
    }
  }
  return Client;
}
//# sourceMappingURL=inflight.Client-1.cjs.map